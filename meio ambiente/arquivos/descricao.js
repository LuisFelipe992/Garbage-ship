var corTxt = "green";
function textos(){
    ctx.fillStyle= "rgba(0,0,0,0.5)"
    ctx.fillRect(0,0,300,190)
    ctx.fillStyle = "white"
    ctx.font = 30/divisorLixo+"px Arial"
    ctx.fillText('poluição      : ',30,30);
    ctx.fillStyle = corTxt;
    ctx.fillText(ambiente.poluicao+"%",200,30);
    ctx.fillStyle ="white";
    ctx.fillText('carga           : '+jogador.agregado+'kg',30,80);
    ctx.fillText('lixo passado: '+numLixo+' ',30,120);
    ctx.fillText("tempo          : "+tempo.min+" : "+tempo.seg,30,160);
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(window.innerWidth - 70, 10,50,50)
    ctx.fillStyle = 'white'
    ctx.fillText('E',window.innerWidth - 50,50);


    if(ambiente.poluicao<30){
        corTxt = "green"
    }else if(ambiente.poluicao>=30 && ambiente.poluicao<=60)
        corTxt = "yellow"
    else if(ambiente.poluicao>60 && ambiente.poluicao<=90)
        corTxt = "orange"
    else
    corTxt = "red"
}