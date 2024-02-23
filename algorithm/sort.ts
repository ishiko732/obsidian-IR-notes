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

function selectionSort(arr: number[]) {
  const n = arr.length;
  let minIdx:number, temp:number;
  for (let i = 1; i < n - 1; i++) {
    minIdx = i;
    for (let j = i; j < n; j++) {
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

const arr: readonly number[] = [
  3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48,
];
const output = [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
console.log(insertedSort([...arr]).join(",") === output.join(","));
