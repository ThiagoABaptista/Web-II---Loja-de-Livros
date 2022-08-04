<?php
ob_start();
$msg;
if ($_POST['assunto'] && $_POST['msg']) {
   if (mail('02080277@aluno.canoas.ifrs.edu.br',"{$_POST['assunto']}",$_REQUEST['msg'])) {
      echo 'E-Mail enviado com sucesso!<br>';
      $msg = 'E-Mail enviado com sucesso!<br>';
   }
   else {
      echo 'Erro no envio do e-mail.<br>';
      $msg = 'Erro no envio do e-mail.<br>';
   }
   header('location:index.html');
}
?>