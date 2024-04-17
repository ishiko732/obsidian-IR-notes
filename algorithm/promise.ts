function promiseRace(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((val) => resolve(val)).catch((e) => reject(e));
    });
  });
}


const p: Promise<any>[] = []
p.push(new Promise((resolve) => setTimeout(() => resolve(2), 2000)));
p.push(new Promise((resolve) => setTimeout(() => resolve(1), 1000)));

promiseRace(p).then((val) => console.log(val));