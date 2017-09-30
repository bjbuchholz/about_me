'use strict';

var userPoints = 0;

console.log('Hello');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);
alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer = prompt('First question is: Do you think I am a car guy? Please respond yes or no.').toLowerCase();
console.log(answer);
if(answer === 'yes' || answer === 'y') {
  alert('You guessd right ' + user + ', I have owned a vehicle from 13 different manufacturers, and owned 20 different cars, they are my "JAM" ');
  userPoints++;
} else {
  alert('Actually, I am a big car guy, I have had over 20 of them from 13 different manufacturers. “Vroom Vroom” ');
} alert('You have ' + userPoints + ' points.');

var answer2 = prompt('So ' + user + ', now that you know I "Love" to get behind the wheel, let\'s see if you can guess one of my favorite cars that I hope to own. Do you think my favorite car is American made? Please respond Yes or No. ').toLowerCase();
console.log(answer2);
if(answer2 === 'yes' || answer2 === 'y') {
  alert('Not quite, while I do think it would be fun to shred the tires off a Corvette, it\'s not the one I have in mind. ');
} else {
  userPoints++;
  alert('That\’s correct ' + user + ', while I do think American cars are great, I am more a foreign car guy. ');
} alert('You have ' + userPoints + ' points.');

var answer3 = prompt('So know that you know big American muscle isn\'t for me. Do you think it is an Asian built car ' + user + '? Yes or No.').toLowerCase();
console.log(answer3);
if( answer3 === 'yes' || answer3 === 'y') {
  alert('While I have owned quite a few Asian designed cars, the car I am thinking of is European-made. ');
} else {
  userPoints++;
  alert('You on the right path!! I\'m definitely thinking of a European-made car. ');
} alert('You have ' + userPoints + ' points.');

var answer4 = prompt('Now that you know we are talking about European vehicles, do you think it is German-made? Yes or No.').toLowerCase();
console.log(answer4);
if( answer4 === 'yes' || answer4 === 'y') {
  alert('“Ja” you are on the right track, I love the design and build quality the Germans put into their vehicles, but only one company makes “The Ultimate Driving Machine” that I am thinking of. ');
  userPoints++;
} else {
  alert('“Nein” While the Italians and the Brits make amazing cars, the German car I am thinking of is known as, “The Ultimate Driving Machine”. ');
} alert('You have ' + userPoints + ' points.');

var answer5 = prompt('Alright ' + user + ' last question, do you think the car in question is a BMW? Yes or No. ').toLowerCase();
console.log(answer5);
if( answer5 === 'yes' || answer5 === 'y') {
  alert('You got it!!! The car in I wish to own some day is the BMW E46 M3 “The Ultimate Driving Machine” ');
  userPoints++;
} else {
  alert('While I do like Feraris, and Lamborghini, the car I am thinking of is the BMW E46 M3!!! ');
} alert('You have ' + userPoints + ' points.');
