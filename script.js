// JS Questions that will be asked
const Questions = [{
    id: 0,
    q: "What type of language is Javascript?",
    a: [{ text: "object-based", isCorrect: false },
        { text: "procedural", isCorrect: false },
        { text: "object-oriented", isCorrect: true },
        { text: "none of the above", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which of the following keywords is used to define a variable in Javascript?",
    a: [{ text: "var", isCorrect: false, isSelected: false },
        { text: "let", isCorrect: false },
        { text: "A and B", isCorrect: true },
        { text: "none of the above", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: [{ text: "throws an error", isCorrect: false },
        { text: "gives a warning", isCorrect: false },
        { text: "ignores the statements", isCorrect: true },
        { text: "none of the above", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the answers
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');


// Creating text for the answer
answer1.innerText = Questions[id].a[0].text;
answer2.innerText = Questions[id].a[1].text;
answer3.innerText = Questions[id].a[2].text;
answer4.innerText = Questions[id].a[3].text;

// Creating true or false value for the answers
answer1.value = Questions[id].a[0].isCorrect;
answer2.value = Questions[id].a[1].isCorrect;
answer3.value = Questions[id].a[2].isCorrect;
answer4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Hightlight answer1 if chosen
answer1.addEventListener("click", () => {
    answer1.style.backgroundColor = "lightblue";
    answer2.style.backgroundColor = "purple";
    answer3.style.backgroundColor = "purple";
    answer4.style.backgroundColor = "purple";
    selected = answer1.value;
})

// Hightlight answer2 if chosen
answer2.addEventListener("click", () => {
    answer1.style.backgroundColor = "purple";
    answer2.style.backgroundColor = "lightblue";
    answer3.style.backgroundColor = "purple";
    answer4.style.backgroundColor = "purple";
    selected = answer2.value;
})

// Hightlight answer3 if chosen
answer3.addEventListener("click", () => {
    answer1.style.backgroundColor = "purple";
    answer2.style.backgroundColor = "purple";
    answer3.style.backgroundColor = "lightblue";
    answer4.style.backgroundColor = "purple";
    selected = answer3.value;
})

// Hightlight answer4 if chosen
answer4.addEventListener("click", () => {
    answer1.style.backgroundColor = "purple";
    answer2.style.backgroundColor = "purple";
    answer3.style.backgroundColor = "purple";
    answer4.style.backgroundColor = "lightblue";
    selected = answer4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})
