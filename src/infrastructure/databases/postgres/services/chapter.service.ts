import { Inject } from '@nestjs/common';
import { CHAPTER_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Chapters } from '../models';
import { BaseService } from './base.service';

export class ChapterServices extends BaseService {
  constructor(
    @Inject(CHAPTER_REPOSITORY)
    private readonly chapterRepository: typeof Chapters,
  ) {
    super(chapterRepository);
  }
}
