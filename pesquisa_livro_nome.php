<?php
    $con = mysqli_connect('localhost','thiago_baptista','[jD=qOKrPZ7$mcd2','id19357075_web_ii_final');
    $sql = "SELECT * FROM livro l WHERE l.nome_livro LIKE '%".$_REQUEST['livro']."%'";
    //$sql = "SELECT * FROM livro l INNER JOIN livro_autor la ON l.id_livro = la.id_livro INNER JOIN autor a ON a.id_autor = la.id_autor WHERE l.id_livro = ".$_REQUEST['livro']."";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    echo json_encode($resultado);
?>