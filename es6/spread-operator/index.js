// Spread Operator

// "the spread operator enables you to unwrap an array into its individual elements."" - Kirupa

// Create an array

var baseballTeam = ["pitcher", "catcher", "firstbase", "secondbase", "thirdbase", "leftfield", "rightfield", "centerfield"];

// Create a Function to display what a baseball team is made up of
function printTeam (a, b, c) {
  console.log("A baseball team consists of: " + a + ', ' + b + ', ' + c);
}

// Feed arguments into function using bracket notation for accessing objects in array
printTeam(baseballTeam[0], baseballTeam[1], baseballTeam[2]);
//A baseball team consists of: pitcher catcher firstbase

// Spread Operator - allows you to feed the whole array
// syntax of the spread operator is the "..." characters before our baseball team array
// this is the same as writing
// "baseballTeam[0], baseballTeam[1], baseballTeam[2]" is equal to writting "...baseballTeam"
printTeam(...baseballTeam);
// A baseball team consists of: pitcher catcher firstbase
