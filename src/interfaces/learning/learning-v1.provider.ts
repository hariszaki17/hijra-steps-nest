import { TOPIC_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Topics } from 'src/infrastructure/databases/postgres/models';

export const learningV1Providers = [
  {
    provide: TOPIC_REPOSITORY,
    useValue: Topics,
  },
];
