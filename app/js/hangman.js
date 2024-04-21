import {updateLocalStorage} from './utils'
import data from '../../data.json';

const titlePausedImg = `<img src="images/paused.svg" alt="Text that says, 'Paused'"/>`;
const titleWinImg = `<img src="images/you-win.svg" alt="Text that says, 'You Win'"/>`;
const titleLoseImg = `<img src="images/you-lose.svg" alt="Text that says, 'You Lose'"/>`;

let currentTitle = titlePausedImg;

function getItemToGuess(currentCat) {
    const cat = currentCat.replace('-', ' ');
    const options = data.categories[cat];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber].name;
}

function checkForMatch(letter, hiddenWord) {
    if (hiddenWord.includes(letter.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

function checkIfWon(val1, val2) {
    if (val1 === val2) {
        document.querySelector('.menu-title').innerHTML = titleWinImg;
        document.querySelector('.navy-overlay').classList.add('show');
        document.querySelector('.hangman-menu-div').classList.add('show');
    }
}


function checkIfLost(health) {
    if(health === 0) {
        document.querySelector('.menu-title').innerHTML = titleLoseImg;
        document.querySelector('.navy-overlay').classList.add('show');
        document.querySelector('.hangman-menu-div').classList.add('show');
    }
}

function removeSpaces(character) {
    if (character === ' ') {
        return false
    } else {
        return true
    }
}


function hangman(category) {

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let health = 100;
    
    

    let itemToGuess = getItemToGuess(category);
    let itemToGuessSplit = itemToGuess.toLowerCase().split('');

    const winningNumber = itemToGuessSplit.filter(removeSpaces).length;
    let correctGuesses = 0;
    
    

    document.querySelector('body').innerHTML = `
        <section class='hangman-section'>
            <div class='navy-overlay'></div>
            <div class='hangman-menu-div'>
                <div class='menu-title'>${currentTitle}</div>
                <div class='menu-options-div'>
                    <button class='menu-option continue'>Continue</button>
                    <button class='menu-option new-category'>New Category</button>
                    <button class='menu-option quit-game'>Quit Game</button>
                </div>
            </div>
            <div class='hangman-nav'>
                <div class='left'>
                    <button class='hamburger-nav'><img src='images/icon-menu.svg' alt='Hamburger navigation button'/></button>
                    <h2>${category.replace('-', ' ')}</h2>
                </div>
                <div class='right'>
                    <div class='progress-bar-outside'>
                        <span class='progress-bar-inside'></span>
                    </div>
                    <img class='heart' src='images/icon-heart.svg' alt='Heart icon'/>
                </div>
            </div>
            <div class='hangman-game-board'>
                <div class="hidden-word-div">

                </div>
                <div class="letters-div">
                    
                </div>
            </div>
        </section>
    `;

    const healthBar = document.querySelector('span.progress-bar-inside');

    const hiddenWordDiv = document.querySelector('.hidden-word-div');
    itemToGuessSplit.forEach((letter) => {
        if(letter === ' ') {
            hiddenWordDiv.innerHTML += `<br/>`;
        } else {
            hiddenWordDiv.innerHTML += `<span class='hidden-letter' data-hiddenLetter='${letter}'></span>`;
        }
    });

    const lettersDiv = document.querySelector('.letters-div');
    letters.forEach((letter) => {
        lettersDiv.innerHTML += `<span class='letter' data-letter='${letter}'>${letter}</span>`;
    });

    const allLettersOnBoard = document.querySelectorAll('.letter');
    allLettersOnBoard.forEach((letter) => {
        letter.addEventListener('click', (e) => {
            if(e.target.classList.contains('disabled')) {
                //do nothing
            } else {
                e.target.classList.add('disabled');
                const clickedLetter = e.target.dataset.letter;
                const contains = checkForMatch(clickedLetter, itemToGuessSplit);
                if(contains) {
                    const allMatchedLetters = document.querySelectorAll(`span[data-hiddenLetter="${clickedLetter.toLowerCase()}"]`);
                    allMatchedLetters.forEach((element) => {
                        element.classList.add('opacity-one');
                        element.innerHTML = `<span class='found-letter' data-found-letter='${clickedLetter}'>${clickedLetter}</span>`;
                        correctGuesses++;
                    });
                } else {
                    health -= 12.5;
                    healthBar.style.width = `${health}%`;
                }
                checkIfLost(health);
                checkIfWon(winningNumber, correctGuesses);
            }
        })
    });



    const continueButton = document.querySelector('.continue');
    continueButton.addEventListener('click', () => {
        document.querySelector('.navy-overlay').classList.remove('show');
        document.querySelector('.hangman-menu-div').classList.remove('show');
        if(health === 0 || winningNumber === correctGuesses){
            location.reload();
        }
    });

    const newCatButton = document.querySelector('.new-category');
    newCatButton.addEventListener('click', () => {
        updateLocalStorage('page', 'category');
    });

    const quitButton = document.querySelector('.quit-game');
    quitButton.addEventListener('click', () => {
        updateLocalStorage('page', 'home');
    });

    const navButton = document.querySelector('.hamburger-nav');
    navButton.addEventListener('click', () => {
        document.querySelector('.navy-overlay').classList.add('show');
        document.querySelector('.hangman-menu-div').classList.add('show');
    });
}

export default hangman;