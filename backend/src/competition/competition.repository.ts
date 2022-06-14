import { Injectable } from "@nestjs/common";
import firebase from "firebase-admin";
import { Competition, competitionConverter } from "src/competition/competition.model";

@Injectable()
export class CompetitionRepository {
    private rootCollection = "competition";

    async create(dto: any): Promise<string> {
        const doc = await firebase
            .firestore()
            .collection(this.rootCollection)
            .withConverter(competitionConverter)
            .add(dto);

        return doc.id;
    }

    async get(docId: string): Promise<Competition> {
        const result = await firebase
            .firestore()
            .collection(this.rootCollection)
            .doc(docId)
            .withConverter(competitionConverter)
            .get();

        return result.data();
    }

    async findAll(): Promise<Competition[]> {
        const result = await firebase
            .firestore()
            .collection(this.rootCollection)
            .where("isValid", "==", true)
            .withConverter(competitionConverter)
            .get();

        return result.docs.map((doc) => doc.data());
    }
}
