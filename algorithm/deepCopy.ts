function deepClone<T extends Object>(obj: T, cache = new WeakMap<T>()) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  if (obj === null || typeof obj !== "object" || typeof obj === "function") {
    return obj;
  }

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (obj instanceof Array) {
    const copy: any[] = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i], cache);
    }
    cache.set(obj, copy);
    return copy;
  }
  if (obj instanceof Set) {
    const copy = new Set<typeof obj>();
    for (let i = 0; i < obj.size; i++) {
      copy.add(deepClone(obj[i], cache));
    }
    cache.set(obj, copy);
  }
  if (obj instanceof Object) {
    const copy: T = {} as T;
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr))
        copy[attr] = deepClone(obj[attr] as T, cache);
    }
    cache.set(obj, copy);
    return copy;
  }
  throw new Error("Unable to copy obj! Its type isn't supported.");
}

let objA = {
  a: 1,
  b: { c: 3 },
  c: [123, 4, 4, 42],
  d: [123, 4, 4, 42],
  e: function hello() {
    return "hello";
  },
};
const cache = new WeakMap<typeof objA>();
let objB = deepClone(objA, cache);

