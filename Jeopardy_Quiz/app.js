const questionText = document.querySelector('#question-text');
const submit = document.querySelector('#submit');
const newQuestion = document.querySelector('#new-question-button');
const category = document.querySelector('#category-text');
const value = document.querySelector('#value-text');
const form = document.querySelector('form');
const answerInput = document.querySelector('#answer-input')
const result = document.querySelector('#result');
const give_up = document.querySelector('#giveup');

let answer = "";
let input = "";

const newJeopardyQuestion = async () => {
    try {
        const res = await axios.get('http://jservice.io/api/random');
        submit.disabled = false;
        questionText.innerHTML = res.data[0].question;
        category.innerHTML = res.data[0].category.title;
        value.innerHTML = res.data[0].value;
        answer = res.data[0].answer
        console.log(res.data)
        console.log(answer);
    } catch (error) {
        console.log("Error: ", error)
    }
}

newJeopardyQuestion();

newQuestion.addEventListener('click', () => {
    newJeopardyQuestion();
    result.innerHTML = "";
    answerInput.value = "";           //find out how to clear this 
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (answer === answerInput.value) {
        result.innerHTML = 'Correct!'
    } else {
        result.innerHTML = 'Incorrect :('
    }
})

give_up.addEventListener('click', () => {
    result.innerHTML = `The correct answer is ${answer}`;
    submit.disabled = true;
})

// enter.addEventListener('click', () => {
//     if (input.includes(answer))
// })

// 1) connect 'enter' button to input field

// 2) check entered answer with correct answer and return if correct/incorrect

// 3) Add "I give up" button which reveals answer

// 4) add looping jeopardy song

// 5) style
