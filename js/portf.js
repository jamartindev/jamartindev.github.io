document.addEventListener('DOMContentLoaded', function () {

    const inputContainers = document.getElementsByClassName('input-form');

    const inputFields = document.getElementsByTagName('input');

    for (let i = 0; i < inputFields.length; i++) {
    
        inputFields[i].addEventListener('focus', function ()  {
            inputContainers[i].classList.add('active');

        });

        inputFields[i].addEventListener('blur', function () {
            inputContainers[i].classList.remove('active');
    
        });
    };
});

