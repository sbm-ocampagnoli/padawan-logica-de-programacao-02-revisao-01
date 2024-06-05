# Resumo

## O que foi aprendido?

### Utilização de funções

- Usar funções com apenas uma responsabilidade;
- Ou seja, fazer uma função que execute uma tarefa e execute bem essa tarefa;
- Funções com mais de 3 linhas devem ter sua existência questionada.

### Utilização de listas

- Usar listas evita redundância no código e reduz a necessidade de retrabalho;
- Ao invés de usar estruturas repetitivas, as listas simplificam o gerenciamento de dados.

### Utilização de laços de repetição (Loops - usando `for`)

- O loop elimina redundâncias no código;
- É usado para repetir ações e geralmente combinado com listas;
- Para manipulação de listas, permite percorrer as posições/índices da lista;
- Exemplo: verificar colisão de cada carro em uma lista de carros sem precisar verificar carro por carro.

```javascript
function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        if (colisao) {
            colidiu();
        }
    }
}
```

### Utilização de imagens no projeto

- É importante utilizar o ponto barra (`./`) para acessar o diretório raiz (uma boa prática) para evitar erros:

```
./diretorio/imagem-01.png
```

### Aperfeiçoamento da lógica de programação

- **Utilização de funções já prontas**:
  - Para verificar a colisão de um retângulo com um círculo (`collideRectCircle`).

- **Divisão de responsabilidade**:
  - Para cada personagem, cenário, e imagens, foi criado um arquivo `.js` separado;
  - Isso ajuda muito na organização do código para o desenvolvimento do projeto.

### Manipulação de Áudio

- Podemos utilizar a função `loadSound('caminhoDoArquivo');`

```javascript
let somDePontuacao = loadSound('./sons/pontos.mp3');
```

- Ou podemos criar um objeto chamado `Audio`.
  - `.loop` faz com que o áudio sempre fique tocando;
  - `.volume` para modificar o volume do áudio;
  - `.play()` para tocar o áudio.