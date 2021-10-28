import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './application/shared/auth/auth.module';
import { PostgresModule } from './infrastructure/databases/postgres/postgres.module';
import { ExamV1Module } from './interfaces/exam/exam-v1.module';
import { HomeV1Module } from './interfaces/home/home-v1.module';
import { LearningV1Module } from './interfaces/learning/learning-v1.module';
import { QuizV1Module } from './interfaces/quiz/quiz-v1.module';
import { SubjectV1Module } from './interfaces/subject/subject-v1.module';

@Module({
  imports: [
    AuthModule,
    PostgresModule,
    ExamV1Module,
    LearningV1Module,
    SubjectV1Module,
    QuizV1Module,
    HomeV1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
