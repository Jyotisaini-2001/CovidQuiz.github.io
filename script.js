const quizDB =[
    {
        question: "hello world ",
        a: "we ",
        b: "you ",
        c: " er",
        d: " et",
        ans: "ans4"
    },
    {
        question: "uedr hit ",
        a: "cv ",
        b: " df",
        c: "gh ",
        d: " as",
        ans: "ans1"
    },
    {
        question: "rtyu ",
        a: "rt",
        b: "cvb",
        c: "jk",
        d: " yh",
        ans: "ans4"
    },{
        question: "uutyu ",
        a: "rt",
        b: "cdvvb",
        c: "jk",
        d: " yvh",
        ans: "ans1"
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
const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsElem) =>{
          if(curAnsElem.checked){
            answer= curAnsElem.id;
          }
        
    });
    return answer;
};
const deselectAll =() =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked= false);
}

submit.addEventListener(' click', () => {
    const checkedAnswer =getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer=== quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
     deselectAll();
    if(questionCount< quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML= `
        
        <h3>your score ${score}/${quizDB.length}👌</h3>
        <button class="btn" onclick="location.reload()">Try again </button>
        `;
       
      
       
        
        showScore.classList.remove('scoreArea');
    }
});
