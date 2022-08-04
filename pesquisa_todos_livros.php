<?php
    /*
    $host="localhost";
    $port=3306;
    $socket="";
    $user="root";
    $password="";
    $dbname="id19357075_web_ii_final";
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error()); 
    */
    $host="localhost";
    $port=3306;
    $socket="";
    $user="id19357075_thiago_baptista";
    $password="[jD=qOKrPZ7$mcd2";
    $dbname="id19357075_web_ii_final";
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error()); 

    $sql = "SELECT l.id_livro,l.nome_livro,l.sumario_livro,l.capa_livro,l.preco_livro FROM livro l INNER JOIN livro_autor la ON l.id_livro = la.id_livro INNER JOIN autor a ON a.id_autor = la.id_autor GROUP BY l.id_livro LIMIT 20";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    $livros = [];
    while($linha = mysqli_fetch_assoc($resultado)){
        $livros[]= $linha;
    }
    //$con->close();
    echo json_encode($livros);
?>