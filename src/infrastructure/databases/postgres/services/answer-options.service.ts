import { Inject } from '@nestjs/common';
import { ANSWER_OPTION_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { AnswerOptions } from '../models/answer-options.entity';
import { BaseService } from './base.service';

export class AnswerOptionServices extends BaseService {
  constructor(
    @Inject(ANSWER_OPTION_REPOSITORY)
    private readonly answerOptionsRepository: typeof AnswerOptions,
  ) {
    super(answerOptionsRepository);
  }
}
