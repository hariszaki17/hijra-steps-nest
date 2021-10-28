import { QUIZ_REPOSITORY } from 'src/infrastructure/constants/repository.constant';
import { Quizzes } from 'src/infrastructure/databases/postgres/models';

export const quizV1Providers = [
  {
    provide: QUIZ_REPOSITORY,
    useValue: Quizzes,
  },
];
