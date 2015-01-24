

<?php 
	
	$selection=$_POST['selection'];



	if (isset($selection)) {

$textos = array('ACERCA' => 'Mi Nombre es Horacio Gutierrez, tengo 24 años, me gusta mucho la música y las ciencias. Actualmente, el mundo web es lo que me apaciona y a lo que me estoy dedicando tiempo completo. Ser un exelente programador en PHP es mi objetivo y para eso, le pongo mi entera dedicación a cada uno de los proyectos que voy teniendo.',"PORTFOLIO"=>"Últimos trabajos:", "TRY-ME"=>"Probá mis últimas aplicaciones o diseños", "CONTACTO"=>"<?php require('templates/contact.php') ?>" );

	
	
	echo ($textos[$selection]);
	
}


 ?>