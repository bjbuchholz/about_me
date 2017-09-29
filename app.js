'use strict';

var userPoints = 0;

console.log('Hello');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);
alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer = prompt('First question is: Do you think I am a car guy? Please respond yes or no.').toLowerCase();
console.log(answer);
if(answer === 'yes' || answer === 'Y') {
  alert('You guessed right ' + user + ', I have owned a vehicle from 13 different manufacturers, and over 20 different cars, so cars are my "JAM" ');
  userPoints++;
} else {
  alert('I am a big car guy, I have had over 20 of them from 13 different manufacturers. “Vroom Vroom” ');
} alert('You have ' + userPoints + ' points.');

var answer2 = prompt('So ' + user + ', now that you know I "Love" to get behind the wheel, let\'s see if you can guess one of my favorite cars that I would love to own. Do you think my favorite car is American made? Please respond Yes or No. ').toLowerCase();
console.log(answer2);
if(answer2 === 'yes' || answer2 === 'Y') {
  alert('While I do think it would be fun to shred some tires in a Corvette, it\'s not the one I have in mind. ');
} else {
  userPoints++;
  alert('That\’s correct' + user + ', I do think American cars are great but the one I am thinking about is a little more exotic.');
} alert('You have ' + userPoints + ' points.');

var answer3 = prompt('So big American muscle isn\'t for me, but I would take a free Corvette if someone offered it. Do you think it is Asian built ' + user + '? Yes or No.').toLowerCase();
console.log(answer3);
if( answer3 === 'yes' || answer3 === 'Y') {
  alert('While I have owned quite a few Asian designed cars, I really love the design and performance coming from our neighbors across the pond.');
} else {
  userPoints++;
  alert('You got it!! I am a sucker for all cars, but the one I am thinkin of is not built that far east.');
} alert('You have ' + userPoints + ' points.');

var answer4 = prompt('So know that you know we are talking about European made vehicles. Do you think my dream car is German made? Yes or No.').toLowerCase();
console.log(answer4);
if( answer4 === 'yes' || answer4 === 'Y') {
  alert(' “Ja” you are on the right track, I love the design and build quality the Germans put into their vehicles, but only one company makes “The Ultimate Driving Machine” that I am thinking of. ');
  userPoints++;
} else {
  alert(' “Nein” While the Italians and the Brits make amazing cars, this German company is known for creating “The Ultimate Driving Machine” ');
} alert('You have ' + userPoints + ' points.');

var answer5 = prompt('Alright ' + user + ', do you think the car in question is a BMW? Yes or No. ').toLowerCase();
console.log(answer5);
if( answer5 === 'yes' || answer5 === 'Y') {
  alert('You got it!!! The car in I wish to own soon is the BMW E46 M3 “The Ultimate Driving Machine” ');
  userPoints++;
} else {
  alert('While I do like Porsche, and Mercedes, BMW\’s are known as “The Ultimate Driving Machine” and the BMW E46 M3 is exactly that!!! ');
} alert('You have ' + userPoints + ' points.');
