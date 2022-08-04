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
    $password='[jD=qOKrPZ7$mcd2';
    $dbname="id19357075_web_ii_final";
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error()); 
    $sql = "SELECT * FROM autor a INNER JOIN livro_autor la ON a.id_autor = la.id_autor WHERE la.id_livro = ".$_REQUEST['livro'].";";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    $autores = [];
    while($linha = mysqli_fetch_assoc($resultado)){
        $autores[]= $linha;
    }
    if(is_null($resultado)){
        echo 0;
    }else{
        echo json_encode($autores);
    }
?>