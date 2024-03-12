
//Chiedere all'utente di inserire una parola
const userWord = prompt('inserisci una parola');


//creo una funzione che mi permetta di invertire le parole
function reverseString(string) {
    const reversed = string.split('').reverse().join('');      
    return reversed;
    
    // .split('') divide la parola (string) in un array dove ogni elemento è una lettera della parola 
    //parola.split('') --> ["p", "a", "r", "o", "l", "a"]
    // .reverse() inverte l'ordine degli elementi dentro l'array
        //["p", "a", "r", "o", "l", "a"] --> ["a", "l", "o", "r", "a", "p"]
    // .join('') unisce gli elementi dell'array in una singola stringa
        //["a", "l", "o", "r", "a", "p"] --> 'alorap'
    //combinandoli ottengo la stringa iniziale invertita    
}

//Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) {
    if (userWord === reverseString(userWord)) {
        //se la parola è palindroma, allora ritorna true 
        const result = true
        return result;
    } else {
        //altrimenti ritorna false
        const result = false;
        return result
    }
}

//Stampo in console un messaggio del risultato    
const palindromeResult = isPalindrome(userWord);
console.log(palindromeResult);


