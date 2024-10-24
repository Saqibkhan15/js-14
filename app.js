//assignment no 14

//1. Write a function that displays current date & time in your browser.
// function telldate() {
// document.write(new Date());
// }
// telldate();
// 2. Write a function that takes first & last name and then it greets the user using his full name.
// function fullName(){
// var firstName = prompt("enter first name");
// var secondName = prompt("enter first name");
// alert(firstName+" "+ secondName)
// }
// fullName();

//3Write a function that adds two numbers (input by user) and returns the sum of two numbers.
//  function sum(){
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter  2nd number");
// alert(num1+num2)
// }
// sum();

// 4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function Calculator() {
// var num1 = +prompt("enter first number");
// var opr = prompt("enter operator  * , + , - , / ")
// var num2 = +prompt("enter  2nd number");
// var result;

// if(opr === "+"){
//     result = num1 + num2;
// }
// if(opr === "-"){
//     result = num1 - num2;
// }
// if(opr === "*"){
//     result = num1 * num2;
// }
// if(opr === "/"){
//     result = num1 / num2;
// }

// alert("Result: " + result);

// }
// Calculator();

//5. Write a function that squares its argument.
// function squares() {
//     var squaresnum = +prompt("Enter number");
//     var result = squaresnum * squaresnum;
//     alert("Square of " + squaresnum + " is " + result);
//   }
//   squares();
//6. Write a function that computes factorial of a number.
// function factorial() {
//   var num = +prompt("Enter number");
//   var result = 1;

//   for (var i = 1; i <= num; i++) {
//     result *= i;
//   }

//   alert(num + "! = " + result);
// }

// factorial();

// 7. Write a function that take start and end number as inputs & display counting in your browser.
// function counting() {
//     var start = +prompt("Enter start number");
//     var end = +prompt("Enter end number");
  
//     for (var i = start; i <= end; i++) {
//       document.write(i);
//     }
// }
// counting();

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// function calculateArea(width, height) {
//     return width * height;
//   }
//   var area = calculateArea(6, 10);
//   console.log("Area: " + area);
  // ii. Arguments as variables
//   function calculateArea(width, height) {
//     return width * height;
//   }
  
//   var rectangleWidth = 6;
//   var rectangleHeight = 10;
//   var area = calculateArea(rectangleWidth, rectangleHeight);
//   console.log("Area: " + area)

// function palindrome() {
// var palindromeWord = prompt("Write Palindrome word");
// if (palindromeWord === palindromeWord.split("").reverse().join("")) {
//   alert(palindromeWord + " is a palindrome word.");
// } else {
//   alert(palindromeWord + " is not a palindrome word.");
// }
// }

// palindrome();


// function upperCase() {
//     var wordToupper = "a quick brown fox jumps over the lazy dog"
//     alert(wordToupper.toUpperCase());
// }
// upperCase();



