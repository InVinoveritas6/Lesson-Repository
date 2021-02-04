"use strict";

//.................................................Lesson №2............................................

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;

// console.log(number);

//.................................................Lesson №3............................................

// const obj = {
//    name: "John",
//    age: 25,
//    isVarried: false
// }
// console.log(obj["name"]);

//.................................................Lesson №4............................................

//  const res = confirm('hello');
//  console.log(res);

// const answ = prompt("123", "1");
// console.log(answ);

// const answers = [];

// answers[0] = prompt('как ваше имя', '');
// answers[1] = prompt('как ваше имя', '');
// answers[2] = prompt('как ваше имя', '');

// document.write(answers)

//.................................................Lesson №5............................................

//  let incr = 10,
//      decr = 10;
// //  ++incr;
// //  --decr;

//  console.log(++incr);
//  console.log(--decr);

//.................................................Lesson №6............................................

// console.log(4%2);

// const isChecked = true,
//       isClose = true;
// let Nba = isChecked && isClose;
// if (Nba==true){
//    alert('Hello')
// };
// console.log(Nba);

//.................................................Lesson №10............................................

// if (4) {
//    console.log('Ок');
// } else {
//    console.log('error');
// };

// const num = 50;

// if (num < 49) {
//    console.log('error');
// } else if (num > 100) {
//    console.log('Много');
// } else {
//    console.log('Ok');
// }

// (num === 49) ? console.log('Ok') : console.log('Error');

// const num = 50;


// switch (num) {
//    case 49:
//       console.log('Неверно');
//       break;
//    case 100:
//       console.log('Неверно');
//       break;
//    case 50:
//       console.log('В точку');
//       break;
//    default:
//       console.log('No');
//       break;
//
//.................................................Lesson №11............................................

// let num = 50;

// while(num <= 55) {
//    console.log(num);
//    num++;
// }

// do {
//    console.log(num);
//    num++;
// }
// while(num <= 55);

// for(let i=1; i<10; i++){
//    console.log(num);
//    num++
// }

// for(let i=1; i<10; i++){
//    if(i===10){
//       break;
//    }
//    console.log(i);
// }

//.................................................Lesson №13............................................

// let num = 20;

// function showFirstMassage(text) {
//    console.log(text);
//    num = 10;
//    console.log(num);
// }

// showFirstMassage("Hello word");
// console.log(num);

// function calc(a, b) {
//    return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 3));

// function ret() {
//    let num = 50;
//    return num;
// }

// const another = ret();
// console.log(another);

// let logger = function () {
//    console.log("Hello");
// };

// logger();

// const calc = (a, b) => {return a + b};

//.................................................Lesson №14............................................

// const str = "tEst";
// const arr = [1, 2, 3];

// console.log(str[2] ='b');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello word";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;

// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

//.................................................Lesson №16............................................

// function first() {
//    setTimeout(function () {
//       console.log(1);
//    }, 500);
// }

// function second() {
//    console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//    console.log(`Я учу: ${lang}`);
//    callback();
// }

// function done() {
//    console.log("Я прошел этот урок");
// }

// learnJS('JavaScript', done);

//.................................................Lesson №17............................................

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: "black",
//       bg: 'red'
//    },
//    makeTest: function () {
//       console.log("Test");
//    }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//    if (typeof (options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
//          counter++;
//       }
//    } else {
//       console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//       counter++;
//    }
// }
// console.log(counter); 

//.................................................Lesson №18............................................

