import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let juisteGetal=random(1,10);
let gekozenGetal;

while(gekozenGetal!=juisteGetal){
    gekozenGetal=parseFloat(await userInput.question('Geef een getal tussen 1 en 10 in: '));
    if(gekozenGetal<juisteGetal){
        console.log('Het juiste getal ligt hoger. Probeer opnieuw.');
    }else if(gekozenGetal>juisteGetal){
        console.log('Het juiste getal ligt lager. Probeer opnieuw.');
    }else{
        console.log('Je hebt het getal juist geraden, proficiat!');
    }  
}

console.log(`Het juiste getal was ${juisteGetal}`); //controle








process.exit();
