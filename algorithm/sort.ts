function insertedSort(arr: number[]) {
  const n = arr.length;
  let p: number, i: number, current: number;
  for (p = 1; p < n; p++) {
    current = arr[p];
    for (i = p; i > 0 && arr[i - 1] > current; i--) {
      arr[i] = arr[i - 1];
    }
    arr[i] = current;
  }
  return arr;
}

function shellSort(arr: number[]) {
  const n = arr.length;
  const Sedgewick = [929, 505, 209, 109, 41, 19, 5, 1, 0];
  let Si: number, current: number, i: number;
  for (Si = 0; Sedgewick[Si] > n; Si++);
  for (let D = Sedgewick[Si]; D > 0; D = Sedgewick[++Si]) {
    for (let p = D; p < n; p++) {
      current = arr[p];
      for (i = p; i > 0 && arr[i - D] > current; i -= D) {
        arr[i] = arr[i - D];
      }
      arr[i] = current;
    }
  }
  return arr;
}

function selectionSort(arr: number[]) {
  const n = arr.length;
  let minIdx: number, temp: number;
  for (let i = 0; i < n - 1; i++) {
    minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr;
}

function bubbleSort(arr: number[]) {
  const n = arr.length;
  let flag = 0;
  let tmp;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
        flag = 1;
      }
    }
    if (flag === 0) {
      break;
    } else {
      flag = 0;
    }
  }
  return arr;
}

const arr: readonly number[] = [
  3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48,
];
const output = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
console.log(insertedSort([...arr]).join(",") === output.join(","));
console.log(shellSort([...arr]).join(",") === output.join(","));
console.log(selectionSort([...arr]).join(",") === output.join(","));
console.log(bubbleSort([...arr]).join(",") === output.join(","));
