// VARIAVEIS DE TELA
var canva = document.createElement('canvas');
document.body.appendChild(canva);

var ctx = canva.getContext('2d');

var width = window.innerWidth;
var height= window.innerHeight;

var divisor = 1
var divisorLixo = 1

var alpha = 000
/**************************  AJUSTAR TELA ******************/
canva.width = width;
canva.height = height;
window.addEventListener('resize', ()=>{
    canva.width  = width ;
    canva.height = height;
})

/**************************** OBJETOS DE JOGO************************* */
var ambiente = new Ambiente();
var porcento = 150
var carregamento ={
    imgs : document.getElementsByTagName('img'),
    porcentagem : 0,
    carregou : false,
    pode : false
}
var carregaImg = new CarregaBarra();
var tempo = {
    pode: true,
    min: 00,
    seg: 00
};

var jogador = new Player(100,0,140,110,'red');

var lixo = new Array();


var icon = new Array();

var conquistas = new Conquist(6)

var somaItem = new Array(7);
for (var i=0; i<=7; i++){
    somaItem[i] = 0
}


/*************************** VARIAVEIS DE JOGO************************ */
var estado ={
    entrada:true ,
    menu : false,
    sena: false,
    jogo : false,
    pause: false,
    fim : false,
    passa : {
        normal : false,
        invertido : false
    }
}
var frames = 0;
var numLixo = 0;


/************************ VARIAVEIS DE ENTRADA ********************* */

var intro = {
    alpha: 000,
    apresenta : false
}
altTitulo = 0;

/****************************  FUNÇÕES PRINCIPAIS************************** */

function loop(){
    requestAnimationFrame(loop,canva);
    //ctx.fillStyle = 'lightblue';
    //ctx.fillRect(0,0,canva.width, canva.height);

    update();
    draw();
    mudaVel(lixo,jogador)

    frames++;
}
loop();

function update(){
    if(estado.menu){
        menu();
        carregaImg.update()
        carregaImg.draw()
    }
    if(estado.jogo){
        ajustaTamanho()
        jogador.update()

        for(var i in lixo){
            lixo[i].update()
        }
        for(var i in icon){
            icon[i].update()
        }

      
        ambiente.update(jogador);
        pegouItem(jogador,icon)
        colisao(jogador,lixo)


        if(frames%porcento == 1)                                       //kg
            lixo.push(new Lixo(Math.random()*canva.width,-50,35,45,Math.floor(Math.random()*85)+10,Math.floor(Math.random()*7),Math.floor(Math.random()*30)));
        muda();
        if(frames%1000 == 999){
            icon.push(new Icone(Math.random()*canva.width-10,'clear',4))
            porcento -=10
        }
        }if(estado.passa.normal){
        if(alpha >= 100){
            estado.passa.normal = false;
            if(estado.jogo){
                estado.jogo = false;
                estado.fim = true;
            }
            
            alpha = 0;
        }
    }
 
}

function draw(){
    if(estado.entrada){
        entrada();

    }
    if(estado.jogo){
        conquistas.update()

        ambiente.drawCeu()
        ambiente.drawIlha()
        textos();
        for(var i in lixo){
            lixo[i].draw();
        }
        jogador.draw();
        ambiente.draw();
        for(var i in icon){
            icon[i].draw()
        }
        animaMar()
        //conquistas.draw()
    }
    if(estado.passa.normal){
        transition();
        
    }if(estado.fim){
        perdeu();
    }
}

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
        }
    }
    
    //console.log(evt.keyCode)
})

window.addEventListener('keyup',(e)=>{
    var evt = e.keyCode;
    if(estado.jogo){
        switch(evt){
            case 37:
                jogador.e = false;
                break;
            case 39:
                jogador.d = false;
                break;
        }
    }else if(estado.menu){
        if(carregamento.pode == true){
            switch(evt){
                case 13:
                    estado.menu = false;
                    estado.jogo = true;
                    break;
            }console.log(evt)
        }
        
    }else if (estado.fim){
        if(evt == 13){
            estado.menu = true;
            estado.fim = false;
        }
    }
    
})



/************** tempo*/

setInterval(()=>{
    if(estado.jogo && tempo.pode)
        tempo.seg++
        if(tempo.seg>=60){
            tempo.seg = 0
            tempo.min++
        }

},1000)


