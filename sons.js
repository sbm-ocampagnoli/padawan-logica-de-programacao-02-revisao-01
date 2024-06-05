let somDeColisao = new Audio("./sons/colidiu.mp3");
let somDePontuacao = new Audio("./sons/pontos.wav");
let somDeTrilha = new Audio("./sons/trilha.mp3");


function tocarSomDeTrilha() {

    let isMaxVolume = volume == 1.0;

    if (isMaxVolume) {
        alterarVolume(somDeTrilha, 0.20);
        somDeTrilha.play();
        somDeTrilha.loop;
    }

    if (volume == 1.0) {

        alterarVolume(somDeTrilha, 0.20);
        somDeTrilha.play();
        somDeTrilha.loop;
    }
}

function tocarSomDePontuacao() {
    alterarVolume(somDePontuacao, 0.15);
    somDePontuacao.play();
}

function tocarSomDeColisao() {
    alterarVolume(somDeColisao, 0.75);
    somDeColisao.play();
}

function alterarVolume(audio, volumeNovo) {
    audio.volume = volumeNovo;
}