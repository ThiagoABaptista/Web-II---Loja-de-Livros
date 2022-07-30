<?php
    $con = mysqli_connect('localhost','root','','webii_ajax');
    $sql = "SELECT l.nome_livro,l.sumario_livro,l.capa_livro,l.preco_livro,a.nome_autor FROM livro l INNER JOIN livro_autor la ON l.id_livro = la.id_livro INNER JOIN autor a ON a.id_autor = la.id_autor";
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