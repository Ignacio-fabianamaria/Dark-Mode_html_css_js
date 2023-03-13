'use strict'

const btnTheme = document.querySelector('.btn');

btnTheme.addEventListener('click', function() {
    //usando método toggle para alternar o elemento para a classe dark-theme.
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "ligth-theme") {
     
        this.textContent = "Dark";
    }
    else {
        
        this.textContent = "Ligth";
    }
    
});


