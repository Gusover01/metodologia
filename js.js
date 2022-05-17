//arriba
let inicio = document.querySelectorAll(".inicio");

function mostrarScroll() {

    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0 ; i < inicio.length; i++ ) {
        let alturaAnimado = inicio[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            inicio[i].style.opacity = 1;
            inicio[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

//derecha
let derecha = document.querySelectorAll(".derecha");

function mostrarderecha() {

    let scrollTop = 
    document.documentElement.scrollTop;
    for(var i = 0 ; i < derecha.length; i++ ) {
        let alturaAnimado = derecha[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            derecha[i].style.opacity = 1;
            derecha[i].classList.add("show");
        }
    }
}
window.addEventListener('scroll', mostrarderecha);

//izquierda
let izquierda = document.querySelectorAll(".izquierda");

function mostrarizquierda() {

    let scrollTop = 
    document.documentElement.scrollTop;
    for(var i = 0 ; i < izquierda.length; i++ ) {
        let alturaAnimado = izquierda[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            izquierda[i].style.opacity = 1;
            izquierda[i].classList.add("izq");
        }
    }
}
window.addEventListener('scroll', mostrarizquierda);