-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-11-2023 a las 22:50:10
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `RoboticaFD`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categorias`
--

CREATE TABLE `Categorias` (
  `id_cat` int(32) NOT NULL,
  `categoria_cat` varchar(30) NOT NULL,
  `id_mod_cat` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Categorias`
--

INSERT INTO `Categorias` (`id_cat`, `categoria_cat`, `id_mod_cat`) VALUES
(3, 'algo', 4),
(7, 'algo2', 7),
(8, 'uno', 6),
(10, 'uno2', 6),
(12, 'uno3', 7),
(13, 'uno4', 7),
(16, 'uno7', 1),
(17, 'uno8', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Equipos`
--

CREATE TABLE `Equipos` (
  `id_equ` int(32) NOT NULL,
  `equipo_equ` varchar(30) NOT NULL,
  `id_cat_equ` int(32) NOT NULL,
  `id_pat_equ` int(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Equipos`
--

INSERT INTO `Equipos` (`id_equ`, `equipo_equ`, `id_cat_equ`, `id_pat_equ`) VALUES
(4, 'uno1', 3, 5),
(10, 'uno2', 16, 5),
(13, 'uno7', 13, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Integrantes`
--

CREATE TABLE `Integrantes` (
  `id_int` int(32) NOT NULL,
  `integrante_int` varchar(40) NOT NULL,
  `id_equ_int` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Integrantes`
--

INSERT INTO `Integrantes` (`id_int`, `integrante_int`, `id_equ_int`) VALUES
(3, 'uno9', 13),
(7, 'uno123', 13),
(8, 'uno2', 10),
(10, 'uno4', 4),
(12, 'uno7', 13),
(13, 'uno8', 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Modalidades`
--

CREATE TABLE `Modalidades` (
  `id_mod` int(32) NOT NULL,
  `modalidad_mod` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Modalidades`
--

INSERT INTO `Modalidades` (`id_mod`, `modalidad_mod`) VALUES
(1, 'nueva'),
(4, 'otra'),
(6, 'otra1'),
(7, 'otra12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Patrocinadores`
--

CREATE TABLE `Patrocinadores` (
  `id_pat` int(32) NOT NULL,
  `patrocinador_pat` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Patrocinadores`
--

INSERT INTO `Patrocinadores` (`id_pat`, `patrocinador_pat`) VALUES
(1, 'uno'),
(5, 'uno1'),
(7, 'uno2'),
(8, 'uno3'),
(9, 'uno4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Categorias`
--
ALTER TABLE `Categorias`
  ADD PRIMARY KEY (`id_cat`),
  ADD UNIQUE KEY `categoria_cat` (`categoria_cat`),
  ADD KEY `id_mod_cat` (`id_mod_cat`);

--
-- Indices de la tabla `Equipos`
--
ALTER TABLE `Equipos`
  ADD PRIMARY KEY (`id_equ`),
  ADD UNIQUE KEY `equipo_equ` (`equipo_equ`),
  ADD KEY `id_pat_equ` (`id_pat_equ`),
  ADD KEY `id_cat_equ` (`id_cat_equ`);

--
-- Indices de la tabla `Integrantes`
--
ALTER TABLE `Integrantes`
  ADD PRIMARY KEY (`id_int`),
  ADD UNIQUE KEY `integrante_int` (`integrante_int`),
  ADD KEY `id_equ_int` (`id_equ_int`);

--
-- Indices de la tabla `Modalidades`
--
ALTER TABLE `Modalidades`
  ADD PRIMARY KEY (`id_mod`),
  ADD UNIQUE KEY `modalidad_mod` (`modalidad_mod`);

--
-- Indices de la tabla `Patrocinadores`
--
ALTER TABLE `Patrocinadores`
  ADD PRIMARY KEY (`id_pat`),
  ADD UNIQUE KEY `patrocinador_pat` (`patrocinador_pat`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Categorias`
--
ALTER TABLE `Categorias`
  MODIFY `id_cat` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `Equipos`
--
ALTER TABLE `Equipos`
  MODIFY `id_equ` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `Integrantes`
--
ALTER TABLE `Integrantes`
  MODIFY `id_int` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `Modalidades`
--
ALTER TABLE `Modalidades`
  MODIFY `id_mod` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `Patrocinadores`
--
ALTER TABLE `Patrocinadores`
  MODIFY `id_pat` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Categorias`
--
ALTER TABLE `Categorias`
  ADD CONSTRAINT `Categorias_ibfk_1` FOREIGN KEY (`id_mod_cat`) REFERENCES `Modalidades` (`id_mod`) ON DELETE CASCADE;

--
-- Filtros para la tabla `Equipos`
--
ALTER TABLE `Equipos`
  ADD CONSTRAINT `Equipos_ibfk_1` FOREIGN KEY (`id_pat_equ`) REFERENCES `Patrocinadores` (`id_pat`) ON DELETE CASCADE,
  ADD CONSTRAINT `Equipos_ibfk_2` FOREIGN KEY (`id_cat_equ`) REFERENCES `Categorias` (`id_cat`),
  ADD CONSTRAINT `Equipos_ibfk_3` FOREIGN KEY (`id_cat_equ`) REFERENCES `Categorias` (`id_cat`) ON DELETE CASCADE;

--
-- Filtros para la tabla `Integrantes`
--
ALTER TABLE `Integrantes`
  ADD CONSTRAINT `Integrantes_ibfk_1` FOREIGN KEY (`id_equ_int`) REFERENCES `Equipos` (`id_equ`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
