'use strict';

let correctCount = 0
let userName = prompt('What is your name/what you would like to be called?')
alert('Welcome ' + userName + '! Thank you for taking an interest in learning a bit more about me.')

let huskyName = prompt('Question 1: Does my Husky like to cuddle? Yes or No');
let aussieName = prompt('Question 2: Is the name of my Australian Sheperd "Eevee"? Yes or No');
let favDrink = prompt('Question 3: Would I likely accept going out to coffee? Yes or No');
let myAge = prompt('Question 4: Am I old enough to drink? Yes or No');
let myDegree = prompt('Question 5: Was my Bachelors degree in Computer Science? Yes or No');

if (huskyName.toLowerCase() == 'yes' || huskyName.toLowerCase() == 'y') {
    alert('Q1 Answer: Correct! She appreciates you remembering!');
    correctCount++;
} else if (huskyName.toLowerCase() == 'no' || huskyName.toLowerCase() == 'n') {
    alert('Q1 Answer: She is sad you do not think she wants to cuddle.');
}

if (aussieName.toLowerCase() == 'yes' || aussieName.toLowerCase() == 'y') {
    alert('Q2 Answer: Correct! She LOVES you and wants to lick your face!');
    correctCount++;
} else if (aussieName.toLowerCase() == 'no' || aussieName.toLowerCase() == 'n') {
    alert('Q2 Answer: She is crying you MONSTER!');
}

if (favDrink.toLowerCase() == 'yes' || favDrink.toLowerCase() == 'y') {
    alert('Q3 Answer: Yes! You are clearly paying attention.');
    correctCount++;
} else if (favDrink.toLowerCase() == 'no' || favDrink.toLowerCase() == 'n'){
    alert('Q3 Answer: I am a stereotype of a developer in Seattle, how did you get that wrong?');
}

if (myAge.toLowerCase() == 'yes' || myAge.toLowerCase() == 'y') {
    alert('Q4 Answer: Yes! Never do but I always have the option.');
    correctCount++;
} else if (myAge.toLowerCase() == 'no' || myAge.toLowerCase() == 'n'){
    alert('Q4 Answer: Wow.. I am slightly offended you think I look THAT young.')
}


if (myDegree.toLowerCase() == 'no' || myDegree.toLowerCase() == 'n') {
    alert('Q5 Answer: Correct! I got one in Chemistry. While I am moving into tech now, I still love my degree.');
    correctCount++;
} else if (myDegree.toLowerCase() == 'yes' || myDegree.toLowerCase() == 'y') {
    alert('Q5 Answer: Noooope! Think flasks and beakers. I am only moving into tech now.');
}
alert(`Thank you ` + userName + ` for participating.`)

function welcomeName(){
    document.write('Welcome ' + userName + '! Thank you for taking the time to learn more about me.')
}

function thanksName(){
    document.write('Thank you again ' + userName + ' for taking an interest in learning a bit more about me. I hope you have a wonderful day.')
}

// Lab 3 Questions


let ageAnswer = 30;
let wannaPlay = prompt('Do you want to play a guessing game about me? (Yes or No)');
let playGame = wannaPlay.toLowerCase() == 'yes';
console.log(wannaPlay);
let wonGame = false;

if (playGame){
    let numberOfAttempts = 4;
    for (let i = 1; i <= numberOfAttempts; i++){
        let userAnswer = prompt("How old am I?");
        console.log(i)
        if (userAnswer == ageAnswer){ 
            wonGame = true;
            alert ('You got it right!');
            correctCount++;
            break;
        }
        else if(userAnswer < ageAnswer){
                alert(`You think I look that young? Rude.. Try Again! You have  ${numberOfAttempts -i}  attempts left`);
            } else if (userAnswer > ageAnswer){
                alert(`Are you saying I look old? I am younger than that. Try Again! You have ${numberOfAttempts -i}  attempts left`);
            }
        }
    } 

if (wonGame){
    alert('Thank you ' + userName + ' for playing this guessing game. You won!');
}
else {
    alert ('I was born in April of 1991. Thank you for playing.');
    alert('Thank you ' + userName + ' for playing this guessing game.');
}

let multiChoiceGame = prompt('Do you want to play a multi-choice guessing game about me? (Yes or No)');
let multiGame = multiChoiceGame.toLowerCase();
console.log(multiChoiceGame);

let multiAnswer = ['husky', 'australian shepherd', 'aussie', 'mini australian sheperd', 'siberian husky'];
let numberOfAttempts = 6;
let correct = false;

while(numberOfAttempts > 0)
if (multiGame == 'yes'){
    let user_multianswer = prompt('What color is my dog?').toLowerCase();
    for (let i = 0; i < numberOfAttempts; i++){
            console.log("correct answer" , multiAnswer)
            console.log("your answer" , answer)
             if (user_multianswer.toLowerCase() == multiAnswer[i].toLowerCase()) {
             alert('You got it right!');
             correctCount++;
             correct = true;
             break;
            } else { 
            alert('Incorrect, You have ' + (numberOfAttempts - i) + ' attempts left');
            }
            answer = prompt('What color is my dog?').toLowerCase();
        }
}

alert('Hey ' + userName + '. You got ' + correctCount + ' out of 7 correct.');