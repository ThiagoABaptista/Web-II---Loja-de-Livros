var key = sessionStorage.key("livroDetalhes");
console.log(sessionStorage.getItem(key));
$.getJSON('pesquisa_livro_id.php', {livro : sessionStorage.getItem(key)}, function(data) {
    if(data == 0 || data == {}){
        sessionStorage.clear;
        window.location.href = "livro_erro.html";
    }else{
        console.log(data);
        //$("#livro_capa").src = data[0].capa_livro;
    }
});