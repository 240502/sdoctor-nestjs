import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 13306,
      username: 'root',
      password: 'password',
      database: 'sdoctor',
      entities: [__dirname + '/models/*.entity{.ts,.js}'],
      synchronize: true, // Chỉ dùng trong môi trường phát triển
    }),
    // UsersModule,
  ],
})
export class AppModule {}
