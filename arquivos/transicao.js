function transition(){
    if(alpha < 100){
        ctx.fillStyle = "rgba(0,0,0,0."+alpha+")";
        ctx.fillRect(0,0,canva.width,canva.height);
        alpha++;

    }
    
}