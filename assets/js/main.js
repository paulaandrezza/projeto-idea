const differentialsInfo = [
  {
    title: 'atendimento',
    info: 'Prezamos pela satisfação dos nossos clientes, dando toda assistência necessária.',
  },
  {
    title: 'valores',
    info: 'Prestamos serviços de qualidade, com valores que cabem no seu bolso.',
  },
  {
    title: 'qualidade',
    info: 'A confiança no nosso trabalho é estabelecida através dos serviços de qualidade que prestamos aos nosssos clientes.',
  },
  {
    title: 'pontualidade',
    info: 'Prezamos por um bom serviço entregue com pontualidade e responsabilidade.',
  },
]


const differentials = document.getElementById('differentials-list');

function convertArrayToLi(differentials) {
  return `
    <li>
      <img src="assets/img/${differentials.title}.png" alt="icone de ${differentials.title}">
      <h3>${differentials.title}</h3>
      <p>${differentials.info}</p>
    </li>
  `
}

function createHtmlDifferentials() {
  const newHtml = differentialsInfo.map(convertArrayToLi).join('')
  differentials.innerHTML = newHtml
}

createHtmlDifferentials();