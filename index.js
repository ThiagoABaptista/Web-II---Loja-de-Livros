function iniciar() {
    $.getJSON('pesquisa_todos_livros.php', {}, function(data) {
        for(i in data){
            var livro = document.createElement('div');
            livro.onclick = abrirDetalhesLivro(this);
            livro.innerHTML += "<img src='' alt='Capa' style='width:100%'><div class='container'><h3><b>"+data.nome_livro+"</b></h3><h4>"+data.nome_autor+"</h4><p>"+data_sumario+"</p><p class='price'>"+data.preco+"</p><p><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#livroDetalhesModalCenter'>Add to Cart</button></p></div></div>";
            $("#main").append(livro);
        }
    });
}
function testeModal(){
    $('#livroDetalhesModalCenter')
    $('#livroDetalhesModalCenter').modal('toggle');
}
function abrirDetalhesLivro(e){
    var teste = $(e+' b').value;
    console.log(teste);
    $.getJSON('ajax_pesquisa_livro.php', {e}, function(data) {});
    $('#livroDetalhesModalCenter').modal('toggle');
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