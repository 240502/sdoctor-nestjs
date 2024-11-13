// src/modules/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User'; // Import entity
import { UserService } from 'src/services/user/user.service'; // Import service
import { UserController } from 'src/controllers/user/user.controller'; // Import controller

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Đăng ký entity trong module
  providers: [UserService], // Đăng ký service
  controllers: [UserController], // Đăng ký controller
})
export class UserModule {}
