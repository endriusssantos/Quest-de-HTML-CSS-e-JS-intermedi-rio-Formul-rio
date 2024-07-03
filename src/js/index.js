const campos = document.querySelectorAll(".campo")
const botao = document.querySelector(".botao")

botao.addEventListener("click", (e) => {
    e.preventDefault()

    campos.forEach((input) => {
        if (input.value) {
            input.classList.add("campo-preenchido")
            input.nextElementSibling.classList.remove("mostrar")
        } else {
            input.classList.remove("campo-preenchido")
            input.classList.add("campo-nao-preenchido")
            input.nextElementSibling.classList.add("mostrar")
        }
    })
})