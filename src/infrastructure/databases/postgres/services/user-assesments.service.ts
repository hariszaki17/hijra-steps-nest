import { Inject } from '@nestjs/common';
import { USER_ASSESMENT_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Assesments, Subjects, UserAssesments } from '../models';
import { BaseService } from './base.service';

export class UserAssesmentServices extends BaseService {
  constructor(
    @Inject(USER_ASSESMENT_REPOSITORY)
    private readonly userAssesmentsRepository: typeof UserAssesments,
  ) {
    super(userAssesmentsRepository);
  }

  public async findLastUserAssesment(userId: number) {
    return this.findAll({
      include: [
        {
          model: Assesments,
          include: [
            {
              model: Subjects,
              order: [
                ['curriculum_level_id', 'ASC'],
                ['sequence', 'DESC'],
              ],
            },
          ],
        },
      ],
      where: {
        userId,
      },
    });
  }
}
