<?php
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
    $password="[jD=qOKrPZ7$mcd2";
    $dbname="id19357075_web_ii_final";
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error()); 
    
    $sql = "SELECT * FROM usuario u WHERE u.nome_usuario LIKE '%".$_REQUEST['usuario']."%'";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    echo json_encode($resultado);
?>