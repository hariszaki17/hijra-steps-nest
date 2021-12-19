import {
  CURRICULUM_LEVELS_REPOSITORY,
  USER_ASSESMENT_REPOSITORY,
  USER_LEARNING_JOURNEY_REPOSITORY,
  USER_LEARNING_SUBJECTS_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infrastructure/constants/repository.constant';
import {
  CurriculumLevels,
  UserAssesments,
  UserLearningJourney,
  UserLearningSubjects,
  Users,
} from 'src/infrastructure/databases/postgres/models';

export const homeV1Providers = [
  {
    provide: USER_REPOSITORY,
    useValue: Users,
  },
  {
    provide: USER_ASSESMENT_REPOSITORY,
    useValue: UserAssesments,
  },
  {
    provide: CURRICULUM_LEVELS_REPOSITORY,
    useValue: CurriculumLevels,
  },
  {
    provide: USER_LEARNING_JOURNEY_REPOSITORY,
    useValue: UserLearningJourney,
  },
  {
    provide: USER_LEARNING_SUBJECTS_REPOSITORY,
    useValue: UserLearningSubjects,
  },
];
