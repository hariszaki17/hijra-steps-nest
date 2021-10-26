import { Inject } from '@nestjs/common';
import { USER_EXAM_ANSWER_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserExamAnswers } from '../models';
import { BaseService } from './base.service';

export class UserExamAnswerServices extends BaseService {
  constructor(
    @Inject(USER_EXAM_ANSWER_REPOSITORY)
    private readonly userExamAnswersRepository: typeof UserExamAnswers,
  ) {
    super(userExamAnswersRepository);
  }
}
