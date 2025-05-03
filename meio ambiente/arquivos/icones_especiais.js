class Icone{
    constructor(x,t,v){
        this.img = document.getElementById("r")
        this.x =x
        this.y =-100
        this.tipo = t
        this.vely = v
        this.r = 25/divisorLixo;
        this.alt = 50/divisorLixo;
        this.larg = 50/divisorLixo;
    }
    update(){
        this.y += this.vely;
        
    }
    draw(){
        //ctx.beginPath()
        //ctx.arc(this.x,this.y,this.r,0,Math.PI*2)
        //ctx.stroke()
        ctx.drawImage(this.img,this.x,this.y,this.larg,this.alt)
        if(this.tipo == 'clear' ){
            ctx.fillStyle = 'green'
            
        }
    }
}


