(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();function n(e,t){const s=localStorage.getItem(e);localStorage.setItem(e,t);const o=new StorageEvent("storage",{key:e,oldValue:s,newValue:t,url:window.location.href,storageArea:localStorage});window.dispatchEvent(o)}function p(){document.querySelector("body").innerHTML=`
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
    `,document.querySelector(".how-to-button").addEventListener("click",()=>{n("page","how-to")}),document.querySelector(".play-button").addEventListener("click",()=>{n("page","category")})}function b(){document.querySelector("body").innerHTML=`
        <section class='how-to-section'>
            <div class='navbar'>
                <button class='back-button'><img src='images/icon-back.svg' alt='Back Arrow to go to previous page'></button>
                <img src='images/howToPlay.svg' alt='Text reading, How to Play'/>
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
    `,document.querySelector(".back-button").addEventListener("click",()=>{n("page","home")})}function w(){document.querySelector("body").innerHTML=`
        <section class='how-to-section'>
            <div class='navbar'>
                <button class='back-button'><img src='images/icon-back.svg' alt='Back Arrow to go to previous page'></button>
                <img src='images/Category.svg' alt='Text reading, Pick A Category'/>
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
    `,document.querySelector(".back-button").addEventListener("click",()=>{n("page","home")}),document.querySelectorAll(".category-div button").forEach(s=>{s.addEventListener("click",()=>{n("category",s.id),n("page","hangman")})})}const L={movies:[{name:"The Godfather",selected:!1},{name:"Titanic",selected:!1},{name:"Inception",selected:!1},{name:"Gladiator",selected:!1},{name:"Casablanca",selected:!1},{name:"Psycho",selected:!1},{name:"Avatar",selected:!1},{name:"Jaws",selected:!1},{name:"Frozen",selected:!1},{name:"The Matrix",selected:!1},{name:"Goodfellas",selected:!1},{name:"Braveheart",selected:!1},{name:"Fight Club",selected:!1},{name:"Pulp Fiction",selected:!1},{name:"Forrest Gump",selected:!1},{name:"The Lion King",selected:!1},{name:"Back to the Future",selected:!1},{name:"Jurassic Park",selected:!1},{name:"Blade Runner",selected:!1},{name:"Star Wars",selected:!1},{name:"The Dark Knight",selected:!1},{name:"The Big Lebowski",selected:!1},{name:"The Wizard of Oz",selected:!1},{name:"Schindler's List",selected:!1},{name:"Toy Story",selected:!1},{name:"The Silence of the Lambs",selected:!1},{name:"Alien",selected:!1},{name:"Interstellar",selected:!1},{name:"Raiders of the Lost Ark",selected:!1},{name:"La La Land",selected:!1}],"tv shows":[{name:"Breaking Bad",selected:!1},{name:"South Park",selected:!1},{name:"Game of Thrones",selected:!1},{name:"Stranger Things",selected:!1},{name:"The Sopranos",selected:!1},{name:"Friends",selected:!1},{name:"The Office",selected:!1},{name:"Sherlock",selected:!1},{name:"Black Mirror",selected:!1},{name:"The Crown",selected:!1},{name:"Westworld",selected:!1},{name:"Better Call Saul",selected:!1},{name:"Orange Is the New Black",selected:!1},{name:"The Simpsons",selected:!1},{name:"Arrested Development",selected:!1},{name:"Succession",selected:!1},{name:"Fargo",selected:!1},{name:"Mad Men",selected:!1},{name:"The West Wing",selected:!1},{name:"Dexter",selected:!1},{name:"Rick and Morty",selected:!1},{name:"Lost",selected:!1},{name:"Doctor Who",selected:!1},{name:"The Walking Dead",selected:!1},{name:"Peaky Blinders",selected:!1},{name:"Buffy the Vampire Slayer",selected:!1},{name:"The Big Bang Theory",selected:!1},{name:"Curb Your Enthusiasm",selected:!1},{name:"Ted Lasso",selected:!1},{name:"True Detective",selected:!1}],countries:[{name:"Australia",selected:!1},{name:"Brazil",selected:!1},{name:"Canada",selected:!1},{name:"Denmark",selected:!1},{name:"Egypt",selected:!1},{name:"France",selected:!1},{name:"Germany",selected:!1},{name:"Hungary",selected:!1},{name:"India",selected:!1},{name:"Japan",selected:!1},{name:"Kenya",selected:!1},{name:"Luxembourg",selected:!1},{name:"Mexico",selected:!1},{name:"Netherlands",selected:!1},{name:"Oman",selected:!1},{name:"Peru",selected:!1},{name:"Qatar",selected:!1},{name:"Russia",selected:!1},{name:"Spain",selected:!1},{name:"Thailand",selected:!1},{name:"United Kingdom",selected:!1},{name:"Vietnam",selected:!1},{name:"Italy",selected:!1},{name:"United States",selected:!1},{name:"China",selected:!1},{name:"South Africa",selected:!1},{name:"New Zealand",selected:!1},{name:"Argentina",selected:!1},{name:"Belgium",selected:!1},{name:"Chile",selected:!1}],"capital cities":[{name:"Tokyo",selected:!1},{name:"Paris",selected:!1},{name:"London",selected:!1},{name:"Kuala Lumpur",selected:!1},{name:"Berlin",selected:!1},{name:"Ottawa",selected:!1},{name:"Canberra",selected:!1},{name:"Moscow",selected:!1},{name:"Beijing",selected:!1},{name:"New Delhi",selected:!1},{name:"Copenhagen",selected:!1},{name:"Cairo",selected:!1},{name:"Madrid",selected:!1},{name:"Rome",selected:!1},{name:"Buenos Aires",selected:!1},{name:"Bangkok",selected:!1},{name:"Vienna",selected:!1},{name:"Seoul",selected:!1},{name:"Jakarta",selected:!1},{name:"Lisbon",selected:!1},{name:"Riyadh",selected:!1},{name:"Helsinki",selected:!1},{name:"Oslo",selected:!1},{name:"Stockholm",selected:!1},{name:"Athens",selected:!1},{name:"Dublin",selected:!1},{name:"Prague",selected:!1},{name:"Budapest",selected:!1},{name:"Warsaw",selected:!1},{name:"Amsterdam",selected:!1}],animals:[{name:"Elephant",selected:!1},{name:"Lion",selected:!1},{name:"Giraffe",selected:!1},{name:"Penguin",selected:!1},{name:"Dolphin",selected:!1},{name:"Tiger",selected:!1},{name:"Kangaroo",selected:!1},{name:"Panda",selected:!1},{name:"Zebra",selected:!1},{name:"Polar Bear",selected:!1},{name:"Cheetah",selected:!1},{name:"Rhino",selected:!1},{name:"Buffalo",selected:!1},{name:"Koala",selected:!1},{name:"Gorilla",selected:!1},{name:"Chimpanzee",selected:!1},{name:"Crocodile",selected:!1},{name:"Flamingo",selected:!1},{name:"Peacock",selected:!1},{name:"Jaguar",selected:!1},{name:"Leopard",selected:!1},{name:"Wolf",selected:!1},{name:"Fox",selected:!1},{name:"Bald Eagle",selected:!1},{name:"Owl",selected:!1},{name:"Frog",selected:!1},{name:"Shark",selected:!1},{name:"Octopus",selected:!1},{name:"Turtle",selected:!1},{name:"Snake",selected:!1}],sports:[{name:"Soccer",selected:!1},{name:"Basketball",selected:!1},{name:"Tennis",selected:!1},{name:"Baseball",selected:!1},{name:"Rock Climbing",selected:!1},{name:"Swimming",selected:!1},{name:"Volleyball",selected:!1},{name:"Table Tennis",selected:!1},{name:"Badminton",selected:!1},{name:"Rugby",selected:!1},{name:"Cricket",selected:!1},{name:"Hockey",selected:!1},{name:"Boxing",selected:!1},{name:"Martial Arts",selected:!1},{name:"Fencing",selected:!1},{name:"Archery",selected:!1},{name:"Skiing",selected:!1},{name:"Bobsleigh",selected:!1},{name:"Cycling",selected:!1},{name:"Curling",selected:!1},{name:"Surfing",selected:!1},{name:"Diving",selected:!1},{name:"Gymnastics",selected:!1},{name:"Athletics",selected:!1},{name:"Rowing",selected:!1},{name:"Sailing",selected:!1},{name:"Canoeing",selected:!1},{name:"Ice Hockey",selected:!1},{name:"Triathlon",selected:!1},{name:"American Football",selected:!1}]},S={categories:L},T=`<img src="images/paused.svg" alt="Text that says, 'Paused'"/>`,B=`<img src="images/you-win.svg" alt="Text that says, 'You Win'"/>`,k=`<img src="images/you-lose.svg" alt="Text that says, 'You Lose'"/>`;let C=T;function q(e){const t=e.replace("-"," "),s=S.categories[t],o=Math.floor(Math.random()*s.length);return s[o].name}function E(e,t){return!!t.includes(e.toLowerCase())}function A(e,t){e===t&&(document.querySelector(".menu-title").innerHTML=B,document.querySelector(".navy-overlay").classList.add("show"),document.querySelector(".hangman-menu-div").classList.add("show"))}function M(e){e===0&&(document.querySelector(".menu-title").innerHTML=k,document.querySelector(".navy-overlay").classList.add("show"),document.querySelector(".hangman-menu-div").classList.add("show"))}function I(e){return e!==" "}function O(e){const t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];let s=100,a=q(e).toLowerCase().split("");const l=a.filter(I).length;let c=0;document.querySelector("body").innerHTML=`
        <section class='hangman-section'>
            <div class='navy-overlay'></div>
            <div class='hangman-menu-div'>
                <div class='menu-title'>${C}</div>
                <div class='menu-options-div'>
                    <button class='menu-option continue'>Continue</button>
                    <button class='menu-option new-category'>New Category</button>
                    <button class='menu-option quit-game'>Quit Game</button>
                </div>
            </div>
            <div class='hangman-nav'>
                <div class='left'>
                    <button class='hamburger-nav'><img src='images/icon-menu.svg' alt='Hamburger navigation button'/></button>
                    <h2>${e.replace("-"," ")}</h2>
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
    `;const v=document.querySelector("span.progress-bar-inside"),f=document.querySelector(".hidden-word-div");a.forEach(d=>{d===" "?f.innerHTML+="<br/>":f.innerHTML+=`<span class="hidden-letter" data-hiddenLetter="${d}"></span>`});const y=document.querySelector(".letters-div");t.forEach(d=>{y.innerHTML+=`<span class='letter' data-letter='${d}'>${d}</span>`}),document.querySelectorAll(".letter").forEach(d=>{d.addEventListener("click",u=>{if(!u.target.classList.contains("disabled")){u.target.classList.add("disabled");const r=u.target.dataset.letter;E(r,a)?document.querySelectorAll(`span[data-hiddenLetter="${r.toLowerCase()}"]`).forEach(h=>{h.classList.add("opacity-one"),h.innerHTML=`<span class='found-letter' data-found-letter='${r}'>${r}</span>`,c++}):(s-=12.5,v.style.width=`${s}%`),M(s),A(l,c)}})}),document.querySelector(".continue").addEventListener("click",()=>{document.querySelector(".navy-overlay").classList.remove("show"),document.querySelector(".hangman-menu-div").classList.remove("show"),(s===0||l===c)&&location.reload()}),document.querySelector(".new-category").addEventListener("click",()=>{n("page","category")}),document.querySelector(".quit-game").addEventListener("click",()=>{n("page","home")}),document.querySelector(".hamburger-nav").addEventListener("click",()=>{document.querySelector(".navy-overlay").classList.add("show"),document.querySelector(".hangman-menu-div").classList.add("show")})}let i=localStorage.getItem("page"),m=localStorage.getItem("category");i||(localStorage.setItem("page","home"),i="home");m||localStorage.setItem("category","");function g(e,t=""){document.body.removeAttribute("class"),e==="home"?(document.body.classList.add(e),p()):e==="how-to"?(document.body.classList.add(e),b()):e==="category"?(document.body.classList.add(e),w()):e==="hangman"&&(document.body.classList.add(e),O(t))}g(i,m);window.addEventListener("storage",()=>{i=localStorage.getItem("page"),m=localStorage.getItem("category"),g(i,m)});
