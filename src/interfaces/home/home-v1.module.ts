import { Module } from '@nestjs/common';
import { PostgresModule } from 'src/infrastructure/databases/postgres/postgres.module';
import { HomeV1Controller } from './home-v1.controller';
import { homeV1Providers } from './home-v1.provider';

@Module({
  imports: [PostgresModule],
  controllers: [HomeV1Controller],
  providers: [...homeV1Providers],
})
export class HomeV1Module {}
