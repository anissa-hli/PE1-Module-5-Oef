/*Schrijf een functie dat een temperatuur van Farenheit naar Celcius kan omzetten 
of omgekeerd van Celcius naar Fahrenheit. Deze functie zal twee parameters aanvaarden:
temperatuur en isCelcius (dat true of false kan zijn).
Zorg ervoor dat deze functie de waarde zal terugsturen en zelf geen output heeft.*/

function farenheitCelcius(temperatuur,isCelcius){
    if(isCelcius==true){
        let omzettingNaarFarenheit= (temperatuur * 1,8) + 32;
        return omzettingNaarFarenheit;
    }else{
        let omzettingNaarCelcius=(temperatuur-32)/(1,8);
        return omzettingNaarCelcius;
    }
}
