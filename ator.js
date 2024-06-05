let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podeMovimentar()) {
            yAtor += 3;
        }

    }
}

function verificaColisao() {

    for (let i = 0; i < imagemCarros.length; i++) {

        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);

        if (colisao) {
            colidiu();
            tocarSomDeColisao();
            if (podePerderPontos()) {
                meusPontos -= 1;
            }
        }

    }
}

function colidiu() {
    yAtor = 366;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(32);
    fill(color(204, 0, 204));
    text(meusPontos, width / 5, 28);
}

function marcarPonto() {
    if (yAtor == 3) {
        meusPontos += 1;
        yAtor = 366;
        tocarSomDePontuacao();
    }
}

function podePerderPontos() {
    return meusPontos > 0;
}

function podeMovimentar() {
    return yAtor < 366;
}