// //call back function just to generate the random number and console log it
// function justConsoleLog(maximum, cb) {
//   var value = parseInt(Math.random() * maximum);
//   cb(value);
// }

// justConsoleLog(10, (value) => {
//   console.log(value);
// });

// //real life fetcing the data from pokemon api
// let url = "https://pokeapi.co/api/v2/pokemon/?limit=1";
// async function logPokemon() {
//   const response = await fetch(url);
//   const pokemon = await response.json();
//   console.log(pokemon.results[0].name);
// }
// logPokemon();
const students = ["Piyush", "john", "jane"];

students.forEach((val) => console.log(val));
