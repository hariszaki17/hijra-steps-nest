import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {
    FIREBASE_PROJECT_ID: projectId,
    FIREBASE_PRIVATE_KEY: privateKey,
    FIREBASE_CLIENT_EMAIL: clientEmail,
    FIREBASE_DB: databaseURL,
  } = process.env;
  const adminConfig = {
    projectId,
    privateKey: privateKey.replace(/\\n/g, '\n'),
    clientEmail,
  };
  admin.initializeApp({
    credential: admin.credential.cert({
      ...adminConfig,
    } as Partial<ServiceAccount>),
    databaseURL,
  });
  await app.listen(3000);
}
bootstrap();
