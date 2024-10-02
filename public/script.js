// Array to store the paths of flag images
const flagImages = [
    "flags/flag1.jpg",
    "flags/flag2.jpg",
    "flags/flag3.jpg",
    "flags/flag4.jpg",
    "flags/flag5.jpg",
    "flags/flag6.jpg",
    "flags/flag7.jpg",
    "flags/flag8.jpg",
    "flags/flag9.jpg",
    "flags/flag10.jpg",
    "flags/flag11.jpg",
    "flags/flag12.jpg",
    "flags/flag13.jpg",
    "flags/flag14.jpg",
    "flags/flag15.jpg",
    "flags/flag16.jpg",
    "flags/flag17.jpg",
    "flags/flag18.jpg",
  ];
  
  // Create card pairs with flag images
  const cardImages = [...flagImages, ...flagImages];
  
  // Shuffle the cards
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffle the cards when the game starts
  const shuffledCards = shuffle(cardImages);
  
  // Generate and display the cards
  const gameBoard = document.getElementById("gameBoard");
  shuffledCards.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;
    card.addEventListener("click", handleCardClick);
    gameBoard.appendChild(card);
  });
  
  // Timer variables
  let timerInterval;
  let seconds = 0;
  let isTimerRunning = false;
  
  // Format time in MM:SS format
  function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }
  
  // Start timer
  function startTimer() {
    if (!isTimerRunning) {
      isTimerRunning = true;
      timerInterval = setInterval(() => {
        seconds++;
        document.getElementById("timerDisplay").textContent = formatTime(seconds);
      }, 1000);
    }
  }
  
  // Pause timer
  function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
  }
  
  // Stop timer
  function stopTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    seconds = 0;
    document.getElementById("timerDisplay").textContent = "00:00";
  }
  
  // Add event listeners for the play, pause, and stop buttons
  document.getElementById("playBtn").addEventListener("click", startTimer);
  document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
  document.getElementById("stopBtn").addEventListener("click", stopTimer);
  
  
  // Variables to track game state
  let firstCard, secondCard;
  let hasFlippedCard = false;
  let lockBoard = false;
  
  // Handle card clicks
  function handleCardClick(e) {
    const clickedCard = e.target;
  
    if (lockBoard || clickedCard === firstCard) return;
  
    // Reveal the card by changing its background to the flag image
    clickedCard.style.backgroundImage = `url(${clickedCard.dataset.image})`;
    clickedCard.classList.add("flipped");
  
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = clickedCard;
      if (!isTimerRunning) {
        startTimer(); // Start the timer when the first card is flipped
      }
    } else {
      secondCard = clickedCard;
      checkForMatch();
    }
  }
  
  // Check if the two cards match
  function checkForMatch() {
    const isMatch = firstCard.dataset.image === secondCard.dataset.image;
  
    if (isMatch) {
      disableCards();
      checkWinCondition();
    } else {
      unflipCards();
    }
  }
  
  // Disable cards after a match
  function disableCards() {
    firstCard.removeEventListener("click", handleCardClick);
    secondCard.removeEventListener("click", handleCardClick);
    resetBoard();
  }
  
  // unflip the cards if they don't match
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.style.backgroundImage = "url('question-mark.png')";
      secondCard.style.backgroundImage = "url('question-mark.png')";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetBoard();
    }, 1000);
  }
  
  // Reset the board state
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  
  // Check if all cards are matched and the game is won
  function checkWinCondition() {
    const allCards = document.querySelectorAll(".card");
    const allMatched = Array.from(allCards).every((card) =>
      card.classList.contains("flipped")
    );
  
    if (allMatched) {
        document.getElementById("winMessage").classList.remove("hidden");
        pauseTimer(); // Stop the timer when the game is won
      }
    }
  
  // Reset the game when the reset button is clicked
  document.getElementById("resetBtn").addEventListener("click", () => {
    stopTimer(); // Reset the timer
    document.getElementById("winMessage").classList.add("hidden");
    gameBoard.innerHTML = "";
    const reshuffledCards = shuffle(cardImages);
    reshuffledCards.forEach((image) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.image = image;
      card.style.backgroundImage = "url('question-mark.png')";
      card.addEventListener("click", handleCardClick);
      gameBoard.appendChild(card);
    });
  });




  
  // let cardValues = [];
  // let firstCard, secondCard;
  // let matchedPairs = 0;
  // const gameBoard = document.getElementById('gameBoard');
  // const resetBtn = document.getElementById('resetBtn');
  // const winMessage = document.getElementById('winMessage');
  
  // // Initialize game
  // function initializeGame() {
  //   cardValues = generateShuffledCards();
  //   gameBoard.innerHTML = '';
  //   matchedPairs = 0;
  //   winMessage.classList.add('hidden');
  //   firstCard = secondCard = null;
  
  //   cardValues.forEach((value, index) => {
  //     const card = document.createElement('div');
  //     card.classList.add('card', 'hidden');
  //     card.dataset.value = value;
  //     card.addEventListener('click', () => revealCard(card, index));
  //     gameBoard.appendChild(card);
  //   });
  // }
  
  // // Generate shuffled cards
  // function generateShuffledCards() {
  //   const pairs = Array.from({ length: 18 }, (_, i) => i + 1);
  //   const deck = [...pairs, ...pairs]; // 18 pairs of matching values
  //   return deck.sort(() => Math.random() - 0.5);
  // }
  
  // // Reveal a card
  // function revealCard(card, index) {
  //   if (card.classList.contains('hidden')) {
  //     card.classList.remove('hidden');
  //     card.textContent = card.dataset.value;
  
  //     if (!firstCard) {
  //       firstCard = card;
  //     } else if (!secondCard) {
  //       secondCard = card;
  //       checkMatch();
  //     }
  //   }
  // }
  
  // // Check if two revealed cards match
  // function checkMatch() {
  //   if (firstCard.dataset.value === secondCard.dataset.value) {
  //     matchedPairs++;
  //     resetTurn();
  //     if (matchedPairs === 18) {
  //       winMessage.classList.remove('hidden');
  //     }
  //   } else {
  //     setTimeout(() => {
  //       firstCard.classList.add('hidden');
  //       firstCard.textContent = '';
  //       secondCard.classList.add('hidden');
  //       secondCard.textContent = '';
  //       resetTurn();
  //     }, 1000);
  //   }
  // }
  
  // function resetTurn() {
  //   firstCard = secondCard = null;
  // }
  
  // // Reset the game
  // resetBtn.addEventListener('click', initializeGame);
  
  // // Start the game initially
  // initializeGame();
  