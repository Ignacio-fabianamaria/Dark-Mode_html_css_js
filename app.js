'use strict'
const btnTheme = document.querySelector('.btn')

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className === "dark-theme") {
      document.body.classList.toggle('light-theme')
    }
    
});


