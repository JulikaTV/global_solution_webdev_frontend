function mostrarConteudo() {
    const conteudo = document.getElementById('conteudo');
    const categoria = document.getElementById('categoria').value;

    let texto = '';

    switch (categoria) {
        case 'Conta e Segurança':
            texto = '<h2>Como faço para criar uma conta no jogo?</h2><p>Para criar uma conta clique em "Cadastro", lá vc irá preencher com nome de usuário, senha, e-mail e data de nascimento. Se você já possui uma conta basta fazer o login. </p>';
            break;
        case 'Atualizações':
            texto = '<h2>O jogo recebe atualizações regulares?</h2><p>Sim, o jogo recebe atualizações regulares para melhorar a experiência dos jogadores.</p>';
            break;
        case 'Público':
            texto = '<h2>Para quem o jogo é destinado?</h2><p>O jogo é destinado a jovens de 13 a 25 anos, interessados em temas como sustentabilidade, mudanças climáticas e energias renováveis. Ele atrai aqueles que buscam experiências que vão além do entretenimento, oferecendo uma narrativa profunda e a oportunidade de refletir sobre questões ambientais urgente.</p>';
            break;
        case 'Jogabilidade':
            texto = '<h2>Posso jogar Amaryllis: The Green End offline?</h2><p>Sim, você pode jogar Amaryllis: The Green End offline. No entanto, para acessar recursos adicionais, como atualizações, será necessário estar conectado à internet.</p>';
            break;
        default:
            texto = '<h2>Selecione uma categoria para ver o conteúdo.</h2>';
    }

    conteudo.innerHTML = texto;

}