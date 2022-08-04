<?php
ob_start();
session_start();
if(isset($_SESSION['carrinho']) && session_status() == PHP_SESSION_ACTIVE && $_SESSION != null){
    $carrinho = $_SESSION['carrinho'];
    $flag = false;
    foreach($carrinho as $key => $value){
        $arr = array_values ($value);
        if($arr[0] == $_POST['id_livro']  && !$flag){
            echo json_encode($arr[1]);
            $flag = true;
        }
    }
    if(!$flag){
        echo json_encode(false);
    }

}else{
    echo json_encode(false);
}
?>