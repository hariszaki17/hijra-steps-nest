import {
  CURRICULUM_LEVELS_REPOSITORY,
  SUBJECT_REPOSITORY,
  USER_ASSESMENT_REPOSITORY,
  USER_LEARNING_JOURNEY_REPOSITORY,
  USER_LEARNING_SUBJECTS_REPOSITORY,
  USER_LEARNING_SUBJECT_CHAPTERS_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infrastructure/constants/repository.constant';
import {
  CurriculumLevels,
  Subjects,
  UserAssesments,
  UserLearningJourney,
  UserLearningSubjectChapters,
  UserLearningSubjects,
  Users,
} from 'src/infrastructure/databases/postgres/models';

export const subjectV1Providers = [
  {
    provide: SUBJECT_REPOSITORY,
    useValue: Subjects,
  },
  {
    provide: USER_REPOSITORY,
    useValue: Users,
  },
  {
    provide: USER_LEARNING_JOURNEY_REPOSITORY,
    useValue: UserLearningJourney,
  },
  {
    provide: USER_LEARNING_SUBJECTS_REPOSITORY,
    useValue: UserLearningSubjects,
  },
  {
    provide: USER_LEARNING_SUBJECT_CHAPTERS_REPOSITORY,
    useValue: UserLearningSubjectChapters,
  },
  {
    provide: USER_ASSESMENT_REPOSITORY,
    useValue: UserAssesments,
  },
  {
    provide: CURRICULUM_LEVELS_REPOSITORY,
    useValue: CurriculumLevels,
  },
];
