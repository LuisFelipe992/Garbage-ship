function ajustaTamanho(){
    if(width < 800 && jogador.larg>100){
        divisor = 2
        divisorLixo = 2
    }else{
        divisor = 1
    }
    
    jogador.larg= jogador.larg/ divisor;
    jogador.alt= jogador.alt/divisor
    for(var i in lixo){
        
    }
}