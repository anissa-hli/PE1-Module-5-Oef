//Schrijf een functie dat het aantal dagen in een maand teruggeeft. 
//Vraag zowel achter de maand én het jaartal, je zal dus moeten rekening houden met schrikkeljaren.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand=await userInput.question('Geef een maand in: ');
let jaartal=parseFloat(await userInput.question('Geef een jaartal in: '));

function aantalDagenInMaand(){
    let aantalDagen
    switch(maand){
        case "Januari":
        case "Maart":
        case "Mei":
        case "Juli":
        case "Augustus":
        case "Oktober":
        case "December":
            aantalDagen=31
            break;
        case "Februari":
            if(jaartal%400==0||(jaartal%4==0&&jaartal%10!==0)){
                aantalDagen=28
            }else{
                aantalDagen=29
            }
            break;
        case "April":
        case "Juni":
        case "September":
        case "November":
            aantalDagen=30;
            break;
    }
    console.log(`${maand} telt ${aantalDagen} dagen in het jaar ${jaartal}.`)
}

aantalDagenInMaand();

process.exit();
