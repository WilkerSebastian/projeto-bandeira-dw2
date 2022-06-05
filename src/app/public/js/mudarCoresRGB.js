let selecao = 0

function mudarCoresRGB() {

    const cores = ["#E02822" , "#D71FE0" , "#9135E0" , "#373BE0" , "#47D4E0" , "#3CE04F" , "#F7F72D" , "#EDB22B" , "#FF740E"]

    selecao++;

    if (selecao >= (cores.length - 1)) {
        
        selecao = 0

    }

    return cores[selecao]

}

const btns = $(".botao-sam")

function mudarBotoes(){

    setTimeout(() => {

        btns.css("border-bottom" , `2px solid ${mudarCoresRGB()}`)

        window.requestAnimationFrame(mudarBotoes)

    } , 200)

}

mudarBotoes()