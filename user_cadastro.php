<?php
ob_start();
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

$email = explode('@',$_POST['email']);
if(count($email) != 2){
    header("Location: " . $_SERVER["HTTP_REFERER"]);
}
$login = $_POST['login'];
$email = $_POST['email'];
$password = $_POST['password'];
session_start();
$sql = "SELECT * FROM `USUARIO` WHERE `nome_usuario` = '$login' AND `password_usuario`= '$password'";
$result = mysqli_query($con,$sql);
if(mysqli_num_rows ($result) > 0 )
{
    $_SESSION['login'] = $login;
    $_SESSION['senha'] = $senha;
    echo "<script>alert('Usuário já cadastrado')</script>";
    header('location:index.html');
}
else{
    $sql = "INSERT INTO `usuario`(`nome_usuario`,`password_usuario`,`email_usuario`)VALUES('".$login."','".$password."','".$email."');";
    $resultado = mysqli_query($con,$sql);
    if(!$resultado){
        echo mysqli_error($con);
    }
    $_SESSION['login'] = $login;
    $_SESSION['password'] = $senha;
    echo "<script>alert(".$login.")</script>";
    echo "<script>alert(".$password.")</script>";
    header('location:index.html');
}

?>