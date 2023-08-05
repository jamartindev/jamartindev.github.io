document.addEventListener('DOMContentLoaded', function () {

    const inputContainers = document.getElementsByClassName('input-form');

    const inputFields = document.querySelectorAll('input, textarea');

    for (let i = 0; i < inputFields.length; i++) {
    
            inputFields[i].addEventListener('focus', function ()  {
                inputContainers[i].classList.add('active');

            });

        if (inputFields[i].value.trim().length === 0) {
                inputFields[i].addEventListener('blur', function () {
                    inputContainers[i].classList.remove('active');
                
            });
        } 
    };
});

