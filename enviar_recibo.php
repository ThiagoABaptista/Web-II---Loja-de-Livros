<?php
ob_start();
session_start();
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
    $password='[jD=qOKrPZ7$mcd2';
    $dbname="id19357075_web_ii_final";
    $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
    or die ('Could not connect to the database server' . mysqli_connect_error()); 
    $login = $_SESSION['login'];
    $carrinho = $_SESSION['carrinho'];
    $password = $_SESSION['password'];

    $sql = "SELECT email_usuario FROM `usuario` WHERE `nome_usuario` = '".$login."' AND `password_usuario`= '".$password."';";
    $resultado = mysqli_query($con,$sql);
    $email = mysqli_fetch_row($resultado)[0];
    $total = 0;
    if(count($carrinho) != 0){
        $msg = "Recibo de compra na loja:\n--------";
        foreach($carrinho as $key => $value){
            $id_livro = $value["id_livro"];
            $sql = "SELECT l.nome_livro FROM `livro` l WHERE `id_livro` = ".$id_livro;
            $resultado = mysqli_query($con,$sql);
            $nome_livro = mysqli_fetch_row($resultado)[0];
            $sql = "SELECT l.preco_livro FROM `livro` l WHERE `id_livro` = ".$id_livro;
            $resultado = mysqli_query($con,$sql);
            $preco_livro = mysqli_fetch_row($resultado)[0];
            $total += $value['quant'] * $preco_livro;
            $msg .= "\nLivro:".$nome_livro ."\nPreço da unidade:".$preco_livro."\nQuantidade: ".$value['quant']."\n";
        }
        $msg .= "\n--------Preço total: R$".$total;
        if($total != 0){
            mail($email,'Recibo Web-II---Loja-de-Livros',$msg);
            unset ($_SESSION['carrinho']);
            echo "index.html";
        }else{
            echo false;
        }
    }else{
        echo "vazio";
    }
?>