let current_question_no = 0;
const all_questions = JSON.parse(document.getElementById('questions').dataset.questions);
const score_label = document.getElementById('score');
const current_question = document.getElementById('questions');


current_question.innerText = all_questions.results[0].question;

document.getElementById('true').addEventListener('click', e => {
    if (all_questions.results[current_question_no].correct_answer === 'True') {
        current_question_no++;
        score_label.innerText = `${current_question_no}`;
        current_question.innerText = all_questions.results[current_question_no].question;
    } else {

        const player = localStorage.getItem('current_player').split('-')
        const name = player[0]
        const score = `${current_question_no}`
        localStorage.setItem('current_player', `${name}-${score}`)


        window.location.href = "http://localhost:3000/gameover";


    }

});

document.getElementById('false').addEventListener('click', e => {
    if (all_questions.results[current_question_no].correct_answer === 'False') {
        current_question_no++;
        score_label.innerText = `${current_question_no}`;
        current_question.innerText = all_questions.results[current_question_no].question;

    } else {

        const player = localStorage.getItem('current_player').split('-')
        const name = player[0]
        const score = `${current_question_no}`
        localStorage.setItem('current_player', `${name}-${score}`)

        window.location.href = "http://localhost:3000/gameover";
    }

});

