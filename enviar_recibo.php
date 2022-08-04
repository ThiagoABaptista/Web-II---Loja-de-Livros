<?php
ob_start();
session_start();

$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="id19357075_web_ii_final";
$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
or die ('Could not connect to the database server' . mysqli_connect_error()); 
//$con = mysqli_connect('localhost','id19357075_thiago_baptista','[jD=qOKrPZ7$mcd2','id19357075_web_ii_final');
$login = $_SESSION['login'];
$carrinho = $_SESSION['carrinho'];
$password = $_POST['password'];

$sql = "SELECT email_usuario FROM `USUARIO` WHERE `nome_usuario` = '$login' AND `password_usuario`= '$password'";
$resultado = mysqli_query($con,$sql);
$email = mysqli_fetch_row($resultado)[0];
while($linha = mysqli_fetch_assoc($resultado)){
    $livros[]= $linha;
}
$total = 0;
$msg = "Recibo:\n";
foreach($carrinho as $key => $value){
    $id_livro = $value["id_livro"];
    $sql = "SELECT l.nome_livro FROM `livro` l WHERE `id_livro` = ".$id_livro;
    $resultado = mysqli_query($con,$sql);
    $nome_livro = mysqli_fetch_row($resultado)[0];
    $sql = "SELECT l.preco_livro FROM `livro` l WHERE `id_livro` = ".$id_livro;
    $resultado = mysqli_query($con,$sql);
    $preco_livro = mysqli_fetch_row($resultado)[0];
    $total += $value['quant'] * $preco_livro;
    $msg .= "Quantidade: ".$value['quant']."\nLivro:".$nome_livro ."\nPreço:".$preco_livro."\n";
}
$msg .= "Preço total:".$total;
if(mail($email,'Recibo Web-II---Loja-de-Livros',$msg)){
    echo true;
}else{
    echo false;
}
unset ($_SESSION['carrinho']);
?>