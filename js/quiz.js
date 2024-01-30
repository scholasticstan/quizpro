const quizData = [
{
	question: "Who is the father of HTML?",
	a: "Rasmus Lerdrof",
	b: "Tim Berners-Lee",
	c: "Brendan Eich",
	d: "Sergey Brin",
	correct: "b",
},
{
	question: "What HTML stand for?",
	a: "Hypertext Markup Language",
	b: "Haypertext Markdown Language",
	c: "Hyperloop Markup Language",
	d: "Helicopters Terminals",
	correct: "a",
},
{
	question: "Wat does CSS stand for?",
	a: "Central Style Sheet",
	b: "Cascading Style Sheet",
	c: "Cascading Simple Sheet",
	d: "None of the above",
	correct: "b",
},
{
	question: "What year was Javascript launched?",
	a: "1995",
	b: "1996",
	c: "1997",
	d: "5000",
	correct: "a",
},
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll("answer");
const questionElements = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit")