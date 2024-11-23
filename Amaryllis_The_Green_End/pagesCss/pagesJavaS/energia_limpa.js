const dicas = [
    {
        titulo: "Crie biogás com borras de café!",
        texto: "Você pode usar as borras de café para criar biogás e fertilizante. Procure pacotes de café abandonados em supermercados. Eles são um recurso valioso para a criação de energia limpa."
    },
    {
        titulo: "Crie biogás com materiais orgânicos!",
        texto: "O biogás é gerado pela decomposição de materiais orgânicos, como restos de comida, em ambiente sem oxigênio. É uma solução sustentável para produzir energia limpa."
    },
    {
        titulo: "Crie um painel solar caseiro!",
        texto: "Painéis solares convertem a luz do sol em energia elétrica limpa e sustentável, reduzindo impactos ambientais."
    },
    {
        titulo: "Crie Microturbinas eólicas verticais!",
        texto: "As microturbinas eólicas verticais são compactas e silenciosas, ideais para áreas residenciais com espaço limitado e ventos moderados, convertendo a energia do vento em eletricidade de forma eficiente."
    },
    {
        titulo: "Crie turbinas eólicas horizontais!",
        texto: "As turbinas horizontais são mais tradicionais e maiores, aproveitando ventos constantes para gerar energia limpa, sendo adequadas para quintais ou áreas com maior fluxo de vento. "
    },
    {
        titulo: "Crie captação de energia hidráulica caseira!",
        texto: "Pequenas turbinas podem aproveitar a força da água em riachos ou sistemas de bombeamento."
    }
];


function exibirCards(dicasFiltradas) {
    const container = document.getElementById("cards-container");
    container.innerHTML = '';

    dicasFiltradas.forEach((dica, index) => {
        const card = document.createElement("article");
        card.classList.add("cards", position-${index + 1});
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
