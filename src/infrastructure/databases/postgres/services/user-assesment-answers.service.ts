import { Inject } from '@nestjs/common';
import { USER_ASSESMENT_ANSWER_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserAssesmentAnswers } from '../models';
import { BaseService } from './base.service';

export class UserAssesmentAnswerServices extends BaseService {
  constructor(
    @Inject(USER_ASSESMENT_ANSWER_REPOSITORY)
    private readonly userAssesmentAnswerRepository: typeof UserAssesmentAnswers,
  ) {
    super(userAssesmentAnswerRepository);
  }
}
