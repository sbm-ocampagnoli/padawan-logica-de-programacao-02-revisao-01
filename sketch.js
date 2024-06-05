let canvas;

function setup() {
    canvas = createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcarPonto();
    centralizaCanvas();
    tocarSomDeTrilha();
}

function centralizaCanvas() {

    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);

}

function windowResized() {

    centralizaCanvas();

}