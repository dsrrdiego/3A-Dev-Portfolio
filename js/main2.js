const sectorCarruseles = document.getElementById('sectorCarruseles');
const carruseles = [spa, juegos];
const carrusel = [];

for (let i = 0; i < carruseles.length; i++) {
  const section = document.createElement('section');
  section.classList.add('carrusel');
  section.innerHTML = `
    <button onClick="botonMenos(${i})"> -- </button>
    ${dameCards(i).map(card => `<article>${card}</article>`).join('')}
    <button onClick="botonMas(${i})"> ++ </button>
  `;
  sectorCarruseles.appendChild(section);
}

function dameCards(c) {
  const cards = carruseles[c];
  return cards.map(card => `
    <article>
      <h2>${card.titulo}</h2>
      <p>${card.descripcion}</p>
      <button class="btn">Ir al Repositorio GitHub</button>
    </article>
  `);
}

function botonMenos(c) {
  const indice = c;
  if (indice === 0) {
    indice = carruseles.length - 1;
  } else {
    indice--;
  }
  console.log(todosLosCards[c][indice]);
  // todosLosCards[c][indice].style.setProperty('margin-left', 200);
  const art = todosLosCards[c][indice];
  art.classList.add('agrandar');
  // todosLosCards[c][indice].style.width = "300px";
}