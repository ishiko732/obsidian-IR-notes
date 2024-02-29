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

function mergeSort(arr: number[]): number[] {
  const n = arr.length;
  const tmpA = new Array<number>(n).fill(NaN);
  msort(arr, tmpA, 0, n - 1);
  return arr;
}

function msort(arr: number[], tmpA: number[], left: number, rightEnd: number) {
  if (left < rightEnd) {
    const mid = Math.floor((left + rightEnd) / 2);
    msort(arr, tmpA, left, mid);
    msort(arr, tmpA, mid + 1, rightEnd);
    merge(arr, tmpA, left, mid + 1, rightEnd);
  }
}

function merge(
  arr: number[],
  tmpA: number[],
  left: number,
  right: number,
  rightEnd: number
) {
  const leftEnd = right - 1;
  let tmp = left;
  const numElements = rightEnd - left + 1;
  while (left <= leftEnd && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      tmpA[tmp++] = arr[left++];
    } else {
      tmpA[tmp++] = arr[right++];
    }
  }
  while (left <= leftEnd) {
    tmpA[tmp++] = arr[left++];
  }
  while (right <= rightEnd) {
    tmpA[tmp++] = arr[right++];
  }
  for (let i = 0; i < numElements; i++, rightEnd--) {
    arr[rightEnd] = tmpA[rightEnd];
  }
}

// TODO
// function mergeSortNonRecursive(arr: number[]):number[]{
//   const n = arr.length;
//   const tmpA = new Array<number>(n).fill(NaN);

// }

function heapSort(arr: number[]) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    percDown(arr, i, n);
  }
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    percDown(arr, 0, i);
  }
  return arr;
}

function swap(arr: number[], a: number, b: number) {
  const temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

function percDown(arr: number[], p: number, n: number) {
  const e = arr[p];
  let parent: number, child: number;
  for (parent = p; parent * 2 + 1 < n; parent = child) {
    child = parent * 2 + 1;
    if (child != n - 1 && arr[child] < arr[child + 1]) {
      child++;
    }
    if (e >= arr[child]) {
      break;
    } else {
      arr[parent] = arr[child];
    }
  }
  arr[parent] = e;
}

const arr: readonly number[] = [
  3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48,
];
const output = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
console.log(insertedSort([...arr]).join(",") === output.join(","));
console.log(shellSort([...arr]).join(",") === output.join(","));
console.log(selectionSort([...arr]).join(",") === output.join(","));
console.log(bubbleSort([...arr]).join(",") === output.join(","));
console.log(mergeSort([...arr]).join(",") === output.join(","));
console.log(heapSort([...arr]).join(",") === output.join(","));
