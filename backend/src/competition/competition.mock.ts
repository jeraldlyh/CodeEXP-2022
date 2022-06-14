export type TQuiz = {
    question: string;
    options: string[];
    answer: string;
};

export const COMPETITION_MOCK_DATA = {
    Signals: [
        {
            question: "When is SAF established?",
            options: ["15 June 1972", "15 June 1998", "31 June 1972"],
            answer: "15 June 1972",
        },
    ],
    Armour: [
        {
            question: "What's the motto of Armour?",
            options: ["Swift & Decisive", "Let's geddit", "Easy peasy"],
            answer: "Swift & Decisive",
        },
    ],
    Guards: [
        {
            question: "What's the date of origin for Guards?",
            options: ["1 June 1975", "15 June 1998", "14 Aug 2022"],
            answer: "1 June 1975",
        },
    ],
};
