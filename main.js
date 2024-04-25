// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.  
// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

let tiri = prompt('Quanti tiri di dadi volete fare?');
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function tiraDadi(numeroTiri){
    let totalScore = 0;
    for (i=0; i<numeroTiri; i++) {
        let randomNum = Math.floor(Math.random() * (6 - 1) + 1);
        totalScore += randomNum;
    }
    return totalScore;
};

scorePlayer1 = tiraDadi(tiri);
scorePlayer2 = tiraDadi(tiri);

// console.log(scorePlayer1);
// console.log(scorePlayer2);

if (scorePlayer1 > scorePlayer2){
    console.log('Player 1 win!');
}
else if (scorePlayer1 < scorePlayer2)
console.log('Player 2 win!');
else if (scorePlayer1 == scorePlayer2)
console.log('Draw');
else{
    console.log('I have a bad feeling about that!');
};