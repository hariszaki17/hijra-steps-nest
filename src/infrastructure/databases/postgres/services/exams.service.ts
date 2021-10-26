import { Inject } from '@nestjs/common';
import { EXAM_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Exams } from '../models';
import { BaseService } from './base.service';

export class ExamServices extends BaseService {
  constructor(
    @Inject(EXAM_REPOSITORY)
    private readonly examRepository: typeof Exams,
  ) {
    super(examRepository);
  }
}
