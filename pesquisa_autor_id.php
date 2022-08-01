<?php
    $con = mysqli_connect('localhost','thiago_baptista','[jD=qOKrPZ7$mcd2','id19357075_web_ii_final');
    $sql = "SELECT * FROM  autor a WHERE a,id_autor = ".$_REQUEST['autor']."";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    echo json_encode($resultado);
?>