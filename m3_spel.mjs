import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let juisteGetal=random(1,10);
let gekozenGetal;
let aantalLevens=3;

while(gekozenGetal!=juisteGetal&&aantalLevens>0){
    gekozenGetal=parseFloat(await userInput.question(`Geef een getal tussen 1 en 10 in. Je hebt nog ${aantalLevens} kans(en): `));
    if(gekozenGetal<juisteGetal){
        console.log('Het juiste getal ligt hoger.');
        aantalLevens--;
    }else if(gekozenGetal>juisteGetal){
        console.log('Het juiste getal ligt lager.');
        aantalLevens--;
    }else{
        console.log('Je hebt het getal juist geraden, proficiat!');
    }  
}

if(aantalLevens==0){
    console.log('GAME OVER! Het juiste getal was '+juisteGetal)
  
}









process.exit();
