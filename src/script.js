const btnCadastrar = document.getElementById("btnCadastrar");

const cadastrar = () => {

    const nome = document.querySelector("#nome").value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha == confirmarSenha) {
        const usuario = {
            nome_usuario: nome,
            email_usuario: email,
            senha_usuario: senha
        }

        fetch("http://localhost:8080/users", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));

        alert("Cadastro realizado com sucesso!")
    }
    else {
        alert("Senhas diferentes");
    }

   
}

btnCadastrar.addEventListener("click", cadastrar);