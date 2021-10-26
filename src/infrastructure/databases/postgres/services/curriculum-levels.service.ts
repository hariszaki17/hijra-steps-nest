import { Inject } from '@nestjs/common';
import { CURRICULUM_LEVELS_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { CurriculumLevels } from '../models';
import { BaseService } from './base.service';

export class CurriculumLevelServices extends BaseService {
  constructor(
    @Inject(CURRICULUM_LEVELS_REPOSITORY)
    private readonly curriculumLevelRepository: typeof CurriculumLevels,
  ) {
    super(curriculumLevelRepository);
  }
}
