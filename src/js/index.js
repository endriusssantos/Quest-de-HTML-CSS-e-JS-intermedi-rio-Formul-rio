const campo = document.querySelectorAll("input");
const obrigatorio = document.querySelectorAll("obrigatorio")

campo.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido")
        } else {
            input.classList.add("campo-nao-preenchido")
            obrigatorio.classList.remove("obrigatorio")
            obrigatorio.classList.add("mostrar")
        }
    });
});