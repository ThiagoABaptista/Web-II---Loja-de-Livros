<?php
    $con = mysqli_connect('localhost','thiago_baptista','[jD=qOKrPZ7$mcd2','id19357075_web_ii_final');
    $sql = "SELECT * FROM  livro l INNER JOIN categoria c ON l.id_categoria = c.id_categoria WHERE l.id_livro = ".$_REQUEST['livro']."";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    echo json_encode($resultado);
?>