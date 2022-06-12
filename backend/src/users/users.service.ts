import { Injectable } from "@nestjs/common";
import { User } from "src/users/users.model";
import { UsersRepository } from "src/users/users.repository";
import { TUserJwtDetails } from "src/users/users.type";

@Injectable()
export class UsersService {
    constructor(readonly usersRepository: UsersRepository) {}

    async findOne(username: string): Promise<User> {
        return await this.usersRepository.findByUsername(username);
    }

    // TODO - Hash password
    async create(username: string, password: string, email: string): Promise<TUserJwtDetails> {
        return await this.usersRepository.create(username, password, email);
    }
}
