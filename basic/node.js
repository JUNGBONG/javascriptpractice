// const me = {
//     name:'ssafy',
//     'phone number':'010123456789',
//     languageLevel:{
//         python:'master',
//         django:'pro',
//         javascript:'junior',
//     }
// };

// console.log(me.languageLeve)

// const dessert = {
//     coffee : "Americano",
//     iceCream : "Cookie and cream",
// }

// console.log((dessert))
// console.log(typeof(dessert))
// const jsonData = JSON.stringify(dessert);
// console.log(jsonData)
// console.log(typeof jsonData)


// const objectData = JSON.parse(jsonData)
// console.log(objectData)
// console.log(typeof objectData)


// function add(a,b){
//     return a+b
// }

// const add = function(a,b){
//     return a+b
// }

// const add = (a,b) => {
//     return a+b
// }


// const sub = (a,b) => {
//     return a-b
// }



// const min =(numbers) =>{
//     let minimum =Infinity

//     for(let number of numbers){
//         if (minimum >number){
//             minimum = number
//         }
//     }
//     return minimum
// }
// console.log(min([5,6,7,8,9]))


// const sayHello = (name="noName") => `hi${name}`

// console.log(sayHello('john'));
// console.log(sayHello());

// (function (num) {return num ** 3})(5)
// ((num) => {return num ** 3})(5)

// 익명함수 어떻게??


//배열을 인자로 받아서 그 배열의 모든 수의 합을 리턴
// let sum = numbers => {
//     let sum = 0
//     for(const number of numbers){
//         sum += number
//     }
//     return sum
// }
// console.log(sum([1,2,3,4,5]))

// let sub = numbers => {
//     let sum = 0
//     for(const number of numbers){
//         sum -= number
//     }
//     return sum
// }
// console.log(sub([1,2,3,4,5]))

// let mul = numbers => {
//     let sum = 1
//     for(const number of numbers){
//         sum *= number
//     }
//     return sum
// }
// console.log(mul([1,2,3,4,5]))

// 배열의 요소들을 각각 [???]한다.

// const numbersEach = (numbers,callback) => {
//     let sum
//     for (const number of numbers) {
//         sum = callback(number, sum)
//     }
//     return sum
// }

// const addEach = (number,sum=0) =>{
//     return number + sum
// }
// console.log(numbersEach([1,2,3],addEach))


// function (num) {return num**2}

// const myObject = {
//     key:"Value"
// }
// console.log(myObject['key'])
// console.log(myObject.key)


// def concat(str1, str2):
//     return f'{str1} - {str2}'


// def check_logn_str(string):
//     if length(string)> 10:
//         return True
//     else:
//         return false

// if check_logn_str(concat('Happy','Hacking'));
//     print('LONG STRING')
// else:
//     print("SHORT STRING")

// let concat = (str1, str2) => {
//     return `${str1} - ${str2}`
// };

// let check_login_str = (string) =>{
//     if (string.length>10){
//         return true
//     } else {
//         return false
//     }
// }

// if ((check_login_str(concat('Happy','Hacking')))){
//     console.log('LONG STRING')
// } else {
//     console.log('SHORT STRING')
// }