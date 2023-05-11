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
}) 

const cadForm = document.getElementById("cad-usuario-form");

cadForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const elements = [
        document.getElementById("cpf_usuario"),
        document.getElementById("nome_usuario"),
        document.getElementById("email_usuario"),
        document.getElementById("endereço_usuario"),
        document.getElementById("telefone_usuario"),
        document.getElementById("senha_usuario")
    ];

    const cpf_usuario = elements[0].value;
    const nome_usuario = elements[1].value;
    const email_usuario = elements[2].value;
    const endereço_usuario = elements[3].value;
    const telefone_usuario = elements[4].value;
    const senha_usuario = elements[5].value;
    
    let usuarios = []
    
    if(localStorage.hasOwnProperty("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    
    usuarios.push({cpf_usuario, nome_usuario, email_usuario, endereço_usuario, telefone_usuario, senha_usuario});
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuário cadastrado com sucesso.");
    elements.forEach(element => element.value = '');

    setTimeout(()=>{
        window.location.href = 'index.html'
    }, 1000)
});

//senha forte
function validarSenhaForca(){
	var senha = document.getElementById('senha_usuario').value;
	var forca = 0;
	document.getElementById("impSenha").innerHTML = "Senha " + senha;

	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length > 7){
		forca += 25;
	}

	if((senha.length >= 5) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 20;
	}

	if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
		forca += 25;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -25;
	}

	mostrarForca(forca);
}

function mostrarForca(forca){
	document.getElementById("impForcaSenha").innerHTML = "Força: " + forca;

	if(forca < 30 ){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ff0000'>Fraca</span>";
	}else if((forca >= 30) && (forca < 50)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #FFD700'>Média</span>";
	}else if((forca >= 50) && (forca < 70)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #7FFF00'>Forte</span>";
	}else if((forca >= 70) && (forca < 100)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #008000'>Excelente</span>";
	}
}
