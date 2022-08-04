<?php
$msg;
if ($_REQUEST['assunto'] && $_REQUEST['msg']) {
   if (mail('02080277@aluno.canoas.ifrs.edu.br',"{$_REQUEST['assunto']}",$_REQUEST['msg'])) {
      echo 'E-Mail enviado com sucesso!<br>';
      $msg = 'E-Mail enviado com sucesso!<br>';
   }
   else {
      echo 'Erro no envio do e-mail.<br>';
      $msg = 'Erro no envio do e-mail.<br>';
   }
   echo("<script>alert(".$msg.")</script>")
}
?>