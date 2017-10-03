'use strict';

var userPoints = 0;
console.log('Hello');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
while (!user) {
  user = prompt('Before we can move on my game, I need to know your name. Please enter below! ');
}
if (user !== 'Brandon') {
  alert('Nice to meet you ' + user + '. ');
}
console.log('The user\'s name is ' + user);
alert('Let\'s get started ' + user + '. ');

//Question 1
var answer = prompt('First question, do you think I am a car guy? Please respond yes or no. ').toLowerCase();
console.log(user + ' answered ' + answer + ' for question 1. ');
if(answer === 'yes' || answer === 'y') {
  userPoints++;
  alert('You guessd right ' + user + ', I have owned 20 different cars over the past 15 years. \nYou now have ' + userPoints + ' point.');
} else {
  alert('Actually, I am a big car guy, I have had over 20 of them. “Vroom Vroom” \nYou still have ' + userPoints + ' points.');
}

//Question 2
var answer2 = prompt('Ok ' + user + ', let\'s switch gears, do you think I like Spicy foods? Please respond yes or no. ').toLowerCase();
console.log(user + ' answered ' + answer2 + ' for question 2. ');
if(answer2 === 'yes' || answer2 === 'y') {
  userPoints++;
  alert('That\’s correct ' + user + ', I love the "HOT" stuff. \nYou now have ' + userPoints + ' point(s).');
} else {
  alert('Actually, I do love spicy food, the spicier the better I say. \nYou still have ' + userPoints + ' point(s).');
}

//Question 3
var answer3 = prompt('Do you think I am a fan of scary movies ' + user + '? Please respond yes or no. ').toLowerCase();
console.log(user + ' answered ' + answer3 + ' for question 3. ');
if( answer3 === 'no' || answer3 === 'n') {
  userPoints++;
  alert('You got it!! I am not a big horror genre fan. \nYou now have ' + userPoints + ' point(s).');
} else {
  alert('Actually I am not a fan, while I love all movies, the Scary ones I tend to skip. \nYou still have ' + userPoints + ' point(s).');
}

//Question 4
var answer4 = prompt('Ok ' + user + ', am I originally from the west coast? Please respond yes or no.').toLowerCase();
console.log(user + ' answered ' + answer4 + ' for question 4. ');
if( answer4 === 'no' || answer4 === 'n') {
  userPoints++;
  alert('That\'s correct ' + user + ', I moved to Seattle about 7 years ago from North Carolina.  \nYou now have ' + userPoints + ' point(s).');
} else {
  alert('While I do consider Seattle my forever home, I am an east coast transplant. \nYou still have ' + userPoints + ' point(s).');
}

//Question 5
var answer5 = prompt('Alright ' + user + ', do you think I have any kids? Please respond yes or no. ').toLowerCase();
console.log(user + ' answered ' + answer5 + ' for question 5. ');
if( answer5 === 'yes' || answer5 === 'y') {
  userPoints++;
  alert('You got it!!! I have a wonderful 4 year old daughter that keeps me really busy. \nYou now have ' + userPoints + ' point(s)' );
} else {
  alert('I do in fact have a wonderful 4 year old daughter that keeps me really busy these days.  \nYou still have ' + userPoints + ' point(s)' );
}

//Question6-    *need to stop loop after 4 attempts, keeps looping even if the correct answer is given, also something is wrong with the last }. When I remove it has fatal error? also will not prompt question 7.*

for (var i = 0; i < 4; i++ ) {
  var myAge = parseInt(prompt('Can you guess how old I am? ' ));
  console.log('myAge is; ' + myAge);
  if (myAge < 34 ) {
    alert ('I\'m older than that...guess again. ');
  } else if (myAge > 34 ) {
    alert ('I am not that old... guess again. ');
  } else if (myAge === 34 ) {
    userPoints++;
    alert ('Yay you got it! \nYou now have ' + userPoints + ' point(s). ');
    i = 4;
  } else {
    alert ('Did you take a guess? ');
  }
}
//Question7

for (var j = 0; j < favoriteCars.length; j++) {
  var favoriteCars = ['BMW', 'AUDI', 'VOLKSWAGEN', 'PORSCHE', 'JEEP' ];
  var answer7 = prompt('Last question, can you name one of my top 5 favorite cars manufactuers? ').toLowerCase();
  console.log('My favorite car manufactuers are: ' + favoriteCars[j]);
}
//   if (favoriteCars === [j]); {
//     alert ('You guessed correct. ');
//   } else if (); {
//     alert ('Keep quessing')
//} else
//alert ('I hope you enjoyed my game, you finished with ' + userPoints + '. Great job ' + user + '. ');
//console.console.log('Game Over! ');
