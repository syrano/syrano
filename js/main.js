// (function(){

//     var button = document.getElementById('cn-button'),
//     wrapper = document.getElementById('cn-wrapper');

//     //open and close menu when the button is clicked
//     var open = false;
//     button.addEventListener('click', handler, false);

//     function handler(){
//       if(!open){
//         this.innerHTML = "Close";
//         classie.add(wrapper, 'opened-nav');
//       }
//       else{
//         this.innerHTML = "Menu";
//         classie.remove(wrapper, 'opened-nav');
//       }
//       open = !open;
//     }
//     function closeWrapper(){
//         classie.remove(wrapper, 'opened-nav');
//     }

// })();
  //Esto me devuelve el container a redondo con click afuera 


$(document).ready(function(){

    $(document).mouseup(function (e)
  {
    var container = $('#main-content');

    if (!container.is(e.target) 
        && container.has(e.target).length === 0)
    {
        container.css("width", "500px");
        container.css("height", "500px");
        container.css("border-radius", "50%");
        $('#switch-result').empty();
        $('#main-content').find('article').find('h3').empty();
        $('#switch').empty();
    }
  });


 




  //Esto me cambia el container a cuadrado
  $('.menu-link').click(function(){
    $('#main-content').css("width", "90%");
    $('#main-content').css("border-radius", 0);
    $('#main-content article').css("opacity", 1);
    $('#main-content').find('nav').find('h3').css("transform", "scale(0)");
    $('#main-content').find('a').css("transform", "scale(0)");

    var selection=$(this).text();
    $.ajax({
      type:"POST",
      url:"data/arrays.php",
      data:{selection:selection},
      success:function(data){
        var texto=data;
        $('#main-content').find('article').find('h3').html(selection);
        $('#switch-result').html(texto);

        switch(selection) {
                      case "ACERCA":
                      
                        $('#switch').empty();
                        $('#switch').append("<section id='acerca'><div class='circle'></div><div class='circle'></div><div class='circle'></div></section>");
                          break;
                      case "PORTFOLIO":
                          
                          $.ajax({
                          type:"POST",
                          url:"data/template.php",
                          data:{selection:"PORTFOLIO"},
                          success:function(data){
                            $('#switch').empty();
                            
                            $('#switch').append("<section id='portfolio'>"+data+"</section>");
                            $('#main-content').css("height", "800px");
                            $('#portfolio').addClass('flex');
                          }
                        });
                          break;
                      case "TRY-ME":
                          $('#switch').html('en construccion');
                          
                          break;
                      case "CONTACTO":
                          $('#switch').html('en construccion');
                          
                          break;
                   
                  }

      }
    });
  });

  


 $( "#main-content" )

  .mouseenter(function() {
      var menu= $('#switch').html();
      $('#main-content').css("background-color", "rgba(0,127,127, 0.1)");
      $('#main-content').css("box-shadow", "1px 1px 30px rgba(0,255,255,0.8)");
     if (menu=="") {
      
      $('#main-content').find('h3').css("transform", "scale(1)");
      $('#main-content').find('h3').css("padding-bottom", "5px");
      $('#main-content').find('a').css("transform", "scale(1)");
      


     } 
     else{
      
     }

  })
  .mouseleave(function() {
      $('#main-content').find('nav').find('h3').css("transform", "scale(0)");
      $('#main-content').find('h3').css("padding-bottom", "35px");
      $('#main-content').find('a').css("transform", "scale(0)");
      $('#main-content').css("background-color", "rgba(0,127,127, 0.1)");
      $('#main-content').css("box-shadow", "1px 1px 15px rgba(0,255,255,0.8)");
  });


});