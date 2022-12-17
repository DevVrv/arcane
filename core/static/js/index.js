"use strict"; 
document.addEventListener('DOMContentLoaded', () => {

    function HomeTab() {

        // <-- Get elements
        const tab = $('.tab');
        const buttons = $('button', tab);
        
        buttons.event({
            action: () => {
                console.log(buttons);
            }
        })
    }
    HomeTab();

});