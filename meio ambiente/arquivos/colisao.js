

function colisao(player,objeto=Array){
    for(var i in objeto){
        var obj = objeto[i];
        //verificar colisao em Y
        if(obj.y+ obj.alt > player.y && obj.y+ obj.alt < player.y + 10 && obj.y < player.y + player.alt){
            //verrificar coliao em X
            if(obj.x < player.x + player.larg && obj.x + obj.larg > player.x ){
                if(objeto[i].colidiu==false){
                    objeto[i].colidiu = true;
                    objeto[i].diferenca = Math.floor(objeto[i].x-jogador.x)
                    player.agregado +=lixo[i].repassaPeso
                    player.pesoTotal +=lixo[i].repassaPeso
                    console.log(objeto[i].diferenca)
                }
                objeto[i].vely = 0;
                somaItem[objeto[i].tipo] ++ ; 
            }
                
        }
        // quando o lixo passar
        if(obj.y> player.y + player.alt){
            if(obj.foi == false)
                ambiente.poluicao+= obj.perigo;
                objeto[i].foi=true
                
                objeto.splice(i,1)
                numLixo++
                
                //console.log(ambiente.poluicao);
        }
    }
}


function pegouItem(player, objeto = Array){
    for(var i in objeto){
        var o = objeto[i];
        // verificacao em X
        if(o.x< player.x+player.larg && o.x+o.larg> player.x){
            //verificacao em Y
            
            if(o.y+o.alt>player.y && o.y<player.y+player.alt){
                for(var n in lixo){
                    console.log(lixo[n].colidiu)
                    if(lixo[n].colidiu)
                        lixo.splice(n,1)
                        player.agregado = 0
                        
                }
            }
        }
        if(o.y>canva.height)
            objeto.shift()
    }
}





function mudaVel(vet = Array, player){
    /*
    if(player.agregado< 200){
        player.vel = 7  
    }else if(player.agregado> 200 && player.agregado < 600){
        player.vel = 6
    }
    else if(player.agregado> 600 && player.agregado < 800){
        player.vel = 5
    }else if(player.agregado> 800 && player.agregado < 1000){
        player.vel = 4
    }else if(player.agregado> 1000 && player.agregado < 1500){
        player.vel = 2
    }*/

    for(var i in vet){
        if(vet[i].colidiu){
            vet[i].velx = player.vel;
        }
    }
}


