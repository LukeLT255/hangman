import {updateLocalStorage} from './utils'

function category() {
    document.querySelector('body').innerHTML = `
        <section class='how-to-section'>
            <div class='navbar'>
                <button class='back-button'><img src='../../assets/images/icon-back.svg' alt='Back Arrow to go to previous page'></button>
                <img src='../../assets/images/Category.svg' alt='Text reading, Pick A Category'/>
            </div>
            <div class='category-div-container'>
                <div class='category-div one'>
                    <button id='movies'><h3>Movies</h3></button>
                </div>
                <div class='category-div two'>
                    <button id='tv-shows'><h3>Tv Shows</h3></button>
                </div>
                <div class='category-div three'>
                    <button id='countries'><h3>Countries</h3></button>
                </div>
                <div class='category-div four'>
                    <button id='capital-cities'><h3>Capital Cities</h3></button>
                </div>
                <div class='category-div five'>
                    <button id='animals'><h3>Animals</h3></button>
                </div>
                <div class='category-div six'>
                    <button id='sports'><h3>Sports</h3></button>
                </div>
            </div>
        </section>
    `;

    const howToButton = document.querySelector('.back-button');
    howToButton.addEventListener('click', () => {
        updateLocalStorage('page', 'home');
    });

    const catButtons = document.querySelectorAll('.category-div button');
    catButtons.forEach((item) => {
        item.addEventListener('click', () => {
            updateLocalStorage('category', item.id);
            updateLocalStorage('page', 'hangman');
        });
    });

}

export default category;