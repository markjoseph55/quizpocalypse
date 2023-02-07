export default {
    state: {
        profile: {
            username: "your-github-username",
            fullName: "Your Full Name",
        },

        items: [
            {
                question: "which one is the first search engine in enternet",
                choices: {
                    A: "Google",
                    B: "archine",
                    C: "Altavista"
                },
                correct: "B"
            },
            {
                question: "number of bit used by the IPv6 addres",
                choices: {
                    A: "32 bit",
                    B: "64 bit",
                    C: "128 bit"
                },
                correct: "C"
            },
            {
                question: "Which oneis the first web browser invented in 1990",
                choices: {
                    A: "internet Explorer",
                    B: "Mosaic",
                    C: "nexus"
                },
                correct: "C"
            },
            {
                question: "which of ther followiong programmin language is used to create programs like applets",
                choices: {
                    A: "java",
                    B: "c langugae",
                    C: "COBOL"
                },
                correct: "A"
            },
            {
                question: "First known virus is known as",
                choices: {
                    A: "Rabibt",
                    B: "creeper virus",
                    C: "Elk Cloner"
                },
                correct: "B"
            },

            {
                question: "Firewall in computer is used for",
                choices: {
                    A: "security",
                    B: "Data transmission",
                    C: "authentication"
                },
                correct: "A"
            },
            {
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3"
                },
                correct: "A"
            },
            {
                question: "a dual layer Blue- Disccan store data upto",
                choices: {
                    A: "20GB",
                    B: "12GB",
                    C: "50GB"
                },
                correct: "C"
            },
            {
                question: "which of the following of  operating ssytem",
                choices: {
                    A: "DOS",
                    B: "mac",
                    C: "C"
                },
                correct: "C"
            },
            {
                question: "Number of layers in the OSI(Open system Interconnection",
                choices: {
                    A: "9",
                    B: "7",
                    C: "11"
                },
                correct: "B"
            },
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};