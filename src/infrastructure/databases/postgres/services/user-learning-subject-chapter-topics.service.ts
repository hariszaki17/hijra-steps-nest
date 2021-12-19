import { Inject } from '@nestjs/common';
import { USER_LEARNING_SUBJECT_CHAPTER_TOPICS_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserLearningSubjectChapterTopics } from '../models';
import { BaseService } from './base.service';

export class UserLearningSubjectChapterTopicsServices extends BaseService {
  constructor(
    @Inject(USER_LEARNING_SUBJECT_CHAPTER_TOPICS_REPOSITORY)
    private readonly userLearningSubjectChapterTopicRepository: typeof UserLearningSubjectChapterTopics,
  ) {
    super(userLearningSubjectChapterTopicRepository);
  }
}
