document.addEventListener("DOMContentLoaded", function () {
  // Animaciones etiquetas de formulario.
  const inputContainers = document.getElementsByClassName("input-form");
  const inputFields = document.querySelectorAll("input, textarea");

  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener("focus", function () {
      inputContainers[i].classList.add("active");
    });

    inputFields[i].addEventListener("blur", inputControl);

    function inputControl() {
      if (inputFields[i].value.trim().length === 0) {
        inputContainers[i].classList.remove("active");
      }
      return;
    }
  }

  let navLinks = document.getElementsByClassName("a-nav");
  let containers = document.getElementsByClassName("cont");

  window.addEventListener("load", function () {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", select);

      if (location.href.includes(navLinks[i].href)) {
        navLinks[i].classList.add("selected");
      } else {
        navLinks[i].classList.remove("selected");
      }
    }
    scrollT();// Función que redirige al sector correspondiente del portfolio y centra el scroll en el div
  });

  function select(event) {
    event.preventDefault();
    let anchor = event.target.href;
    window.location.replace(anchor); 
  }

  function scrollT() {
    for (let cont of containers) {
        const containerHeight = cont.clientHeight; // Alto de elemento contenedor en píxeles
        const scrollPosition =
          cont.offsetTop - // Distancia entre comienzo de elemento envolvente del contenedor y comienzo del contenedor
          (window.innerHeight - // Altura de ventana del navegador
            containerHeight) /
            2; //Cálculo de píxeles para que el navegador se centre en el div al clickear navlink
        window.scrollTo(0, scrollPosition); //Scrollea hasta pos 0 en X y el centro del div en Y
    }
    
  
  }

 
 
  let skills;

  const getSkills = async () => {
    try {
      const response = await fetch("/data/skills.json");
      if (response.ok) {
        console.log("Promise resolved and HTTP status is ok");
        const data = await response.json();
        skills = data;
        appendData();
      } else {
        if (response.status === 404) throw new Error("404, Not found");
        if (response.status === 500)
          throw new Error("500, internal server error");
        throw new Error(response.status);
      }
    } catch (error) {
      console.log("Fetch", error);
    }
  };

  getSkills();

  function appendData() {
    let divSkills = document.querySelector('#skills');

    for (let skill of skills) {
      divSkills.innerHTML += 
      `<div class="col-2 skcard p-5">
      <figure>
        <img class="skill" src="${skill.img_url}" alt="${skill.name} logo" />
        <figcaption>${skill.name}</figcaption>
        <figcaption>${skill.expe}</figcaption>
      </figure>
      </div>
      `;
    }
  }
  


});
