<?php
    $con = mysqli_connect('localhost','thiago_baptista','[jD=qOKrPZ7$mcd2','id19357075_web_ii_final');
    $sql = "SELECT l.id_livro,l.nome_livro,l.sumario_livro,l.capa_livro,l.preco_livro FROM livro l INNER JOIN livro_autor la ON l.id_livro = la.id_livro INNER JOIN autor a ON a.id_autor = la.id_autor GROUP BY l.id_livro";
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