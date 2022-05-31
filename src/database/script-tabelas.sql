CREATE DATABASE InstaCode;

USE InstaCode;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	link VARCHAR(30),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
); 

CREATE TABLE report (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fkReportante int, FOREIGN KEY (fkReportante) REFERENCES(idUsuario),
	fkReportado int, FOREIGN KEY (fkReportado) REFERENCES Post (idPost)
);
