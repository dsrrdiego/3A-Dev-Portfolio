let indice = []
sectorCarruseles = document.getElementById('sectorCarruseles');
carruseles = [spa, juegos]
let carrusel=[]
todosLosCards=[[],[]]
for (let i = 0; i < carruseles.length; i++) {
    carrusel[i]=document.createElement('section')
    carrusel[i].classList.add('carrusel')
    carrusel[i].innerHTML+=`<button onClick=botonMenos(${i})> -- </button>`
    cards=dameCards(i,0)
    cards.forEach(card=>{
        carrusel[i].appendChild(card)
    })
    // carrusel[i].innerHTML+=dameCards(i)
    carrusel[i].innerHTML+=`<button onClick=botonMas(${i})> ++ </button>`
    indice[i]=0

    sectorCarruseles.appendChild(carrusel[i])


}
function dameCards(c) {
    // console.log(cards,i);
    let respuesta=[]
    cards=carruseles[c]
    for (let i=0;i<carruseles[c].length;i++){
        card=cards[i]
    // card.forEach(card => {
        let articuloNuevo=document.createElement('article')
        todosLosCards[c][i]=articuloNuevo
        let string=''
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
        articuloNuevo.innerHTML=string
        respuesta.push(articuloNuevo)
    };
            
    return respuesta
    }

function botonMenos(c){
    indice[c]--
    if (indice[c]==-1) indice[c]=carruseles[c].length-1
    console.log(todosLosCards[c][indice[c]])
    // todosLosCards[c][indice[c]].style.setProperty('margin-left',200)
    let art=todosLosCards[c][indice[c]]
    // art.classList.remove('agrandar')
    // art.classList.add('agrandar')
    art.className += 'agrandar'
        // todosLosCards[c][indice[c]].style.width = "300px"
    // var forceRepaint = todosLosCards[c][indice[c]].offsetWidth;
}

function botonMas(Islide){
}
