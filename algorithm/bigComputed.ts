function pad(pad: string, str: string, padLeft: boolean = true) {
  if (typeof str === "undefined") return pad;
  if (padLeft) {
    return (pad + str).slice(-pad.length);
  } else {
    return (str + pad).substring(0, pad.length);
  }
}

function fill(length: number, fillValue: string) {
  return new Array(length).fill(fillValue).join("");
}

// Ref: https://juejin.cn/post/7126425188928847886
// Ref: https://www.jianshu.com/p/2ffb8cfdc97b
function _add(str1: string, str2: string) {
  const maxLength = Math.max(str1.length, str2.length);
  const maxFill = fill(maxLength, "0");

  const a = pad(maxFill, str1);
  const b = pad(maxFill, str2);
  let s = 0;
  let c = 0;
  let ret: number[] = [];
  for (let i = maxLength - 1; i >= 0; i--) {
    s = Number(a[i]) + Number(b[i]) + c;
    c = Math.floor(s / 10);
    ret.unshift(s % 10);
  }
  if (c) {
    ret.unshift(1);
  }

  return ret.join("");
}

function _subtract(str1: string, str2: string) {
  const compare = _compare(str1, str2);
  if (compare) {
    const temp = str2;
    str2 = str1;
    str1 = temp;
  }

  const f =compare ? "-" : "";
  if (str1[0] !== "-" && str2[0] === "-") {
    return f + _add(str1, str2.substring(1));
  }
  const maxLength = Math.max(str1.length, str2.length);
  const maxFill = fill(maxLength, "0");

  const a = pad(maxFill, str1.replace("-", ""));
  const b = pad(maxFill, str2.replace("-", ""));

  let borrow = 0;
  let ret: number[] = [];
  let d1: number, d2: number;
  for (let i = maxLength - 1; i >= 0; i--) {
    d1 = Number(a[i]);
    d2 = Number(b[i]);

    if (borrow === 1) {
      d1 -= 1;
      borrow = 0;
    }
    if (d1 < d2) {
      d1 += 10;
      borrow = 1;
    }

    ret.unshift(d1 - d2);
  }
  while (ret[0] === 0) {
    ret.shift();
  }
  let result = ret.join("");
  if (result === "0") {
    return "0";
  }
  return f + result;
}

function _compare(str1: string, str2: string) {
  const s1 = str1.replace("-", "");
  const s2 = str2.replace("-", "");
  if (s1.length > s2.length) {
    return true;
  } else if (s1.length < s2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (s1[i] !== s2[i]) {
        return s1.charCodeAt(i) - s2.charCodeAt(i) < 0;
      }
    }
    return false;
  }
}
function add(str1: string, str2: string) {
  const f1 = str1[0] === "-" ? -1 : 1;
  const f2 = str2[0] === "-" ? -1 : 1;
  if (f1 === -1 && f2 === -1) {
    return "-" + _add(str1.substring(1), str2.substring(1));
  } else if (f1 === -1 || f2 === -1) {
    return _subtract(str1, str2);
  } else {
    return _add(str1, str2);
  }
}

function mul(str1: string, str2: string) {
  if (str1 === "0" || str2 === "0") {
    return "0";
  }
}

const a = "9876543210123456789000000000123";
const b = "1234567898765432100000012345678901";
console.log(add(a, b));

const num1 = "12345678901234567890";
const num2 = "98765432109876543210";
const sum = add(num1, num2);
console.log(sum); // 输出：111111111011111111100

const num3 = "98765432109876543210";
const num4 = "12345678901234567890";
const diff = _subtract(num3, num4);
console.log(diff); // 输出：86419753208641975320

console.log(_subtract("99", "11"));
console.log(_subtract("99", "-11"));

const num5 = "-12345678901234567890";
const num6 = "98765432109876543210";
const diff2 = _subtract(num5, num6);
console.log(diff2); // 输出：-111111111011111111100

console.log(add("1", "2")); // 3
console.log(add("1", "-2")); // -1
console.log(add("-1", "-2")); // -3
console.log(add("-1", "2")); // 1
