const dicas = [
    {
        titulo: "O café pode ser mais do que uma bebida.",
        texto: "Você pode usar as borras de café para criar biogás e fertilizante. Procure pacotes de café abandonados em supermercados. Eles são um recurso valioso para a criação de energia limpa."
    },
    {
        titulo: "A natureza ainda oferece soluções.",
        texto: "Não subestime o poder dos materiais orgânicos. Restos de alimentos e frutas podem ser usados para gerar biogás, o combustível que pode manter você e sua família aquecidos."
    },
    {
        titulo: "A reutilização é sua melhor amiga.",
        texto: "Em um mundo sem recursos, os objetos recicláveis se tornam preciosos. Tubos plásticos e metais encontrados podem ser usados para criar painéis solares. Explore cuidadosamente."
    },
    {
        titulo: "Cada pessoa tem um história e uma lição.",
        texto: "Falar com os habitantes locais pode revelar segredos sobre os melhores locais para encontrar materiais ou até sobre antigas tecnologias de energia limpa. Sempre busque aprendizados."
    },
    {
        titulo: "Cada pequena ação importa para o futuro.",
        texto: "Cada escolha que você faz impacta o ambiente. Decisões conscientes sobre como usar os recursos podem ajudar a evitar mais danos ao planeta."
    },
    {
        titulo: "Nem tudo pode ser salvo.",
        texto: "Não se esqueça de quem nem todo problema tem uma solução imediata. O mundo está longe de ser perfeito, mas seus esforços podem começar a criar um novo caminho."
    }
];


function exibirCards(dicasFiltradas) {
    const container = document.getElementById("cards-container");
    container.innerHTML = '';

    dicasFiltradas.forEach((dica, index) => {
        const card = document.createElement("article");
        card.classList.add("cards", `position-${index + 1}`);
        card.innerHTML = `
            <h2>${dica.titulo}</h2>
            <p class="texto-cards">${dica.texto}</p>
        `;
        container.appendChild(card);
    });
}

function filtrarDicas() {
    const filtro = document.getElementById("dica").value.toLowerCase();
    const dicasFiltradas = dicas.filter(dica => 
        dica.titulo.toLowerCase().includes(filtro) || 
        dica.texto.toLowerCase().includes(filtro)
    );
    exibirCards(dicasFiltradas);
}

window.onload = function() {
    exibirCards(dicas);
};