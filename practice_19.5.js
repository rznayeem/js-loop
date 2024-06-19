// task - 1
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let revColors = [];
// for (let i = 0; i < colors.length; i++) {
//   revColors.unshift(colors[i]);
// }
// console.log(revColors);

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let revColors = [];
// for (let i = colors.length - 1; i >= 0; i--) {
//   revColors.push(colors[i]);
// }
// console.log(revColors);

// task - 2;
const numbers = [12, 98, 5, 41, 23, 78, 46];
let revNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    let num = numbers[i];
    revNumbers.push(num);
  }
}
console.log(revNumbers);

// task - 3
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let num = "'";
// for (x of numbers) {
//   num += x;
// }
// num += "'";
// console.log(num);

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let num = '';
// for (x of numbers) {
//   num += x;
// }
// console.log("'" + num + "'");

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let num = '';
// num = "'" + numbers.join('') + "'";

// console.log(num);

// const statement = 'I am a hard working person';
// const reversed = statement.split(' ').reverse().join(' ');
// console.log(reversed);
