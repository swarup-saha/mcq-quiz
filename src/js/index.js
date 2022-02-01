// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "ans2",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "ans4",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "ans1",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "ans4",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "ans1",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showscore = document.querySelector("#showscore");
const scoreArea = document.querySelector(".scoreArea");
const answersforOptions = document.querySelectorAll(".answer");
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const eachQuestion = questions[questionCount];
  console.log(eachQuestion);
  question.innerHTML = eachQuestion.question;
  option1.innerHTML = eachQuestion.options[0];
  option2.innerHTML = eachQuestion.options[1];
  option3.innerHTML = eachQuestion.options[2];
  option4.innerHTML = eachQuestion.options[3];
};
loadQuestion();

const getSelectByUser = () => {
  let ans;
  answersforOptions.forEach((currentElement) => {
    if (currentElement.checked) {
      ans = currentElement.id;
    }
  });
  return ans;
};
const deSelectNext = ()=>{
    answersforOptions.forEach(currentElement=>currentElement.checked = false);
}
submit.addEventListener("click", () => {
  const userOption = getSelectByUser();
  // console.log(userOption)
  if (questions[questionCount].answer == userOption) {
    score++;
  }
  questionCount++;
  deSelectNext();
  if (questionCount < questions.length) {
    loadQuestion();
  } else {
        let result = score>=4?"YES":(score>=2?"Maybe":"No");
    showscore.innerHTML = ` <h3>Your Scored ${score}/${questions.length}</h3>
    <h2>Result:${result}</h2>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `;
    showscore.classList.remove('scoreArea');
  }
});
