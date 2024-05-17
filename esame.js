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

console.log("------------------------------ESERCIZIO 5----------------------------------------------------------------")

//Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche

//Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"

function onlyLetters(stringa) {
    if (stringa === stringa) {
        let soloLettere = stringa.replace(/[0-9]?/g,"");
        return soloLettere;
    }
}
let soloLettere = onlyLetters("ABBIAMO VINTO FACENDO 10 GOL")
console.log(soloLettere)

console.log("------------------------------ESERCIZIO 6----------------------------------------------------------------")

//Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.

function isThisAnEmail(stringa) {
    if (stringa.includes("@")){
        return true;     
    }else{
        return "FATTI UNA E-MAIL"
    }
}

console.log(isThisAnEmail("m.susin28@gmail.com"))

console.log("------------------------------ESERCIZIO 7----------------------------------------------------------------")

//Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.

function whatDayIsIt() {
    const weekDay = ["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"]; 
    let dateNow = new Date();
     nowDay = dateNow.getDay();
    return weekDay[nowDay-1];
}

console.log(whatDayIsIt())

console.log("------------------------------ESERCIZIO 8----------------------------------------------------------------")

//Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
//Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
//il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
//L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

//Example:
//rollTheDices(3) => ritorna {
//  sum: 10
//  values: [3, 3, 4]


/* function rollTheDices(number) {
    const valori = [];
    const 

   for (let i = 0; index < number; index++) {
    const richiamo = dice();

     
   }

    
} */

rollTheDices = dice();
console.log(dice(3))




console.log("-------------------------------ARRAY & OGGETTI-----------------------------------------------------------")


console.log("------------------------------ESERCIZIO 11----------------------------------------------------------------")

//Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
//in esso la proprietà chiamata come la stringa passata come secondo parametro.

const obj = {
    string : "Hello World"
}
const string = "Hi Mate"
function deleteProp(oggetto , stringa) {
    if (obj != stringa) {
        delete obj.string;
        const newObj = obj; 
        return + newObj;
    }else {
        return stringa
    } 
}

console.log(deleteProp(obj , string))



console.log("------------------------------ESERCIZIO 12----------------------------------------------------------------")

//Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
   
 const movies = [
        {
          Title: 'The Lord of the Rings: The Fellowship of the Ring',
          Year: '2001',
          imdbID: 'tt0120737',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
        },
      
        {
          Title: 'The Lord of the Rings: The Return of the King',
          Year: '2003',
          imdbID: 'tt0167260',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
          Title: 'The Lord of the Rings: The Two Towers',
          Year: '2002',
          imdbID: 'tt0167261',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        },
        {
          Title: 'Lord of War',
          Year: '2005',
          imdbID: 'tt0399295',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
        },
        {
          Title: 'Lords of Dogtown',
          Year: '2005',
          imdbID: 'tt0355702',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
        },
        {
          Title: 'The Lord of the Rings',
          Year: '1978',
          imdbID: 'tt0077869',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        },
        {
          Title: 'Lord of the Flies',
          Year: '1990',
          imdbID: 'tt0100054',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
        },
        {
          Title: 'The Lords of Salem',
          Year: '2012',
          imdbID: 'tt1731697',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
        },
        {
          Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
          Year: '1984',
          imdbID: 'tt0087365',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
        },
        {
          Title: 'Lord of the Flies',
          Year: '1963',
          imdbID: 'tt0057261',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
        },
        {
          Title: 'The Avengers',
          Year: '2012',
          imdbID: 'tt0848228',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        },
        {
          Title: 'Avengers: Infinity War',
          Year: '2018',
          imdbID: 'tt4154756',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
        },
        {
          Title: 'Avengers: Age of Ultron',
          Year: '2015',
          imdbID: 'tt2395427',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
        },
        {
          Title: 'Avengers: Endgame',
          Year: '2019',
          imdbID: 'tt4154796',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
        },
      ]

      console.log("------------------------------ESERCIZIO 12----------------------------------------------------------------")

//Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
      
      function newestMovie() {
        let result = {
            Year : 2100}
            movies.forEach((movie) => {
              let currentYear = parseInt(movies.Year)
              if (currentYear > result.Year) {
                result = movie
              }
            })
            return result
        }
     console.log(newestMovie())
      