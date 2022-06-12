import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";
import { User, userConverter } from "src/users/users.model";

@Injectable()
export class UsersRepository {
    private rootCollection = "users";

    async findByUsername(username: string): Promise<User> {
        const user = await firebase
            .firestore()
            .collection(this.rootCollection)
            .doc(username)
            .withConverter(userConverter)
            .get();

        return user.data();
    }
}
