function returnPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
      reject(new Error("resolve에서 promise 상태가 이미 정해지므로 의미 없는 reject!"))
    }, 1000)
  })
}

returnPromise()
  .then((value) => {
    console.log(value);
    return returnPromise();
  })
  .then((value) => {
    console.log(value);
    return returnPromise();
  })
  .then((value) => {
    console.log(value);
    return returnPromise();
  })
  .then((value) => {
    console.log(value);
    return returnPromise();
  })