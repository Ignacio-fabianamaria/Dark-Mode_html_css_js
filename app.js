'use strict'
const btnTheme = document.querySelector('.btn')
const icone = document.querySelector('.icone')

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    if( icone.src.includes('light00.svg') ) {
      icone.src = 'dark00.svg';
      
    }else {
      icone.src = 'light00.svg';
    }
    
});


