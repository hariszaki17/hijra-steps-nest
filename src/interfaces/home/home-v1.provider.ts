import { USER_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Users } from 'src/infrastructure/databases/postgres/models';

export const homeV1Providers = [
  {
    provide: USER_REPOSITORY,
    useValue: Users,
  },
];
