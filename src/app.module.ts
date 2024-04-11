import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: 'root',
      password: 'Doanxem.123',
      database: 'e-learning',
      entities: [],
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
