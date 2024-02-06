const displayFront = document.querySelector(".front")
const displayCsharp = document.querySelector(".Csharp")
const tituloClicavelfront = document.getElementById("titulofront")
const tituloClicavelCsharp = document.getElementById("tituloCsharp")

tituloClicavelfront.addEventListener('click', () => {
    displayFront.style.display = 'block'
    displayCsharp.style.display = 'none'
})

tituloClicavelCsharp.addEventListener('click', () => {
    displayCsharp.style.display = 'block'
    displayFront.style.display = 'none'
})

