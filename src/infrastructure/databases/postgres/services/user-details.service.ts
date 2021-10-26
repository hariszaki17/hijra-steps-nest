import { Inject } from '@nestjs/common';
import { USER_DETAIL_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserDetails } from '../models';
import { BaseService } from './base.service';

export class UserDetailServices extends BaseService {
  constructor(
    @Inject(USER_DETAIL_REPOSITORY)
    private readonly userDetailRepository: typeof UserDetails,
  ) {
    super(userDetailRepository);
  }
}
