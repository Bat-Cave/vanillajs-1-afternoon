let cardId = document.getElementById('cardId');
let assignStyle = document.getElementById('assignStyle');

console.log(cardId);
console.log(assignStyle);

function setCard(){
  let card = document.getElementById(cardId.value);
  card.style.color = assignStyle.value;
  console.log(card);
}