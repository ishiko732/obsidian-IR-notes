function bitAdd(a: number, b: number) {
  // 对异或运算和与运算后左移一位的结果进行相加即可，但我们只能进行位运算，
  // 所以我们只能再次进行异或运算与与运算，直到运算的结果为0时，我们的异或运算的结果即为加法的结果
  let sum = 0;
  while (b !== 0) {
    sum = a ^ b;
    b = (a & b) << 1;
    a = sum;
  }
  return sum;
}

function bitMul(a: number, b: number) {
  let sum = 0;
  if (a === 0 || b === 0) {
    return sum;
  }
  while (b != 0) {
    if ((b & 1) != 0) {
      sum += a;
    }
    a = a << 1;
    b = b >> 1;
  }
  return sum;
}

function negativeNumber(a: number): number {
  // Negative number’s complement + 1 = complement
  return ~a + 1;
}

// Ref: https://www.jb51.net/article/261025.htm

console.log(bitAdd(1, 2));
console.log(negativeNumber(3));
console.log(negativeNumber(-3));
console.log(bitAdd(1, negativeNumber(3)));
