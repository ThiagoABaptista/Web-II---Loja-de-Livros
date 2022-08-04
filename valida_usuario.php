<?php
  ob_start();
  session_start();
  /*
  $host="localhost";
  $port=3306;
  $socket="";
  $user="root";
  $password="";
  $dbname="id19357075_web_ii_final";
  $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
  or die ('Could not connect to the database server' . mysqli_connect_error()); 
  */
  $host="localhost";
  $port=3306;
  $socket="";
  $user="id19357075_thiago_baptista";
  $senha= '[jD=qOKrPZ7$mcd2';
  $dbname="id19357075_web_ii_final";
  $con = new mysqli($host, $user, $senha, $dbname, $port, $socket)
  or die ('Could not connect to the database server' . mysqli_connect_error()); 
  if(session_status() !== PHP_SESSION_ACTIVE || $_SESSION == null || !(isset($_SESSION['login']))){  
    echo json_encode(false); 
  }else{
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    $sql = "SELECT * FROM `usuario` WHERE `nome_usuario` = '".$login."' AND `password_usuario`= '".$password."';";
    $resultado = mysqli_query($con,$sql);
    if(mysqli_num_rows ($resultado) > 0 )
    {
        echo json_encode(mysqli_fetch_row($resultado));
    }
    else{
      unset ($_SESSION['login']);
      unset ($_SESSION['password']);
      echo json_encode(false);
    } 
  }
?>