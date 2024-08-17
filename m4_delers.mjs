/*Schrijf een functie die voor een getal de som van de delers van dit getal gaat afdrukken
(zonder het getal zelf). 
Als het getal bijvoorbeeld 12 zou zijn, zal de functie 1 + 2 + 3 + 4 + 6 = 16 weergeven.*/

function somDelers(getal){
    let som=0
    let delers=''
    for(let i=1;i<getal;i++){
        if(getal%i==0){
            som+=i;
            if(delers!==''){ // voor lay-out output 
                delers+=" + "; // voor lay-out output
            }
            delers+=i // voor lay-out output
        } 
    }
console.log(`${delers} = ${som}`)
}


somDelers(12)