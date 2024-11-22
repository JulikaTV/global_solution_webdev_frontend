document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Para obter valores dos campos e remove espaços extras
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value.trim();
    const termosConcordados = document.getElementById("meuCheckbox1").checked;
    const inscricaoJogo = document.getElementById("meuCheckbox2").checked;

    // Limpa mensagens de erro anteriores
    document.getElementById("error-name").innerText = "";
    document.getElementById("error-password").innerText = "";
    document.getElementById("error-email").innerText = "";
    document.getElementById("error-date").innerText = "";
    document.getElementById("error-checkbox").innerText = "";
    document.getElementById("response-message").innerText = "";

    let hasError = false; // Verificar se possui erros

    // Para exibir mensagens de erro nos campos
    let errorMessage = {
      nome: (error) => {
        document.getElementById("error-name").innerText = error;
        hasError = true;
      },
      senha: (error) => {
        document.getElementById("error-password").innerText = error;
        hasError = true;
      },
      email: (error) => {
        document.getElementById("error-email").innerText = error;
        hasError = true;
      },
      data: (error) => {
        document.getElementById("error-date").innerText = error;
        hasError = true;
      },
      checkbox: (error) => {
        document.getElementById("error-checkbox").innerText = error;
        hasError = true;
      },
    };

    // Validar
    if (nome.length < 2) {
      errorMessage.nome("O nome deve ter pelo menos 2 letras.");
    }

    if (senha.length < 2) {
      errorMessage.senha("A senha deve ter pelo menos 2 caracteres.");
    }

    if (!email) {
      errorMessage.email("O campo de e-mail não pode ficar vazio.");
    } else if (!validateEmail(email)) {
      alert("Formato de e-mail inválido.");
      hasError = true;
    }

    if (!data) {
      errorMessage.data("O campo de data de nascimento não pode ficar vazio.");
    }

    if (!termosConcordados) {
      errorMessage.checkbox("Você precisa concordar com os termos e condições.");
    }

    // Se não tiver erros, exibe mensagem de sucesso e redireciona
    if (!hasError) {
      alert(
        `Cadastro realizado com sucesso!\n\nDetalhes do Cadastro:\nNome: ${nome}\nEmail: ${email}\nData de Nascimento: ${data}\nInscrição no Jogo: ${inscricaoJogo ? "Sim" : "Não"}\nAceitou os Termos: ${termosConcordados ? "Sim" : "Não"}`
      );

      document.getElementById("response-message").innerText =
        "Cadastro realizado com sucesso! Redirecionando para o menu inicial...";

      // Redireciona após 4 segundos
      setTimeout(function () {
        window.location.href = "/index.html";
      }, 4000);
    }
  });

function validateEmail(email) {
  // Valida o formato do e-mail
  return email.includes("@") && email.split("@")[1].includes(".");
}