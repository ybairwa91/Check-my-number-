'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

// handling click events
// event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⨉⨉No number!';
  }
});


// Project1

// selecting an element in js from html
// document is an object,queryselector is method in document object
// cl is a snippet to directly call console.log setup by us only
console.log(document.querySelector('.message'));
// this is basically we selected a HTML element which used message class and if get output we can see it show the whole element.
// This is the first dom manipulation.
console.log(document.querySelector('.message').textContent);
// .textContent helps to read the content in the HTML element defined by class message

//  DOM manipulation
// DOM=document object model,it is basically structured representation of html document.allow javascript to access html element and styles to manipulate them.
//Connection point between js and html document.
// DOM automatically created by browser automatically as soon as html document loads
// DOM  created in tree like structure
// in DOM tree each element is an object
// evry html element contain a node which helps us to access by js
// document object is entry point to start DOM and then select html element using methods like queryselector()
// dom is not javascript or part of it
// DOM is just API
// dom and dom methods are part of  web api
// api stands for application programming interface
// web api are libraries that browers implement and access through js
// web api are libraries written in js which are automatically available to use.
// besides dom there are tons of web api ie timers,fetch and can interact with js

// SELECTING AND MANIPULATING ELEMENT

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
// see filling textcontent helps us to change the html element text -this is manipulation.
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// now in guess html element or the box we have only number as input so to see number we use value property instead of textcontent used incase of string.
// console.log is for to see in terminal not to see in browser remember that.
document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);

*/

// HANDLING CLICK EVENT
// EVENT something happen on page ie click on a page to open something else,mouse click on search button of google are events,something that change something
// some actions happens in an event and a reaction  to it also occur at the same time
// use of addEventListener method to ponder in event handling
// a function is also a value,so we can pass into another function argument,here what we did
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // no entries
  if (!guess) {
    // document.querySelector('.message').textContent = ;
    displayMessage('⛔ No Number');
  }

  // when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ;
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '💹 Too High!' : '↘ Too Low!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ;
      displayMessage('❌You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   //input is high Af
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '💹 Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '❌You Lost the Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   // input is low as fever
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '↘ Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '❌You Lost the Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//

// Manipulating CSS styles
// Coding challange1==Implement Again functionality

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

// PROJECT NUMBER2
