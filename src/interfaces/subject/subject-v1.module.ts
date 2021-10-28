import { Module } from '@nestjs/common';
import { PostgresModule } from 'src/infrastructure/databases/postgres/postgres.module';
import { SubjectV1Controller } from './subject-v1.controller';
import { subjectV1Providers } from './subject-v1.provider';

@Module({
  imports: [PostgresModule],
  controllers: [SubjectV1Controller],
  providers: [...subjectV1Providers],
})
export class SubjectV1Module {}
