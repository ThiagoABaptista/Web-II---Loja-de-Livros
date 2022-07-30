function iniciar() {
    $.getJSON('pesquisa_todos_livros.php', {}, function(data) {
        for(i in data){
            console.log(data[i]);
            var livro = document.createElement('div');
            //livro.onclick = abrirDetalhesLivro(this);
            livro.style.maxWidth = '200px';
            var capaLivro = document.createElement('img');
            capaLivro.src = data[i].capa_livro;
            capaLivro.alt = "Capa";
            capaLivro.style.width = "100%";
            livro.append(capaLivro);
            var container_livro = document.createElement('div');
            container_livro.classList.add("container");
            livro.onclick = abrirDetalhesLivro(this);
            livro.addEventListener("click",abrirDetalhesLivro(this));
            container_livro.toggleAttribute("modal");
            container_livro.dataset.target = "#livroDetalhesModalCenter";
            livro.append(container_livro);
            var titulo_livro = document.createElement('h3');
            titulo_livro.textContent = data[i].nome_livro;
            titulo_livro.style.fontWeight = "bold";
            container_livro.append(titulo_livro);
            //livro.innerHTML += "<img src='"+data[i].capa_livro+"' alt='Capa' style='width:100%'>"
            //livro.innerHTML += "<h3><b>"+data[i].nome_livro+"</b></h3>"
            
            var nome_autor = document.createElement('h4');
            nome_autor.textContent = data[i].nome_autor;
            container_livro.append(nome_autor);
            container_livro.innerHTML += "<p>"+data[i].sumario_livro+"</p>"
            container_livro.innerHTML += "<p class='price'>"+data[i].preco_livro+"</p>"
            container_livro.innerHTML += "</div><p><button type='button' class='btn btn-primary' onclick'adicionarAoCarrinho()'>Adidicionar ao carrinho</button></p>";
            $("#main").append(livro);
            
        }
    });
}
function testeModal(){
    $('#livroDetalhesModalCenter')
    $('#livroDetalhesModalCenter').modal('toggle');
}
function abrirDetalhesLivro(e){
    //var teste = document.querySelector(e+' b').value;
    console.log(e);
    //$.getJSON('ajax_pesquisa_livro.php', {livro:teste}, setLivroDetalhes);
    
    /*<div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                ...
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>*/
}
function setLivroDetalhes(data){
    $('#livroDetalhesModalCenter').append = "<div class='modal-content'><div class='modal-header'><img src='"+data.capa+"' alt='Capa' style='width:100%'><h5 class='modal-title' id='exampleModalLongTitle'>"+data.livro.nome+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'><h6>"+data.autor.nome+"</h6><p>"+data.livro.livro_sumario+"</p></div><div class='modal-footer'><div><b>Preço:</b><p>"+data.preco_livro+"</p></div><button type='button' class='btn btn-primary' onclick'adicionarAoCarrinho()'>Adidicionar ao carrinho</button></div></div>";
    $('#livroDetalhesModalCenter').modal('toggle');
}
function adicionarAoCarrinho(){

}