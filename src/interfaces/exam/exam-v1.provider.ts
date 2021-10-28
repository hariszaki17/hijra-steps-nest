import { EXAM_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Exams } from 'src/infrastructure/databases/postgres/models';

export const examV1Providers = [
  {
    provide: EXAM_REPOSITORY,
    useValue: Exams,
  },
];
