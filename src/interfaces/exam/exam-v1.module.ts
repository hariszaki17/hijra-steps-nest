import { Module } from '@nestjs/common';
import { PostgresModule } from 'src/infrastructure/databases/postgres/postgres.module';
import { ExamV1Controller } from './exam-v1.controller';
import { examV1Providers } from './exam-v1.provider';

@Module({
  imports: [PostgresModule],
  controllers: [ExamV1Controller],
  providers: [...examV1Providers],
})
export class ExamV1Module {}
