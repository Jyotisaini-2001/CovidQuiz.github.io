const quizDB =[
    {
        question: "Q1: What does the “19” in “COVID-19” refer to?",
        a: "There are 19 variants of the coronavirus. ",
        b: "There are 19 symptoms of coronavirus disease.",
        c: "This is the 19th coronavirus pandemic.",
        d: "The coronavirus and the disease it causes were identified in 2019.",
        ans: "ans4"
    },
    {
        question: "Q2: The “corona” in coronavirus means:",
        a: "Sun",
        b: "Strong.",
        c: " Beer.",
        d: "Crown.",
        ans: "ans4"
    },
    {
        question: "Q3: How does COVID-19 spread?",
        a: "Coughs and sneezes from an infected person",
        b: "Infected surfaces",
        c: "Food",
        d: "Both A and B",
        ans: "ans4"
    },{
        question: "Q4:The B.1.1.529 variant was first reported to WHO from which country?",
        a: "South Africa ",
        b: "china",
        c: "India.",
        d: "U.S.",
        ans: "ans1"
    },
    {
        question: "Q5:When is it safe to be closer than 6 feet to another person who is not sick with COVID-19?",
        a: "When the person is related to you",
        b: "When you have already had COVID-19.",
        c: "When the person normally lives with you.",
        d: "When you are outdoors.",
        ans: "ans3"
    }

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers =document.querySelectorAll('.answer');
 const showScore= document.querySelector('#showScore');
 let questionCount=0;
 let score =0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText =questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;

    
}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer= curAnsElem.id;
        }
    });
    return answer;
};
const deselectAll= () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);

    
};

submit.addEventListener('click', () =>{
    const checkedAnswer=getCheckAnswer();
   console.log(checkedAnswer);

   if(checkedAnswer=== quizDB[questionCount].ans ){
       score++;
   };
   questionCount++;
   deselectAll();
   if(questionCount < quizDB.length){
    loadQuestion();
  
   }
   else{
    showScore.innerHTML=`
    <h3> you scored ${score}/${quizDB.length}✌ </h3>
    <button class="btn" onclick="location.reload()">try Again</button>
    `;
    showScore.classList.remove('scoreArea');
   }
});
