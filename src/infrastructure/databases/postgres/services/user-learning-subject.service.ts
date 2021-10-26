import { Inject } from '@nestjs/common';
import { USER_LEARNING_SUBJECTS_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserLearningSubjects } from '../models';
import { BaseService } from './base.service';

export class UserLearningSubjectServices extends BaseService {
  constructor(
    @Inject(USER_LEARNING_SUBJECTS_REPOSITORY)
    private readonly userLearningSubjectRepository: typeof UserLearningSubjects,
  ) {
    super(userLearningSubjectRepository);
  }
}
