import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";
import { v4 as uuidv4 } from "uuid";
import { User, userConverter } from "src/users/users.model";
import { TUserJwtDetails } from "src/users/users.type";
import { random } from "lodash";

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

    async create(username: string, password: string, email: string): Promise<TUserJwtDetails> {
        const id = uuidv4();

        await firebase
            .firestore()
            .collection(this.rootCollection)
            .doc(username)
            .withConverter(userConverter)
            .set({
                id,
                username,
                password,
                email,
                points: 0,
                dateJoined: firebase.firestore.Timestamp.now(),
                avatar: "https://picsum.photos/200",
                unit: random(100) + "C41",
            });

        return { username, id };
    }
}
