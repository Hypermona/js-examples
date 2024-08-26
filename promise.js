function CustomPromise(executor) {
  this.value = undefined;
  this.onFullFilled = [];
  this.onReject = null;
  this.isFullfilled = false;
  this.isRejected = false;
  this.resole = (value) => {
    this.value = value;
    this.isFullfilled = true;
    if (this.onFullFilled.length) {
      this.onFullFilled.reduce((prev, cb) => cb(prev), value);
      this.value = undefined; // helping garbage collector
    }
  };
  this.reject = (value) => {
    this.value = value;
    this.isRejected = true;
    if (this.onReject) {
      this.onReject(value);
      this.value = undefined; // helping garbage collector
    }
  };
  executor(this.resole, this.reject);

  this.then = (cb) => {
    if (typeof cb === "function") {
      this.onFullFilled.push(cb);
    }
    if (this.isFullfilled) {
      this.onFullFilled.reduce((prev, cb) => cb(prev), value);
      this.onFullFilled = []; // to avoid same then cb again and again
    }
    return this;
  };
  this.catch = (cb) => {
    this.onReject = cb;
    if (this.isRejected) {
      this.onReject(this.value);
    }
    return this;
  };
}

const promise = new CustomPromise(function (resole, reject) {
  resole("Success");
  setTimeout(() => {
    reject(new Error("Something Went Wrong!"));
  }, 1000);
});

promise
  .then(function (value) {
    console.log(value);
  })
  .then(function (value) {
    console.log(value + " again");
  })
  .then(function (value) {
    console.log(value + " again +1");
  })
  .catch((err) => console.log(err));
