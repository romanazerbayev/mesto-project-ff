const placesList = document.querySelector('.places__list');

function cards (cardInfo, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = cardInfo.link;
  cardTitle.textContent = cardInfo.name;

  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
  });

  return cardElement;
}

function deleter(cardElement) {
  cardElement.remove();
}

initialCards.forEach((cardInfo) => {
  const cardElement = cards(cardInfo, deleter);
  placesList.appendChild(cardElement);
});