function TocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

document.querySelector('.tecla_pom').onclick = TocaSom;

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas[0].onclick = TocaSom;

let contador = 0;

while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        TocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}
