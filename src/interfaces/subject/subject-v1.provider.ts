import { SUBJECT_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Subjects } from 'src/infrastructure/databases/postgres/models';

export const subjectV1Providers = [
  {
    provide: SUBJECT_REPOSITORY,
    useValue: Subjects,
  },
];
