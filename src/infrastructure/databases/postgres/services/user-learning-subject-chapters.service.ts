import { Inject } from '@nestjs/common';
import { USER_LEARNING_SUBJECT_CHAPTERS_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserLearningSubjectChapters } from '../models';
import { BaseService } from './base.service';

export class UserLearningSubjectChaptersServices extends BaseService {
  constructor(
    @Inject(USER_LEARNING_SUBJECT_CHAPTERS_REPOSITORY)
    private readonly userLearningSubjectChapterRepository: typeof UserLearningSubjectChapters,
  ) {
    super(userLearningSubjectChapterRepository);
  }
}
