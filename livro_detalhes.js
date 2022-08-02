var key = sessionStorage.key("livroDetalhes");
$.getJSON('pesquisa_livro_id.php', {livro : sessionStorage.getItem(key)}, function(data) {
    if(data == 0 || data == {}){
        sessionStorage.clear;
        window.location.href = "livro_erro.html";
    }else{
        document.querySelector("#livro_capa").src = data[0].capa_livro;
        document.querySelector("#livro_nome").textContent = data[0].nome_livro;
        document.querySelector("#livro_sumario").textContent = data[0].sumario_livro;
        document.querySelector('#livro_preco').textContent += data[0].preco_livro;
        $.getJSON('pesquisa_livro_autores.php', {livro : sessionStorage.getItem(key)}, function(data) {
            for(i in data){
                var autores = document.createElement('li');
                autores.textContent = data[i].nome_autor;
                 
                document.querySelector("#autores_nome").append(autores);
            }
        });
        $.getJSON('pesquisa_livro_autores.php', {livro : sessionStorage.getItem(key)}, function(data) {
            
            document.querySelector("#livro_categoria").textContent = data[0];
        });
    }
});