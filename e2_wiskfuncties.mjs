/*Schrijf functies om de oppervlaktes van de volgende vormen te berekenen:

cirkel: Pi x straal x straal (je kan de waarde van Pi opvragen met Math.PI)
driehoek: basis x hoogte gedeeld door 2
rechthoek: zijde1 x zijde2
vierkant: zijde x zijde*/

function oppervlakteCirkel(straal){
    let functie=Math.PI*straal*straal;
    return functie;
}

function oppervlakteDriehoek(basis,hoogte){
    let functie=(basis*hoogte)/2;
    return functie;
}

function oppervlakteRechthoek(zijde1,zijde2){
    let functie=zijde1*zijde2;
    return functie;
}

function oppervlakteVierkant(zijde){
    return oppervlakteRechthoek(zijde,zijde);
}
 
console.log(oppervlakteCirkel(5))