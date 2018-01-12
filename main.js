alert("Welcome to Quiz Ninja!");

const quiz = [
    {language: 'JavaScript', creator: 'Brendan Eich'},
    {language: 'Ruby', creator: 'Yukiharo Matsumoto'},
    {language: 'C', creator: 'Dennis Ritchie'},
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

const game = {
    main(quiz) {
        this.questions = [...quiz];
        this.score = 0;

        for (question of this.questions) {
            const q = `Who is the creator of ${question.language}?`;
            view.render(view.question, q);
            response = prompt(q);
            this.checkAnswer(response, question.creator);
        }
        this.gameOver();
    },
    checkAnswer(response, answer) {
        if (response.toLowerCase() === answer.toLowerCase()) {
            view.render(view.result, 'Correct', {'class': 'correct'});
            alert("correct!");
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer is ${answer}`, {'class': 'wrong'});
            alert("wrong");
        }
    },
    gameOver() {
        // return alert(`Game Over. Score: ${this.score} point${this.score > 1 ? "s" : ""}`);
        view.render(view.info, `Game Over. Score: ${this.score} point${this.score > 1 ? "s" : ""}`);
    }
}

game.main(quiz);
