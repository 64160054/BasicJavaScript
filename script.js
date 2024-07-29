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