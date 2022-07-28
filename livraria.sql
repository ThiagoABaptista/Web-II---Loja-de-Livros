CREATE TABLE autor(
    id_autor int PRIMARY KEY UNIQUE,
    nome VARCHAR(255)
);
CREATE TABLE livro(
    id_livro int PRIMARY KEY UNIQUE,
    nome VARCHAR(255),
    sumario VARCHAR(255),
    capa VARCHAR(255)
);
CREATE TABLE livro_autor(
    id_livro int PRIMARY KEY,
    id_autor int PRIMARY KEY
);