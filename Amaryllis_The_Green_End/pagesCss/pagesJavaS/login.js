document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // // Para não ter envio padrão

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    
    // Para limpar outros erros
    document.getElementById("error-name").innerText = "";
    document.getElementById("error-password").innerText = "";

    let hasError = false;

    // Exibe mensagem de erro
    let errorMessage = {
      nome: (error) => {
        document.getElementById("error-name").innerText = error;
        hasError = true;
      },
      senha: (error) => {
        document.getElementById("error-password").innerText = error;
        hasError = true;
      }
    };

    // Validações
    if (nome === "" || senha === "") {
      errorMessage.nome("Usuário ou senha não podem estar em branco.");
      errorMessage.senha("Usuário ou senha não podem estar em branco.");
    }

    // Verifica se o usuário e senha estão corretos
    if (nome !== "admin" || senha !== "admin") {
      errorMessage.nome("Usuário ou senha incorretos.");
      errorMessage.senha("Usuário ou senha incorretos.");
    }

    // Se estiver certo, exibe mensagem de sucesso
    if (!hasError) {
      alert("Login efetuado com sucesso!");

      // Redireciona para a página home
      setTimeout(function () {
        window.location.href = "/index.html";
      }, 1000);
    } else {
      alert("Usuário ou senha incorretos.");
    }
  });
