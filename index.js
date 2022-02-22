const readlineSync = require ('readline-sync');
const name = readlineSync.question('what is your name ?\n');
console.log(`Hey ${name}, Welocme to Geo-Politics Quiz!`);
let score = 0;

let questions = [
  {
     question :'Russian President Vladimir Putin divided Ukraine into how many parts?',
   option:['1','2','3','4'],
   answer:'3'
  },
  {
    question :'United Nations ask India to protect which Indian Journalist?',
    option:['Arnab Goswami','Rana Ayyub','Ansuman Tiwari','Rajdeep Sardesai'],
    answer:'2'
  },
  {
    question :'The MH-60R multi role helicopters India bought from USA have been made by',
    option:['Lockheed Martin','Raytheon','Boeing','BAE Systems'],
    answer:'1'
  },
   {
    question :`India and South Korea have set to achieve bilateral trade target of ___ by 2030`,
    option:['100 billion USD','50 billion USD','10 billion USD','25 billion USD'],
    answer:'2'
  },
   {
    question :`United Arab Emirates is a federation of _______ emirates.`,
    option:['4','5','7','8'],
    answer:'3'
   }

]
function currentScore (userInput, answer)
{
  if (userInput == answer)
  {
    console.log (`Hurrah! Your answer is correct.`);
    score++;
  }
  else 
  {
    console.log(`Oops! Wrong answer.`);
  }

}
function playQuiz(questions)
{
  for (let i = 0; i < questions.length; i++)
  {
    console.log(questions[i].question);
    (questions[i].option).forEach((option, index) =>console.log(`${index + 1} ${option}`));
  

  const userInput = readlineSync.question(`Enter your option as 1 or 2 or 3 or 4\n`);
  currentScore(userInput, questions[i].answer);
  }
}

playQuiz (questions);
console.log(`${name}, your final score is ${score}`);
console.log(`Thanks for Participating.`);