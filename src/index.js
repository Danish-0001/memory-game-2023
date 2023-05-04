document.addEventListener('DOMContentLoaded', () => {
  // card option
  const cardsArray = [
    {
      name: 'cheeseburger',
      img: 'src/images/cheeseburger.png',
    },
    {
      name: 'fries',
      img: 'src/images/fries.png',
    },
    {
      name: 'hotdog',
      img: 'src/images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'src/images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'src/images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'src/images/pizza.png',
    },
    {
      name: 'cheeseburger',
      img: 'src/images/cheeseburger.png',
    },
    {
      name: 'fries',
      img: 'src/images/fries.png',
    },
    {
      name: 'hotdog',
      img: 'src/images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'src/images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'src/images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'src/images/pizza.png',
    },
  ]

  cardsArray.sort(() => 0.5 - Math.random())
  console.log(cardsArray)

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')

  let cardsChosen = []
  let cardsChosenIds = []
  let cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'src/images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardsArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardsArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosenIds)
  }

  function checkForMatch() {
    const cardsArray = document.querySelectorAll('img')
    let optionOneId = cardsChosenIds[0]
    let optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
      alert('You have clicked the same image')
      cardsArray[optionOneId].setAttribute('src', 'src/images/blank.png')
      cardsArray[optionTwoId].setAttribute('src', 'src/images/blank.png')
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You have a match')
      cardsArray[optionOneId].setAttribute('src', 'src/images/white.png')
      cardsArray[optionTwoId].setAttribute('src', 'src/images/white.png')
      cardsArray[optionOneId].removeAttribute('click', flipCard)
      cardsArray[optionTwoId].removeAttribute('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cardsArray[optionOneId].setAttribute('src', 'src/images/blank.png')
      cardsArray[optionTwoId].setAttribute('src', 'src/images/blank.png')
      alert('Sorry, Try Again')
    }

    cardsChosen = []
    cardsChosenIds = []

    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardsArray.length / 2) {
      resultDisplay.textContent = 'Congratulation You have Won!'
    }

    console.log(cardsChosen)
    console.log(cardsWon)
  }

  createBoard()
})
