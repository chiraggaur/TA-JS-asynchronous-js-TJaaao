// 1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

// let data = new Promise((res, rej) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://api.github.com/users`);
//   xhr.onload = () => {
//     setTimeout(() => {
//       res(JSON.parse(xhr.response));
//     }, 1000);
//   };
//   xhr.onerror = () => {
//     rej(console.log("something went wrong "));
//   };
//   xhr.send();
// }).then((content) => {
//   console.log(content);
// });

// 2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

// let data = new Promise((res, rej) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://api.githu.com/users`);
//   xhr.onload = () => {
//     setTimeout(() => {
//       res(JSON.parse(xhr.response));
//     }, 1000);
//   };
//   xhr.onerror = () => {
//     rej(console.log("something went wrong "));
//   };
//   xhr.send();
// }).catch((content) => {
//   console.log(content);
// });

// 3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

// let data = new Promise((res, rej) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://api.githu.com/users`);
//   xhr.onload = () => {
//     setTimeout(() => {
//       res(JSON.parse(xhr.response));
//     }, 1000);
//   };
//   xhr.onerror = () => {
//     rej(console.log("Rejected Promise!"));
//   };
//   xhr.send();
// })
//   .catch((content) => {
//     console.log(content);
//   })
//   .finally(() => {
//     console.log("promise Settled");
//   });

//   4. What will be the output of the code below.

// console.log("A");

// // Asynchronous code finises in 0 seconds (Callback Queue)
// setTimeout(() => console.log("B"), 0); // callback queue

// // A promise that resolves right away (Microtask Queue)
// Promise.resolve().then(() => console.log("C"));

// console.log("D");

//output - A , D , C, B

// 5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

// function wait(time) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("query resolved");
//     }, time);
//   });
// }

// 6. Do the following:

// - Create a new promise
// - Resolve with 21
// - Use `.then` and return adding `10` to the value you will get as parameter
// - Use `.then` and return adding `100` to the value you will get as parameter
// - Use `.then` and check if the value you get is greater than `100` throw new error with any message
// - Catch the error using `.catch`

// let data = new Promise((res, rej) => {
//   res(21);
// })
//   .then((value) => {
//     return value + 10;
//   })
//   .then((value) => {
//     return value + 100;
//   })
//   .then((value) => {
//     if (value > 100) {
//       return "value is wrong";
//     }
//   })
//   .catch((value) => {
//     console.log(value);
//   });    // see video

// 7. Do the following:

// - Create a new promise
// - Resolve the promise with `['A']`
// - Use `.then` and concat `B` into the parameter and return
// - Use `.then` and return and object like `{0: 'A', 1: 'B'}`
// - Use `.then` and log the value

// let data = new Promise((res, rej) => {
//   res("A");
// })
//   .then((value) => {
//     return value + "B";
//   })
//   .then((value) => {
//     return { 0: "A", 1: "B" };
//   })
//   .then((value) => {
//     console.log(value);
//   }); // video for checking ans

// 8. Do the following:

// - Create a new promise named `first` and resolve it with `1`
// - Use `.then` on `first` and return `2` also check the value you get access to by logging
// - Chain `.then` on above and return `3` also check the value you get access to by logging
// - Chain `.then` on above and return `4` also check the value you get access to by logging

// let first = new Promise((res, rej) => {
//   res(1);
// })
//   .then((value) => {
//     console.log(value);
//     return 2;
//   })
//   .then((value) => {
//     console.log(value);
//     return 3;
//   })
//   .then((value) => {
//     console.log(value);
//     return 4;
//   }); // video for checking ans

// 9. Do the following:

// - Create a new promise named `first` and resolve it with `1`
// - Use `.then` on `first` and return `2` also check the value you get access to by logging
// - Use `.then` on `first` and return `3` also check the value you get access to by logging
// - Use `.then` on `first` and return `4` also check the value you get access to by logging

// let first = new Promise((res, rej) => {
//   res(1);
// });
// first.then((value) => {
//   console.log(value);
//   return 2;
// });
// first.then((value) => {
//   console.log(value);
//   return 3;
// });
// first.then((value) => {
//   console.log(value);
//   return 4;
// }); // video for checking ans

// 10. Try to understand the difference between the problem 8 and 9. Write your observation.

/*
Difference between 8 and 9 is that 8 is chain form and 9 is getiing value of first promise value;

*/

// 11. Do the following

// - Create a promise and resolve it with `John`
// - Use `.then` and return another promise that resolves with `Arya`
// - Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
// - Use `.then` to log the value

let first = new Promise((res) => {
  res("John");
})
  .then((value) => {
    return new Promise((res) => {
      res("Arya");
    });
  })
  .then((value) => {
    console.log(value);
    return new Promise((res) => {
      setTimeout(() => {
        res("Bran");
      }, 3000);
    });
  })
  .then((value) => {
    console.log(value);
  }); // video for checking ans
