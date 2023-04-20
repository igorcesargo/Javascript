const tableBody = document.querySelector('tbody');
const ordenarPorNomeButton = document.querySelector('#ordenar-por-nome');
const ordenarPorValorButton = document.querySelector('#ordenar-por-valor');

const produtos = [
  { nome: 'Produto A', descricao: 'Descrição do Produto A', valor: 100 },
  { nome: 'Produto B', descricao: 'Descrição do Produto B', valor: 50 },
  { nome: 'Produto C', descricao: 'Descrição do Produto C', valor: 200 }
];

// Função para renderizar a tabela a partir dos dados dos produtos
function renderizarTabela() {
  let html = '';

  for (const produto of produtos) {
    html += `
      <tr>
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>R$ ${produto.valor.toFixed(2)}</td>
      </tr>
    `;
  }

  tableBody.innerHTML = html;
}

// Função para ordenar os produtos por nome
function ordenarPorNome() {
  produtos.sort((a, b) => a.nome.localeCompare(b.nome));
  renderizarTabela();
}

// Função para ordenar os produtos por valor
function ordenarPorValor() {
  produtos.sort((a, b) => a.valor - b.valor);
  renderizarTabela();
}

// Adiciona os eventos de clique nos botões de ordenação
ordenarPorNomeButton.addEventListener('click', ordenarPorNome);
ordenarPorValorButton.addEventListener('click', ordenarPorValor);

// Renderiza a tabela inicialmente
renderizarTabela();