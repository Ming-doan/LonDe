let surveyData = [
    {
        title: "Evaluate your following skills: Sales and Marketing",
        options: ["Basic", "Foundational", 'Intermediate', 'Advanced', 'Expert']
    },
    {
        title: "Evaluate your following skills: Customer and Personal Service",
        options: ["Basic", "Foundational", 'Intermediate', 'Advanced', 'Expert']
    },
    {
        title: "Evaluate your following skills: English Language",
        options: ["Basic", "Foundational", 'Intermediate', 'Advanced', 'Expert']
    },
    {
        title: "Evaluate your following skills: Administration and Management",
        options: ["Basic", "Foundational", 'Intermediate', 'Advanced', 'Expert']
    },
    {
        title: "Evaluate your following skills: Computers and Electronics",
        options: ["Basic", "Foundational", 'Intermediate', 'Advanced', 'Expert']
    },
    {
        title: "Evaluate your following skills: Critical Thinking",
        options: ["Basic", "Foundational", 'Intermediate', 'Advanced', 'Expert']
    },
    {
        title: "Evaluate your following skills: Negotiation",
        options: ["Basic", "Foundational", 'Intermediate', 'Advanced', 'Expert']
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