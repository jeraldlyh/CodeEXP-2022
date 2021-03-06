import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import * as firebase from "firebase-admin";
import * as cookieParser from "cookie-parser";
import { AppModule } from "./app/app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService: ConfigService = app.get(ConfigService);
    const serviceAccount: firebase.ServiceAccount = {
        projectId: configService.get<string>("FIREBASE_PROJECT_ID"),
        privateKey: configService.get<string>("FIREBASE_PRIVATE_KEY").replace(/\\n/g, "\n"),
        clientEmail: configService.get<string>("FIREBASE_CLIENT_EMAIL"),
    };

    firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
    });

    app.setGlobalPrefix("api");
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.use(cookieParser());
    await app.listen(process.env.PORT || 8000);
}
bootstrap();
