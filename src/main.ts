import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load tệp .env
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log("Server is running on port 3000");
}
bootstrap();
