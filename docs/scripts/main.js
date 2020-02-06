import view from './view.js';

/**
 * Yes we're using document functions in the main.js but it's
 * one of the rare cases where it's allowed. Almost everything else
 * should be in the view.js
 */
function assignEventListeners(){
    document.getElementById('gen-orange')
        .addEventListener('click', function(){
            view.changeToOrange();
        })

    document.getElementById('gen-violet')
        .addEventListener('click', function(){
            view.changeToViolet();
        })
}


assignEventListeners();