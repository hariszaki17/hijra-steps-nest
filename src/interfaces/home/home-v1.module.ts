import { Module } from '@nestjs/common';
import { PostgresModule } from 'src/infrastructure/databases/postgres/postgres.module';
import { HomeV1Controller } from './home-v1.controller';

@Module({
  imports: [PostgresModule],
  controllers: [HomeV1Controller],
  providers: [],
})
export class HomeV1Module {}
