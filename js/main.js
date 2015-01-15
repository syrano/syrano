 $(document).ready(function(){

    $('.menu-link').click(function(){

        
        $('#content').fadeIn();

        var selection=$(this).text();

        $('#content').find('article').find('header').find('h2').empty();
        $('#content').find('article').find('header').find('h2').append(selection);

        $.ajax({
            type:"GET",
            url:"data/arrays.php",
            data:{selection:selection},
            success:function(data){

                
            }


        });



    })

});