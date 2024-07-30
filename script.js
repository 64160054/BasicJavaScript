// ! ขึ้นใน Console ตอน F12
// console.log('Hello World'); 

// ! document(index.html) get id มาจาก p ชื่อว่า text และใช้ innerHTML เพื่อ set ค่าที่จะแสดง
// document.getElementById('text').innerHTML = "Paowaric Vachiranantakul" 

// ! แสดงข้อความเหมือนกัน
// document.write('Hello Document Write'); 

// ! ขึ้น Pop up กล่อง Alert ตอนเข้า test
// window.alert('Hello Alert Box'); 

// ! สร้างตัวแปร var เสมอ 
// var x = 5; 
// var y = 6;
// var z = x + y;
// console.log(z);

// ! Concatenate การเชื่อมต่อ String หรือ Variable
// var FirstName = "Paowaric";
// var LastName = "Vachiranantakul";
// var FullName = FirstName + " " + LastName;
// console.log(FullName);

// ! True
// console.log(1==1);

// ! Function
// function myFunction(value1, value2) {
//     return value1*value2;
// }
// console.log(myFunction(5, 5));

// ! style background 
// function changeBg() {
//     document.body.style.backgroundColor = "red";
// }

// ! program Celsius => F
// function cToF(celsius) {
//     var cTemp = celsius;
//     var cToFahr = cTemp * 9 / 5 + 32;
//     var message = cTemp + "\xB0C is " + cToFahr + "\xB0F";
//     console.log(message); 
// }
// cToF(30);

// ! program F => C
// function fToC(fahrenheit) {
//     var fTemp = fahrenheit;
//     var fToCel = (fTemp - 32) * 5 / 9;
//     var message = fTemp + "\xB0F is " + fToCel + "\xB0C";
//     console.log(message); 
// }
// fToC(86);

// ! create Obj & use
// TODO create method at fullname
// var person = {
//     firstName: "Paowaric",
//     lastName: "Vachiranantakul",
//     eyecolor: "black",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());

// ! Events with btn
// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
// }

// ! Str
// var x = " It's me Paowaric \\ \"Pao\" \\ Vachiranantakul";
// console.log(x);

// ! Array Literal 
// var myArr = ["BMW", "Ford", "Honda"];

// console.log(myArr[0]);

// ! Array Methods
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// document.getElementById("demo").innerHTML = fruits.join(" - ");
// fruits.splice(2, 0, "Test1", "Test2"); //? เพิ่มตรง index ที่ 2 ว่า Test1 และ Test2 และไม่ต้องลบอะไรเลย (0) 
// fruits.splice(0, 3); //? ลบตรง index ที่ 0 เป็นต้นไป 3 ตัว ก็คือลบ Banana ถึง Apple
// fruits.shift();           //? ลบหน้าสุด
// fruits.unshift("Lemon"); //? เพิ่มหน้าสุด
// fruits.pop();            //? ลบหลังสุด
// fruits.push("Kiwi");     //? เพิ่มหลังสุด
// fruits[0] = "Pine";      //? แทนที่ตัว index 0 ด้วย Pine
// console.log(fruits);

// ! Array slice
// var arr1 = ["value1", "value2"];
// var arr2 = ["value3", "value4", "value5"];
// var arr3 = ["value6", "value7"];
// var arr4 = ["value1", "value2", "value3", "value4", "value5"]
// var concatArr = arr1.concat(arr2, arr3); //? concat มีไว้รวม
// var myNewArr = arr4.slice(1, 3); //? เอาตั้งแต่ Index ที่ 1 ถึง 2

// ! if else
// var time = 15;
// if(time < 12) {
//     console.log("Good Morning");
// } else if(time < 18) {
//     console.log("Good Afternoon");
// } else {
//     console.log("Good Evening");
// }

// ! switch case 1
// switch(new Date().getDay()) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
// }

// ! switch case 2
// var myPhone = "iPhone";
// switch(myPhone) {
//     case "iPhone":
//         console.log("30000");
//         break;
//     case "Sumsung":
//         console.log("25000");
//         break;
//     default:
//         console.log("We don't have this brand.");
// }

// ! for loop
// for(var i = 0; i<10; i++) {
//     console.log(i);
// }
// var cars = ["BMW", "Ford", "Honda", "Audi"];
// for(var i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// ! for in loop
// var person = {
//     fName: "Paowaric",
//     lName: "Vachiranantakul",
//     age: 21,
// };
// for(var x in person) {
//     console.log(person[x]);
// }

// ! for of loop (loop ผ่าน obj)
// var cars = ["BMW", "Ford", "Honda", "Audi"];
// for(var x of cars) {
//     console.log(x);
// }
// var myString = "JavaScript";
// var y;
// for(y of myString){
//     console.log(y);
// }

// ! Hoisting
// x = 5;
// console.log(x);
// var x; // ? declaration จะขึ้นไปห้อยด้านบนได้ (Hoisted)
// var y = 10; // ? Initialization จะไม่ขึ้นไปห้อยด้านบน (Not Hoisted)

// ! var & let & const 
// var x = 0;
// var x = 1;
// console.log(x);
// let y = 2;
// y = 3;
// console.log(y); //? ประกาศ let ซ้ำไม่ได้
// const z = 4;
// z = 5;
// console.log(z); //? error ต้องเอา (z = 5;) ออก เพราะ const คือค่าคงที่ ประกาศได้แค่ครั้งเดียว

// ! template str
// var myName = "Paowaric";
// console.log(`Hi, My name is ${myName} nice to meet you.`); //? window+esc to ``
// function myFunction(name) {  //? แบบ function
//     console.log(`Hi ${name}`);
// }
// myFunction("Pao");

// ! arrow function
// //? var hello = function() {    
// //?     return "Hello World"; 
// //? } กลาบเป็นด้านล่าง
// var hello = () => "Hello World";
// console.log(hello());
// function add(a, b) {
//     return a+b;
//? } กลาบเป็นด้านล่าง
// const add = (a, b) => a+b;
// console.log(add(3, 4));

// ! arrow function with parameter
// var hello = (value) => "Hello " + value; //? ถ้ามี parameter แค่ตัวเดียวสามารถลบ () ตรง value ออกได้เลย
// console.log(hello("Pao"));

// ! JS Class
// class myClass {
//     constructor(name) {
//         this.myname = name;
//     }
//     fullName(greeting) { 
//         return greeting + " " + "My name is " + this.myname;
//     }
//     static hello(name) { //? static ต้องใช้ชื่อ class เพื่อเรียกใช้โดยตรง (Line 232)
//         return "Hello! " + name;
//     }
// }
// var person = new myClass("Pao");
// console.log(person.fullName("Hi,"));
// console.log(myClass.hello("Paowaric"));

// ! JS inheritance (การสืบทอดระหว่าง class)
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return "I have a " + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, model) {
//         super(brand); //? super คือกา่รเรียก method constructor จาก class แม่ (Line 236) ซึ่งสามารถใช้ present() ได้เหมือนกัน
//         this.model = model;
//     }
//     show() {
//         return this.present() + ", it's a " + this.model;
//     }
// }
// var myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// ! Module export
import { add, greet, name, person, arr } from './module.js';
console.log(add(1,2));
console.log(greet());
console.log(name);
console.log(person);
console.log(arr);