let cards = Array.from({length: 54},(_,index)=>index+1);
console.log(cards);

let player1 = []
let player2 = []

function getRandomCard(cards){
    let rndIndex = Math.round(Math.random() * (cards.length-1));
    let rndItem = cards[rndIndex];
    let i = cards.indexOf(rndItem);
    
    cards.splice(i,1);
    return rndItem;
}

for(let i = 0;i<6;i++){
    player1.push(getRandomCard(cards));
    player2.push(getRandomCard(cards));
}
console.log(player1);
console.log(player2);


let p1 = document.querySelector(".player1 .card-field");
let p2 = document.querySelector(".player2 .card-field");

for(let i = 0;i<6;i++){
    let card1 = document.createElement('img');
    let card2 = document.createElement('img');
    card1.setAttribute('src',`cards/${player1[i]}.png`);
    card2.setAttribute('src',`cards/${player2[i]}.png`);
    p1.append(card1);
    p2.append(card2);
}
console.log(cards);