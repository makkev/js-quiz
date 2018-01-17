
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
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    },
    response: document.querySelector('#response'),
    resetForm() {
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, '');
        this.render(this.info, '');
        this.resetForm();
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
};

// Game Object
const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;
        view.setup();
        this.ask();
    },
    ask(name) {
        if (this.questions.length > 0) {
            this.question = this.questions.pop();
            const q = `Who is the creator of ${this.question.language}?`;
            view.render(view.question, q);
        } else {
            this.gameOver();
        }
    },
    checkAnswer(event) {
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.creator;
        if (response === answer) {
            view.render(view.result, 'Correct', {'class': 'correct'});
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer is ${answer}`, {'class': 'wrong'});
        }
        view.resetForm();
        this.ask();
    },
    gameOver() {
        view.render(view.info, `Game Over. Score: ${this.score} point${this.score > 1 ? "s" : ""}`);
        view.show(view.start);
        view.teardown();
    },
}

view.start.addEventListener('click', () => game.start(quiz), false);

view.response.addEventListener('submit', (event) => game.checkAnswer(event), false);
view.hide(view.response);