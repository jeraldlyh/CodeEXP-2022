# EduHome

> By **geekignore**
> - [Daryl](https://github.com/wongdaryl)
> - [Felice](https://github.com/felicepng/)
> - [Jerald](http://github.com/jeraldlyh/)
> - [Nicholas](http://github.com/oversparkling/)
> - [Yvonne](https://github.com/yvonnelhs/)

Code submission for [DSTA: BrainHack 2022](https://www.brainhack2022.com)

## Problem Statement
**"How can we leverage digital technologies to enable greater convenience and flexibility for our NS men in the workspaces in which they live, work and play."**
> oneNS is a one-stop app that aggregates various existing services with a tweak to provide greater convenience and flexibility for soldiers, creating a more conducive environment where they live, work and play.

## Target Audience
- NSFs and NSmen

## Core Features
### Live
***Notifications***
> With the availability of advanced technologies, reservist and call-ups messages can easily be spoofed with open source softares which will be replaced by in-app notifications. Additionally, NS-related reminders are currently scattered across various communication channels which will be consolidated on oneNS.

***Video Courses***
> oneNS provides video courses for soldiers to prepare for their return to or entering the army

### Work
***Quizzes***
> Allow soldiers to be well-informed about the various practices (i.e. safety, technical) in the army prior to their return to or entering the army

***Hazard Reporting***
> Creates a safer environment for soldiers to annonymously raise reports pertaining to either hazards, safety concerns or near miss. At the same time, oneNS acts as a platform that serves as the single source of truth for all incident reporting, allowing the organization (Singapore Armed Forces) to quickly adapt and progress.

***Weather Forecast***
> Allows users to obtain weather forecast for training activities, allowing forward planning and saves the hassle of dialing for a call to retrieve the information.

### Play
***Competitive Quizzes***
> Gamifies learning with incentives by allowing users to put their knowledge to the test by battling with their peers in order to gain points and redeem rewards. Creates a reward system to incentivise soldiers to recap on their military knowledge.

***Self-regulated Training***
> Allows users to earn points through creating and joining self regulated training sessions with peers, incentivising NSmen to keep fit.

## Technology Stack
- [React Native](https://reactnative.dev/)
- [Firestore](https://firebase.google.com/docs/firestore)
- [NestJS](https://nestjs.com/)

## Local Deployment
### Expo
Refer to official [Expo documentation](https://docs.expo.io/get-started/installation/)
```bash
$ yarn global add --global expo-cli
```
Download Expo App:
- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [IOS](https://itunes.com/apps/exponent)

### Firestore
Refer to official [Firestore documentation](https://firebase.google.com/docs/firestore/quickstart)

### Environment Variables
#### Backend
Private key can be generated on Firebase console via `Project settings > Service accounts > Generate private key`
| Name                    | Description           |
| ----------------------- | --------------------- |
| `FIREBASE_PROJECT_ID`   | Firebase project ID   |
| `FIREBASE_PRIVATE_KEY`  | Firebase private key  |
| `FIREBASE_CLIENT_EMAIL` | Firebase client email |


### Cloning of Repo
#### Mobile App
```console
root:~$ git clone https://github.com/jeraldlyh/CodeEXP-2022.git
root:~$ cd CodeEXP-2022/app
root:CodeEXP-2022$ yarn
root:CodeEXP-2022$ expo start
```
- Scan the QR code provided by Expo CLI using your Expo Go App on your phone

#### Backend
```console
root:~$ cd CodeEXP-2022/app
root:CodeEXP-2022$ yarn
root:CodeEXP-2022$ yarn start:dev
```

## Disclaimer
We do not own or license any copyrights in the images used in the application. You may use the Services and the contents contained in the Services soley for your own individual non-commercial and informational purposes only.
