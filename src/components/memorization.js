const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = 1;
      for (i = 1; i < n; i++) {
        result *= i;
      }
      cache[n] = result;
      return result;
    }
  };
};
const newADD = memoizedAdd();
console.log(newADD(9));
console.log(newADD(9));
