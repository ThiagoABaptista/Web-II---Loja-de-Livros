-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 04-Ago-2022 às 23:20
-- Versão do servidor: 10.5.16-MariaDB
-- versão do PHP: 7.3.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `id19357075_web_ii_final`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `autor`
--

CREATE TABLE `autor` (
  `id_autor` int(11) NOT NULL,
  `nome_autor` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `autor`
--

INSERT INTO `autor` (`id_autor`, `nome_autor`) VALUES
(1, 'Tolkien'),
(3, 'William Gibson');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nome_categoria` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nome_categoria`) VALUES
(1, 'Fantasia'),
(2, 'Ficção');

-- --------------------------------------------------------

--
-- Estrutura da tabela `livro`
--

CREATE TABLE `livro` (
  `id_livro` int(11) NOT NULL,
  `nome_livro` varchar(255) DEFAULT NULL,
  `sumario_livro` varchar(255) DEFAULT NULL,
  `capa_livro` varchar(255) DEFAULT NULL,
  `preco_livro` decimal(5,2) DEFAULT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `livro`
--

INSERT INTO `livro` (`id_livro`, `nome_livro`, `sumario_livro`, `capa_livro`, `preco_livro`, `id_categoria`) VALUES
(1, 'O Senhor dos Anéis', 'O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.', 'https://images-na.ssl-images-amazon.com/images/I/71ZLavBjpRL.jpg', 47.00, 1),
(3, 'Neuromancer', 'Evoluindo de Blade Runner e antecipando Matrix, Neuromancer é o romance de estreia de William Gibson. Esta obra distópica, publicada em 1984, antevê, de modo muito preciso, vários aspectos fundamentais da sociedade atual e de sua relação com a tecnologia.', 'https://images-na.ssl-images-amazon.com/images/I/91Bx5ilP+EL.jpg', 29.90, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `livro_autor`
--

CREATE TABLE `livro_autor` (
  `id_livro` int(11) NOT NULL,
  `id_autor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `livro_autor`
--

INSERT INTO `livro_autor` (`id_livro`, `id_autor`) VALUES
(1, 1),
(3, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `password_usuario` varchar(255) DEFAULT NULL,
  `nome_usuario` varchar(50) NOT NULL,
  `email_usuario` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `password_usuario`, `nome_usuario`, `email_usuario`) VALUES
(4, '', 'teste', 'toppogod@gmail.com');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`id_autor`);

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índices para tabela `livro`
--
ALTER TABLE `livro`
  ADD PRIMARY KEY (`id_livro`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Índices para tabela `livro_autor`
--
ALTER TABLE `livro_autor`
  ADD PRIMARY KEY (`id_livro`,`id_autor`),
  ADD KEY `fk_livro_autor` (`id_autor`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `autor`
--
ALTER TABLE `autor`
  MODIFY `id_autor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `livro`
--
ALTER TABLE `livro`
  MODIFY `id_livro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `livro`
--
ALTER TABLE `livro`
  ADD CONSTRAINT `livro_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`);

--
-- Limitadores para a tabela `livro_autor`
--
ALTER TABLE `livro_autor`
  ADD CONSTRAINT `fk_id_livro` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_livro_autor` FOREIGN KEY (`id_autor`) REFERENCES `autor` (`id_autor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
