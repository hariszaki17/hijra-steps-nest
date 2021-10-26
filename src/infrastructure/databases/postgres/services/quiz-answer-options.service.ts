import { Inject } from '@nestjs/common';
import { QUIZ_ANSWER_OPTION_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { QuizAnswerOptions } from '../models';
import { BaseService } from './base.service';

export class QuizAnswerOptionServices extends BaseService {
  constructor(
    @Inject(QUIZ_ANSWER_OPTION_REPOSITORY)
    private readonly quizAnswerOptionRepository: typeof QuizAnswerOptions,
  ) {
    super(quizAnswerOptionRepository);
  }
}
