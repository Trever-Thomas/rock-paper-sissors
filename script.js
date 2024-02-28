/*Computer Selection Fuction*/
const variables = ["rock","paper","sissors"];
const randomVariable = variables[Math.floor(Math.random() * variables.length)];
function getComputerChoice () {console.log(randomVariable)};
getComputerChoice ();

/*Player Selection Fuction*/
function getPlayerChoice () {
var choice = prompt ("Pick: Rock, Paper, or Sissors.").toLowerCase();
    console.log(choice)
}

getPlayerChoice ();

function 