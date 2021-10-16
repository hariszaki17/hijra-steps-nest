import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './application/shared/auth/auth.module';
import { PostgresModule } from './infrastructure/databases/postgres/postgres.module';

@Module({
  imports: [AuthModule, PostgresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
