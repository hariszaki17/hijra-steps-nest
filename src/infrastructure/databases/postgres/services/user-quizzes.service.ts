import { Inject } from '@nestjs/common';
import { USER_QUIZ_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserQuizzes } from '../models';
import { BaseService } from './base.service';

export class UserQuizServices extends BaseService {
  constructor(
    @Inject(USER_QUIZ_REPOSITORY)
    private readonly userQuizRepository: typeof UserQuizzes,
  ) {
    super(userQuizRepository);
  }
}
