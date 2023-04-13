//Código que só funciona no desktop

// window.onload = function() {
//     var largura = 1000;
//     var altura = 600;

//     var quadro;

//     var quadro = document.getElementById("quadro");
//     quadro.setAttribute("width",largura);
//     quadro.setAttribute("height",altura);

//     var ctx = quadro.getContext("2d");

//     var desenhar = false;
    
//     quadro.onmousedown = function(evt) {
//         ctx.moveTo(evt.clientX, evt.clientY);
//         desenhando = true;
//     }
//     quadro.onmouseup = function() {
//         desenhando = false;
//     }
//     quadro.onmousemove = function(evt) {
//         if(desenhando == true) {
//             ctx.lineTo(evt.clientX, evt.clientY);
//             ctx.stroke();
//         }
//     }
// }

//Código funcional, desktop e mobile

window.onload = function() {
    var largura = 1000;
    var altura = 600;

    var quadro = document.getElementById("quadro");
    quadro.setAttribute("width", largura);
    quadro.setAttribute("height", altura);

    var ctx = quadro.getContext("2d");

    var desenhando = false;

     // Adiciona ouvintes de eventos de toque na tela
    quadro.addEventListener("touchstart", function(evt) {
    ctx.moveTo(evt.touches[0].clientX, evt.touches[0].clientY);
    desenhando = true;
     });
  
    quadro.addEventListener("touchend", function(evt) {
    desenhando = false;
    });
  
    quadro.addEventListener("touchmove", function(evt) {
    if (desenhando == true) {
      ctx.lineTo(evt.touches[0].clientX, evt.touches[0].clientY);
      ctx.stroke();
    }
  });
  
  // Adiciona ouvintes de eventos de mouse para desktops
    quadro.addEventListener("mousedown", function(evt) {
    ctx.moveTo(evt.clientX, evt.clientY);
    desenhando = true;
  });
  
    quadro.addEventListener("mouseup", function(evt) {
    desenhando = false;
  });
  
        quadro.addEventListener("mousemove", function(evt) {
        if (desenhando == true) {
      ctx.lineTo(evt.clientX, evt.clientY);
      ctx.stroke();
    }
  });
}