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
    $sql = "SELECT * FROM livro l INNER JOIN categoria c ON l.id_categoria = c.id_categoria WHERE c.nome_categoria = '".$_REQUEST['categoria']."';";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    $livros = [];
    while($linha = mysqli_fetch_assoc($resultado)){
        $livros[]= $linha;
    }
    echo json_encode($livros);
?>