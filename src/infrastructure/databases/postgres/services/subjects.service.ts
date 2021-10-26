import { Inject } from '@nestjs/common';
import { SUBJECT_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Subjects } from '../models';
import { BaseService } from './base.service';

export class SubjectServices extends BaseService {
  constructor(
    @Inject(SUBJECT_REPOSITORY)
    private readonly subjectRepository: typeof Subjects,
  ) {
    super(subjectRepository);
  }
}
