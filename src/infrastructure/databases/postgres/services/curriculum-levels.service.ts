import { Inject } from '@nestjs/common';
import { CURRICULUM_LEVELS_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { CurriculumLevels, Subjects, UserLearningSubjects } from '../models';
import { BaseService } from './base.service';

export class CurriculumLevelServices extends BaseService {
  constructor(
    @Inject(CURRICULUM_LEVELS_REPOSITORY)
    private readonly curriculumLevelRepository: typeof CurriculumLevels,
  ) {
    super(curriculumLevelRepository);
  }

  public async getCurriculumLevelBasedOnUserLearningJourney(
    userLearningJourneyIds: number[],
  ) {
    return this.findAll({
      include: [
        {
          model: Subjects,
          required: true,
          include: [
            {
              model: UserLearningSubjects,
              required: false,
              where: {
                userLearningJourneyId: userLearningJourneyIds,
              },
            },
          ],
        },
      ],
      order: [
        ['sequence', 'ASC'],
        ['subjects', 'sequence', 'ASC'],
      ],
    });
  }
}
