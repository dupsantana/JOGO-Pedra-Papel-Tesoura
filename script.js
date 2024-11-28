let jogadorPontuacao = 0;
let computadorPontuacao = 0;
let nomeJogador = '';


const escolhaPCElement = document.getElementById('ESCOLHAPC');

const opcoes = ['PEDRA', 'PAPEL', 'TESOURA'];


function jogar(escolhaJogador)
{
    if (!nomeJogador) 
    {
        nomeJogador = document.getElementById('playerName').value.trim() || 'Jogador';
    }
    
    const escolhaPC = opcoes[Math.floor(Math.random() * opcoes.length)];
    escolhaPCElement.textContent = `O computador escolheu: ${escolhaPC}`;
    const resultado = vencedor(escolhaJogador, escolhaPC);

    if(resultado== "Você ganhou !!")
    {
        jogadorPontuacao++;
    }
    else if(resultado == "Voce perdeu !!")
    {
        computadorPontuacao ++;
    }

    atualizarPontuacao();

    alert(`Você escolheu: ${escolhaJogador}\n${escolhaPCElement.textContent}\n${resultado}`);

}

function atualizarPontuacao() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Pontuação: ${nomeJogador || 'Jogador'} ${jogadorPontuacao} - ${computadorPontuacao} Computador`;
}

function resetarJogo() {
    jogadorPontuacao = 0;
    computadorPontuacao = 0;
    nomeJogador = '';
    document.getElementById('playerName').value = '';
    escolhaPCElement.textContent = 'Escolha oponente';
    atualizarPontuacao();
}

function vencedor(jogador, computador)
{
    if(jogador==computador)
    {
        return "Empate !!"
    }
    
    if (jogador === 'PEDRA' && computador === 'TESOURA' || jogador === 'PAPEL' && computador === 'PEDRA' || jogador === 'TESOURA' && computador === 'PAPEL')
    {
        return "Você ganhou !!";
    } 
    else{ return "Voce perdeu !!";}

        
}

function PEDRA() {
    jogar('PEDRA');
}

function PAPEL() {
    jogar('PAPEL');
}

function TESOURA() {
    jogar('TESOURA');
}