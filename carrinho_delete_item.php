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
            array_splice($carrinho,$key,1);
            $flag = true;
        }
    }
    if(!$flag){
        echo json_encode(false);
    }else{
        
    }
}else{
    echo json_encode(false);
}
$_SESSION['carrinho'] = $carrinho;
echo "carrinho.html";
//header('location:carrinho.html');
?>