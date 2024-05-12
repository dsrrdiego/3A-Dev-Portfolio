let indice = []
sectorCarruseles = document.getElementById('sectorCarruseles');
carruseles = [spa,apis,juegos,back]
for (let i = 0; i < carruseles.length; i++) {
    let titulo=document.createElement('h2')
    titulo.classList.add('tituloDeSlide')
    titulo.innerHTML=carruseles[i].titulo
    sectorCarruseles.appendChild(titulo)
    
    let carrusel=document.createElement('section')
    carrusel.classList.add('carrusel')
    
    let slide=document.createElement('section')
    
    carrusel.innerHTML+=`<button onClick=boton2(${i},-1) class="botonSlide"> < </button>`
    
    slide.classList.add('slide')
    slide.id='slide'+i
    slide.innerHTML=dameCards(carruseles[i].cards)
    carrusel.appendChild(slide)
    
    carrusel.innerHTML+=`<button onClick=boton2(${i},1) class="botonSlide"> > </button>`
    
    indice[i]=0
    
    sectorCarruseles.appendChild(carrusel)
    
    
}
function dameCards(cards) {
    let string=''
    cards.forEach(card => {
        string+='<article>'
        if (card.video != "") string += '<div class="video"><iframe class="video" src="' + card.video + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>';
        else {
            string += '<img class="video" src="imagenes/' + card.imagen + '"></img>';
        }
        string+='<div id="articuloDats">'
        
        string += '<div class="titulo"><h2>' + card.titulo + '</h2></div>';
        string += '<div class="datos"> <div class="categoria"> <h3>' + card.categoria + '</h3> </div>'
        string += '<div class="categoria fecha"><h5>' + card.fecha + '</h5></div>';
        string += '<div class="descripcion"><h4>' + card.descripcion + '</h4> </div> <br>';
        string += '<div class="lenguaje"> <h4>Lenguaje: ' + card.lenguaje + '</h4></div>';
        if (card.repo != "") string += '<div class="repo"><a target="_blank" class="repoLink" href="' + card.repo + '">Ir al Repositorio GitHub</a></h4></div>';
        if (card.link != "") string += '<button class="boton"> <a target="_blank" href="' + card.link + '">' + card.linkTexto + '</a> </button></div></article>';
        // if (card.link != "") string += '<div class="btnContenedor"> <button class="boton"> <a target="_blank" href="' + card.link + '">' + card.linkTexto + '</a> </button></div></div></article>';
        string+='</div>'
        string+='</article>'
        // respuesta.push(articuloNuevo)
    });
        
        return string;
    }
        
    
    function boton2(i,sentido){
        indice[i]+=sentido
        if (indice[i]==-1) indice[i]=carruseles[i].cards.length-1
        if (indice[i]==carruseles[i].cards.length) indice[i]=0
        console.log(indice[i]);
        const sli=document.getElementById('slide'+i)
        sli.scrollLeft=indice[i]*sli.offsetWidth
        
    }
    
    document.getElementById('enviar').addEventListener('click',enviar)
    document.getElementById('mensaje')
    function enviar(){
        var link = "https://wa.me/" + "+5492983606824" + "?text=" + encodeURIComponent(mensaje.value);
        window.open(link);
    }