
const grid = document.getElementById('grid');
const sizeButton = document.getElementById('size-btn');
const randomColor = document.getElementById('random');


sizeButton.addEventListener('click', makeBoard);


function makeBoard(){
    clearBoard();
    let lengthOfSide = document.getElementById('size').value;
    let max = lengthOfSide * lengthOfSide;

    if(lengthOfSide > 100 || lengthOfSide < 0){
        alert('Please enter an amount between 1 and 100')
        return;
    }


    for(let i = 0; i < max; i++){
        grid.appendChild(document.createElement('div'));
    }


    grid.style.gridTemplateRows = `repeat(${lengthOfSide}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${lengthOfSide}, 1fr)`;

    const listOfDivs = grid.children;


    for(let j = 0; j < listOfDivs.length; j++){
        listOfDivs[j].addEventListener('mouseover', changeColor)
    }

}



function changeColor(){
    this.style.backgroundColor = 'black';
}


function clearBoard(){
    grid.innerHTML = '';
}




