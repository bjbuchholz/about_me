'use strict';

var userPoints = 0;

function showIntroAlert() {
  console.log('Hello');
  alert('Welcome to my guessing game!');

  // show the next alert/prompt
  askName();
}

function askName() {
  var user = prompt('What is your name?');
  while (!user) {
    user = prompt('Before we can move on my game, I need to know your name. Please enter below! ');
  }
  if (user !== 'Brandon') {
    alert('Nice to meet you ' + user + '\nLet\'s get started. ');
  }
  console.log('The user\'s name is ' + user);

  askIsCarGuy();
}

// Question 1
function askIsCarGuy() {
  var answer = prompt('First question, do you think I am a car guy? Please respond yes or no. ').toLowerCase();
  console.log(user + ' answered ' + answer + ' for question 1. ');
  if(answer === 'yes' || answer === 'y') {
    userPoints++;
    alert('You guessd right ' + user + ', I have owned 20 different cars over the past 15 years. \nYou now have ' + userPoints + ' point.');
  } else {
    alert('Actually, I am a big car guy, I have had over 20 of them. “Vroom Vroom” \nYou still have ' + userPoints + ' points.');
  }

  askIsSpicyFoodLover();
}

// Question 2
function askIsSpicyFoodLover() {
  var answer2 = prompt('Ok ' + user + ', let\'s switch gears, do you think I like Spicy foods? Please respond yes or no. ').toLowerCase();
  console.log(user + ' answered ' + answer2 + ' for question 2. ');
  if(answer2 === 'yes' || answer2 === 'y') {
    userPoints++;
    alert('That\’s correct ' + user + ', I love the "HOT" stuff. \nYou now have ' + userPoints + ' point(s).');
  } else {
    alert('Actually, I do love spicy food, the spicier the better I say. \nYou still have ' + userPoints + ' point(s).');
  }

  askIsScaryMovieLover();
}

// Question 3
function askIsScaryMovieLover() {
  var answer3 = prompt('Do you think I am a fan of scary movies ' + user + '? Please respond yes or no. ').toLowerCase();
  console.log(user + ' answered ' + answer3 + ' for question 3. ');
  if( answer3 === 'no' || answer3 === 'n') {
    userPoints++;
    alert('You got it!! I am not a big horror genre fan. \nYou now have ' + userPoints + ' point(s).');
  } else {
    alert('Actually I am not a fan, while I love all movies, the Scary ones I tend to skip. \nYou still have ' + userPoints + ' point(s).');
  }

  askOriginLocation();
}

// Question 4
function askOriginLocation() {
  var answer4 = prompt('Ok ' + user + ', am I originally from the west coast? Please respond yes or no.').toLowerCase();
  console.log(user + ' answered ' + answer4 + ' for question 4. ');
  if( answer4 === 'no' || answer4 === 'n') {
    userPoints++;
    alert('That\'s correct ' + user + ', I moved to Seattle about 7 years ago from North Carolina.  \nYou now have ' + userPoints + ' point(s).');
  } else {
    alert('While I do consider Seattle my forever home, I am an east coast transplant. \nYou still have ' + userPoints + ' point(s).');
  }

  askDoesHaveKids();
}

// Question 5
function askDoesHaveKids() {
  var answer5 = prompt('Alright ' + user + ', do you think I have any kids? Please respond yes or no. ').toLowerCase();
  console.log(user + ' answered ' + answer5 + ' for question 5. ');
  if ( answer5 === 'yes' || answer5 === 'y') {
    userPoints++;
    alert('You got it!!! I have a wonderful 4 year old daughter that keeps me really busy. \nYou now have ' + userPoints + ' point(s)' );
  } else {
    alert('I do in fact have a wonderful 4 year old daughter that keeps me really busy these days.  \nYou still have ' + userPoints + ' point(s)' );
  }

  askMyAge();
}

// Question 6
function askMyAge() {
  for (var i = 0; i < 4; i++ ) {
    var myAge = parseInt(prompt('Can you guess how old I am? ' ));
    console.log('My age is; ' + myAge);
    if (myAge < 34 ) {
      alert ('I\'m older than that...guess again. ');
    } else if (myAge > 34 ) {
      alert ('I am not that old... guess again. ');
    } else if (myAge === 34 ) {
      userPoints++;
      alert ('Yay you got it! \nYou now have ' + userPoints + ' point(s). ');
      console.log(user + ' guessed my age = ' + myAge);
      i = 4;
    } else {
      alert ('Did you take a guess? ');
    }
  }
}

//
// //Question7
//
// var favoriteCars = ['bmw', 'audi', 'volkswagen', 'porsche', 'jeep' ];
// var question7Tries = 6;
// console.log('question7 ***** ', question7);
// var question7 = prompt('Last question, can you name one of my 5 favorite cars brands? \nYou will get 6 tries this time. ').toLowerCase();
// console.log('My favorite car brands are: ' + favoriteCars);
// while (question7Tries > 0) {
//   if (favoriteCars.indexOf(question7) > - 1) {
//     alert('Yay you got it! \nMy 5 favorite car brands are ' + favoriteCars + '\nYour final score is ' + userPoints + ' out of 7 for my game. Thanks for playing! ');
//     console.log(user + 'guessed 1 of my favorite car brands');
//     userPoints++;
//     question7Tries = - 1;
//   } else {
//     question7Tries = question7Tries - 1;
//     question7 = prompt('Try again. You have ' + question7Tries + ' tries left after this.').toLowerCase();
//     console.log('User is asked question 7 again. ' + question7Tries + ' left.' );
//   }
// }
//
// if (question7Tries === 0){
//   alert('No more tries left. My 5 favorite car brands are ' + favoriteCars);
//   console.log('User ran out of tries. ');
// }
