const menu = document.querySelector('.main-list');
const openMenuBtn = document.querySelector('.open-menu__btn');
const closeMenuBtn = document.querySelector('.close-menu__btn');
const backdrop = document.querySelector('.backdrop');
const moreOptionsBtn = document.getElementsByClassName('moreOptions');
const imageHero = document.querySelector('.image-hero');

function toggleMenu () {
    menu.classList.toggle('display-block');
    backdrop.classList.toggle('display-block');
}

for (const option of moreOptionsBtn) {
    const scndList = option.nextElementSibling;
    const optionImg = option.querySelector('img');
    option.addEventListener('click', () => {
        scndList.classList.toggle('display-block');
        if(scndList.classList.contains('display-block')) {
             optionImg.src = './images/icon-arrow-up.svg'
        } else {
            optionImg.src = './images/icon-arrow-down.svg'
        }
    })
    console.log(optionImg);
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if(window.innerWidth < 800) {
        imageHero.src = './images/image-hero-mobile.png'
    } else {
        imageHero.src = './images/image-hero-desktop.png';
    }

    if(menu.classList.contains('display-block') && window.innerWidth > 800) {
        menu.classList.remove('display-block');
        backdrop.classList.remove('display-block');
    }
})