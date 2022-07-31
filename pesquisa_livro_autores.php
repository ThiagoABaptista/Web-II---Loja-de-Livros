<?php
    $con = mysqli_connect('localhost','root','','webii_ajax');
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