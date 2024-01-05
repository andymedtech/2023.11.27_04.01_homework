// Создайте файл index.js и напишите в нём функцию isPrime,
// которая принимает в себя число (от 0 до 100) и
// выдаёт булевый результат (если простое - true, если нет - false)

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(2, isPrime(2));
console.log(3, isPrime(3));
console.log(4, isPrime(4));
console.log(5, isPrime(5));
console.log(6, isPrime(6));
console.log(7, isPrime(7));
console.log(8, isPrime(8));
console.log(9, isPrime(9));
console.log(10, isPrime(10));
console.log(11, isPrime(11));
