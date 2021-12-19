import { Inject } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { UserDetails, Users } from '../models';
import { BaseService } from './base.service';

export class UserServices extends BaseService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof Users,
  ) {
    super(userRepository);
  }

  public async getUserDetail(userId: number) {
    return this.findAll({
      include: [
        {
          model: UserDetails,
        },
      ],
      where: {
        id: userId,
      },
    });
  }
}
