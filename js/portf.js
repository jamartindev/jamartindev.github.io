document.addEventListener('DOMContentLoaded', function () {
    
    const inputContainers = document.getElementsByClassName('input-form');
    const inputFields = document.querySelectorAll('input, textarea');

    for (let i = 0; i < inputFields.length; i++) {

        inputFields[i].addEventListener('focus', function () {
            inputContainers[i].classList.add('active');
        });

        inputFields[i].addEventListener('blur', inputControl);

        function inputControl() {
            if (inputFields[i].value.trim().length === 0) {
                inputContainers[i].classList.remove('active');
            } return;
        };
    };

    let navLinks = document.getElementsByClassName('a-nav');
    
        
        

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', select);
        };        
                
        
            function select(event) {
                event.preventDefault();
                let anchor = event.target.hash;
                window.location.replace(anchor);
                
                window.addEventListener('hashchange', function () {
                    
                    if (location.hash === anchor) {
                        event.target.classList.add('selected');
                    } else {
                        event.target.classList.remove('selected');
                    }
                });
            };

}); 



/*et getAnchor = [];

        for (let i = 0; i < navLinks.length; i++) {
            getAnchor.push(navLinks[i].getAttribute('href'));
        } */

