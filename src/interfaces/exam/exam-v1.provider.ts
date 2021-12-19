import { ASSESMENT_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Assesments } from 'src/infrastructure/databases/postgres/models/assesments.entity';

export const examV1Providers = [
  {
    provide: ASSESMENT_REPOSITORY,
    useValue: Assesments,
  },
];
