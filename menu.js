
// Abrir menu mobile
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu-mobile')

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
})

// Fechar menu mobile ao selecionar qual uma das opçãoes (Início, Especialidades...)
menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})

// Fechar menu mobile ao clicar fora das opções
overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})



//Mudar cor da página com botã 

function toggleMode() {
    // alert('Olá Will.')
    const body = document.document.body

    if (body.classList.contains('black')) {
        body.classList.add('light')
    } else{
        body.classList.add('light')
    }

    // body.classList.toggle('light')
}