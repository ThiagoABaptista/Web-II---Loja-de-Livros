<?php
ob_start();
session_start();
if(isset($_SESSION['carrinho'])){
    $carrinho = $_SESSION['carrinho'];
    $flag = false;
    echo json_encode($carrinho);
}else{
    echo false;
}
//header('location:carrinho.html');
?>