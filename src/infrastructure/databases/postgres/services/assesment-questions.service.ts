import { Inject } from '@nestjs/common';
import { ASSESMENT_QUESTION_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { AssesmentQuestions } from '../models/assesment-questions.entity';
import { BaseService } from './base.service';

export class AssesmentQuestionServices extends BaseService {
  constructor(
    @Inject(ASSESMENT_QUESTION_REPOSITORY)
    private readonly assesmentQuestionRepository: typeof AssesmentQuestions,
  ) {
    super(assesmentQuestionRepository);
  }
}
