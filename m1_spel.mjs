import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let gekozenGetal=parseFloat(await userInput.question('Geef een getal tussen 1 en 10 in: '));

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function raadHetGetal(){
    let juisteGetal=random(1,10);
    console.log(juisteGetal);
    if(gekozenGetal==juisteGetal){
        console.log('Je hebt het getal juist geraden, proficiat!')
    }else if(gekozenGetal<juisteGetal){
        console.log('Het juiste getal ligt hoger.')
    }else{
        console.log('Het juiste getal ligt lager.')
    }
}



raadHetGetal();






process.exit();
