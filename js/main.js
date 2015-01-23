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


$(document).ready(function(){

  //Esto me cambia el container a cuadrado
  $('.menu-link').click(function(){
    $('#main-content').css("width", "90%");
    $('#main-content').css("border-radius", 0);

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
                        $('#switch').append("<div class='circle'></div><div class='circle'></div><div class='circle'></div>");
                          break;
                      case "PORTFOLIO":
                          $.ajax({
                          type:"POST",
                          url:"data/template.php",
                          data:{selection:"PORTFOLIO"},
                          success:function(data){
                            $('#switch').empty();
                            
                            $('#switch').append(data);
                            $('#main-content').css("height", "900px");
                          }
                        });
                          break;
                      case "TRY-ME":
                          console.log("test");
                          break;
                      case "CONTACTO":
                          console.log("test");
                          break;
                   
                  }

      }
    });
  });






});