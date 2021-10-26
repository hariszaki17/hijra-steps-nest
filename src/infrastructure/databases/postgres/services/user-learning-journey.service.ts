import { Inject } from '@nestjs/common';
import { USER_LEARNING_JOURNEY_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserLearningJourney } from '../models';
import { BaseService } from './base.service';

export class UserLearningJourneyServices extends BaseService {
  constructor(
    @Inject(USER_LEARNING_JOURNEY_REPOSITORY)
    private readonly userLearningJourneyRepository: typeof UserLearningJourney,
  ) {
    super(userLearningJourneyRepository);
  }
}
