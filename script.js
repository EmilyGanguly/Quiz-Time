const quizdata = [
	{
		question: 	"Grand Central Terminal, Park Avenue, New York is the world's?",
		a: "largest railway station",
		b: "highest railway station",
		c: "longest railway station",
		d: "None of the above",
		correct: "a"
	},
	{
		question: 	"Entomology is the science that studies",
		a: "Behavior of human beings",
		b: "Insects",
		c: "The origin and history of technical and scientific terms",
		d: "The formation of rocks",
		correct: "b"
	},
	{
		question: 	"Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
		a: "Asia",
		b: "Africa",
		c: "Europe",
		d: "Australia",
		correct: "b"
	},
	{
		question: 	"Garampani sanctuary is located at",
		a: "Junagarh, Gujarat",
		b: "Diphu, Assam",
		c: "Kohima, Nagaland",
		d: "Gangtok, Sikkim",
		correct: "b"
	},
	{
		question: "For which of the following disciplines is Nobel Prize awarded?",
		a:	"Physics and Chemistry",
		b:	"Physiology or Medicine",
		c:	"Literature, Peace and Economics",
		d:	"All of the above",
		correct: "d"
	},
	{
		question: "Hitler party which came into power in 1933 is known as?",

		a:	"Labour Party",
		b:	"Nazi Party",
		c:	"Ku-Klux-Klan",
		d:	"Democratic Party",
		correct: "b"
	}
]

const elQuestion = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit_Btn = document.getElementById("submit");

let currentQuestion = 0;
let correct = 0;

loadQuiz();

function loadQuiz(){
	const currentQuizData = quizdata[currentQuestion];

	elQuestion.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected(){
	const answers = document.querySelectorAll(".answer");

	answers.forEach((answer)=>{
		//console.log(answer.checked);
		if (answer.checked) {
			let 
		}
	});
}

//getSelected();

//loadQuiz();

submit_Btn.addEventListener("click", ()=>{
	currentQuestion++;

	getSelected();
	/*if (currentQuestion<quizdata.length) {
		loadQuiz();
	}else{
		alert("You finished! Get yourself a lemonade!");
	}*/
});