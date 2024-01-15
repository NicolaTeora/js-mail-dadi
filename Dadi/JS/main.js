// dichiaro le variabili
let userDice = Math.floor((Math.random() * 6) + 1);
let computerDice = Math.floor((Math.random() * 6) + 1);
let result = '';

window.onload = function() {
    document.getElementById('userResult').innerText = userDice;
    document.getElementById('computerResult').innerText = computerDice;
    document.getElementById('viewPoint').innerText = result;
}
console.log(userDice);
console.log(computerDice);

//faccio i confronti tra i risultati
if (userDice < computerDice) {
    result = 'Computer vince!';

} else if (computerDice < userDice) {
    result = 'Giocatore ha vinto!';

} else {
    result = 'Pareggio!'

};

document.getElementById('viewPoint').innerText = result;

console.log(result);