<?php
    $con = mysqli_connect('localhost','root','','webii_ajax');
    $sql = "SELECT * FROM livro l WHERE l.id_livro = ".$_REQUEST['livro'];
    $resultado = mysqli_query($con,$sql);
    $livros = [];
    while($linha = mysqli_fetch_assoc($resultado)){
        $livros[]= $linha;
    }
    if(!$resultado){
        echo mysqli_error($con);
    }else if(is_null($resultado)){
        echo 0;
    }else{
        echo json_encode($livros);    
    }
?>