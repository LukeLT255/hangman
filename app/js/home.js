import {updateLocalStorage} from './utils'

function home() {
    document.querySelector('body').innerHTML = `
        <section class='home-menu-section'>
            <div class='home-menu-div'>
                <div class='menu-title'><img src="images/logo.svg" alt="Text that says, 'The Hangman Game'"/></div>
                <div class='play-button-div'>
                        <button class='play-button'><img src="images/icon-play.svg"/></button>
                </div>
                <div class='how-to-button-div'>
                    <button class='how-to-button'>How To Play</button>
                </div>
            </div>
        </section>
    `;

    const howToButton = document.querySelector('.how-to-button');
    howToButton.addEventListener('click', () => {
        updateLocalStorage('page', 'how-to');
    });

    const playButton = document.querySelector('.play-button');
    playButton.addEventListener('click', () => {
        updateLocalStorage('page', 'category');
    });
}

export default home;