let surveyData = [
    {
        title: "How old are you?",
        options: ["14 - 18", "18 - 24", '24 - 35', '35 - 45', '45 - 60', 'over 60']
    },
    {
        title: "How old are you?",
        options: ["14 - 18", "18 - 24", '24 - 35', '35 - 45', '45 - 60', 'over 60']
    },
    {
        title: "How old are you?",
        options: ["14 - 18", "18 - 24", '24 - 35', '35 - 45', '45 - 60', 'over 60']
    },
    {
        title: "How old are you?",
        options: ["14 - 18", "18 - 24", '24 - 35', '35 - 45', '45 - 60', 'over 60']
    },
]

let result = []

export function getSurveyData() {
    return surveyData
}

export function appendResult(question, answer) {
    result.push({
        question: question,
        answer: answer
    })
}

export function getResult() {
    return result
}