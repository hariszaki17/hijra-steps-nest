import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CurriculumLevels,
  UserLearningJourney,
  Users,
} from 'src/infrastructure/databases/postgres/models';
import { CurriculumLevelServices } from 'src/infrastructure/databases/postgres/services/curriculum-levels.service';
import { UserAssesmentServices } from 'src/infrastructure/databases/postgres/services/user-assesments.service';
import { UserLearningJourneyServices } from 'src/infrastructure/databases/postgres/services/user-learning-journey.service';
import { UserServices } from 'src/infrastructure/databases/postgres/services/users.service';
import {
  filterRecommendation,
  transformCurriculum,
} from './helpers/home-v1.helpers';
import { IUsersCurriculum } from './types/home-v1.type';

@Injectable()
export class HomeV1UseCase {
  constructor(
    private userService: UserServices,
    private userAssesmentService: UserAssesmentServices,
    private curriculumLevelService: CurriculumLevelServices,
    private userLearningJourneyService: UserLearningJourneyServices,
  ) {}

  public async getProfileData(userId: number) {
    const [user]: Users[] = await this.userService.getUserDetail(userId);
    if (!user) {
      throw new NotFoundException('User is not found.');
    }
    return {
      userId: user.id,
      name: user.userDetails.name,
      avatarUrl: user.userDetails.avatar_url,
    };
  }

  public async getRecommendation(userId: number) {
    const curriculumLevels: IUsersCurriculum[] = await this.getUserCurriculum(
      userId,
    );
    return filterRecommendation(curriculumLevels);
  }

  public async getUserCurriculum(userId: number): Promise<IUsersCurriculum[]> {
    const user: Users = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException('User is not found.');
    }

    const uljs: UserLearningJourney[] =
      await this.userLearningJourneyService.findAll({ where: { userId } });
    const userLearningJourneyIds: number[] = uljs.map((ulj) => ulj.id);
    const curriculumLevels: CurriculumLevels[] =
      await this.curriculumLevelService.getCurriculumLevelBasedOnUserLearningJourney(
        userLearningJourneyIds,
      );

    return transformCurriculum(curriculumLevels);
  }
}
