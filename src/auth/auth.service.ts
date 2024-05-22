import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async signUp(createUserDto: CreateUserDto): Promise<any> {
        // 비밀번호 암호화 등의 추가 로직 필요
        const user = await this.usersService.create(createUserDto);
        return user;
    }
}
