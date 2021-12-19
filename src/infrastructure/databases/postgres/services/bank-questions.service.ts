import { Inject } from '@nestjs/common';
import { BANK_QUESTION_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { BankQuestions } from '../models/bank-questions.entity';
import { BaseService } from './base.service';

export class BankQuestionervices extends BaseService {
  constructor(
    @Inject(BANK_QUESTION_REPOSITORY)
    private readonly BankQuestionRepository: typeof BankQuestions,
  ) {
    super(BankQuestionRepository);
  }
}
