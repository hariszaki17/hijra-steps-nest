import { Module } from '@nestjs/common';
import { HomeV1UseCase } from 'src/application/shared/home-v1.usecase';
import { SubjectV1UseCase } from 'src/application/shared/subject-v1.usecase';
import { PostgresModule } from 'src/infrastructure/databases/postgres/postgres.module';
import { CurriculumLevelServices } from 'src/infrastructure/databases/postgres/services/curriculum-levels.service';
import { SubjectServices } from 'src/infrastructure/databases/postgres/services/subjects.service';
import { UserAssesmentServices } from 'src/infrastructure/databases/postgres/services/user-assesments.service';
import { UserLearningJourneyServices } from 'src/infrastructure/databases/postgres/services/user-learning-journey.service';
import { UserLearningSubjectChaptersServices } from 'src/infrastructure/databases/postgres/services/user-learning-subject-chapters.service';
import { UserLearningSubjectServices } from 'src/infrastructure/databases/postgres/services/user-learning-subject.service';
import { UserServices } from 'src/infrastructure/databases/postgres/services/users.service';
import { SubjectV1Controller } from './subject-v1.controller';
import { subjectV1Providers } from './subject-v1.provider';

@Module({
  imports: [PostgresModule],
  controllers: [SubjectV1Controller],
  providers: [
    ...subjectV1Providers,
    SubjectV1UseCase,
    HomeV1UseCase,
    UserServices,
    UserLearningJourneyServices,
    UserLearningSubjectServices,
    UserLearningSubjectChaptersServices,
    SubjectServices,
    UserAssesmentServices,
    CurriculumLevelServices,
    
  ],
})
export class SubjectV1Module {}
