let indice = []
sectorCarruseles = document.getElementById('sectorCarruseles');
carruseles = [spa, juegos]
let carrusel=[]
for (let i = 0; i < carruseles.length; i++) {
    carrusel[i]=document.createElement('div')
    carrusel[i].classList.add('carrusel')
    carrusel[i].innerHTML=`<button onClick=boton(${i},-1)> -- </button>`
    carrusel[i].innerHTML+=`<div class="slideCarrusel>`
    carrusel[i].innerHTML+=dameCards(carruseles[i])
    carrusel[i].innerHTML+=`</div>`
    carrusel[i].innerHTML+=`<button onClick=boton(${i},+1)> ++ </button>`
    indice[i]=0

    sectorCarruseles.appendChild(carrusel[i])


}
function dameCards(cards) {
    let string=''
    cards.forEach(card => {
        string += '<article>';
        // if (card.video != "") string += '<div class="video"><iframe class="video" src="' + card.video + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>';
        // else {
        //     string += '<img class="video" src="imagenes/' + card.imagen + '"></img>';
        // }
        string += '<div class="titulo"><h2>' + card.titulo + '</h2></div>';
        string += '<div class="datos"> <div class="categoria"> <h3>' + card.categoria + '</h3> </div>'
        string += '<div class="categoria fecha"><h5>' + card.fecha + '</h5></div>';
        string += '<div class="descripcion"><h4>' + card.descripcion + '</h4> </div> <br>';
        string += '<div class="lenguaje"> <h4>Lenguaje: ' + card.lenguaje + '</h4></div>';
        if (card.repo != "") string += '<div class="repo"><a target="_blank" class="repoLink" href="' + card.repo + '">Ir al Repositorio GitHub</a></h4></div>';
        if (card.link != "") string += '<div class="btnContenedor"> <button class="boton"> <a target="_blank" href="' + card.link + '">' + card.linkTexto + '</a> </button></div></div></article>';
        string += '</article>';
        // console.log(i);
        // console.log(section);
        // section[i].innerHTML += string;
    })
    return string
}

function boton(carrusel,sentido){
    indice[carrusel]+=sentido
    if (indice[carrusel]==-1) indice[carrusel]=carruseles[carrusel].length-1
    if (indice[carrusel]==carruseles[carrusel].length) indice[carrusel]=0
    
    console.log('carr',carrusel,'i',indice[carrusel]);
}