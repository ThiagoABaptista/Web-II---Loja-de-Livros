$.post('valida_usuario.php', function(data) {
    var usuario =  JSON.parse(data);
    if(data != "false"){
        document.querySelector("#logar").innerHTML = "<a onclick='deslogar_usuario()'>Bem Vindo,"+ usuario[2] +"(Clique em mim para deslogar!)</a>";
    }else{
        document.querySelector("#logar").innerHTML = '<button id="logar" class="btn btn-link" type="button"><a href="user_login.html">Logar</a></button>'
    }
});
$.getJSON('pesquisa_todos_livros.php', {}, setLivrosHtml);


function setLivrosHtml(data){
    console.log(data);
    document.querySelector("#main").innerHTML = "";
    for(i in data){
        var livro = document.createElement('div');
        //livro.onclick = abrirDetalhesLivro(this);
        livro.style.maxWidth = '200px';
        livro.classList.toggle('card');
        var capaLivro = document.createElement('img');
        capaLivro.src = data[i].capa_livro;
        capaLivro.alt = "Capa do livro "+data[i].nome_livro;
        capaLivro.style.width = "100%";
        livro.append(capaLivro);
        var container_livro = document.createElement('div');
        container_livro.classList.toggle('container');
        container_livro.toggleAttribute("modal");
        container_livro.dataset.target = "#livroDetalhesModalCenter";
        livro.append(container_livro);
        var titulo_livro = document.createElement('h4');
        titulo_livro.textContent = data[i].nome_livro;
        titulo_livro.style.fontWeight = "bold";
        container_livro.append(titulo_livro);
        //livro.innerHTML += "<img src='"+data[i].capa_livro+"' alt='Capa' style='width:100%'>"
        //livro.innerHTML += "<h3><b>"+data[i].nome_livro+"</b></h3>"
        var nome_autor = document.createElement('h4');
        nome_autor.textContent = data[i].nome_autor;
        container_livro.append(nome_autor);
        container_livro.innerHTML += "Preço:<p class='price'>"+data[i].preco_livro+"</p>"
        //container_livro.innerHTML += "<button type='button' class='btn btn-primary btnAdicionaCarrinho' onclick='adicionarAoCarrinho()'>+ Carrinho</button>";
        //livro.onclick = abrirDetalhesLivro();
        livro.id=data[i].id_livro;
        livro.addEventListener("click",abrirDetalhesLivro,false);
        $("#main").append(livro);
        
    }
}
function deslogar_usuario(){
    $.post('deslogar_usuario.php',function(data){
        window.location.href = "index.html";
    });
}
function abrirDetalhesLivro(event){
    var livro = event.target.parentElement
    if(livro.className == "container"){
        livro = livro.parentElement;
    }
    sessionStorage.livroDetalhes = livro.id;
    console.log(livro.id);
    window.location.href = "livro_detalhes.html";
}


function buscar(e){
    var pesquisa = e.parentElement.children[0].value;
    console.log(pesquisa);
    $.getJSON('pesquisa_livro_nome.php', {livro : pesquisa},setLivrosHtml);
}
function buscarCategorias(){
    $.getJSON('pesquisa_categoria_all.php', {},setCategoriasMenuHtml);
}
function setCategoriasMenuHtml(data){
    document.querySelector('#categorias').innerHTML = "";
    for(i in data){
        var categoria = document.createElement('li');
        categoria.classList.add('nav-item');
        categoria.classList.add('active');
        var categoria_nome = document.createElement('button');
        categoria_nome.textContent = data[i].nome_categoria;
        categoria_nome.classList.add("btn-link");
        categoria.append(categoria_nome);
        categoria.addEventListener('click',setCategoriasResultadoHtml)
        $('#categorias').append(categoria);
    }
}
function setCategoriasResultadoHtml(event){
    $.getJSON('pesquisa_livro_categoria.php',{categoria:event.target.textContent},setLivrosHtml);
}  