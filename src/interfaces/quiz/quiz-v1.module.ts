import { Module } from '@nestjs/common';
import { PostgresModule } from 'src/infrastructure/databases/postgres/postgres.module';
import { QuizV1Controller } from './quiz-v1.controller';
import { quizV1Providers } from './quiz-v1.provider';

@Module({
  imports: [PostgresModule],
  controllers: [QuizV1Controller],
  providers: [...quizV1Providers],
})
export class QuizV1Module {}
