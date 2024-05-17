console.log("-------------------------------JAVA SCRIPT BASICS-----------------------------------------------------------")

console.log("------------------------------ESERCIZIO A----------------------------------------------------------------")

 // Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.

 const a = 10
 const b = 20 
 let sum = a + b 
 console.log(sum)

 console.log("------------------------------ESERCIZIO B----------------------------------------------------------------")

 
// Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).

const random = Math.floor(Math.random()*21)

console.log(random)



console.log("------------------------------ESERCIZIO C----------------------------------------------------------------")

//Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.

let me = {
    name :"Mattia" ,
    surname :"Susin", 
    age: 28 
};
console.log(me)

console.log("------------------------------ESERCIZIO D----------------------------------------------------------------")

//Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.

delete me.age
console.log(me)

console.log("------------------------------ESERCIZIO E----------------------------------------------------------------")

//Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.

me.skills = []
console.log(me)

console.log("------------------------------ESERCIZIO F----------------------------------------------------------------")

//Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".

me.skills.push("Html");
console.log(me);

console.log("------------------------------ESERCIZIO G----------------------------------------------------------------")

//Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me"

me.skills.pop()
console.log(me)

console.log("-------------------------------FUNZIONI-----------------------------------------------------------")

console.log("------------------------------ESERCIZIO 1----------------------------------------------------------------")

//Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.

function dice () {
    const nrCasuale = Math.floor(Math.random()*6)+1;
    return nrCasuale;
}

console.log(dice())
console.log("------------------------------ESERCIZIO 2----------------------------------------------------------------")

//Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.

function whoIsBigger(n1,n2) {
    if (n1>n2) {
        return n1;
    }else{
        return n2;
    }
}
console.log(whoIsBigger(6,8))

console.log("------------------------------ESERCIZIO 3----------------------------------------------------------------")

//Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

//Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]

function splitMe(stringa) {
    const splitSquadra = stringa.split(' ');
    return splitSquadra
}
let squadra = splitMe("SONO DELLA JUVENTUS")
console.log(squadra) 

console.log("------------------------------ESERCIZIO 4----------------------------------------------------------------")

//Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
//Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.

function deleteOne(stringa , booleano) {
    if (booleano === true) {
        return stringa.slice(1);
    }else{
        return stringa.slice(0,-1);
    }
}

;
console.log(deleteOne("SCRIPT",false))
/* console.log(deleteOne) */