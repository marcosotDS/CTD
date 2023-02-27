function comecarJogo() {
  
    let jogadaUsusario = Number(prompt('O que voce deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura'));
  
    let jogadaComputador = Math.floor(Math.random() * 3) + 1;
  
    console.log(jogadaUsusario);
    console.log(jogadaComputador);
  
    verificarGanhador(jogadaUsusario, jogadaComputador);
  } 

function verificarGanhador(usuario, oponente) {

let pontosUsuario = 0
let pontoOponente = 0

do {

        if ( usuario === 1 && oponente === 2 ){

        console.log('Você perdeu!') 
        pontoOponente++
        }
    
        if ( usuario === 3 && oponente === 1 ){
    
        console.log('Você perdeu!')
        pontoOponente++
        }
    
        if ( usuario === 2 && oponente === 3 ){
    
        console.log('Você perdeu!')
        pontoOponente++
        }
    
        if ( usuario === 2 && oponente === 1 ){
    
        console.log('Você ganhou!')
        pontosUsuario++
        }
    
        if ( usuario === 1 && oponente === 3 ){
    
        console.log('Você ganhou!')
        pontosUsuario++
        }
    
        if ( usuario === 3 && oponente === 2 ){
    
        console.log('Você ganhou!')
        pontosUsuario++
        }
    
        if ( usuario === 3 && oponente === 3 ){
    
        console.log('Empate!')
        }
    
        if ( usuario === 2 && oponente === 2 ){
    
        console.log('Empate!')
        }
    
        if ( usuario === 1 && oponente === 1 ){
    
        console.log('Empate!')
        }
    } 
    
    while(pontoOponente <2 && pontosUsuario<2)
    
}
  
  
  function perguntarDesejaJogar() {
  
    let usuarioDesejaJogar = confirm('Você gostaria de jogar?');
  
  
    if (usuarioDesejaJogar === true) {
  
      comecarJogo();
  
    } else {
  
      alert('Obrigado por visitar a pagina');
  
    }
  
  }
  
  perguntarDesejaJogar();

  