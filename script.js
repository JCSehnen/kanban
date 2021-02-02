function log(message){
    console.log('>Drag: ' + message)
}

const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card =>{
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
} )

function dragstart(){
   // log('Start dragging')
   dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

   this.classList.add('is-dragging');
    
}

function drag(){
   // log('is dragging');
}

function dragend(){
   // log('Stop drag')
   dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
   this.classList.remove('is-dragging');
}

/* local onde vou soltar os cartoes*/
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    log('DROPZONE: Enter in zone')

};
function dragover(){
    log('DROPZONE: Over');
    this.classList.add('over');

    const cardBeingDragged = document.querySelector('.is-dragging');
    this.appendChild(cardBeingDragged);
};
function dragleave(){
    log('DROPZONE: leave of the zone')
    this.classList.remove('over');
};
function drop(){
    log('DROPZONE: dropped')
    this.classList.remove('over')
};