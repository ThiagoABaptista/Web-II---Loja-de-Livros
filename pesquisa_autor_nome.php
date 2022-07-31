<?php
    $con = mysqli_connect('localhost','root','','webii_ajax');
    $sql = "SELECT * FROM autor a WHERE a.nome_autor LIKE '%".$_REQUEST['autor']."%'";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    echo json_encode($resultado);
?>