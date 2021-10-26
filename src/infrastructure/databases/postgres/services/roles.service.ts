import { Inject } from '@nestjs/common';
import { ROLE_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Roles } from '../models';
import { BaseService } from './base.service';

export class RoleServices extends BaseService {
  constructor(
    @Inject(ROLE_REPOSITORY)
    private readonly roleRepository: typeof Roles,
  ) {
    super(roleRepository);
  }
}
