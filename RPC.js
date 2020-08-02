const containerbtns = document.querySelectorAll('[data-container]');
const finalColumn = document.querySelector('[data-final-column]');
const compScore = document.querySelector('[data-comp-score]');
const yourScore = document.querySelector('[data-your-score]');


const CONTAIN = [
{
   name:'rock',
   choise : '👊',
   beats : 'scissors'
},

{
    name:'paper',
    choise :'✋',
    beats : 'rock'
},

{
    name:'scissors',
    choise : '✌',
    beats : 'paper'
}

]

containerbtns.forEach(containerbtn => {
containerbtn.addEventListener('click' , e => {
    const containerName = containerbtn.dataset.container;
    const container = CONTAIN.find(container => container.name === containerName);
    makeContainer(container);

});
});

// checking conditions

function makeContainer(container){
    const computerSelection = randomNumber()
    const yourWinner = isWinner(container , computerSelection);
    const compWinner = isWinner(computerSelection,container);
    addContainerResult(computerSelection , compWinner);
    addContainerResult(container , yourWinner);
    if (yourWinner) incrementScore(yourScore);
    if (compWinner) incrementScore(compScore);
}

// to incerement score

function incrementScore(e){
     e.innerHTML = parseInt(e.innerText) + 1;
}

//adding winner into div 

function addContainerResult(container , winner){
   const div = document.createElement('div');
   div.innerText = container.choise;
   div.classList.add('result-selected');
   if(winner)div.classList.add('winner')
    finalColumn.after(div);
}

//checking winner 

function isWinner(container , oppContainer){
    return container.beats === oppContainer.name
}

// generating random number
function randomNumber(){
    const randomIndex = Math.floor(Math.random() * CONTAIN.length);
    return CONTAIN[randomIndex];
}