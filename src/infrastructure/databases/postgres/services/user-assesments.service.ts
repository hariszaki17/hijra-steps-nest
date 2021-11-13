import { Inject } from '@nestjs/common';
import { USER_ASSESMENT_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserAssesments } from '../models';
import { BaseService } from './base.service';

export class UserAssesmentServices extends BaseService {
  constructor(
    @Inject(USER_ASSESMENT_REPOSITORY)
    private readonly userAssesmentsRepository: typeof UserAssesments,
  ) {
    super(userAssesmentsRepository);
  }
}
