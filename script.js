// Busca um elemento no HTML e salva em uma variavel
let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconex = document.getElementById("icone-x")

function abrefechamenu() {
    // se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {

        //    abrir o menu
        menu.classList.remove("menu-fechado")

        //  mostra icone x 
        iconex.style.display = "inline"

        // Esconder o icones barras 
        iconebarras.style.display = "none"

    }
    // senão
    else {
        // fechar o menu
        menu.classList.add("menu-fechado")

        // esconder icone x
        iconex.style.display = "none"

        // mostrar icone barras
        iconebarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    // mostrar icone x 
    iconex.style.display = "inline"

    // esconder icone barras
    iconebarras.style.display = "none"
}