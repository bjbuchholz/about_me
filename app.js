'use strict';

var userPoints = 0;

console.log('Hello');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
while (!user) {
  user = prompt('Before we can move on my game, I need to know your name. Please enter below! ');
}if (user !== 'Brandon') {
  alert('That\'s a nice name ;) thank\'s for entering it. ');
}
console.log('The user\'s name is ' + user);
alert('Hi ' + user + '! I am so glad you want to play my game.');

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
var answer2 = prompt('Ok ' + user + ', let\'s switch gears, do you think I like Spicy food? Please respond yes or no. ').toLowerCase();
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
  alert('You got it!!! I have a wonderful 4 year old daughter that keeps me really busy. \nYou now have ' + userPoints + ' point(s) for my game, thanks for playing ' + user + '!' );
} else {
  alert('I do in fact have a wonderful 4 year old daughter that keeps me really busy these days.  \nYou still ' + userPoints + ' point(s) for my game, ' + user + '!');
}

//Question6
for (var i = 0; i <= 34; i++) {
  var myAge = parseInt(prompt('Can you guess how old I am? '));
  console.log('myAge is; ' + myAge);
  if (myAge < 34) {
    alert ('I\'m older than that... ');
  } else if (myAge > 34) {
    alert ('I am not that old... ');
  } else if (myAge === 34) {
    alert ('Yay you got it!');
    correctCounter += 1;
  } else {
    alert('Did you take a guess? ');
  }
  if (i >= 34) {
    alert('Getting closer to 40 :\()');
  }
}
