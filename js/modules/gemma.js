export default {
    state: {
        profile: {
            username: "gem0830",
            fullName: "Gemma Rose Abarera",
        },

        items: [
            {
                question: "How many computer languages are in use?",
                choices: {
                    A: "2000",
                    B: "5000",
                    C: "50"
                },
                correct: "A"
            },
            {
                question: "Which of these is not an early computer?",
                choices: {
                    A: "ENIAC",
                    B: "UNIVAC",
                    C: "NASA"
                },
                correct: "C"
            },
            {
                question: "Who founded Apple Computer?",
                choices: {
                    A: "Stephen Fry",
                    B: "Bill Gates",
                    C: "Steve Jobs"
                },
                correct: "C"
            },
            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Keyboard",
                    B: "Monitor",
                    C: "Motherboard"
                },
                correct: "C"
            },
            {
                question: "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
                choices: {
                    A: "Telnet",
                    B: "Blogging",
                    C: "Gopher"
                },
                correct: "B"
            },
            {
                question: "What does the Internet prefix WWW stand for?",
                choices: {
                    A: "Wide Width Wickets",
                    B: "World Wide Web",
                    C: "Worldwide Weather"
                },
                correct: "B"
            },
            {
                question: "A network designed to allow communication within an organization is called",
                choices: {
                    A: "the World Wide Web",
                    B: "Yahoo",
                    C: "an intranet"
                },
                correct: "C"
            },
            {
                question: "Which of these is not a kind of computer?",
                choices: {
                    A: "Apple",
                    B: "Lenovo",
                    C: "Lada"
                },
                correct: "C"
            },
            {
                question: "Which of these products is not made by the Apple Corporation?",
                choices: {
                    A: "IMAX",
                    B: "iPhone",
                    C: "iMac"
                },
                correct: "A"
            },{
                question: "What is the name for a computer pointing device?",
                choices: {
                    A: "Sound Card",
                    B: "A Mouse",
                    C: "Ram"
                },
                correct: "B"
            },

            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3",
                    D: "Choice 4"
                },
                correct: "D"
            }, */
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
