document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // // p n ter envio padrão

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    
    // para limpar outros erros
    document.getElementById("error-name").innerText = "";
    document.getElementById("error-password").innerText = "";

    let hasError = false;

    // exibe msg de erro
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

    // Se não houver erro, exibe mensagem de sucesso
    if (!hasError) {
      // Mensagem de sucesso
      alert("Login efetuado com sucesso!");

      // Redireciona para a página inicial (home) após 1 segundo
      setTimeout(function () {
        window.location.href = "/index.html";  // Substitua "index.html" pela sua página inicial
      }, 1000); // O redirecionamento acontecerá após 1 segundo
    } else {
      // Caso haja erro, exibe a mensagem de erro
      alert("Usuário ou senha incorretos.");
    }
  });
