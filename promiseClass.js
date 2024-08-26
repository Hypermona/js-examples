class MyPromise {
  value = null;
  isFullFilled = false;
  isRejected = false;
  fullfilledCallBacks = [];
  rejectedCallBacks = [];
  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  resolve = (value) => {
    this.value = value;
    if (this.fullfilledCallBacks.length) {
      this.fullfilledCallBacks?.reduce((prev, cb) => cb(prev), this.value);
    }
    this.isFullFilled = true;
  };
  reject(value) {
    this.value = value;
    if (this.rejectedCallBacks.length) {
      this.rejectedCallBacks?.reduce((prev, cb) => cb(prev), this.value);
    }
    this.isRejected = true;
  }
  then(cb) {
    this.fullfilledCallBacks.push(cb);
    if (this.isFullFilled) {
      this.fullfilledCallBacks?.reduce((prev, cb) => cb(prev), this.value);
    }
    return this;
  }
  catch(cb) {
    this.rejectedCallBacks.push(cb);
    if (this.isRejected) {
      this.rejectedCallBacks?.reduce((prev, cb) => cb(prev), this.value);
    }
  }

  static Resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }
  static Reject(value) {
    return new MyPromise((reject) => {
      reject(value);
    });
  }
  static all(promiseList) {
    let result = [];
    let count = 0;
    return new MyPromise((resolve, reject) => {
      for (let promise of promiseList) {
        if (promise instanceof MyPromise) {
          promise
            .then((data) => {
              result.push(data);
              if (++count === promiseList.length) {
                resolve(result);
              }
            })
            .catch((err) => reject(err));
        } else {
          result.push(promise);
          if (++count === promiseList.length) {
            resolve(result);
          }
        }
      }
    });
  }
}

const promise = MyPromise.Resolve(100);

promise
  .then((data) => {
    return data / 2;
  })
  .then((data) => {
    console.log(data / 2);
  });

const promise1 = MyPromise.Resolve(3);
const promise2 = 42;
const promise3 = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

MyPromise.all([promise1, promise2, promise3]).then((values) => {
  console.log("hi", values);
});
