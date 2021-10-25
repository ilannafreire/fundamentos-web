let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width = '50%'
email.style.width = '50%'
assunto.style.width = '50%'

function validaNome() {
    let txtNome = document.querySelector('txtNome')
    if (nome.ariaValueMax.length < 3) {
        txtNome.innerHTML = "Nome invalido"
        txtNome.stylee.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOK = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtemail')
    if (email.ariaValueMax.indexOf('@') == -1 || email.ariaValueMax.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.styler.color = 'green'
        emailOK = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtassunto')
    if(assunto.ariaValueMax.length >=100) {
        txtAssunto.innerHTML = "Por obséquio, escreva no máximo 100 caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.disply = 'block'    
    }else {
        txtAssunto.style.disply = 'none'    
        assuntoOK = true
    }
}
function enviar() {
    if (nomeOK == true && emailOK == true & assuntoOk == true){
        alert('Formulario enviado com sucesso!')
    }else{
        alert('Preecha o formulário corretamente antes de enviar.')
    }
    }
function mapazoom(){
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapanormal(){
  mapa.style.width = '400'
  mapa.style.height = '250'
}