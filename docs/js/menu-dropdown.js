// burguer
function menuBurguer(burguer) {
    burguer.classList.toggle("change");
  }

// dropdown menu
function showDropDown() {
    var burguer = document.querySelector('.menu')
    var cabecalho = document.querySelector('.cabecalho')

    burguer.classList.toggle("responsive")
    cabecalho.classList.toggle("responsive")
  }