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

// const arr = [1, 24, 32, 4, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//    return a-b;
// }

// arr[99]=0;
// console.log(arr.length);

// arr.forEach(function(item, i, arr){
//    console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('','');
// const product = str.split(", ");
// product.sort();
// console.log(product.join('; '));

// arr.pop();
// arr.push(10);

// for (let i=0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// for (let value of arr) {
//    console.log(value);
// }
// console.log(arr);

//.................................................Lesson №19............................................

// let a = 5,
//    b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//    a: 5,
//    b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(maunObj) {
//    let objCopy = {};

//    let key;
//    for (key in maunObj) {
//       objCopy[key] = maunObj[key];
//    }

//    return objCopy;
// }

// const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x: 7,
//       y: 4
//    }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 50;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//    d: 17,
//    e: 20
// };
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArr = ['a', 'b', 'c', 'd'];
// const newArr = oldArr.slice();

// newArr[1] = 'ghghgh';

// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//    blogs = ['wordpress', 'livejournal', 'blogger'],
//    internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// const num = [3, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newArrr = [...array];

// newArrr[1] = 'c';

// console.log(array);
// console.log(newArrr);

// const q = {
//    one: 1,
//    two: 2
// };

// const nweObj = {
//    ...q
// };

// nweObj.two = 3;

// console.log(nweObj);
// console.log(q);

//.................................................Lesson №20............................................

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//    health: 400,
//    aromor: 100,
//    sayHello: function() {
//       console.log('Hello');
//    }
// };

// const john = Object.create(soldier);

// const john = {
//    health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john);

// john.sayHello();

//.................................................Lesson №22......................................

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// console.log(typeof(5+''));

// const num = 5;

// console.log("https://vk.com/catalog/" + 5);

// const fontSize = 26 + 'px';

// console.log(typeof(+'hello con'));

// console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt('fe');

//.................................................Lesson №24......................................

// let sitcher = null;

// if (sitcher) {
//    console.log('hello');
// }

// sitcher = 1;

// if (sitcher) {
//    console.log('hello');
// }

// console.log(typeof(Boolean(4)));

// console.log(typeof(!!'4'));

//.................................................Lesson №25......................................

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button")[1];

// console.log(btns);

// const crls = document.getElementsByClassName("circle");

// console.log(crls[0]);

// const hearts = document.querySelectorAll('.hearts');

// hearts.forEach(function (item) {
//    console.log(item);
// });

// console.log(hearts);

// const oneHeart = document.querySelector(".hearts");

// console.log(oneHeart);

//.................................................Lesson №26......................................

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      crls = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll('.hearts'),
      oneHeart = document.querySelector(".hearts"),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
crls[0].style.backgroundColor = 'red';

// for (let i=0; i< hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(function(item){
   item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);
// wrapper.insertBefore(div, hearts[0]);
// hearts[0].before(div);

// hearts[0].after(div);

// crls[0].remove();
// wrapper.removeChild(hearts[1])

// crls[0].replaceWith(box);

div.innerHTML = "<h1>hello world</h1>";

// div.textContent = "hello";

div.insertAdjacentHTML('afterbegin', '<h2>Hello World</h2>');