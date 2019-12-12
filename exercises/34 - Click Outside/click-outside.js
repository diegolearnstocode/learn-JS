const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const learnMoreButtons = document.querySelectorAll('.card button');

function handleCardButtonClick(button) {
        const selectedCard = button.target.closest('.card');
        fillInnerModal(selectedCard);
}

function fillInnerModal(card) {
        const modalImage = document.createElement('img');
        const imageTitle = document.createElement('p');
        modalImage.src = card.querySelector('img').src;
        modalImage.alt = card.dataset.description;
        modalInner.innerHTML = '';
        modalInner.prepend(modalImage);
        modalInner.appendChild(imageTitle);
        imageTitle.innerText = `${modalImage.alt}`;
        modalOuter.classList.add('open');
}

function closeModal() {
        modalOuter.classList.remove('open');
}

document.addEventListener('click', function(e) {
        if (e.target === modalOuter) {
                closeModal();
        }
});

document.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
                closeModal();
        }
});

learnMoreButtons.forEach(button => {
        button.addEventListener('click', handleCardButtonClick);
});

// Grab the image src
// populate the modal with the new info
// show the modal
