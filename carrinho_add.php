<?php
ob_start();
session_start();
$id_livro = $_POST['id_livro'];
$quantidade = $_POST['quantidade'];
if(isset($_SESSION['carrinho'])){
    $carrinho = $_SESSION['carrinho'];
    $flag = false;
    foreach($carrinho as $key => $value){
        if($value["id_livro"] == $id_livro  && !$flag){
            $carrinho[$key]["quant"] = $quantidade;
            $flag = true;
        }
    }
    if(!$flag){
        $carrinho[] = (array(
            "id_livro" => $id_livro,
            "quant" => $quantidade,
        ));
    }
}else{
    $carrinho = array(array(
        "id_livro" => $id_livro,
        "quant" => $quantidade,
    )); 
}
//$carrinho = array_values($carrinho);
$_SESSION['carrinho'] = $carrinho;
echo json_encode($carrinho);
//header('location:carrinho.html');

?>