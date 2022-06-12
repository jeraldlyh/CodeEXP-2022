import { Injectable } from "@nestjs/common";
import { User } from "src/users/users.model";
import { UsersRepository } from "src/users/users.repository";

@Injectable()
export class UsersService {
    constructor(readonly usersRepository: UsersRepository) {}

    async findOne(username: string): Promise<User> {
        return await this.usersRepository.findByUsername(username);
    }
}
