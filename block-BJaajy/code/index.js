// - Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

// const one = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Arya"), 1000)
// );
// const two = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("Whoops!"), 2000)
// );
// const three = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("John"), 3000)
// );
// const four = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("ronit"), 4000);
// });

// let values = Promise.all([one, two, three, four]).then((output) =>
//   console.log(output)
// );

// - Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

let users = ["arya", "amit", "anubhav", "ajay", "shubham"];

let usersData = Promise.all(
  users.map((name) =>
    fetch(`https://api.github.com/users/${name}`).then((res) => res.json())
  )
).then((users) => {
  console.log(users);
});

// - Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

//   - https://random.dog/woof.json
//   - https://aws.random.cat/meow

let data = Promise.race([
  fetch(`https://random.dog/woof.json`).then((res) => res.json()),
  fetch(`https://aws.random.cat/meow`),
]).then((users) => {
  console.log(users);
});

// - Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Arya"), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Whoops!")), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve("John"), 3000)
);

let values = Promise.allSettled([one, two, three]).then((res) =>
  console.log(res)
);

// - What will be the output of the following code snippet? How much time will it take for the promise to resolve?

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Arya"), 1000);
  }),
  "Sam",
  { name: "John" },
]).then(console.log); // output - [Sam,{name:John},Arya] it will take 1 sec
