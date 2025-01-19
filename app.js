let listaNumerosSorteados = [];
let numeroMaximo = 10
let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto)
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'digite aqui um número entre 1 e 10');
    console.log(`${numeroSecreto}`)
}
mensagemInicial()
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `parabéns! você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else { if(chute < numeroSecreto){
            exibirTextoNaTela('h1',`o número secreto é maior que ${chute}`);
            } else {
                exibirTextoNaTela('h1', `o número secreto é menor que ${chute}`);
            }tentativas++;
        }limparCampo();
    }            


function numeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()* 10) + 1;
   let quantidadeDeNumerosEscolhidos = listaNumerosSorteados.length;
   if (listaNumerosSorteados.length == numeroMaximo) {
   listaNumerosSorteados = []
   }else{
   if (listaNumerosSorteados.includes(numeroEscolhido)){
    return numeroAleatorio();
   } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
   }
   }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}