$.getJSON('pesquisa_usuario.php', {usuario : nome_usario}, function(data) {
    var usuario = {id_usuario:data.id_usuario,nome_usario:nome_usario,email_usuario:data.email_usuario};
    sessionStorage.usuario = JSON.stringify(usuario);
});