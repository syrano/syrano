

<?php 
	
	$selection=$_POST['selection'];



	if (isset($selection)) {

	$textos = array('Lions Eventos' =>"HTML5 - CSS3 - Responsive Design" ,'Bertone & Asociados' =>"HTML5 - CSS3 - Jquery" , 'Queres ser vos?' => "HTML5 - CSS3 - MySql" , 'Podes solicitar tu sitio!' => "HTML5 - CSS3 - Responsive Design" );

	foreach ($textos as $titulo => $description) {
		echo "<div class='item animated fadeInDown'><section class='imageText'><h2>".$titulo."</h2><br><p>".$description."</p></section></div>";	
	}


	
	
}


 ?>

