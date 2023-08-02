//------Pour que le site soit securise------\\

/*if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}*/

//------Element html------\\

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.before');
const container = document.querySelector('.container');

//------Tableau des cartes------\\

const cards = [
  {
    name: "John Doe",
    imageUrl: "person.jpg",
    rating: 3
  },
  {
    name: "Jane Smith",
    imageUrl: "person2.jpg",
    rating: 2
  },
  {
    name: "Mark Johnson",
    imageUrl: "person3.jpg",
    rating: 5
  }
];

let currentIndex = 0;

//------Fonction pour afficher la carte actuelle------\\

function showCurrentCard() {
  const currentCard = cards[currentIndex];
  
  const peopleImg = container.querySelector('.people-img');
  const peopleName = container.querySelector('.people-name');
  const ratingChars = container.querySelectorAll('.char');
  
  peopleImg.src = currentCard.imageUrl;
  peopleName.textContent = currentCard.name;
  
  ratingChars.forEach((char, index) => {
    if (index < currentCard.rating) {
      char.classList.add('checked');
    } else {
      char.classList.remove('checked');
    }
  });
}

//------Evenement pour le bouton suivant------\\

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCurrentCard();
});

//------Evenement pour le bouton precedent------\\

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCurrentCard();
});

//------Lancer la fonction------\\

showCurrentCard();
