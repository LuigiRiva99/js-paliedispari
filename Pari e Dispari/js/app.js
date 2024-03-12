
//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
//utilizzio un ciclo do-while per far comparire il prompt finchè l'utente metta un numero da 1 a 5
let userNumber
do {
    userNumber = parseInt(prompt('Scrivi un numero da 1 a 5'))
} while (userNumber < 1 || userNumber > 5) 

console.log(userNumber);

//utilizzio un ciclo do-while per far comparire il prompt finchè l'utente metta pari o dispari
let userEvenChoice 
do {
    userEvenChoice = prompt('scrivi PARI o DISPARI').toLowerCase()
} while (userEvenChoice !== 'pari' && userEvenChoice !== 'dispari') 

console.log(userEvenChoice);

//Generiamo un num random (da 1 a 5) per la cpu (usando una funzione)
function cpuRandomNumberGenerator(){
    const result = Math.floor(Math.random() * 5) + 1 //number
    return result;
}

const cpuRandomNumber = cpuRandomNumberGenerator()
console.log(cpuRandomNumber);

//sommo i due numeri
let sum = userNumber + cpuRandomNumber
console.log(sum);

//stabilisco se la somma dei due numeri (utente + cpu) sia pari o dispari (funzione)
function isSumEven(num) {
    const rest = sum % 2 
    if ( rest === 0) {
        const evenResult = true;
        return evenResult;
    } else {
        const evenResult = false;
        return evenResult;
    }
}

const evenResult = isSumEven(sum);

//dichiaro il vincitore
if (userEvenChoice === 'pari' && evenResult === true || userEvenChoice === 'dispari' && evenResult === false) {
    console.log('hai vinto!');
} else {
    console.log('hai perso :(');
}

