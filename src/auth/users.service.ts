import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private readonly users = [];

    async create(createUserDto: CreateUserDto): Promise<any> {
        const user = { id: Date.now(), ...createUserDto };
        this.users.push(user);
        return user;
    }

    // 필요한 경우 추가적인 사용자 관리 로직 구현
}
