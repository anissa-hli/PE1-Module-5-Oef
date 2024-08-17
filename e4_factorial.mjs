/*Schrijf een functie dat de factorial van een getal gaat berekenen. Je kan de factorial van een getal 
berekenen door alle getallen tussen 1 en het gegeven getal met elkaar te vermenigvuldigen*/

function factorial(getal){
    let som=1
    if(getal>1){
        for(let i=1;i<=getal;i++){
            som=som*i;
        }
        return som;
    }else{
        console.error("Niet geldig. Voer een waarde groter dan 0 in.");
    }
}

factorial(0)
