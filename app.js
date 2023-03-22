'use strict'
const btnTheme = document.querySelector('.btn')
const icone = document.querySelector('.icone')

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    if( icone.src.includes('light.svg') ) {
      icone.src = 'dark.svg';
      
    }else {
      icone.src = 'light.svg';
    }
    
});


