import { Inject } from '@nestjs/common';
import { ASSESMENT_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Assesments } from '../models/assesments.entity';
import { BaseService } from './base.service';

export class AssesmentServices extends BaseService {
  constructor(
    @Inject(ASSESMENT_REPOSITORY)
    private readonly assesmentRepository: typeof Assesments,
  ) {
    super(assesmentRepository);
  }
}
