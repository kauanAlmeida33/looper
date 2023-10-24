function TocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

document.querySelector('.tecla_pom').onclick = TocaSom;

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas[0].onclick = TocaSom;

let contador = 0;

while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = TocaSomPom;
    contador = contador + 1;
    console.log(contador);
}