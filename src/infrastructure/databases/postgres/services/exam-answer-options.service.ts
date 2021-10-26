import { Inject } from '@nestjs/common';
import { EXAM_ANSWER_OPTION_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { ExamAnswerOptions } from '../models';
import { BaseService } from './base.service';

export class ExamAnswerOptionServices extends BaseService {
  constructor(
    @Inject(EXAM_ANSWER_OPTION_REPOSITORY)
    private readonly examAnswerOptionsRepository: typeof ExamAnswerOptions,
  ) {
    super(examAnswerOptionsRepository);
  }
}
