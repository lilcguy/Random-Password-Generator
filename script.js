// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function generatePassword(){  //return a string
  var characterPool = [""]; 
  var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "O", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var charNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var charSpecial = ["!", "?", "@", "#", "$", "%", "^", "&", "*"];
  // var password = math.random(characterPool * password.length times)

  
  console.log(lettersLowercase);
  console.log(lettersUpper);
  console.log(charNumbers);
  console.log(charSpecial);
  

  var passwordLength = window.prompt("password length");
  console.log(passwordLength);

  var lengthCheck = isNaN(passwordLength); //if the input is not a number
  console.log(lengthCheck); //tell dev: if its not a number then lengthCheck = true.

    if (lengthCheck){ //check if true
      window.alert("you didn't choose a number!"); //tell the user their naughty behavior
      return; //stop execution. allows user to press button to run again.

    }
  

    /*if (passwordLength === num.NaN()) {
          window.alert("you didn't choose a number! refresh the page!")
    }
  
      //check if entry is a number, if not, go to beginning?
      */

  var lowercase = window.confirm("lowercase?"); //these return boolean values
  
  if (lowercase === false){
    window.alert("no lowercase letters!");
   } else {
    window.alert("OK!");
   }

  var uppercase = window.confirm("uppercase?");

  if (uppercase === false){
    window.alert("no uppercase letters!");
   } else {
    window.alert("OK!");
   }

  var number = window.confirm("numbers?");

  if (number === false){
    window.alert("no numbers!");
   } else {
    window.alert("OK!");
   }

  var special = window.confirm("specials?");
  
  if (special === false){
    window.alert("no special characters!");
   } else {
    window.alert("OK!");
   }
//


    if (lowercase){                    //if yes, add the lowercase letters to the character pool (array?)
      characterPool.concat(lettersLowercase);
      console.log(characterPool);
    }
          
 


  return "password"; //placeholder
 
}

