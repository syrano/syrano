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
        $('#main-content').find('a').fadeIn();
    }
  });







  //Esto me cambia el container a cuadrado
  $('.menu-link').click(function(){
    $('#main-content').find('a').fadeOut();
    $('#main-content').css("width", "90%");
    $('#main-content').css("border-radius", 0);
    $('#main-content article').css("opacity", 1);
    $('#main-content').find('nav').find('h3').css("transform", "scale(0)");
    

    var selection=$(this).text();

    $.ajax({
      type:"POST",
      url:"data/arrays.php",
      data:{selection:selection},
      success:function(data){
        var texto=data;
        $('#main-content').find('article').find('h3').hide().html(selection).fadeIn();
        $('#switch-result').hide().html(texto).fadeIn();

        switch(selection) {
                      case "ACERCA":
                      
                        $('#switch').empty();
                        $('#switch').hide().append("<section id='acerca'><div class='circle animated fadeInDown'></div><div class='circle animated fadeInDown'></div><div class='circle animated fadeInDown'></div></section>").fadeIn();
                          break;
                      case "PORTFOLIO":
                          
                          $.ajax({
                          type:"POST",
                          url:"data/template.php",
                          data:{selection:"PORTFOLIO"},
                          success:function(data){
                            $('#switch').empty();
                            
                            $('#switch').hide().append("<section id='portfolio' class='animated fadeInFull2'>"+data+"</section>").fadeIn();
                            $('#main-content').css("height", "800px");
                            $('#portfolio').addClass('flex');
                          }
                        });
                          break;
                      case "TRY-ME":
                          $('#switch').html('en construccion');
                          
                          break;
                      case "CONTACTO":
                          $('#switch').load('templates/contact.php');
                          $('#main-content').css("height", "600px");
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
      $('#main-content').find('a').fadeIn();
      $('#main-content').find('a').css("opacity", 1);
      
      


     } 
     else{
      
     }

  })
  .mouseleave(function() {
      $('#main-content').find('nav').find('h3').css("transform", "scale(0)");
      $('#main-content').find('h3').css("padding-bottom", "35px");
      
      $('#main-content').css("background-color", "rgba(0,127,127, 0.1)");
      $('#main-content').css("box-shadow", "1px 1px 15px rgba(0,255,255,0.8)");
      $('#main-content').find('a').css("opacity", 0);
  });


});