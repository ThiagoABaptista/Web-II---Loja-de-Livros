window.onload = iniciar();
var livros_carrinho = [];
var usuario;
var preco_total = 0;
$.getJSON('valida_usuario.php', function(data) {
    if(data !== false){
        usuario = data;
    }else{

    }
});

function iniciar(){
    livros_carrinho = [];
    var carrinho;
    $.post('carrinho_get.php',function(data){
        if(data == false){
            carrinho = null;    
        }else{
            carrinho = JSON.parse(data);
            console.log(carrinho);
            setCarrinhoHtml(carrinho);
        }
        
    });
        /*
        for(var i = 0; i < carrinho.length;i++){
            
            var linha = document.createElement('tr');
            var quant = document.createElement('td');
            
            var quant_text = document.createElement('input');
            quant_text.setAttribute('type','number');
            quant_text.value = quant_livro;
            quant_text.style.textAlign = "center";
            quant.append(quant_text);
            
            var excluir = document.createElement('td');
            var excluir_btn = document.createElement('button');
            excluir_btn.textContent = "X";
            excluir_btn.type = "button";
            excluir_btn.classList.add("btn");
            excluir_btn.classList.add("btn-danger");
            excluir.append(excluir_btn);
            */
            
            /*
            excluir_btn.addEventListener('click',deletar);
            quant_text.addEventListener('change',atualizar);
            $('#carrinho tbody').append(linha);
            
        }
        */
    //$('#total').innerHTML = "<tr><th scope='row'>Preço Total:</th><td>"+preco_total+"</td></tr>"
}
function setCarrinhoHtml(carrinho){
    if(carrinho === null){
        //$('#carrinho thead').style.visibility = "hidden";
        $('#carrinho').innerHTML = "<p>Carrinho Vazio</p>";
    }else{
        document.querySelector('#carrinho tbody ').innerHTML = "";
        preco_total = 0;
        
        carrinho.forEach(item => {
            var excluir_html = "<td><button class = 'btn btn-danger' onclick='deletar(this)'>X</button></td>";
            var quant_livro = item.quant;
            $.getJSON('pesquisa_livro_id.php', {livro : item.id_livro}, function(data) {
                if(data == 0 || data == {}){
                    $('carrinho thead').style.display = "none";
                    $('carrinho').append("<p>Carrinho Vazio</p>");
                }else{
                    quant_livro = item.quant;
                    
                    var html_linha = "<tr><td><input type='number' onchange='atualizar(this)' value='"+quant_livro+"'></td>";
                    document.querySelector('#total').innerHTML = "";
                    livros_carrinho.push({id_livro:data[0].id_livro,nome_livro:data[0].nome_livro,preco_livro:data[0].preco_livro});
                    adicionarAoPrecoTotal( data[0].preco_livro *  quant_livro);
                    html_linha += "<td>"+data[0].nome_livro+"</td>";
                    html_linha += "<td>"+data[0].preco_livro+"</td>";
                    
                    var total = document.createElement('td');
                    total.textContent = adicionarAoPrecoTotal(0);
                    $('#total').append(total);
                    html_linha += excluir_html + "</tr>";
                    document.querySelector("#carrinho tbody").innerHTML += html_linha;
                }
            });
        });
    }
}
function adicionarAoPrecoTotal(preco_livro){
    preco_total += preco_livro;
    return preco_total;
}
function deletar(e){
    var flag = false;
    var nome = e.parentElement.parentElement.children[1].textContent;
    console.log(nome);
    $.getJSON('pesquisa_livro_nome.php',{livro: nome},function(data){
        console.log(data[0].id_livro);
        $.post('carrinho_delete_item.php',{id_livro : data[0].id_livro},function(data){
            console.log(data);
            if(data != false){
                window.location.href = data;
            }
                
        });
    });
    iniciar();
}

function atualizar(e){
    var flag = false;
    var nome = e.parentElement.parentElement.children[1].textContent;
    if(e.value > 0){
        $.getJSON('pesquisa_livro_nome.php',{livro: nome},function(data){
            $.post('carrinho_add.php',{id_livro : data[0].id_livro, quantidade: e.value},function(data){
                iniciar();
                window.location.href = "carrinho.html";
            });
        });
    }
    iniciar();
}
function finalizarCompra(){
        $.post('valida_usuario.php', function(data) {
            console.log(data);
            if(data !=  "false"){
                $.post('carrinho_get.php', function(data) {
                    if(JSON.parse( data) != []){
                        $.post('enviar_recibo.php',function(data){
                            console.log(data);
                            if(data == "false" || data == "vazio"){
                                data == "vazio" ? alert("Carrinho vazio!") : alert("Ocorreu algum erro!");
                            }else{
                                alert("Compra realizada!\nFoi enviado um recibo para seu email.");
                                window.location.href = data;
                                
                            }
                        });
                    }
                })
                
            }else{
                alert('Você não está logado!');
            }
        });
    
}