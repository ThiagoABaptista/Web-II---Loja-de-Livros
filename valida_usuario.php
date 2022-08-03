<?php
  ob_start();
  session_start();
  if(session_status() !== PHP_SESSION_ACTIVE || session_id() === "" || $_SESSION == null){  
    echo json_encode(false); 
  }else{
    $login = $_SESSION['login'];
    $senha = $_SESSION['password'];
    $host="localhost";
    $port=3306;
    $socket="";
    $user="root";
    $password="";
    $dbname="id19357075_web_ii_final";
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error()); 
    $sql = "SELECT * FROM `USUARIO` WHERE `nome_usuario` = '$login' AND `password_usuario`= '$password'";
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