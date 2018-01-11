alert("Welcome to Quiz Ninja!");

const quiz = [
    ["What is the best programming language?", "JavaScript"],
    ["What is the worst programming language?", "Cobol"],
    ["Who created JavaScript", "Brendan Eich"],
];

function main() {
    let score = 0;

    for (const [question, answer] of quiz) {
        response = prompt(question);
        checkAnswer(response, answer)
    }
    gameOver();

    function checkAnswer(response, answer) {
        if (response.toLowerCase() === answer.toLowerCase()) {
            alert("correct!");
            score++;
        } else {
            alert("wrong");
        }
    }

    function gameOver() {
        return alert(`Game Over. Score: ${score} point${score > 1 ? "s" : ""}`);
    }
}

main();
