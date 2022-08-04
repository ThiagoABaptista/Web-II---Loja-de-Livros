<?php
ob_start();
session_start();
$id_livro = $_POST['id_livro'];
if(isset($_SESSION['carrinho'])){
    $carrinho = $_SESSION['carrinho'];
    $index;
    $flag = false;
    foreach($carrinho as $key => $value){
        if($value["id_livro"] == $id_livro  && !$flag){
            
            $index = $key;
            $flag = true;

            
        }
    }
    
    if(!$flag){
        echo false;
    }else{
        array_splice($carrinho,$key,1);
    }
}else{
    echo false;
}

$_SESSION['carrinho'] = $carrinho;
header('location:carrinho.html');
?>