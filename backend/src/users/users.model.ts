import { DocumentData, QueryDocumentSnapshot } from "firebase-admin/firestore";
import { TTime } from "src/common/types";

export class User {
    constructor(
        readonly id: string,
        readonly username: string,
        readonly password: string,
        readonly email: string,
        readonly dateJoined: TTime,
    ) {}
}

export const userConverter = {
    toFirestore(user: User): DocumentData {
        return {
            id: user.id,
            username: user.username,
            password: user.password,
            email: user.email,
            dateJoined: user.dateJoined,
        };
    },

    fromFirestore(snapshot: QueryDocumentSnapshot): User {
        const data = snapshot.data();
        return new User(data.id, data.username, data.password, data.email, data.dateJoined);
    },
};
