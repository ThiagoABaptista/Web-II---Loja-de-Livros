CREATE TABLE autor(
    id_autor int PRIMARY KEY UNIQUE NOT NULL,
    nome_autor VARCHAR(255)
);
CREATE TABLE livro(
    id_livro int PRIMARY KEY UNIQUE NOT NULL,
    nome_livro VARCHAR(255),
    sumario_livro VARCHAR(255),
    capa_livro VARCHAR(255),
    preco_livro NUMBER
);
CREATE TABLE livro_autor(
    id_livro int PRIMARY KEY NOT NULL,
    id_autor int PRIMARY KEY NOT NULL
);

INSERT INTO autor (nome) VALUES ("Thiago Baptista");
INSERT INTO livro(nome,sumario,capa) VALUES ();