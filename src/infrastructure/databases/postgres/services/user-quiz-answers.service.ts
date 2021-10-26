import { Inject } from '@nestjs/common';
import { USER_QUIZ_ANSWER_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserQuizAnswers } from '../models';
import { BaseService } from './base.service';

export class UserQuizAnswerServices extends BaseService {
  constructor(
    @Inject(USER_QUIZ_ANSWER_REPOSITORY)
    private readonly userQuizAnswerRepository: typeof UserQuizAnswers,
  ) {
    super(userQuizAnswerRepository);
  }
}
