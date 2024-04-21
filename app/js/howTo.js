import {updateLocalStorage} from './utils'

function howTo() {
    document.querySelector('body').innerHTML = `
        <section class='how-to-section'>
            <div class='navbar'>
                <button class='back-button'><img src='../../images/icon-back.svg' alt='Back Arrow to go to previous page'></button>
                <img src='../../images/howToPlay.svg' alt='Text reading, How to Play'/>
            </div>
            <div class='how-to-div-container'>
                <div class='how-to-div one'>
                    <h2><span class='blue'>01</span> CHOOSE A CATEGORY</h2>
                    <p>First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p>
                </div>
                <div class='how-to-div two'>
                    <h2><span class='blue'>02</span> GUESS LETTERS</h2>
                    <p>Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.</p>
                </div>
                <div class='how-to-div three'>
                    <h2><span class='blue'>03</span> WIN OR LOSE</h2>
                    <p>You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.</p>
                </div>
            </div>
        </section>
    `;

    const howToButton = document.querySelector('.back-button');
    howToButton.addEventListener('click', () => {
        updateLocalStorage('page', 'home');
    });
}

export default howTo;