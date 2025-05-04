class Player {
    constructor(x,y,larg,alt,cor){
        this.imagem = document.getElementById('img')
        this.largImg = 850;
        this.altImg = 495;
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
        this.cor = cor;
        this.e = false;
        this.d = false;
        this.vel =0;
        this.maxvel = 9
        this.peso ;
        this.agregado =0;
        this.pesoTotal = 0
        this.g = 0.5
        this.queda = 0

        this.gx = 0.5
    }
    update(){
        /**      MOVIMENTAÇÃO DO BARCO */
        if(this.e){
            this.x-= this.vel;
            if(this.vel < this.maxvel)
                this.vel+= 0.2
        }
        else if(this.d){
            this.x+= this.vel;
            if(this.vel < this.maxvel)
                this.vel+= 0.2
        }
        
        /*********************** */

        /********MARGENS DO CAMPO DE VISÃO */
        if(this.x<=0){
            this.e = false
            this.x = 0;
        }
        else if(this.x + this.larg>= canva.width){
            this.d = false
            this.x = canva.width-this.larg;
        }

        ajustaTamanho()

        this.queda+=this.g;
        this.y+= this.queda;

        if(this.agregado > 500 && this.agregado<600){
            this.vel = 6
        }if(this.agregado > 600 && this.agregado<900){
            this.vel = 5
        }if(this.agregado > 900 && this.agregado<1100){
            this.vel = 4
        }if(this.agregado > 1100){
            this.vel = 3
        }

    }
    set repassaValues(pl){
        this.agregado+=pl;
    }
    draw(){
        ctx.fillStyle = this.cor;
        //ctx.fillRect(this.x,this.y,this.larg,this.alt);
        ctx.drawImage(this.imagem,0,0,this.largImg,this.altImg,this.x,this.y-(this.alt/2)-5,this.larg+(this.larg/2),this.alt)
    }
}

/***************************************************
 *          CLASSE LIXO
 * 
 ***************************************************/


class Lixo{
    constructor(x,y,larg,alt,kg,tipo,contamina){
        this.img = document.getElementsByName('lixo');
        this.colidiu = false;
        this.foi = false;
        this.x = x;
        this.y = y;
        this.larg= larg/divisorLixo;
        this.alt= alt/divisorLixo;
        this.peso= kg;
        this.tipo= tipo;
        this.perigo= 5;
        this.velx = 7
        this.vely = 3;
        this.cor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
        this.diferenca = 0
    }
    update(){
        if(this.tipo == 0){
            this.perigo = 15
        }else if(this.tipo == 5){
            this.perigo = Math.floor(Math.random()*17)+1
        }

        this.y+= this.vely;
        
        if(this.colidiu){
            this.y = jogador.y-this.alt
            this.x = jogador.x+ this.diferenca
            
            
            
        }
    }
    draw(){
       
        /*ctx.fillStyle= this.cor;
        ctx.fillRect(this.x,this.y,this.larg,this.alt);*/
        ctx.drawImage(this.img[this.tipo],this.x,this.y,this.larg,this.alt)
        
    }
    get repassaPeso(){
        return parseInt(this.peso);
    }
}

/*** CLASSE DO AMBIENTE */

class Ambiente {
    constructor(){
        this.poluicao = 0
        this.radioatividade = 0.05
        this.y = height-50
        this.resist ;
        this.ilha = document.getElementById('ilha');
        this.ceu = document.getElementById('ceu');
        this.fundo = document.getElementById('plano');
    }
    update(obj){
        var queda = obj.queda
        if(obj.y + obj.alt/2 > this.y){
            obj.queda-= queda+ queda*0.1
            
            
        }if(obj.y + obj.alt/2 > this.y+20){
            
            obj.g = -0.5
            
        }else
            obj.g = 0.5
    }
    draw(){
        
        ctx.fillStyle= 'rgba(0,30,50,0.7)'
        ctx.fillRect(0,this.y,width,height)
    }
    drawIlha(){
        ctx.drawImage(this.ilha,0,0);
    }
    drawCeu(){
        ctx.drawImage(this.ceu,0,0,canva.width,canva.height*1.88)
    }
}





class CarregaBarra{
    constructor(){
        this.x = canva.width/6;
        this.y = canva.height - canva.height/10;
        this.larg = canva.width/2;
        this.alt = 20;
        this.largLoad = 0;
    }
    update(){
        if(this.largLoad< canva.width/1.5)
            this.largLoad +=2;
        else if(this.largLoad>= canva.width/1.5){
            carregamento.carregou = true;
            carregamento.pode = true;
        }
        if(carregamento.porcentagem>=10){
            carregamento.carregou = true
        }
    }
    draw(){
        if(carregamento.carregou === false){
            ctx.fillStyle= "white"
            ctx.font= "10px Arial"
            ctx.fillText('carregando...',this.x,this.y-10)
            ctx.fillRect(this.x,this.y,this.largLoad,this.alt)
        }
    }

}









class Conquist{
    constructor(x = 10,y){
        this.elemento = document.getElementById('conq')
        this.x = x;
        this.y = y;
        this.fx = window.innerWidth -this.x;
        this.txts = new Array();
        this.txts.push("<h2>CUIDADO COM O PETROLEO</h2>Animais marinhos como peixes e tartarugas começam a sofrer com o petróleo na água e a poluição aumenta drasticamente")
        this.txts.push("<h2>PNEU</h2> Pneus podem liberam residuos químicos na água, prejudicando a vida marinha")
        this.txts.push("")
        this.txts.push("<h2>coletou plastico</h2>O plástico é um dos maiores poluentes do planeta, possuindo um curto prazo de utilidade e um gigantesco prazo para se decompor no meio ambiente. De 400 a 500 anos na água")
        
        this.txts.push("")
        this.txts.push("")
        this.txts.push("")
    }
    update(){
        if(somaItem[3] == 1){
            this.elemento.innerHTML = this.txts[3]
            somaItem[3]=0
        }if(somaItem[0]==1){
            this.elemento.innerHTML = this.txts[0]
            somaItem[0]= 2
        }if(somaItem[6]==1){
            this.elemento.innerHTML = this.txts[1]
        }if(frames%1500 == 1499){
            this.elemento.innerHTML = "<h2>SACO DE LIXO ??</h2> os sacos de lixo são imprevisíveis podendo ter um pequeno impacto, ou mesmo mais poluente que o barril de petróleo!"
        }
    }
}