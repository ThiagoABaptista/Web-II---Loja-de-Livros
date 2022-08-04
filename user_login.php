<?php
ob_start();
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
    $password='[jD=qOKrPZ7$mcd2';
    $dbname="id19357075_web_ii_final";
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error()); 
    
    $login = $_POST['login'];
    $password = $_POST['password'];

    session_start();
    $sql = "SELECT * FROM `usuario` WHERE `nome_usuario` = '".$login."' AND `password_usuario`= '".$password."';";
    $resultado = mysqli_query($con,$sql);
    echo json_encode($sql);
    echo json_encode($resultado);
    if(!$resultado){
        unset ($_SESSION['login']);
        unset ($_SESSION['password']);
        //header('location:index.html');
    }else{
        if(mysqli_num_rows ($resultado) > 0 )
        {
            $_SESSION['login'] = $login;
            $_SESSION['password'] = $password;
            header('location:index.html');
        }
        else{
            unset ($_SESSION['login']);
            unset ($_SESSION['password']);
            //header('location:index.html');
        }
    }
?>