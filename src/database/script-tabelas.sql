CREATE DATABASE InstaCode;

USE InstaCode;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	dtCadastro  CURRENT_TIMESTAMP
);

CREATE TABLE public (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	gostei VARCHAR(30),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
); 

insert into public (titulo, descricao) values
('Seja Bem Vindo', 'Vamos manter um ambiente saudavel e bom para a comunidade,
Let´s code!');
CREATE TABLE report (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fkReportante int, FOREIGN KEY (fkReportante) REFERENCES(idUsuario),
	fkReportado int, FOREIGN KEY (fkReportado) REFERENCES Post (idPost)
);
