import { Module } from '@nestjs/common';
import { postgresProviders } from './postgres.providers';

@Module({
  providers: [...postgresProviders],
  exports: [...postgresProviders], // for accessible on all application that needs it
})
export class PostgresModule {}
