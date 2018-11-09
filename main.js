var numero = -335;
var movimentaEsq = true;
var movimentaDir = true;			
function moveEsquerda() {
      this.init = function(){								
        movimentaEsq = true;
        move();																	  
      },									
     this.move = function(){
        if (numero < 0) {
          numero += 120;
           var posicao = numero;
          document.getElementById("galeria").style.left = posicao +"px";
          if(movimentaEsq){
            setTimeout("move()","300");
            }								
        }
     },
     this.stop = function(){
          movimentaEsq = false;						 		
     }
     init();
}
function moveDireita() {
    
      this.init = function(){
          movimentaDir = true;
          move();														
      },									
     this.move = function(){
          if (numero > -670) {
           numero -= 120;
            var posicao = numero;
          document.getElementById("galeria").style.left = posicao +"px";
          if(movimentaDir){
              setTimeout("move()","300");
            }								
        }
     },
     this.stop = function(){
          movimentaDir = false;	
     }
     init();
}