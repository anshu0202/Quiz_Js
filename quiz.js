const data=[
    {
        id:1,
        question:"Which of these fish is actually a fish?",
        answers:[
            {answer:"swordfish", isCorrect:true},
     {answer:"jellyfish", isCorrect:false},
            {answer:"starfish", isCorrect:false},
            {answer:"crayfish", isCorrect:false},
        ]
    },
    {
        id:2,
        question:"Which is master blaster of cricket?",
        answers:[
            {answer:"Virat", isCorrect:false},
     {answer:"Dhoni", isCorrect:false},
            {answer:"Sachin", isCorrect:true},
            {answer:"Rohit", isCorrect:false},
        ]
    },
    {
        id:3,
        question:"PM of india?",
        answers:[
            {answer:"Rahul", isCorrect:false},
     {answer:"Ram nath", isCorrect:false},
            {answer:"Raj nath singh", isCorrect:false},
            {answer:"Narendra modi", isCorrect:true},
        ]
    },
]
const gameScreen=document.querySelector(".game");
const resultScreen=document.querySelector(".result");
const question=document.querySelector(".question");
const answerContainer=document.querySelector(".answers");
const submit=document.querySelector(".submit");
const play=document.querySelector(".play");

let qIndex=0;
let correctCount=0;
let wrongCount=0;
let total=0;
let selectedAnswer;

const playAgain=()=>{
     qIndex=0;
     correctCount=0;
     wrongCount=0;
     total=0;
     selectedAnswer;
    showQuestion(qIndex)
}
play.addEventListener("click",()=>{
    resultScreen.style.display="none";
    gameScreen.style.display="block";
    playAgain()
})
const showResult=()=>{
    resultScreen.style.display="block";
    gameScreen.style.display="none";
    resultScreen.querySelector(".correct").textContent=`Correct Answers : ${correctCount} `
    resultScreen.querySelector(".wrong").textContent=`Wrong Answers : ${wrongCount} `
    resultScreen.querySelector(".score").textContent=`Score : ${(correctCount-wrongCount)*10} `
}


const showQuestion=(qNumber)=>{
    if(qIndex===data.length) return showResult()
    selectedAnswer=null
      question.textContent= data[qNumber].question
      answerContainer.innerHTML=data[qNumber].answers.map((item)=>`
        <div class="answer">
        <input name="answer" type="radio" id=${item.id} value=${item.isCorrect}>
        <label for=${item.id}>
            ${item.answer}
        </label>
    </div>`
      ).join("");
      selectAnswer()
}
const selectAnswer=()=>{
    answerContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click",(e)=>{
            selectedAnswer= e.target.value
        })
    })
}

const submitAnswer=()=>{
    submit.addEventListener("click",()=>{
        if(selectedAnswer!=null){

        
        selectedAnswer==="true"?correctCount++:wrongCount++
        qIndex++;
        showQuestion(qIndex)
        }
        else{
            alert("Select an answer")
        }
    })
}


showQuestion(qIndex)
submitAnswer()