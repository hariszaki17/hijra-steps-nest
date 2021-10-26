import { Inject } from '@nestjs/common';
import { USER_EXAM_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserExams } from '../models';
import { BaseService } from './base.service';

export class UserExamServices extends BaseService {
  constructor(
    @Inject(USER_EXAM_REPOSITORY)
    private readonly userExamsRepository: typeof UserExams,
  ) {
    super(userExamsRepository);
  }
}
