$.getJSON('pesquisa_todos_livros.php', {}, function(data) {
    for(i in data){
        console.log(data[i]);
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
        container_livro.innerHTML += "<button type='button' class='btn btn-primary btnAdicionaCarrinho' onclick='adicionarAoCarrinho()'>+ Carrinho</button>";
        //livro.onclick = abrirDetalhesLivro();
        livro.id=data[i].id_livro;
        livro.addEventListener("click",abrirDetalhesLivro,false);
        $("#main").append(livro);
        
    }
});
function abrirDetalhesLivro(event){
    //var teste = document.querySelector(e);
    //alert(event.currentTarget);
    var livro = event.target.parentElement
    if(livro.className == "container"){
        livro = livro.parentElement
    }
    sessionStorage.livroDetalhes = livro.id;
    console.log(livro.id);
    window.location.href = "livro_detalhes.html";
}
/*
function setLivroDetalhes(data){
    $('#livroDetalhesModalCenter').append = "<div class='modal-content'><div class='modal-header'><img src='"+data.capa_livro+"' alt='Capa' style='width:100%'><h5 class='modal-title' id='exampleModalLongTitle'>"+data.nome_livro+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'><h6>"+data.nome_autorme+"</h6><p>"+data.sumario_livro+"</p></div><div class='modal-footer'><div><b>Preço:</b><p>"+data.preco_livro+"</p></div><button type='button' class='btn btn-primary' onclick'adicionarAoCarrinho()'>+ Carrinho</button></div></div>";
    $('#livroDetalhesModalCenter').modal('toggle');
}
*/
function adicionarAoCarrinho(){
    
}
