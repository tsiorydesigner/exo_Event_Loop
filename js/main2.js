// synchrone 
// asynchrone
// col stack 
// event loop 
// SetTimeout

// [Ordre chronologique ]
// event loop
// call stack 
// task vip(microtask):settimeout, setintervall, events ,......




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


// exo04

// console.log("Banane"); // Synchrone

// setTimeout(() => {
//   console.log("Abricot"); // Macrotask
// }, 2000);

// Promise.resolve().then(() => {
//   console.log("Mange"); // Microtask
// });

// console.log("frais"); // Synchrone

// setInterval(() => {
//   console.log("coco"); // Macrotask (répétitif)
// }, 2000);

// Promise.resolve().then(() => {
//   console.log("papaye"); // Microtask
// });

// document.addEventListener("click", () => {
//   console.log("pèche"); // Macrotask (event)
// });


// exo05

// console.log("chevrolet");

// setTimeout(() => {
//     console.log("bmw e30");
// }, );

// Promise.resolve().then(() => {
//     console.log("Golf mk4");
//   });

//   console.log("sorrento");

//   setInterval(() => {
//       console.log("Chervolet"); // Macrotask (répétitif)
//     }, 500);

//   Promise.resolve().then(() => {
//     console.log("Hyunday Tuxcuson");
//   });
//   document.addEventListener("click", () => {
//       console.log("peugeot"); 
//   });
   
// exo06-global, fonction, block, local et lexical

// let globalVar = "Je suis globale";

// function testScope() {

//   let functionVar = "Je suis dans la fonction";

//   if (true) {
//     // ===== 3. Scope Block =====
//     let blockVar = "Je suis dans le block if";
//     console.log(blockVar);     // OK
//     console.log(functionVar);  // OK
//     console.log(globalVar);    // OK
//   }

  
//   console.log(functionVar); // OK
// }

// testScope();
// console.log(globalVar); // OK


// ---------exo07-scope locale
// function calcul() {
//   let resultat = 10;
//   console.log(resultat);
// }

// calcul();

// exo-08-scope lexical 

// function parent() {
//   let parentVar = "Je suis dans parent";

//   function enfant() {
//     console.log(parentVar); // accessible grâce au scope lexical
//   }

//   enfant();
// }

// parent();


// exo-09

// function parent(){
//   let parentVar = "Veignard";

//   function enfant(){
//     console.log(parentVar);
    
//   }
// enfant();

// }

// parent();


// exo-10

// function resolved(result) {
//   console.log("Resolved");
// }

// function rejected(result) {
//   console.error(result);
// }

// Promise.reject(new Error("fail")).then(resolved, rejected);
// // Expected output: Error: fail

// exo-11- Promiseall
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
// setTimeout(resolve,100,"foo");

// });
 
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);

// });

// exo-12-promise.all

// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100 , "allo");

// });


// Promise.all([p1, p2, p3]).then((values) => {
//     console.log(values);
// });

// // // exo-13-un échec rapide
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "un");
//   });
  
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "deux");
//   });
  
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "trois");
//   });
  
//   let p4 = new Promise((resolve, rejet) => {
//     setTimeout(resolve, 4000, "quatre");
//   });
  
//   let p5 = new Promise((resolve, reject) => {
//     reject("rejet");
//   });
  
//   Promise.all([p1, p2, p3, p4, p5]).then(
//     (values) => {
//       console.log(values);
//     },
//     (reason) => {
//       console.log(reason);
//     }
//   );
  
//   // Dans la console :
//   // "rejet"
  
//   // On peut aussi employer .catch
//   Promise.all([p1, p2, p3, p4, p5])
//     .then((values) => {
//       console.log(values);
//     })
//     .catch((reason) => {
//       console.log(reason);
//     });
  
//   // Dans la console :
//   // "rejet_du_code "

// exo-13
  
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));


// // exo-14
// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); // [3, 1337, "foo"]
// });

// exo-15

// var P10 = Promise.resolve(3);
// var P20 = 1564;
// var P30 = new Promise((resolve, reject) => {
//   setTimeout(resolve,100 , "foo");
// });

// Promise.all([P10,P20,P30]).then((values) => {
//   console.log(values); // [3, 1337, "foo"]

// });

// // exo-16
// var p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "p1_resolution_retardee");
// });

// var p2 = new Promise((resolve, reject) => {
//   reject(new Error("p2_rejet_immediat"));
// });

// Promise.all([
//   p1.catch((error) => {
//     return error;
//   }),
//   p2.catch((error) => {
//     return error;
//   }),
// ]).then((values) => {
//   console.log(values[0]); // "p1_resolution_retardee"
//   console.log(values[1]); // "Error: p2_rejet_immediat"
// });



// // exo-17 

//  var p1 = new Promise((resolve,reject) =>{
// setTimeout(resolve,1000, "p1_resolution_retardee");
// });
// var p2 = new Promise((resolve,reject) => {
// reject(new Error("p2_rejet_immediat"));
// });

// Promise.all([
// p1.catch((error) =>{
// }),
// p2.catch((error) =>{
// return error;
// }),

// ]).then((values) =>{
//   console.log(values[0]);
//   console.log(values[1]);
  
// });

// // exo-18



// var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// var p = Promise.all(resolvedPromisesArray);
// // on affiche la valeur de p dans la console
// console.log(p);

// // on utilise la méthode setTimeout pour exécuter
// // du code dès que la pile est vide
// setTimeout(function () {
//   console.log("La pile est vide");
//   console.log(p);
  
// });




// exo-19-asynchrone promisse all
//  var resolvedPromisesArray =[Promise.resolve(44), Promise.resolve(45)];

//  var p = Promise.all(resolvedPromisesArray);
//  console.log(p);

//  setTimeout(function(){
//   console.log("La case et vide");
//   console.log(p);

//  });
 // Cela affichera dans la console (et dans cet ordre) :
// Promise { <state>: "pending" }
// La pile est vide
// Promise { <state>: "fulfilled", <value>: Array[2] }





//exo-20-Promise.allSettled()

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo"),

// );

// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status)),
// );


// // Expected output:
// // "fulfilled"
// // "rejected"

// exo-21-Promise.any()

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// // Expected output: "quick"


// exo-22-
// const pErr = new Promise((resolve, reject) => {
//   reject("J'échoue toujours");
// });

// const pLente = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "Éventuellement résolue");
// });

// const pRapide = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Rapidement résolue");
// });

// Promise.any([pErr, pLente, pRapide]).then((valeur) => {
//   console.log(valeur);
//   // pRapide s'est résolue en premier
// });
// // résultat attendu : "Rapidement résolue"

// exo-23
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "two");
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });

// exo-24
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo"),
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status)),
// );

// exo-25-reject















