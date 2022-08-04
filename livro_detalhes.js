/*
    if(localStorage.getItem("username") === null){
        window.location.href = "usuario_login.html";
    }
*/
var livro_id = sessionStorage.getItem("livroDetalhes");
var livro_nome;
$.getJSON('pesquisa_livro_id.php', {livro : livro_id}, function(data) {
    if(data == 0 || data == {}){
        sessionStorage.clear;
        window.location.href = "livro_erro.html";
    }else{
        document.querySelector("#livro_capa").src = data[0].capa_livro;
        document.querySelector("#livro_nome").textContent = data[0].nome_livro;
        livro_nome = data[0].nome_livro;
        document.querySelector("#livro_sumario").textContent = data[0].sumario_livro;
        document.querySelector('#livro_preco').textContent += data[0].preco_livro;
        $.getJSON('pesquisa_livro_autores.php', {livro : livro_id}, function(data) {
            for(i in data){
                var autores = document.createElement('li');
                autores.textContent = data[i].nome_autor;
                 
                document.querySelector("#autores_nome").append(autores);
            }
        });
        $.getJSON('pesquisa_categoria_id.php', {categoria : data[0].id_categoria}, function(data) {
            document.querySelector("#livro_categoria").textContent = data[0];
        });
    }
});
function adicionarAoCarrinho(){
    var livro = JSON.parse(sessionStorage.getItem("livroDetalhes"));
    $.post('carrinho_get_quant.php', {id_livro: livro}, function(data) {
        console.log(data);
        if(data == false || data == "" || data == "false"){
            $.post('carrinho_add.php', {id_livro: livro,quantidade:1},function(data){
                console.log(data);
            });        
        }else{
            var quant = JSON.parse(data);
            console.log(quant);  
            quant++;
            $.post('carrinho_add.php', {id_livro: livro,quantidade:quant},function(data){
                console.log(data);
            });
        }
    });
    window.location.href = "carrinho.html";
    /*
    var flag = false;
    var carrinho;
    if(sessionStorage.getItem("carrinho") != null){
        carrinho = JSON.parse(sessionStorage.getItem("carrinho"));
        for(var i = 0; i < carrinho.length;i++){
            console.log(carrinho);
            if(carrinho[i].id_livro === livro_id){
                carrinho[i].quant++;
                flag = true;
            }
        }
        if(!flag){
            var pedido = {id_livro: sessionStorage.getItem("livroDetalhes"),quant:1,nome_livro:livro_nome}
            carrinho.push(pedido);
        }
    }else{
        carrinho = [{id_livro: sessionStorage.getItem("livroDetalhes"),quant:1,nome_livro:livro_nome}];
    }
    sessionStorage.carrinho = JSON.stringify(carrinho);
    */
}