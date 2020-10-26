-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2020 at 09:40 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lancheonnet`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nm_login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cd_senha` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nm_cliente` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nm_email_cliente` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `cd_telefone_cliente` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nm_login`, `cd_senha`, `nm_cliente`, `nm_email_cliente`, `cd_telefone_cliente`) VALUES
(1, 'maria_carla', '202cb962ac59075b964b07152d234b70', 'Maria Carla', 'mcarla_@gmail.com.br', '(13) 9740-21284'),
(2, 'thales_almeida', '202cb962ac59075b964b07152d234b70', 'Thales Almeida', 'adm.thales@gmail.com', '(13) 3327-2661'),
(3, 'robs', 'f8ea3b8d90f45858fe7f1bb965c18287', 'Roberta Novaes', 'roberta_novaes@gmail.com', '(13) 9123-45678'),
(4, 'abel_tuter', '4297f44b13955235245b2497399d7a93', 'Abel Tuter', 'abel_tuter@gmail.com', '(13) 9987-65432'),
(5, 'teste', '4297f44b13955235245b2497399d7a93', 'teste', 'lokitodev@gmail.com', '(13) 9999-99999'),
(6, 'teste1', 'aa1bf4646de67fd9086cf6c79007026c', 'teste1', 'teste@example.com', '(13) 9999-99999'),
(7, 'testeS', 'aa1bf4646de67fd9086cf6c79007026c', 'testeS', 'teste@example.com', '(12) 3333-33333'),
(8, 'erick_raimundo', '4297f44b13955235245b2497399d7a93', 'Erick Raimundo Ribeiro', 'erick@example.com', '(69) 9811-60551'),
(9, 'teresa_paz', '4297f44b13955235245b2497399d7a93', 'Teresinha Sara da Paz', 'teresinhasaradapaz_@compuativa.com.br', '(87) 9912-62355'),
(10, 'tomas_tei', '4297f44b13955235245b2497399d7a93', 'Tomás Arthur Teixeira', 'ttomasarthurteixeira@jeffersonbarroso.com.br', '(91) 9877-66720');

-- --------------------------------------------------------

--
-- Table structure for table `lanchonete`
--

CREATE TABLE `lanchonete` (
  `id_lanchonete` int(11) NOT NULL,
  `nm_lanchonete` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cd_cnpj_lanchonete` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `nm_email_lanchonete` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nm_endereco_lanchonete` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `lanchonete`
--

INSERT INTO `lanchonete` (`id_lanchonete`, `nm_lanchonete`, `cd_cnpj_lanchonete`, `nm_email_lanchonete`, `nm_endereco_lanchonete`) VALUES
(2, 'Lanche On Net', '74.385.774/0001-16', 'lancheon@net.com.br', 'Rua Condessa de Buturuvi N. 300 loja 47, São Paulo - SP');

-- --------------------------------------------------------

--
-- Table structure for table `mesa`
--

CREATE TABLE `mesa` (
  `id_mesa` int(11) NOT NULL,
  `cd_numero_mesa` int(11) NOT NULL,
  `qt_cadeira_mesa` int(11) NOT NULL,
  `ds_mesa` longtext COLLATE utf8_unicode_ci NOT NULL,
  `disponibilidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `mesa`
--

INSERT INTO `mesa` (`id_mesa`, `cd_numero_mesa`, `qt_cadeira_mesa`, `ds_mesa`, `disponibilidade`) VALUES
(1, 27, 4, 'Mesa localizada próximo a porta, ar condicionado logo acima fazendo com que ela seja uma mesa bastante refrigerada. longe da janela.', 1),
(2, 13, 2, 'Mesa para dois localizada no meio da Lanchonete. boa iluminação e longe do ar condicionado sendo uma mesa mais quente.', 1),
(3, 33, 2, 'lorem ipsum sit amet', 1),
(4, 5, 2, 'Mesa especial de casal, muito bem arejada, perto do bar', 1);

-- --------------------------------------------------------

--
-- Table structure for table `prato`
--

CREATE TABLE `prato` (
  `id_prato` int(11) NOT NULL,
  `ativo` int(1) NOT NULL,
  `nm_prato` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `vl_prato` double NOT NULL,
  `ds_prato` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `prato`
--

INSERT INTO `prato` (`id_prato`, `ativo`, `nm_prato`, `vl_prato`, `ds_prato`) VALUES
(1, 1, 'Prato', 40, 'teste de prato'),
(2, 1, 'Prato02', 30.5, 'Teste valor quebrado'),
(3, 1, 'dasdasd', 30.05, 'asdasdasd'),
(4, 1, 'testee', 20.59, 'wdasdawdweqwe'),
(7, 1, 'teste ', 20.39, 'TESTE INSERT');

-- --------------------------------------------------------

--
-- Table structure for table `prato_reserva`
--

CREATE TABLE `prato_reserva` (
  `id` int(11) NOT NULL,
  `prato` int(11) NOT NULL,
  `reserva` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prato_reserva`
--

INSERT INTO `prato_reserva` (`id`, `prato`, `reserva`, `quantidade`) VALUES
(1, 1, 9, 2),
(2, 1, 10, 2),
(3, 1, 11, 1),
(4, 2, 12, 1),
(5, 1, 13, 2),
(6, 1, 14, 1),
(7, 1, 15, 3),
(8, 1, 16, 1),
(9, 1, 146, 1),
(10, 1, 147, 1),
(11, 3, 147, 1),
(12, 1, 148, 1),
(13, 4, 148, 1),
(14, 2, 148, 1),
(15, 1, 149, 1),
(16, 1, 150, 1),
(17, 1, 151, 1),
(18, 3, 151, 1),
(19, 1, 152, 1),
(20, 3, 153, 2),
(21, 1, 154, 3),
(22, 3, 154, 1),
(23, 1, 155, 3),
(24, 3, 155, 1),
(25, 2, 156, 2),
(26, 3, 156, 1),
(27, 1, 157, 1),
(28, 2, 157, 4),
(29, 2, 158, 4),
(30, 3, 158, 1),
(31, 2, 159, 3),
(32, 3, 159, 1),
(33, 2, 160, 4),
(34, 3, 160, 1),
(35, 3, 161, 3),
(36, 4, 161, 1),
(37, 2, 162, 2),
(38, 4, 162, 4),
(39, 1, 162, 1),
(40, 3, 162, 3),
(41, 1, 163, 1),
(42, 3, 163, 3),
(43, 2, 163, 2),
(44, 1, 164, 2),
(45, 2, 164, 2),
(46, 3, 164, 3),
(47, 1, 165, 1),
(48, 2, 165, 2),
(49, 3, 165, 3),
(50, 2, 166, 2),
(51, 3, 166, 3),
(52, 1, 166, 1),
(53, 1, 167, 2),
(54, 2, 167, 1),
(55, 3, 167, 3),
(56, 1, 168, 2),
(57, 2, 168, 1),
(58, 3, 168, 3),
(59, 4, 168, 5),
(60, 1, 169, 1),
(61, 2, 169, 2),
(62, 3, 169, 3),
(63, 4, 169, 4),
(64, 1, 170, 1),
(65, 2, 170, 2),
(66, 3, 170, 3),
(67, 4, 170, 4),
(68, 1, 172, 1),
(69, 2, 172, 2),
(70, 3, 172, 3),
(71, 4, 172, 4),
(72, 2, 173, 2),
(73, 3, 173, 3),
(74, 4, 173, 4),
(75, 7, 173, 5),
(76, 1, 174, 1),
(77, 2, 174, 2),
(78, 3, 174, 3),
(79, 4, 174, 4),
(80, 7, 174, 5),
(81, 1, 175, 1),
(82, 2, 175, 2),
(83, 3, 175, 3),
(84, 4, 175, 4),
(85, 7, 175, 5),
(86, 1, 176, 1),
(87, 2, 176, 2),
(88, 3, 176, 3),
(89, 4, 176, 4),
(90, 7, 176, 5),
(91, 1, 177, 1),
(92, 2, 177, 2),
(93, 3, 177, 3),
(94, 4, 177, 4),
(95, 7, 177, 5),
(96, 1, 178, 1),
(97, 2, 178, 2),
(98, 3, 178, 3),
(99, 4, 178, 4),
(100, 7, 178, 5),
(101, 1, 179, 1),
(102, 2, 179, 2),
(103, 3, 179, 3),
(104, 4, 179, 4),
(105, 7, 179, 5),
(106, 1, 180, 1),
(107, 2, 180, 1),
(108, 3, 180, 1),
(109, 4, 180, 1),
(110, 7, 180, 1),
(111, 1, 181, 1),
(112, 2, 181, 1),
(113, 3, 181, 1),
(114, 4, 181, 1),
(115, 7, 181, 1),
(116, 1, 182, 1),
(117, 2, 182, 1),
(118, 3, 182, 1),
(119, 4, 182, 1),
(120, 7, 182, 1),
(121, 1, 183, 1),
(122, 2, 183, 1),
(123, 3, 183, 1),
(124, 1, 184, 1),
(125, 2, 184, 1),
(126, 3, 184, 1),
(127, 1, 185, 1),
(128, 1, 186, 1),
(129, 1, 187, 1),
(130, 1, 188, 1),
(131, 1, 189, 1),
(132, 2, 189, 1),
(133, 3, 189, 1),
(134, 1, 190, 1),
(135, 2, 190, 1),
(136, 3, 190, 1),
(137, 1, 191, 1),
(138, 2, 191, 1),
(139, 3, 191, 1),
(140, 1, 192, 1),
(141, 2, 192, 1),
(142, 3, 192, 1),
(143, 1, 193, 1),
(144, 1, 194, 1),
(145, 2, 194, 1),
(146, 3, 194, 1);

-- --------------------------------------------------------

--
-- Table structure for table `promocao`
--

CREATE TABLE `promocao` (
  `id_promocao` int(11) NOT NULL,
  `vl_promocao` double NOT NULL,
  `nm_promocao` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ds_promocao` longtext COLLATE utf8_unicode_ci NOT NULL,
  `ativo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `promocao`
--

INSERT INTO `promocao` (`id_promocao`, `vl_promocao`, `nm_promocao`, `ds_promocao`, `ativo`) VALUES
(1, 35.45, 'Namoradinhos', 'Desconto para o Dia dos Namorados', 0),
(2, 10.45, '10 OFF', '10% de desconto!', 1),
(5, 45.5, 'Amigão', 'Venha com um Amigo que nunca veio à casa e ganhe um super desconto', 1),
(6, 200, 'teste', 'teste', 1),
(7, 59.99, 'teste Insert', 'teste Insert', 1);

-- --------------------------------------------------------

--
-- Table structure for table `refeicao`
--

CREATE TABLE `refeicao` (
  `id_refeicao` int(11) NOT NULL,
  `id_reserva` int(11) NOT NULL,
  `id_prato` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reserva`
--

CREATE TABLE `reserva` (
  `id_reserva` int(11) NOT NULL,
  `dt_inicio_reserva` datetime NOT NULL,
  `dt_termino_reserva` datetime NOT NULL,
  `dt_pagamento_reserva` datetime DEFAULT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_mesa` int(11) NOT NULL,
  `ativo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reserva`
--

INSERT INTO `reserva` (`id_reserva`, `dt_inicio_reserva`, `dt_termino_reserva`, `dt_pagamento_reserva`, `id_cliente`, `id_mesa`, `ativo`) VALUES
(9, '2020-10-04 16:11:18', '2020-10-04 16:11:18', NULL, 3, 1, 1),
(10, '2020-10-04 16:12:32', '2020-10-04 16:12:32', NULL, 3, 1, 1),
(11, '2020-10-04 17:41:45', '2020-10-04 17:41:45', NULL, 3, 1, 1),
(12, '2020-10-04 17:56:10', '2020-10-04 17:56:10', NULL, 3, 1, 1),
(13, '2020-10-04 17:58:06', '2020-10-04 17:58:06', NULL, 3, 1, 1),
(14, '2020-10-04 18:04:16', '2020-10-04 18:04:16', NULL, 3, 1, 1),
(15, '2020-10-04 18:10:29', '2020-10-04 18:10:29', NULL, 3, 1, 1),
(16, '2020-10-04 18:13:06', '2020-10-04 18:13:06', NULL, 3, 1, 1),
(17, '2020-10-10 19:12:32', '2020-10-10 19:12:32', NULL, 3, 1, 1),
(18, '2020-10-17 15:21:41', '2020-10-17 15:21:41', NULL, 3, 1, 1),
(19, '2020-10-17 15:22:07', '2020-10-17 15:22:07', NULL, 3, 1, 1),
(20, '2020-10-17 16:08:42', '2020-10-17 16:08:42', NULL, 3, 1, 1),
(21, '2020-10-17 18:00:57', '2020-10-17 18:00:57', NULL, 3, 1, 1),
(22, '2020-10-17 18:02:34', '2020-10-17 18:02:34', NULL, 3, 1, 1),
(23, '2020-10-20 20:48:07', '2020-10-20 20:48:07', NULL, 5, 1, 1),
(24, '2020-10-24 17:15:37', '2020-10-24 17:15:37', NULL, 5, 1, 1),
(25, '2020-10-24 19:10:29', '2020-10-24 19:10:29', NULL, 5, 1, 1),
(26, '2020-10-24 19:10:44', '2020-10-24 19:10:44', NULL, 5, 1, 1),
(27, '2020-10-24 19:25:12', '2020-10-24 19:25:12', NULL, 5, 1, 1),
(28, '2020-10-24 19:54:49', '2020-10-24 19:54:49', NULL, 5, 1, 1),
(29, '2020-10-24 20:57:53', '2020-10-24 20:57:53', NULL, 5, 2, 1),
(30, '2020-10-24 20:58:59', '2020-10-24 20:58:59', NULL, 5, 1, 1),
(31, '2020-10-24 20:59:38', '2020-10-24 20:59:38', NULL, 5, 1, 1),
(32, '2020-10-24 21:00:31', '2020-10-24 21:00:31', NULL, 5, 1, 1),
(33, '2020-10-24 21:11:45', '2020-10-24 21:11:45', NULL, 5, 1, 1),
(34, '2020-10-24 21:15:27', '2020-10-24 21:15:27', NULL, 5, 1, 1),
(35, '2020-10-24 21:16:13', '2020-10-24 21:16:13', NULL, 5, 1, 1),
(36, '2020-10-24 21:17:00', '2020-10-24 21:17:00', NULL, 5, 1, 1),
(37, '2020-10-24 21:26:48', '2020-10-24 21:26:48', NULL, 5, 1, 1),
(38, '2020-10-24 21:28:10', '2020-10-24 21:28:10', NULL, 5, 1, 1),
(39, '2020-10-24 21:29:09', '2020-10-24 21:29:09', NULL, 5, 1, 1),
(40, '2020-10-24 21:30:01', '2020-10-24 21:30:01', NULL, 5, 1, 1),
(41, '2020-10-24 21:30:35', '2020-10-24 21:30:35', NULL, 5, 1, 1),
(42, '2020-10-24 21:31:08', '2020-10-24 21:31:08', NULL, 5, 1, 1),
(43, '2020-10-24 21:31:47', '2020-10-24 21:31:47', NULL, 5, 1, 1),
(44, '2020-10-24 21:32:20', '2020-10-24 21:32:20', NULL, 5, 1, 1),
(45, '2020-10-24 21:32:42', '2020-10-24 21:32:42', NULL, 5, 1, 1),
(46, '2020-10-24 21:34:35', '2020-10-24 21:34:35', NULL, 5, 1, 1),
(47, '2020-10-24 21:42:22', '2020-10-24 21:42:22', NULL, 5, 1, 1),
(48, '2020-10-24 21:44:46', '2020-10-24 21:44:46', NULL, 5, 1, 1),
(49, '2020-10-24 21:45:09', '2020-10-24 21:45:09', NULL, 5, 1, 1),
(50, '2020-10-24 21:46:39', '2020-10-24 21:46:39', NULL, 5, 1, 1),
(51, '2020-10-24 21:47:10', '2020-10-24 21:47:10', NULL, 5, 1, 1),
(52, '2020-10-24 21:48:08', '2020-10-24 21:48:08', NULL, 5, 1, 1),
(53, '2020-10-24 21:48:38', '2020-10-24 21:48:38', NULL, 5, 1, 1),
(54, '2020-10-24 21:49:04', '2020-10-24 21:49:04', NULL, 5, 1, 1),
(55, '2020-10-24 21:49:23', '2020-10-24 21:49:23', NULL, 5, 1, 1),
(56, '2020-10-24 21:49:57', '2020-10-24 21:49:57', NULL, 5, 1, 1),
(57, '2020-10-24 21:50:36', '2020-10-24 21:50:36', NULL, 5, 1, 1),
(58, '2020-10-24 21:51:20', '2020-10-24 21:51:20', NULL, 5, 1, 1),
(59, '2020-10-24 21:58:38', '2020-10-24 21:58:38', NULL, 5, 1, 1),
(60, '2020-10-24 21:59:27', '2020-10-24 21:59:27', NULL, 5, 1, 1),
(61, '2020-10-24 22:00:03', '2020-10-24 22:00:03', NULL, 5, 1, 1),
(62, '2020-10-24 22:01:15', '2020-10-24 22:01:15', NULL, 5, 1, 1),
(63, '2020-10-24 22:50:11', '2020-10-24 22:50:11', NULL, 5, 1, 1),
(64, '2020-10-24 22:52:01', '2020-10-24 22:52:01', NULL, 5, 1, 1),
(65, '2020-10-24 22:56:22', '2020-10-24 22:56:22', NULL, 5, 1, 1),
(66, '2020-10-24 22:57:39', '2020-10-24 22:57:39', NULL, 5, 1, 1),
(67, '2020-10-24 22:57:59', '2020-10-24 22:57:59', NULL, 5, 1, 1),
(68, '2020-10-24 22:58:57', '2020-10-24 22:58:57', NULL, 5, 1, 1),
(69, '2020-10-24 22:59:11', '2020-10-24 22:59:11', NULL, 5, 1, 1),
(70, '2020-10-24 22:59:40', '2020-10-24 22:59:40', NULL, 5, 1, 1),
(71, '2020-10-24 22:59:59', '2020-10-24 22:59:59', NULL, 5, 1, 1),
(72, '2020-10-24 23:03:09', '2020-10-24 23:03:09', NULL, 5, 1, 1),
(73, '2020-10-24 23:03:32', '2020-10-24 23:03:32', NULL, 5, 1, 1),
(74, '2020-10-24 23:06:58', '2020-10-24 23:06:58', NULL, 5, 1, 1),
(75, '2020-10-24 23:08:15', '2020-10-24 23:08:15', NULL, 5, 1, 1),
(76, '2020-10-24 23:08:47', '2020-10-24 23:08:47', NULL, 5, 1, 1),
(77, '2020-10-24 23:09:19', '2020-10-24 23:09:19', NULL, 5, 1, 1),
(78, '2020-10-24 23:10:06', '2020-10-24 23:10:06', NULL, 5, 1, 1),
(79, '2020-10-24 23:10:21', '2020-10-24 23:10:21', NULL, 5, 1, 1),
(80, '2020-10-24 23:10:44', '2020-10-24 23:10:44', NULL, 5, 1, 1),
(81, '2020-10-24 23:11:09', '2020-10-24 23:11:09', NULL, 5, 1, 1),
(82, '2020-10-24 23:11:32', '2020-10-24 23:11:32', NULL, 5, 1, 1),
(83, '2020-10-24 23:12:13', '2020-10-24 23:12:13', NULL, 5, 1, 1),
(84, '2020-10-24 23:12:38', '2020-10-24 23:12:38', NULL, 5, 1, 1),
(85, '2020-10-24 23:14:47', '2020-10-24 23:14:47', NULL, 5, 1, 1),
(86, '2020-10-24 23:15:36', '2020-10-24 23:15:36', NULL, 5, 1, 1),
(87, '2020-10-24 23:17:15', '2020-10-24 23:17:15', NULL, 5, 1, 1),
(88, '2020-10-24 23:18:34', '2020-10-24 23:18:34', NULL, 5, 1, 1),
(89, '2020-10-24 23:19:32', '2020-10-24 23:19:32', NULL, 5, 1, 1),
(90, '2020-10-24 23:24:47', '2020-10-24 23:24:47', NULL, 5, 2, 1),
(91, '2020-10-24 23:26:57', '2020-10-24 23:26:57', NULL, 5, 1, 1),
(92, '2020-10-24 23:27:47', '2020-10-24 23:27:47', NULL, 5, 1, 1),
(93, '2020-10-24 23:28:33', '2020-10-24 23:28:33', NULL, 5, 1, 1),
(94, '2020-10-24 23:29:21', '2020-10-24 23:29:21', NULL, 5, 1, 1),
(95, '2020-10-24 23:31:17', '2020-10-24 23:31:17', NULL, 5, 1, 1),
(96, '2020-10-24 23:32:17', '2020-10-24 23:32:17', NULL, 5, 1, 1),
(97, '2020-10-24 23:33:21', '2020-10-24 23:33:21', NULL, 5, 1, 1),
(98, '2020-10-24 23:33:35', '2020-10-24 23:33:35', NULL, 5, 1, 1),
(99, '2020-10-24 23:35:48', '2020-10-24 23:35:48', NULL, 5, 1, 1),
(100, '2020-10-24 23:36:40', '2020-10-24 23:36:40', NULL, 5, 1, 1),
(101, '2020-10-24 23:37:22', '2020-10-24 23:37:22', NULL, 5, 1, 1),
(102, '2020-10-24 23:38:03', '2020-10-24 23:38:03', NULL, 5, 1, 1),
(103, '2020-10-24 23:38:31', '2020-10-24 23:38:31', NULL, 5, 1, 1),
(104, '2020-10-24 23:40:28', '2020-10-24 23:40:28', NULL, 5, 1, 1),
(105, '2020-10-24 23:40:46', '2020-10-24 23:40:46', NULL, 5, 1, 1),
(106, '2020-10-24 23:42:25', '2020-10-24 23:42:25', NULL, 5, 1, 1),
(107, '2020-10-24 23:46:11', '2020-10-24 23:46:11', NULL, 5, 1, 1),
(108, '2020-10-24 23:58:34', '2020-10-24 23:58:34', NULL, 5, 1, 1),
(109, '2020-10-25 00:31:34', '2020-10-25 00:31:34', NULL, 5, 1, 1),
(110, '2020-10-25 00:32:30', '2020-10-25 00:32:30', NULL, 5, 1, 1),
(111, '2020-10-25 00:33:17', '2020-10-25 00:33:17', NULL, 5, 1, 1),
(112, '2020-10-25 00:33:48', '2020-10-25 00:33:48', NULL, 5, 1, 1),
(113, '2020-10-25 00:36:15', '2020-10-25 00:36:15', NULL, 5, 1, 1),
(114, '2020-10-25 00:36:46', '2020-10-25 00:36:46', NULL, 5, 1, 1),
(115, '2020-10-25 00:53:44', '2020-10-25 00:53:44', NULL, 5, 1, 1),
(116, '2020-10-25 00:54:21', '2020-10-25 00:54:21', NULL, 5, 1, 1),
(117, '2020-10-25 00:55:01', '2020-10-25 00:55:01', NULL, 5, 1, 1),
(118, '2020-10-25 00:56:11', '2020-10-25 00:56:11', NULL, 5, 1, 1),
(119, '2020-10-25 00:57:07', '2020-10-25 00:57:07', NULL, 5, 1, 1),
(120, '2020-10-25 00:57:37', '2020-10-25 00:57:37', NULL, 5, 1, 1),
(121, '2020-10-25 00:58:04', '2020-10-25 00:58:04', NULL, 5, 1, 1),
(122, '2020-10-25 01:00:02', '2020-10-25 01:00:02', NULL, 5, 1, 1),
(123, '2020-10-25 01:02:09', '2020-10-25 01:02:09', NULL, 5, 1, 1),
(124, '2020-10-25 01:02:28', '2020-10-25 01:02:28', NULL, 5, 1, 1),
(125, '2020-10-25 01:02:56', '2020-10-25 01:02:56', NULL, 5, 1, 1),
(126, '2020-10-25 01:03:19', '2020-10-25 01:03:19', NULL, 5, 1, 1),
(127, '2020-10-25 01:03:54', '2020-10-25 01:03:54', NULL, 5, 1, 1),
(128, '2020-10-25 01:04:07', '2020-10-25 01:04:07', NULL, 5, 1, 1),
(129, '2020-10-25 01:04:36', '2020-10-25 01:04:36', NULL, 5, 1, 1),
(130, '2020-10-25 01:05:56', '2020-10-25 01:05:56', NULL, 5, 1, 1),
(131, '2020-10-25 01:06:18', '2020-10-25 01:06:18', NULL, 5, 1, 1),
(132, '2020-10-25 01:06:48', '2020-10-25 01:06:48', NULL, 5, 1, 1),
(133, '2020-10-25 01:07:11', '2020-10-25 01:07:11', NULL, 5, 1, 1),
(134, '2020-10-25 01:07:15', '2020-10-25 01:07:15', NULL, 5, 1, 1),
(135, '2020-10-25 01:07:24', '2020-10-25 01:07:24', NULL, 5, 1, 1),
(136, '2020-10-25 01:08:02', '2020-10-25 01:08:02', NULL, 5, 1, 1),
(137, '2020-10-25 01:10:23', '2020-10-25 01:10:23', NULL, 5, 1, 1),
(138, '2020-10-25 01:11:15', '2020-10-25 01:11:15', NULL, 5, 2, 1),
(139, '2020-10-25 01:12:04', '2020-10-25 01:12:04', NULL, 5, 1, 1),
(140, '2020-10-25 01:12:47', '2020-10-25 01:12:47', NULL, 5, 1, 1),
(141, '2020-10-25 01:22:43', '2020-10-25 01:22:43', NULL, 5, 1, 1),
(142, '2020-10-25 01:26:44', '2020-10-25 01:26:44', NULL, 5, 1, 1),
(143, '2020-10-25 12:34:22', '2020-10-25 12:34:22', NULL, 5, 1, 1),
(144, '2020-10-25 12:41:40', '2020-10-25 12:41:40', NULL, 5, 1, 1),
(145, '2020-10-25 12:42:27', '2020-10-25 12:42:27', NULL, 5, 1, 1),
(146, '2020-10-25 12:42:50', '2020-10-25 12:42:50', NULL, 5, 1, 1),
(147, '2020-10-25 12:44:30', '2020-10-25 12:44:30', NULL, 5, 1, 1),
(148, '2020-10-25 12:45:59', '2020-10-25 12:45:59', NULL, 5, 1, 1),
(149, '2020-10-25 12:46:38', '2020-10-25 12:46:38', NULL, 5, 1, 1),
(150, '2020-10-25 12:47:26', '2020-10-25 12:47:26', NULL, 5, 1, 1),
(151, '2020-10-25 12:48:24', '2020-10-25 12:48:24', NULL, 5, 1, 1),
(152, '2020-10-25 12:49:10', '2020-10-25 12:49:10', NULL, 5, 1, 1),
(153, '2020-10-25 12:54:12', '2020-10-25 12:54:12', NULL, 5, 1, 1),
(154, '2020-10-25 12:54:48', '2020-10-25 12:54:48', NULL, 5, 1, 1),
(155, '2020-10-25 12:58:23', '2020-10-25 12:58:23', NULL, 5, 1, 1),
(156, '2020-10-25 13:40:16', '2020-10-25 13:40:16', NULL, 5, 1, 1),
(157, '2020-10-25 13:42:55', '2020-10-25 13:42:55', NULL, 5, 1, 1),
(158, '2020-10-25 13:43:20', '2020-10-25 13:43:20', NULL, 5, 1, 1),
(159, '2020-10-25 13:43:53', '2020-10-25 13:43:53', NULL, 5, 1, 1),
(160, '2020-10-25 13:44:29', '2020-10-25 13:44:29', NULL, 5, 1, 1),
(161, '2020-10-25 13:45:35', '2020-10-25 13:45:35', NULL, 5, 1, 1),
(162, '2020-10-25 13:45:58', '2020-10-25 13:45:58', NULL, 5, 1, 1),
(163, '2020-10-25 13:47:35', '2020-10-25 13:47:35', NULL, 5, 1, 1),
(164, '2020-10-25 13:49:12', '2020-10-25 13:49:12', NULL, 5, 1, 1),
(165, '2020-10-25 13:49:37', '2020-10-25 13:49:37', NULL, 5, 1, 1),
(166, '2020-10-25 13:50:43', '2020-10-25 13:50:43', NULL, 5, 1, 1),
(167, '2020-10-25 13:51:27', '2020-10-25 13:51:27', NULL, 5, 1, 1),
(168, '2020-10-25 13:55:05', '2020-10-25 13:55:05', NULL, 5, 1, 1),
(169, '2020-10-25 13:55:49', '2020-10-25 13:55:49', NULL, 5, 1, 1),
(170, '2020-10-25 13:57:19', '2020-10-25 13:57:19', NULL, 5, 1, 1),
(171, '2020-10-25 13:59:47', '2020-10-25 13:59:47', NULL, 5, 1, 1),
(172, '2020-10-25 14:00:54', '2020-10-25 14:00:54', NULL, 5, 1, 1),
(173, '2020-10-25 14:01:35', '2020-10-25 14:01:35', NULL, 5, 2, 1),
(174, '2020-10-25 14:01:56', '2020-10-25 14:01:56', NULL, 5, 1, 1),
(175, '2020-10-25 14:02:45', '2020-10-25 14:02:45', NULL, 5, 1, 1),
(176, '2020-10-25 14:03:56', '2020-10-25 14:03:56', NULL, 5, 1, 1),
(177, '2020-10-25 14:04:55', '2020-10-25 14:04:55', NULL, 5, 1, 1),
(178, '2020-10-25 14:08:47', '2020-10-25 14:08:47', NULL, 5, 1, 1),
(179, '2020-10-25 14:10:27', '2020-10-25 14:10:27', NULL, 5, 1, 1),
(180, '2020-10-25 14:11:09', '2020-10-25 14:11:09', NULL, 5, 1, 1),
(181, '2020-10-25 14:14:14', '2020-10-25 14:14:14', NULL, 5, 1, 1),
(182, '2020-10-25 14:17:52', '2020-10-25 14:17:52', NULL, 5, 1, 1),
(183, '2020-10-25 14:32:55', '2020-10-25 14:32:55', NULL, 5, 1, 1),
(184, '2020-10-25 14:33:45', '2020-10-25 14:33:45', NULL, 5, 1, 1),
(185, '2020-10-25 14:34:28', '2020-10-25 14:34:28', NULL, 5, 1, 1),
(186, '2020-10-25 14:35:16', '2020-10-25 14:35:16', NULL, 5, 1, 1),
(187, '2020-10-25 14:36:20', '2020-10-25 14:36:20', NULL, 5, 1, 1),
(188, '2020-10-25 14:36:54', '2020-10-25 14:36:54', NULL, 5, 1, 1),
(189, '2020-10-25 14:38:30', '2020-10-25 14:38:30', NULL, 5, 1, 1),
(190, '2020-10-25 14:40:45', '2020-10-25 14:40:45', NULL, 5, 1, 1),
(191, '2020-10-25 14:41:29', '2020-10-25 14:41:29', NULL, 5, 1, 1),
(192, '2020-10-25 14:42:28', '2020-10-25 14:42:28', NULL, 5, 1, 1),
(193, '2020-10-25 14:44:02', '2020-10-25 14:44:02', NULL, 5, 1, 1),
(194, '2020-10-25 14:44:34', '2020-10-25 14:44:34', NULL, 5, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `nome` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `ativo` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`nome`, `login`, `senha`, `ativo`, `id`) VALUES
('Roberta Novaes', 'robs', 'f8ea3b8d90f45858fe7f1bb965c18287', 1, 1),
('André', 'saxton', 'f8ea3b8d90f45858fe7f1bb965c18287', 1, 2),
('Professor Salgado', 'salgado', '25f7b61fc978131fbd1ab37710881728', 1, 5),
('Monteiro', 'Mont', 'f8ea3b8d90f45858fe7f1bb965c18287', 1, 6),
('Lisa', 'lisa.mona', 'f8ea3b8d90f45858fe7f1bb965c18287', 1, 7),
('Abel Tuter', 'abel.tuter', '4297f44b13955235245b2497399d7a93', 1, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indexes for table `lanchonete`
--
ALTER TABLE `lanchonete`
  ADD PRIMARY KEY (`id_lanchonete`);

--
-- Indexes for table `mesa`
--
ALTER TABLE `mesa`
  ADD PRIMARY KEY (`id_mesa`);

--
-- Indexes for table `prato`
--
ALTER TABLE `prato`
  ADD PRIMARY KEY (`id_prato`);

--
-- Indexes for table `prato_reserva`
--
ALTER TABLE `prato_reserva`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promocao`
--
ALTER TABLE `promocao`
  ADD PRIMARY KEY (`id_promocao`);

--
-- Indexes for table `refeicao`
--
ALTER TABLE `refeicao`
  ADD PRIMARY KEY (`id_refeicao`),
  ADD KEY `FKRefeicaoReserva` (`id_reserva`),
  ADD KEY `FKRefeicaoPrato` (`id_prato`);

--
-- Indexes for table `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `FKReservaCliente` (`id_cliente`),
  ADD KEY `FKReservaMesa` (`id_mesa`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `lanchonete`
--
ALTER TABLE `lanchonete`
  MODIFY `id_lanchonete` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mesa`
--
ALTER TABLE `mesa`
  MODIFY `id_mesa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `prato`
--
ALTER TABLE `prato`
  MODIFY `id_prato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `prato_reserva`
--
ALTER TABLE `prato_reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT for table `promocao`
--
ALTER TABLE `promocao`
  MODIFY `id_promocao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `refeicao`
--
ALTER TABLE `refeicao`
  MODIFY `id_refeicao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reserva`
--
ALTER TABLE `reserva`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `refeicao`
--
ALTER TABLE `refeicao`
  ADD CONSTRAINT `FKRefeicaoPrato` FOREIGN KEY (`id_prato`) REFERENCES `prato` (`id_prato`),
  ADD CONSTRAINT `FKRefeicaoReserva` FOREIGN KEY (`id_reserva`) REFERENCES `reserva` (`id_reserva`);

--
-- Constraints for table `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `FKReservaCliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`),
  ADD CONSTRAINT `FKReservaMesa` FOREIGN KEY (`id_mesa`) REFERENCES `mesa` (`id_mesa`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
