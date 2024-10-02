# Randomized Card Matching Game

A flag-themed card matching game where users flip cards to find matching pairs. The game features a timer, which tracks the player's progress, and control buttons to play, pause, or reset the timer.

# # Features

* 6x6 grid with 36 cards (18 unique flag images, each appearing twice).
* Responsive design for smooth gameplay across devices.
* A timer that tracks the time taken to complete the game.
* Timer control buttons to play, pause, or reset the game.
* Win condition alert when all cards are matched.
* Reset functionality to restart the game without refreshing the page.


## Technologies Used

* HTML5 for structuring the game board and UI elements.
* CSS3 for styling the layout, animations, and hover effects.
* JavaScript (ES6) for game logic, card shuffling, matching logic, and timer 
management.


# # Setup and Installation

# # Clone the repository:

* git clone https://github.com/your-username/Randomized-card-matching-game.git


# # Navigate to the project directory:

* cd randomized-card-matching-game


# # Open the index.html file in a web browser:

* open index.html


# # Project Structure

card-matching-game/
│
├── index.html         # Main HTML file for the game
├── style.css          # Contains all the styles for the game
├── script.js          # JavaScript file for the game logic
├── flags/             # Folder containing all the flag images
│   ├── flag1.jpg
│   ├── flag2.jpg
│   └── ... 
└── README.md          # Project documentation


# # How to Play

* Start the Game: Click any card to start the game. The timer will automatically begin when the first card is flipped.
* Flip Cards: Click on a card to reveal its flag. Then, click another card to find its match.
* Matching Pairs: If two cards match, they remain face-up. If they don't match, they will flip back after a short delay.
* Win Condition: The game is won when all 18 pairs of cards are matched. A victory message will be displayed.
* Reset the Game: Click the reset button to shuffle the cards and start a new game. The timer will reset as well.

# # Game Controls

* Play Button: Starts or resumes the timer.
* Pause Button: Pauses the timer.
* Stop Button: Resets the timer to 00:00.
* Reset Button: Restarts the game with a new shuffle of the cards and resets the timer.


# # Detailed Code Overview

* Timer Logic
** The game includes a digital timer, displayed in MM
format.
** The timer starts when the first card is flipped.
**The player can use play, pause, and stop buttons to control the timer.
** The timer pauses when all cards are matched and resets when the game is reset.

## Card Matching Logic

* Shuffling: The card images are shuffled each time the game is reset to ensure a new random order.
* Matching: If two selected cards have the same image, they remain flipped. If they do not match, they will flip back after 1 second.
* Win Condition: Once all cards are matched, a victory message is displayed, and the timer pauses.


## Event Handling

The game listens for user interactions such as:

* Clicking on a card to flip it.
* Clicking the reset button to start a new game.
* Using the timer control buttons (play, pause, stop).

## CSS Styling

* Cards: Each card is styled with a default background image (question-mark.png) that flips to reveal the flag when clicked.
* Game Board: The game board is a grid with equal spacing between cards, and it is responsive to various screen sizes.
* Timer and Controls: The timer and control buttons are displayed above the game board.


## Future Improvements
Some potential enhancements for the game include:

* Levels/Difficulty: Adding different levels with more cards or complex patterns.
* Scoreboard: Tracking the number of moves or attempts to complete the game.
* Animations: Adding smoother card flipping animations.

# Screenshots


![Screenshot (205)](https://github.com/user-attachments/assets/e88a13c8-3359-4543-b813-66cc08db5c50)


![Screenshot (208)](https://github.com/user-attachments/assets/2a7d94a1-a6b2-42c9-9056-a986700b7d62)

![Screenshot (209)](https://github.com/user-attachments/assets/7fa5801d-7b2a-40b7-8fb3-2279d193714d)


![Screenshot (213)](https://github.com/user-attachments/assets/6cdfd3c0-9c46-4e77-8adf-01f5c45ad5e5)

![Screenshot (214)](https://github.com/user-attachments/assets/a2ae7548-347f-428e-a82d-bed32afa4bba)

Contributing
Feel free to fork the repository, create a feature branch, and submit a pull request for any improvements or bug fixes.

Author
Asiphile Mthethwa
