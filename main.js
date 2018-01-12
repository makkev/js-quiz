
const quiz = [
    {language: 'JavaScript', creator: 'Brendan Eich'},
    {language: 'Ruby', creator: 'Yukiharo Matsumoto'},
    {language: 'C', creator: 'Dennis Ritchie'},
];

// View Object
const view = {
    start: document.getElementById('start'),
    score: document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style = 'block';
    },
    hide(element) {
        element.style = 'none';
    }
};

// Game Object
const game = {
    start(quiz) {
        view.hide(view.start);
        this.questions = [...quiz];
        this.score = 0;

        for (question of this.questions) {
            this.question = question;
            this.ask();
        }
        this.gameOver();
    },
    ask() {
        const q = `Who is the creator of ${question.language}?`;
        view.render(view.question, q);
        const response = prompt(q);
        this.checkAnswer(response, question.creator);

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
        view.render(view.info, `Game Over. Score: ${this.score} point${this.score > 1 ? "s" : ""}`);
        view.show(view.start);
    }
}

view.start.addEventListener('click', () => game.start(quiz), false);