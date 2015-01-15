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
                $('#content').find('p').empty();
                $('#content').find('p').append(data);

                switch(selection) {
                            case 'ACERCA':
                                $('#switch-result').empty();
                                $('#switch-result').append("<div class='circle'></div> <div class='circle'></div> <div class='circle'></div>");
                                break;
                            case 'PORTFOLIO':
                               $('#switch-result').empty();
                                $('#switch-result').append("chau");
                                break;
                                case 'TRY-ME':
                                $('#switch-result').empty();
                                $('#switch-result').append("puto");
                                break;
                                case 'CONTACTO':
                                $('#switch-result').empty();
                                $('#switch-result').append("forro");
                                break;
                                    }
            }


        });



    })

});