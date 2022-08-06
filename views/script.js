const quizTabela = [

{
    question: "Kiedy urodził się JP2?",
    a: '1920',
    b: '1925',
    c: '1932',
    d: '1939',
    correct: 'a'
},
{
    question: "Ile rodzajów noży jest w cs:go?",
    a: '11',
    b: '9',
    c: '13',
    d: '15',
    correct: 'd'
},
{
    question: "W ilu twoja matka była ruchana jak szmata jebana?",
    a: '3',
    b: '100',
    c: '8',
    d: '69',
    correct: 'c'
},
{
    question: "Ile masz ojców?",
    a: '3',
    b: '8',
    c: '2',
    d: '6',
    correct: 'c'
}
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('pytanie');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const subButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

wczytajQuiz();

function wczytajQuiz() {

    deselectAnswers();

    const currentQuizData = quizTabela[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    q1.innerText= currentQuizData.a;
    q2.innerText= currentQuizData.b;
    q3.innerText= currentQuizData.c;
    q4.innerText= currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {

        if(answerEl.checked) {

            answer = answerEl.id;
        }

    });

    return answer; 
}


function deselectAnswers() {


    answerEls.forEach((answerEl) => {
        answerEl.checked= false;

    });


}


subButton.addEventListener("click", () => {

    const answer = getSelected();


    if(answer) {

        if(answer === quizTabela[currentQuiz].correct)
          {
              score++;
          }
        currentQuiz++;

        if(currentQuiz < quizTabela.length) {

        wczytajQuiz();
    }

    else {
        //alert("Brawo, ukończyłeś Quiz!");
        quiz.innerHTML = `<h2> Gratulacje! Odpowiedziałeś poprawnie na ${score}/${quizTabela.length} pytań.</h2>
        
        <button onclick="location.reload()">Rozpocznij od nowa</button>`;
    }

    }
    

});
