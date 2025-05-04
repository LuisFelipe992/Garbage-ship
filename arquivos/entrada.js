function entrada(){
    /*********** PINTANDO O FUNDO */
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canva.width,canva.height);

    /*********** presents */
    if(frames% 200 == 199 && intro.apresenta == false){
        intro.apresenta = true;
    }else if(intro.apresenta){
        if(frames% 5 == 4 && intro.alpha <= 100){
            intro.alpha ++;
        }if(intro.alpha>= 99){
            estado.entrada = false;
            estado.menu = true;
        }
        
        ctx.font = 30/divisorLixo+"px Arial"
        ctx.fillStyle = "rgba(255,255,255,0."+intro.alpha+")";
        ctx.fillText('F&E apresenta',canva.width/2 - 20,canva.height/2);
    }
    

}