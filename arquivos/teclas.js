window.addEventListener('keydown',(e)=>{
    var evt = e.keyCode;
    if(estado.jogo){
        switch(evt){
            case 37:
                jogador.e = true;
                break;
            case 39:
                jogador.d = true;
                break;
            case 69:
                conquistas.elemento.style.display = "block"
                
        }
        console.log(evt)
    }
})

window.addEventListener('keyup',(e)=>{
    var evt = e.keyCode;
    
    switch(evt){
        case 37:
            jogador.e = false;
            break;
        case 39:
            jogador.d = false;
            break;
        case 69:
            conquistas.elemento.style.display = "none"
    }
})

window.addEventListener('touchstart',(e)=>{
    var evt = e.touches[0].clientX
    if(estado.jogo){
        if(evt > canva.width/2){
            jogador.d = true;
        }else{
            jogador.e = true;
        }
    }
})

window.addEventListener('touchend',(e)=>{
    
    var evt = e.touches[0]
   
        jogador.d = false;
    
        jogador.e = false;
    
})