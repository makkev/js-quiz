alert("Welcome to Quiz Ninja!");

const quiz = [
    {language: 'JavaScript', creator: 'Brendan Eich'},
    {language: 'Ruby', creator: 'Yukiharo Matsumoto'},
    {language: 'C', creator: 'Dennis Ritchie'},
];

const game = {
    main(quiz) {
        this.questions = [...quiz];
        this.score = 0;

        for (question of this.questions) {
            response = prompt(`Who is the creator of ${question.language}?`);
            this.checkAnswer(response, question.creator);
        }
        this.gameOver();
    },
    checkAnswer(response, answer) {
        if (response.toLowerCase() === answer.toLowerCase()) {
            alert("correct!");
            this.score++;
        } else {
            alert("wrong");
        }
    },
    gameOver() {
        return alert(`Game Over. Score: ${this.score} point${this.score > 1 ? "s" : ""}`);
    }
}

game.main(quiz);
