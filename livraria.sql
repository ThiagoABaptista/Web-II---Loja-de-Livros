SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE TABLE `autor` (
  `id_autor` int(11) NOT NULL AUTO_INCREMENT,
  `nome_autor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_autor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `livro` (
  `id_livro` int(11) NOT NULL AUTO_INCREMENT,
  `nome_livro` varchar(255) DEFAULT NULL,
  `sumario_livro` varchar(255) DEFAULT NULL,
  `capa_livro` varchar(255) DEFAULT NULL,
  `preco_livro` decimal(3,0) DEFAULT NULL,
  PRIMARY KEY (`id_livro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `livro_autor` (
  `id_livro` int(11) NOT NULL,
  `id_autor` int(11) NOT NULL,
  PRIMARY KEY (`id_livro`,`id_autor`),
  KEY `fk_livro_autor` (`id_autor`),
  CONSTRAINT `fk_id_livro` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_livro_autor` FOREIGN KEY (`id_autor`) REFERENCES `autor` (`id_autor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `password_usuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `categoria` ( `id_categoria` INT NOT NULL AUTO_INCREMENT , `nome_categoria` VARCHAR(50) NOT NULL , PRIMARY KEY (`id_categoria`)) ENGINE = InnoDB;
ALTER TABLE `livro` ADD `id_categoria` INT NOT NULL AFTER `preco_livro`;
ALTER TABLE `livro` ADD FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)

INSERT INTO `webii_ajax`.`autor`
(`id_autor`,
`nome_autor`)
VALUES
(<{id_autor: }>,
<{nome_autor: }>);

INSERT INTO `webii_ajax`.`livro`
(`id_livro`,
`nome_livro`,
`sumario_livro`,
`capa_livro`,
`preco_livro`)
VALUES
(<{id_livro: }>,
<{nome_livro: }>,
<{sumario_livro: }>,
<{capa_livro: }>,
<{preco_livro: }>);

INSERT INTO `webii_ajax`.`livro_autor`
(`id_livro`,
`id_autor`)
VALUES
(<{id_livro: }>,
<{id_autor: }>);

INSERT INTO `webii_ajax`.`usuario`
(`id_usuario`,
`password_usuario`)
VALUES
(<{id_usuario: }>,
<{password_usuario: }>);
