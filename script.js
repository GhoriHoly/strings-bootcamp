function repeat(text, repetitions){
    for(i = 0; i<  repetitions; i++){
        console.log(text)
    }

}

repeat("My name is Holy", 10)

console.log("----------------------------")

//Write a function that takes a string and a character as input and gives true or false as output depending on whether the character is in the string.

function containsChar(text, character){
    result = text.search(character)
    if(result >= 0){
        console.log(true)
    }else{
        console.log(false)
    }
  }

let str = "Hello world"
let char = "o"
containsChar(str, char) // => true
containsChar(str, "x") // => false
containsChar(str, "d") // => false


//Skriv en funktion som tar en sträng och ett tecken som input och ger positionen för det första förekomna tecknet som output och -1 om tecknet inte finns.

function indexOfChar(text, character){
    result = text.search(character)
    console.log(result)
  }


  let str1 = "Hello world"
  let char1 = "o"
  indexOfChar(str1, char1) // => 4
  indexOfChar(str1, "x") // => -1

  //Skriv in funktion som avgör om strängen börjar på tecknet eller inte.

  function startsWith(text, character){
    if(text[0]==character){
        console.log(true)
    }else{
        console.log(false)
    }
  }

let str2 = "Hello";
let char2 = "H";
startsWith(str2, char2); // => true
startsWith(str2, "X"); // => false

//Skriv in funktion som avgör om strängen slutar på tecknet eller inte.

function endsWith(text, character){
    if(text[text.length-1] == character){
        console.log(true)
    }else{
        console.log(false)
    }

}


let str3 = "Hello";
let char3 = "o";
endsWith(str3, char3); // => true
endsWith(str3, "X"); // => false


//Skriv en funktion som tar en sträng som input och ger en ny omvänd sträng som output.


function reverse(text){
    let splitstr = text.split("");
    //console.log(splitstr);
    // reverse() only works on arrays. So, make the array from string first
    let revArray = splitstr.reverse();
    let joinArray = revArray.join("");
    console.log(joinArray)


}

let str4 = "Hello world"
reverse(str4) // => "dlrow olleH"
reverse("Sponge-Bob") // =>  "boB-egnopS"


/* Skriv en funktion som tar en sträng och ett tecken som input och ger en ny sträng som output där tecknet är borttaget från strängen.

Notera att du bara ska ta bort alla förekomster av enbart ett tecken.*/

function removeChar(text, char){
    let indexOfChar = text.indexOf(char);
    console.log(text.replace(text[indexOfChar], ""))
  }

  let str5 = "Hello world"
  let char5 = "o"
  removeChar(str5, char5) // => "Hell wrld"
  removeChar(str5, " ") // =>  "Helloworld"


/* Skriv en funktion som tar en sträng och två tecken som input och ger en ny sträng som output där det ena tecknet ersätts med det andra i strängen.

Notera att du bara ska ta ersätta alla förekomster av enbart ett tecken */

function replaceChar(text, source, dest){
    let result = text.replace(source, dest)
    console.log(result) 
}

let str6 = "Hello world"
let char11 = "o"
let char22 = "y"
replaceChar(str6, char11, char22) // => "Helly wyrld"
replaceChar(str6, " ", "-") // =>  "Hello-world"

/*Skriv en funktion som tar en sträng och två tal som input, och ger en ny sträng med alla tecken mellan talen.*/

