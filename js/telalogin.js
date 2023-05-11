const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelectorAll("main");

inputs.forEach((inp) => {
    inp.addEventListener("focus", () =>{
        inp.classList.add("active");
    });

    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});

document.getElementById('sign-in-form').addEventListener('submit', event => {
    event.preventDefault();

    const userEmail = document.getElementById('usuario').value
    const userPass = document.getElementById('senha').value

    if(!localStorage.hasOwnProperty("usuarios")) {
        alert("Não há usuários cadastrados");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

    const logged = usuarios.find(usuario => usuario.email_usuario === userEmail && usuario.senha_usuario === userPass);

    if(logged){
        location.href = 'home.html'
    }else{
        alert('Usuário e/ou senha incorretos')
    }
});

