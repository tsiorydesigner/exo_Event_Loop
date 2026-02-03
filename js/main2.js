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


// function verifierAge(age) {
//   if (age < 18) {
//     return Promise.reject("Mineur interdit");
//   }
//   return Promise.resolve("Accès autorisé");
// }

// verifierAge(16)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// exo-26-reject
// Promise.reject(new Error("échec")).then(
//   function () {
//     // n'est pas appelée
//   },
//   function (erreur) {
//     console.log(erreur); // Analyse de la pile d'appels
//   },
// );

// Exo-26
//  Promise.reject(new Error("échec")).then(
//   function () {


//   },
//   function (erreur){
//     console.log(erreur);
//   },

//  );

// exo-27-Promise réussie immédiatement 
// let p = Promise.resolve("Succès");

// p.then(result => {
//   console.log(result); // Succès
// });


// exo-28-async/await

// async function test() {
//   return "Hello";
// }

// test().then(console.log); // Hello


// example
// async function test(){
//   return "Test entrer";
// } 
// test().then(console.log);//hello

// exo-29

// Promise.resolve("Succès").then(
//   function (valeur) {
//     console.log(valeur); // "Succès"
//   },
//   function (valeur) {
//     // n'est pas appelée
//   },
// );

// // example
// async function test(){
//     return "Test valeur";
// }
// test().then(console.log);


// exo-30
// Promise.resolve("Succès").then(
//   function (valeur) {
//     console.log(valeur); // "Succès"
//   },
//   function (valeur) {
//     // n'est pas appelée
//   },
// );

// example-
// Promise.resolve("Très bien ").then(
//   function (valeur){
//       console.log(valeur);// Succès
//   },
//   function (valeur){

//   },


// );

// exo-31-Promise Resolve

// Promise.resolve("OK")
//   .then(result => console.log(result)); // OK


// example
// Promise.resolve("Ok")
//   .then(result => console.log(result));

// exo-32-fonction promise 
// function getData(isReady) {
//   if (isReady) return Promise.resolve("Données prêtes");
//   return Promise.reject("Erreur");
// }
// example
// function getData(isready) {
// if (isready) return Promise.resolve("Données prètes");
// return Promise.reject("Erreur");

// }
// // exo-33-Promise try
// Promise.try(func)
// Promise.try(func, arg1)
// Promise.try(func, arg1, arg2)
// Promise.try(func, arg1, arg2, /* …, */ argN)

//Example 


// exo-33-Promise try 

// Promise.try(() => {
//   if (Math.random() > 0.5) {
//     throw new Error("Erreur synchrone");
//   }
//   return "Succès";
// })
// .then(result => console.log(result))
// .catch(err => console.log(err.message));

// exo-33-Promise try 
// Promise.try(() => {
//   if (Math.random() > 0.5) {
//     throw new Error("Erreur synchrone");
//   }
//   return "Succès";
// })
// .then(result => console.log(result))
// .catch(err => console.log(err.message));

// exo-34-javascript-native
// Promise.resolve()
//   .then(() => {
//     if (Math.random() > 0.5) {
//       throw new Error("Erreur");
//     }
//     return "OK";
//   })
//   .then(console.log)
//   .catch(console.log);

// example
// Promise.resolve()
// .then(() => {
//     if (Math.random() > 0.5){
//       throw new Error("Error");
//   }
//   return "OK";

// }) 
//   .then(console.log)
//   .catch(console.log);


// exo-35- Asyn / await
// async function run() {
//   try {
//     if (Math.random() > 0.5) {
//       throw new Error("Erreur");
//     }
//     return "Succès";
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// example

// async function run() {
//   try {
//     if (Math.random() > 0.5){
//       throw new Error("Erreur");
//     }
//     return "Succès";
//    } catch(e){
//     console.log(e.message);

//    }

// }


//exo-using try-Promise
// function doSomething(action) {
//   return Promise.try(action)
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Done"));
// }

// doSomething(() => "Sync result");

// doSomething(() => {
//   throw new Error("Sync error");
// });

// doSomething(async () => "Async result");

// doSomething(async () => {
//   throw new Error("Async error");
// });

// example 


// exo-35
// function doSomething(action) {
//   return Promise.try(action)
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Done"));
// }

// doSomething(() => "Sync result");

// doSomething(() => {
//   throw new Error("Sync error");
// });

// doSomething(async () => "Async result");

// doSomething(async () => {
//   throw new Error("Async error");
// });

// exo-36-Promise catch
// const p = new Promise((resolve, reject) => {
//   reject("Erreur réseau");
// });

// p.catch(err => {
//   console.log(err); // "Erreur réseau"
// });

//exo-37-Promise-then and catch
// fetch("https://api.example.com/data")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error("Erreur :", err));

// exo-38
// function checkMail() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Mail has arrived");
//     } else {
//       reject(new Error("Failed to arrive"));
//     }
//   });
// }

// checkMail()
//   .then((mail) => {
//     console.log(mail);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Experiment completed");
//   });
 
  // // exo-39

  // const promise1 = new Promise((resolve, reject) => {
  //   resolve("Success!");
  // });
  
  // promise1.then((value) => {
  //   console.log(value);
  //   // Expected output: "Success!"
  // });

  // example

  // const Promise2 = new Promise((resolve,reject) => {
  //   resolve("Succes !");
  
  // });

  // promise1.then((values) => {
  //   console.log(value);
  // }

  // exo-40
  // new Promise(function(resolve, reject) {

  //   setTimeout(() => resolve(1), 1000);
  
  // }).then(function(result) {
  
  //   alert(result); // 1
  
  //   return new Promise((resolve, reject) => { // (*)
  //     setTimeout(() => resolve(result * 2), 1000);
  //   });
  
  // }).then(function(result) { // (**)
  
  //   alert(result); // 2
  
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(result * 2), 1000);
  //   });
  
  // }).then(function(result) {
  
  //   alert(result); // 4
  
  // });

//exo41-Primitives

// let john = {
//   name: "John",
//   sayHi: function() {
//     alert("Hi buddy!");
//   }
// };

// john.sayHi(); // Hi buddy!

//example

// let john = {
//   name: "John",
//   sayHi: function() {
//     alert("hi Booby")
      
//   }

// };

// john.sayHi();


//Methode nombre-methode toString

// let num = 255;
// alert( num.toString(16) );
// alert( num.toString(2) );


//***************************Map et Set***************************

// new Map() – créer la map.
// map.set(key, value) – stocke la valeur par la clé.
// map.get(key) – renvoie la valeur par la clé, undefined si key n’existe pas dans la map.
// map.has(key) – retourne true si la key existe, false sinon.
// map.delete(key) – supprime l’élément (la paire clé/valeur) par la clé.
// map.clear() – supprime tout de la map.
// map.size – renvoie le nombre d’éléments actuel.


// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');

// alert( map.get(1) );
// alert( map.get('1') );
// alert( map.size );


//litération dans Map

// let recipeMap = new Map();
// map.set('1', 'str1');
// map.set(1, 'num');
// map.set(true, 'bool1');



// alert( map.get(1) );
// alert( map.get('1') );
// alert( map.size );


//Objet à partir d'une map

// "use strict";

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries()); // créer un objet simple (*)


// obj = { banana: 1, orange: 2, meat: 4 }

// alert(obj.orange); // 2



// Map and Set-intération 

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}; // on créé notre object

// visitsCountObj[ben] = 234; // essayez d'utiliser l'objet ben comme clé
// visitsCountObj[john] = 123; // essayez d'utiliser l'objet john comme clé, l'objet ben sera remplacé

// // C'est ce qui a été écrit!
// alert( visitsCountObj["[object Object]"] ); // 123

 
//Objet map


// let john = { name:"Tojo"};
// let ben = { name: "Ben"};

// let visitsCountObj = {};
// visitsCountObj[ben] = 234; 
// visitsCountObj[john] = 123;

// alert( visitsCountObj["[object Object]"] ); // 123

//Itération dans Map
// let recipeMap = new Map([
//   ['Hamburger', 500],
//   ['tomatoes', 300],
//   ['Banana', 400],
//   ['Pomme', 200],
//   ['Fraise', 100],

// ]);
//   for (let vegetable of recipeMap.keys()){
//     alert(vegetable);

//   }

//   for (let amount of recipeMap.values()) {
//     alert(amount);


//   }
  
//   for (let entry of recipeMap){
//     alert(entry);

//   }


//SET-
// new Map() – créer la map.
// map.set(key, value) – stocke la valeur par la clé.
// map.get(key) – renvoie la valeur par la clé, undefined si key n’existe pas dans la map.
// map.has(key) – retourne true si la key existe, false sinon.
// map.delete(key) – supprime l’élément (la paire clé/valeur) par la clé.
// map.clear() – supprime tout de la map.
// map.size – renvoie le nombre d’éléments actuel.

  let set = new Set();

  let john = { name: "John" };
  let Pete = {name: "Pete"};
  let Mary = { name: "Mary" };

  set.add(john);
  set.add(Mary);
  set.add(Pete);
  set.add(john);
  set.add(Mary);

  alert( set.size );

  for (let user of set) {
    alert(user.name);

  }
