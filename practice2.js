let odd = 81;
let sum = 0;
while (odd <= 131) {
  if (odd % 2 === 1) {
    sum = sum + odd;
  }
  odd++;
}
console.log('odd =', sum);
// let even = 206;
// let sum = 0;
// while (even <= 311) {
//   if (even % 2 === 0) {
//     sum = sum + even;
//     console.log(sum);
//   }
//   even++;
// }
