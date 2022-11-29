const modalAviso        = document.querySelector('.modal')
const modalWraper       = document.querySelector('#modalWraper')
const modalWraperAviso  = document.querySelector('#modalWraperA')
const modalWraperSenha  = document.querySelector('#modalWraperSenha')
const modalSenha        = document.querySelector('.modalSenha')
const mensagem          = document.querySelector('.mensagemModal')
const btnFechar         = document.querySelector('.btnFechar')
const btnEsqueceuFechar = document.querySelector('.btnEsqueceuFechar')
const btnLogin          = document.querySelector('.btnLogin')
const btnSenha          = document.querySelector('.esqueceuSenha')
const inputEmail        = document.querySelector('.inputEmail')
const inputSenha        = document.querySelector('.inputSenha')
const btnCadastrar      = document.querySelector('.cadastro')
const modalCadastro     = document.querySelector('.modalCadastro')
const btnCadastroFechar = document.querySelector('.btnCadastroFechar')


btnLogin.addEventListener("click", async (event) => {
    event.preventDefault
    if(inputEmail.value == "" || inputSenha.value == ""){
        modalAviso.classList.add("openModal")
        modalWraperAviso.classList.add("modalWraper")
        
    }
})

btnSenha.addEventListener("click", async (event) => {
    event.preventDefault
    modalSenha.classList.add("openModal")
    modalWraperSenha.classList.add("modalWraper")

})

btnCadastrar.addEventListener("click", async (event) => {
    event.preventDefault
    modalCadastro.classList.add("openModal")
    modalWraper.classList.add("modalWraper")
})

btnFechar.addEventListener("click", async (event) => {
    event.preventDefault
    modalAviso.classList.remove("openModal")
    modalWraperAviso.classList.remove("modalWraper")
})

btnCadastroFechar.addEventListener("click", async (event) => {
    event.preventDefault
    modalCadastro.classList.remove("openModal")
    modalWraper.classList.remove("modalWraper")
})

btnEsqueceuFechar.addEventListener("click", async (event) => {
    event.preventDefault
    modalSenha.classList.remove("openModal")
    modalWraperSenha.classList.remove("modalWraper")
})
