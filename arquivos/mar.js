var sptsMar = new Array();
var nomeSpts = 22;

for(var i = 0; i<27; i ++){
    sptsMar.push(document.getElementById(''+nomeSpts+''))
    nomeSpts++
}
nomeSpts = 0
function animaMar(){
    ctx.drawImage(sptsMar[nomeSpts],0,height-80);
    if(frames%8 ==5)
        nomeSpts++
    if(nomeSpts>25){
        nomeSpts=0
    }
}