<?php
 
            $email_id="horacio.estevez@gmail.com";
            $userName=$_POST['userName'];
            $userEmail=$_POST['userEmail'];
            $userPhone=$_POST['userPhone'];
            $userMsg=$_POST['userMsg'];
            $subject = "Mensaje de ".$userName; 
            $message = '<html><head><title>'.$subject.'</title></head><body><table><tr><td>Correo :  </td><td> '.$userEmail.'</td></tr>
<tr><td>Telefono : </td><td> '.$userPhone.'</td></tr><tr><td>Nombre : </td><td> '.$userName.'</td></tr><tr><td>Mensaje : </td><td> '.$userMsg.'</td>
</tr></table></body></html>';
            //$message = "Email id :  ".$userEmail. "\r\nPhone No : ".$userPhone."\r\nName : ".$userName."\r\nSays : ".$userMsg;
            $to=$email_id;
            $headers = "From: " . strip_tags($userEmail) . "\r\n";
            $headers .= "Reply-To: ". strip_tags($userEmail) . "\r\n";
            //$headers .= "CC: susan@example.com\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
            if(!mail($to, $subject, $message, $headers)){
             $mail_status='no';
                header("Location: noenviado.php");
            exit();
          }else{
              $mail_status='yes';
            header("Location: enviado.php");
            exit();
            
         } ?>