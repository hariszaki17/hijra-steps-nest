import { Module } from '@nestjs/common';
import { PostgresModule } from 'src/infrastructure/databases/postgres/postgres.module';
import { LearningV1Controller } from './learning-v1.controller';
import { learningV1Providers } from './learning-v1.provider';

@Module({
  imports: [PostgresModule],
  controllers: [LearningV1Controller],
  providers: [...learningV1Providers],
})
export class LearningV1Module {}
