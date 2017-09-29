'use strict';

var userPoints = 0;

console.log('Hello');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);
alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer = prompt('Do you think I am a car guy? Please respond yes or no.').toLowerCase();
console.log(answer);
if(answer === 'yes' || answer === 'Y') {
  alert('You guessed right,' + user + ' I have owned a vehicles from 13 different manufacturers, and over 20 cars since I was 16. ');
  userPoints++;
} else {
  alert('I am actually a big car guy, I have had over 20 of them from 13 different manufacturers. “Vroom Vroom” ');
} alert('You have ' + userPoints + ' points.');

var answer2 = prompt('So ' + user + ' now that you know I Love to get behind the wheel, let\'s see if you can guess one of my favorite car that I yet to own. Do you think my favorite car is American made? Please respond yes or no. ').toLowerCase();
console.log(answer2);
if(answer2 === 'yes' || answer2 === 'Y') {
  alert('While I do think it would be fun get behind the wheel of a Corvette,' + user + ' it\'s not my “favorite”. ');
} else {
  userPoints++;
  alert('That’s correct,' + user + ' I do think American cars are great but I like mine a little more exotic.');
} alert('You have ' + userPoints + ' points.');

var answer3 = prompt('So no big american muscle for me, even though I would surely take a free Corvette if someone offered it. Do you think the favorite future car is Asian ' + user + '? ').toLowerCase();
console.log(answer3);
if( answer3 === 'yes' || answer3 === 'Y') {
  alert('While I have owned quite a few Asian designed cars, I love the design and precision coming from our neighbors across the pond.');
} else {
  userPoints++;
  alert('You got it!! I am a sucker for all cars from across the pond, just not quite that far east.');
} alert('You have ' + userPoints + ' points.');

var answer4 = prompt('Now that we have landed in Europe. Do you think the “car” is German made? Yes or no.').toLowerCase();
console.log(answer4);
if( answer4 === 'yes' || answer4 === 'Y') {
  alert(' “Ja” you are on the right track, I love the design and build quality the Germans put into their vehicles, but only one company makes “The Ultimate Driving Machine” ');
  userPoints++;
} else {
  alert(' “Nein” While the Italians and the Brits make amazing cars, the Germans are know for creating “The Ultimate Driving Machine” ');
} alert('You have ' + userPoints + ' points.');

var answer5 = prompt('As we are driving thru the mountains in the new whip on the way to Oktoberfest. Do you think the car in question is bavarian enough to handle the “autobahn”? ').toLowerCase();
console.log(answer5);
if( answer5 === 'yes' || answer5 === 'Y') {
  alert('You got it!!! The car in I wish to own soon is the BMW E46 M3 “The Ultimate Driving Machine” ');
  userPoints++;
} else {
  alert('While I do like Porsche, and Mercedes, BMW\’s are known as “The Ultimate Driving Machine” and the BMW E46 M3 is exactly that!!! ');
} alert('You have ' + userPoints + ' points.');
