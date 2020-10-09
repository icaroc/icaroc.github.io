// burguer
function menuBurguer(burguer) {
    burguer.classList.toggle("change");
  }

// dropdown menu
function showDropDown() {
    var burguer = document.querySelector('.menu')
    var cabecalho = document.querySelector('.cabecalho')
    var cabecalhoContent = document.querySelector('.cabecalho-content')

    burguer.classList.toggle("responsive")
    cabecalho.classList.toggle("responsive")
    cabecalhoContent.classList.toggle("responsive")
  }