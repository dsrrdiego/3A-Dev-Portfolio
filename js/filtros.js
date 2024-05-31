function renderFiltros(tags) {
    let sectorTags = document.getElementById('sectionTags');
    let filtro = [];
    let btnsTag = [];
    let buscarPalabra = document.createElement('input');
    buscarPalabra.addEventListener("input", () => filtrar(buscarPalabra.value));
    buscarPalabra.placeholder = "buscar";
    sectionTags.appendChild(buscarPalabra);

    for (let i = 0; i < tags.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = tags[i].nombre;
        btn.classList.add(`btnActivo${tags[i].activo}`);

        btn.addEventListener("click", () => btnTag(i));
        btnsTag.push(btn);
        sectionTags.appendChild(btn);
    }

    sectorTags.classList.toggle('inVisible');
    let bt = document.getElementById('btnBuscar').addEventListener('click', () => sectorTags.classList.toggle('inVisible'));
    buscarPalabra.focus();
    centrar(sectorTags);

    function btnTag(i) {
        tags[i].activo = !tags[i].activo;
        btnsTag[i].classList.remove('btnActivotrue');
        btnsTag[i].classList.remove('btnActivofalse');
        btnsTag[i].classList.add(`btnActivo${tags[i].activo}`);

        filtrar(buscarPalabra.value);

    }

}

function filtrar(palabraDelInput = '') {
    let palabrasABuscar = [''];
    palabrasABuscar.push(palabraDelInput);
    console.log(palabraDelInput);
    for (const tag of tags)
        if (tag.activo) palabrasABuscar.push(tag.nombre);

    let filtrados = filtrado(cards, palabrasABuscar);
    render(filtrados);


}



function filtrado(cards, claves) {
    let filtradas = [];
    for (const c of cards) {
        let agregar = false;
        for (let p of claves) {
            p = p.toLowerCase();
            for (let attr in c) {
                if (typeof c[attr] === 'string') {
                    if (c[attr].toLowerCase().includes(p)) {
                        agregar = true;
                        break;
                    }
                } else if (Array.isArray(c[attr])) {
                    for (const key of c[attr]) {
                        if (key.toLowerCase().includes(p)) {
                            console.log(key, 'tiene' + p)
                            agregar = true;
                            break;
                        }

                    }
                    if (agregar) break;

                }
                agregar = false;
            }
            if (!agregar) break;
        }
        if (agregar) filtradas.push(c);
    }
    return filtradas;
}
function centrar(que) {
    // console.log(que);
    // const scrollTop = window.scrollY || window.pageYOffset;
    // const buttonTop = que.top + scrollTop;
    // const windowHeight = window.innerHeight;
    // const targetScroll = buttonTop - (windowHeight / 2) + (que.height / 2);
    // window.scrollTo({
    //     top: '100px',
    //     behavior: 'smooth'
    // });
    var scrollAmount = document.documentElement.scrollHeight * 0.25;
            window.scrollTo({
                top: scrollAmount,
                behavior: 'smooth' // Hace que el scroll sea suave
            });

}