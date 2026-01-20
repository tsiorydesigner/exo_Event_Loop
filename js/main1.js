// Scope global

// let nom = "Tsiory";
// function afficher(){
// console.log(nom);
// }

// afficher();

//Scope de bloc

// function test(){

//     let age=20;
//     console.log(age);
// }
// test();
// console.log(age);

function parent(){
let message="Bonjour";
function enfant(){
console.log(message);

}
enfant();
}

parent();