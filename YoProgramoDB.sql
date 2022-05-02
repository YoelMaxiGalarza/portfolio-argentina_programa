DROP DATABASE if exists yoprogramo;
CREATE DATABASE yoprogramo;
USE yoprogramo;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario(
     id VARCHAR(250) NOT NULL PRIMARY KEY,
     usuario VARCHAR(50) NOT NULL,
     pass_usuario CHAR(50) NOT NULL
);

DROP table if exists persona;
CREATE TABLE persona(
	id VARCHAR(250) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    puesto VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250) NOT NULL
);

DROP table if exists experiencia_laboral;
CREATE TABLE experiencia_laboral(
	id VARCHAR(250) NOT NULL PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    imagen VARCHAR(250) NOT NULL
);

DROP table if exists educacion;
CREATE TABLE educacion(
	id VARCHAR(250) NOT NULL PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    imagen VARCHAR(250) NOT NULL
);

DROP table if exists habilidades;
CREATE TABLE habilidades(
	id VARCHAR(250) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    porcentaje INT NOT NULL,
    imagen VARCHAR(250) NOT NULL
);

DROP table if exists proyectos;
CREATE TABLE proyectos(
	id VARCHAR(250) NOT NULL PRIMARY KEY,
    titulo VARCHAR(250) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    imagen VARCHAR(250) NOT NULL,
    url VARCHAR(250) NOT NULL
);
