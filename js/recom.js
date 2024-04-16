document.addEventListener('DOMContentLoaded', ()=> {

    let form = document.querySelector("#contacto");

    form.addEventListener("submit", (event) => {// Validaciones con bootstrap
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();
            appendRecom()
            Swal.fire(
                'Successfuly posted',
                'Thank you for leaving a recommendation!',
                'success'
              )
        }
        form.classList.add("was-validated");
      },
      false
    );
  

    function appendRecom() {
        let recom = document.querySelector('#recom');
        let name = document.querySelector('#nombre');
        let msg = document.querySelector('#mensaje');
        
        recom.innerHTML += 
        `<div class="col recom">
            <p> ${msg.value.trim()}</p>
            <p>${name.value.trim()}</p>
        </div>
        `
    }

});

/* <div class="col recom">
<p>
  I have the pleasure of knowing Juan Andrés personally and I can attest that he is a person with very good
  determination.
  He has great ability to work as a team, he is proactive and always seeks to continue learning.
</p> */