import { Inject } from '@nestjs/common';
import { TOPIC_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Topics } from '../models';
import { BaseService } from './base.service';

export class TopicServices extends BaseService {
  constructor(
    @Inject(TOPIC_REPOSITORY)
    private readonly topicRepository: typeof Topics,
  ) {
    super(topicRepository);
  }
}
