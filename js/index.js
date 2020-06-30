var telaLogin = document.getElementById('formulario');
var telaMsg = document.getElementById('msg');
var textMsg = document.getElementById('texto');
var usuario = document.getElementById('usuario');
var senha = document.getElementById('senha');

telaLogin.addEventListener('submit', function (e){

    if (usuario.value.length > 0) {
        if (senha.value.length > 0) {
            login("Usuário realizou login com Sucesso: " + usuario.value);
        } else {
            login("Senha em branco.");
        }
    } else {
        login("Usuário em branco.");
    }  

    e.preventDefault();
});

function login(txt){
    telaLogin.style.display = 'none';
    telaMsg.style.display = 'block';
    textMsg.innerHTML = txt;
}

function voltar(){
    telaLogin.style.display = 'block';
    telaMsg.style.display = 'none';
    textMsg.innerHTML = '';
}