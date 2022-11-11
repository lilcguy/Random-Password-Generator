// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "" //global scope var
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function generatePassword(){  
  
  password = ""; //set var password to empty at the start of the function so that every run is new.

  var characterPool = ""; 
  var lettersLowercase = "abcdefghijklmnopqrstuvwxyz"
  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var charNumbers = "1234567890"
  var charSpecial = "!@#$%^&*"
  //var sub = ""
  // var password = math.random(characterPool * password.length times)

  
  //console.log(lettersLowercase);
  //console.log(lettersUpper);
  //console.log(charNumbers);
  //console.log(charSpecial);
  

  var passwordLength = window.prompt("password length");
  //couldnt get it to close out if they hit cancel.

  

  console.log(passwordLength);

  var lengthCheck = isNaN(passwordLength); //if the input is not a number
  //console.log(lengthCheck); //tell dev: if its not a number then lengthCheck = true.

    if (lengthCheck){ //check if true
      window.alert("you didn't choose a number!"); //tell the user their naughty behavior
      return; //stop execution. allows user to press button to run again.

    }
  

   

  var lowercase = window.confirm("lowercase?"); //these return boolean values
  
  if (lowercase === false){
    window.alert("no lowercase letters!");
   } else {
    window.alert("OK!");
    characterPool += lettersLowercase; //
    console.log(characterPool);

   }

  var uppercase = window.confirm("uppercase?"); //these return boolean values

  if (uppercase === false){
    window.alert("no uppercase letters!");
   } else {
    characterPool += lettersUpper;
    window.alert("OK!");
   }

  var number = window.confirm("numbers?"); //these return boolean values

  if (number === false){
    window.alert("no numbers!");
   } else {
    window.alert("OK!");
    characterPool += charNumbers;
    console.log(characterPool);
   }

  var special = window.confirm("specials?"); //these return boolean values
  
  if (special === false){
    window.alert("no special characters!");
   } else {
    window.alert("OK!");
    characterPool += charSpecial;
    console.log(characterPool);
   }

for (let i = 0; i <= Number(passwordLength); i++){ //run random selection passwordLength times: turn passwordLength value, which is a string, into a number.
  var randomize = Math.floor(Math.random() * characterPool.length); //selects an index from characterPool
  password += characterPool.substring(randomize, randomize + 1);
  console.log(password); //logs each random selection
}

var values = [lowercase, uppercase, number, special];

console.log(values);

//console.log(lowercase);

    /* if (lowercase){                    //if yes, add the lowercase letters to the character pool (array?)
     characterPool = lettersLowercase.concat();
      //console.log(characterPool);
    } else if (uppercase) {
      characterPool = lettersUpper.concat();
    } else if (number){
      characterPool = number.concat(lettersLowercase);
      console.log(characterPool);
    }
          
 

*/
  return password; 
 
}

