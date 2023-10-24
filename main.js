function TocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

document.querySelector('.tecla_pom').onclick = TocaSomPom

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas[0].onclick = TocaSomPom

let contador = 0;

while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = TocaSomPom;
    contador = contador + 1;
    console.log(contador);
}