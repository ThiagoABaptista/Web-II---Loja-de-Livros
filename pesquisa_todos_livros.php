<?php
    $con = mysqli_connect('localhost','root','','webii_final');
    $sql = "SELECT * FROM livro";
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