<?php
    $host="localhost";
    $port=3306;
    $socket="";
    $user="root";
    $password="";
    $dbname="id19357075_web_ii_final";
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error()); 
    //$con = mysqli_connect('localhost','id19357075_thiago_baptista','[jD=qOKrPZ7$mcd2','id19357075_web_ii_final');
    $sql = "SELECT * FROM livro l WHERE l.nome_livro LIKE '%".$_REQUEST['livro']."%'";
    //$sql = "SELECT * FROM livro l INNER JOIN livro_autor la ON l.id_livro = la.id_livro INNER JOIN autor a ON a.id_autor = la.id_autor WHERE l.id_livro = ".$_REQUEST['livro']."";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    echo json_encode($resultado);
?>