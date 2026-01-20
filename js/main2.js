// console.log("A"); // Code synchrone

// setTimeout(() => {
//   console.log("D"); // Macrotask
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C"); // Microtask
// });

// console.log("B"); // Code synchrone


// exo2

// console.log("10"); // Code synchrone

// setTimeout(() => {
//   console.log("25"); // Macrotask
// }, 0);

// Promise.resolve().then(() => {
//   console.log("12"); // Microtask
// });

// console.log("29"); // Code synchrone


// exo3

// console.log("A"); // Synchrone

// setTimeout(() => {
//   console.log("F"); // Macrotask
// }, 0);

// Promise.resolve().then(() => {
//   console.log("C"); // Microtask
// });

// console.log("B"); // Synchrone

// setInterval(() => {
//   console.log("G"); // Macrotask (répétitif)
// }, 1000);

// Promise.resolve().then(() => {
//   console.log("D"); // Microtask
// });

// document.addEventListener("click", () => {
//   console.log("E"); // Macrotask (event)
// });


//exo04

console.log("Banane"); // Synchrone

setTimeout(() => {
  console.log("Abricot"); // Macrotask
}, 2000);

Promise.resolve().then(() => {
  console.log("Mange"); // Microtask
});

console.log("frais"); // Synchrone

setInterval(() => {
  console.log("coco"); // Macrotask (répétitif)
}, 2000);

Promise.resolve().then(() => {
  console.log("papaye"); // Microtask
});

document.addEventListener("click", () => {
  console.log("pèche"); // Macrotask (event)
});

