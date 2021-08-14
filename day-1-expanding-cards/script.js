let cards = document.querySelectorAll('.card');

// Add .active class when users click the card
cards.forEach(card => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add('active')
  })
})

// Make a function for deleting all .active class when other class is clicked
function removeActiveClass() {
  cards.forEach(card => {
    card.classList.remove('active')
  })
}