function muda(){
    if(ambiente.poluicao>= 100){
        estado.passa.normal = true;
    }
}


function menu(){
    ctx.drawImage(ambiente.fundo,0,0,canva.width,canva.height);

    ctx.font = 90/divisorLixo+"px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("GARBAGE SHIP",canva.width/3.4,altTitulo);
    if(altTitulo< 100){
        altTitulo++
    }
    if(carregamento.pode){
        ctx.fillStyle = 'grey'
        ctx.font = 20/divisorLixo+"px Arial"
        ctx.fillText("clique ou ENTER para iniciar uma nova partida",carregaImg.x, carregaImg.y);
    }
    
}




function perdeu(){
    ctx.font = 90/divisorLixo+"px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("POLUIÇÃO MÁXIMA",canva.width/3.4,200);
    ctx.font = 30/divisorLixo+"px Arial"
    ctx.fillText("seu tempo foi: "+tempo.min+" minutos e "+tempo.seg+" segundos",canva.width/3.4,300)
    ctx.fillText("carga total  : "+jogador.pesoTotal,canva.width/3.4,350)
}