window.onload = iniciar();
var livros_carrinho = [];
function iniciar(){
    livros_carrinho = [];
    var carrinho = JSON.parse(sessionStorage.getItem("carrinho"));
    if(carrinho === null){
        //$('#carrinho thead').style.visibility = "hidden";
        $('#carrinho').innerHTML = "<p>Carrinho Vazio</p>";
    }else{
        document.querySelector('#carrinho tbody ').innerHTML="";
        for(var i = 0; i < carrinho.length;i++){
            var linha = document.createElement('tr');
            var quant = document.createElement('td');
            var quant_text = document.createElement('input');
            quant_text.setAttribute('type','number');
            quant_text.value = carrinho[i].quant;
            quant_text.style.textAlign = "center";
            quant.append(quant_text);
            var excluir = document.createElement('td');
            var excluir_btn = document.createElement('button');
            excluir_btn.textContent = "X";
            excluir_btn.type = "button";
            excluir_btn.classList.add("btn");
            excluir_btn.classList.add("btn-danger")
            excluir.append(excluir_btn);
            $.getJSON('pesquisa_livro_id.php', {livro : carrinho[i].id_livro}, function(data) {
                if(data == 0 || data == {}){
                    $('carrinho thead').style.display = "none";
                    $('carrinho').append("<p>Carrinho Vazio</p>");
                }else{
                    livros_carrinho.push({id_livro:data[0].id_livro,nome_livro:data[0].nome_livro})
                    var nome = document.createElement('td');
                    nome.textContent = data[0].nome_livro;
                    linha.append(quant);
                    linha.append(nome);
                    linha.append(excluir);
                    //document.querySelector("#carrinho").innerHTML +="<tr><td><p>"+data[0].nome_livro+"</p></td>";
                }
            });
            
            excluir_btn.addEventListener('click',deletar);
            quant_text.addEventListener('change',atualizar);
            $('#carrinho tbody').append(linha);
        }
    }
}

function deletar(event){
    var flag = false;
    var nome = event.target.parentElement.parentElement.children[1].textContent;
    var carrinho = JSON.parse(sessionStorage.getItem("carrinho"));
    for(var i = 0; i < livros_carrinho.length || !flag; i++){
        if(nome == livros_carrinho[i].nome_livro){
            carrinho.splice(i,1);
            sessionStorage.carrinho = JSON.stringify(carrinho);
            flag = true;
        }
    }
    iniciar();
}

function atualizar(event){
    var flag = false;
    var nome = event.target.parentElement.parentElement.children[1].textContent;
    var carrinho = JSON.parse(sessionStorage.getItem("carrinho"));
    for(var i = 0; i < livros_carrinho.length || !flag; i++){
        if(nome == livros_carrinho[i].nome_livro){
            console.log(carrinho[i].quant);
            carrinho[i].quant = event.target.value;
            sessionStorage.carrinho = JSON.stringify(carrinho);
            flag = true;
        }
    }
    iniciar();
    /*
    carrinho[linha].quant = event.target.value;
    console.log(carrinho);
    sessionStorage.carrinho = JSON.stringify(carrinho);
    iniciar();
    */
}
function finalizarCompra(event){
    
}