import { Inject } from '@nestjs/common';
import { SUBJECT_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import {
  Chapters,
  Subjects,
  Topics,
  UserLearningSubjectChapters,
  UserLearningSubjectChapterTopics,
} from '../models';
import { BaseService } from './base.service';

export class SubjectServices extends BaseService {
  constructor(
    @Inject(SUBJECT_REPOSITORY)
    private readonly subjectRepository: typeof Subjects,
  ) {
    super(subjectRepository);
  }

  public async getSubjectBasedOnUserLearningSubjectChapter(
    subjectId: number,
    userLearningSubjectIds: number[],
    userLearningSubjectChapterIds: number[],
  ) {
    return this.findAll({
      include: [
        {
          model: Chapters,
          required: true,
          include: [
            {
              model: UserLearningSubjectChapters,
              required: false,
              where: {
                userLearningSubjectId: userLearningSubjectIds,
              },
            },
            {
              model: Topics,
              required: true,
              include: [
                {
                  model: UserLearningSubjectChapterTopics,
                  separate: true,
                  required: false,
                  where: {
                    userLearningSubjectChapterId: userLearningSubjectChapterIds,
                  },
                },
              ],
            },
          ],
        },
      ],
      where: {
        id: subjectId,
      },
      order: [
        ['sequence', 'ASC'],
        ['chapters', 'id', 'ASC'],
      ],
    });
  }
}
