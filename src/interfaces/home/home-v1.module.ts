import { Module } from '@nestjs/common';
import { HomeV1UseCase } from 'src/application/shared/home-v1.usecase';
import { PostgresModule } from 'src/infrastructure/databases/postgres/postgres.module';
import { CurriculumLevelServices } from 'src/infrastructure/databases/postgres/services/curriculum-levels.service';
import { UserAssesmentServices } from 'src/infrastructure/databases/postgres/services/user-assesments.service';
import { UserLearningJourneyServices } from 'src/infrastructure/databases/postgres/services/user-learning-journey.service';
import { UserLearningSubjectServices } from 'src/infrastructure/databases/postgres/services/user-learning-subject.service';
import { UserServices } from 'src/infrastructure/databases/postgres/services/users.service';
import { HomeV1Controller } from './home-v1.controller';
import { homeV1Providers } from './home-v1.provider';

@Module({
  imports: [PostgresModule],
  controllers: [HomeV1Controller],
  providers: [
    HomeV1UseCase,
    UserServices,
    UserAssesmentServices,
    CurriculumLevelServices,
    UserLearningJourneyServices,
    UserLearningSubjectServices,
    ...homeV1Providers,
  ],
})
export class HomeV1Module {}
