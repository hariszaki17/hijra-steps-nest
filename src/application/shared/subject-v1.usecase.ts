import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Subjects,
  UserLearningJourney,
  UserLearningSubjectChapters,
  UserLearningSubjects,
  Users,
} from 'src/infrastructure/databases/postgres/models';
import { SubjectServices } from 'src/infrastructure/databases/postgres/services/subjects.service';
import { UserLearningJourneyServices } from 'src/infrastructure/databases/postgres/services/user-learning-journey.service';
import { UserLearningSubjectChaptersServices } from 'src/infrastructure/databases/postgres/services/user-learning-subject-chapters.service';
import { UserLearningSubjectServices } from 'src/infrastructure/databases/postgres/services/user-learning-subject.service';
import { UserServices } from 'src/infrastructure/databases/postgres/services/users.service';
import { getSubject, transformSubject } from './helpers/subject-v1.helpers';
import { HomeV1UseCase } from './home-v1.usecase';
import { IUsersCurriculum } from './types/home-v1.type';

@Injectable()
export class SubjectV1UseCase {
  constructor(
    private userService: UserServices,
    private userLearningJourneyService: UserLearningJourneyServices,
    private userLearningSubjectService: UserLearningSubjectServices,
    private userLearningSubjectChapterService: UserLearningSubjectChaptersServices,
    private subjectService: SubjectServices,
    private homeUseCase: HomeV1UseCase,
  ) {}
  public async getUserSubject(userId: number, subjectId: number) {
    const user: Users = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException('User is not found.');
    }

    const [uljs]: UserLearningJourney[] =
      await this.userLearningJourneyService.findAll({ where: { userId } });

    const ulss: UserLearningSubjects[] =
      await this.userLearningSubjectService.findAll({
        where: { userLearningJourneyId: uljs.id, subjectId },
      });
    const userLearningSubjectIds: number[] = ulss.map((uls) => uls.id);
    const ulscs: UserLearningSubjectChapters[] =
      await this.userLearningSubjectChapterService.findAll({
        where: { userLearningSubjectId: userLearningSubjectIds },
      });
    const userLearningSubjectChapterIds: number[] = ulscs.map(
      (ulsc) => ulsc.id,
    );
    const [subjects]: Subjects[] =
      await this.subjectService.getSubjectBasedOnUserLearningSubjectChapter(
        subjectId,
        userLearningSubjectIds,
        userLearningSubjectChapterIds,
      );
    if (!subjects) {
      throw new NotFoundException('Subject is not found.');
    }

    const curriculumLevels: IUsersCurriculum[] =
      await this.homeUseCase.getUserCurriculum(userId);

    const subject = getSubject(subjectId, curriculumLevels);
    return transformSubject(subjects, subject.status);
  }
}
