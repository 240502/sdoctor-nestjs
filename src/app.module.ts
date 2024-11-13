import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sdoctor',
      entities: [__dirname + '/models/*{.ts,.js}'],
      synchronize: true, // Chỉ dùng trong môi trường phát triển
    }),
    UserModule,
  ],
})
export class AppModule {}
