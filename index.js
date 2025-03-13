document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastro-form");
    const mensagem = document.getElementById("mensagem");
    const formContainer = document.getElementById("form-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();

        if (nome === "" || email === "" || telefone === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const usuario = {
        nome: nome,
        email: email,
        telefone: telefone
        };

        console.log(usuario);

        formContainer.classList.add("d-none");
        mensagem.classList.remove("d-none");
    });
});
