alert("Welcome to Quiz Ninja!");

const quiz = [
    ["What is the best programming language?", "JavaScript"],
    ["What is the worst programming language?", "Cobol"],
    ["Who created JavaScript", "Brendan Eich"],
];

let score = 0;

for (const [question, answer] of quiz) {
    response = prompt(question);
    if (response === answer) {
        alert("correct!");
        score++;
    } else {
        alert("wrong");
    }
}
alert(`Game Over. Score: ${score} point${score > 1 ? "s" : ""}`);