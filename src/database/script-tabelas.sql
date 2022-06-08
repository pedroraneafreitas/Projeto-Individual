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
	gostei int,
	report int,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
); 

insert into usuario (nome, email, senha)
("AindaNub", 'AindaNubOficial@gmail.com','1234');

insert into public (titulo, descricao) values
('Seja Bem Vindo', 'Vamos manter um ambiente saudavel e bom para a comunidade,
Let´s code!');

CREATE TABLE report (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fkReportante int, FOREIGN KEY (fkReportante) REFERENCES(idUsuario),
	fkReportado int, FOREIGN KEY (fkReportado) REFERENCES Post (idPost)
);


insert into usuario (nome, email, senha, dtCadastro) values
('pedro','pedro@gmail.com','1234','2022-01-01'),
('alberto','alberto@gmail.com','1234','2022-01-01'),
('ricardo','ricardo@gmail.com','1234','2022-01-01'),
('junes','junes@gmail.com','1234','2022-01-01'),
('leticia','leticia@gmail.com','1234','2022-01-01'),
('popa','popa@gmail.com','1234','2022-01-02'),
('pepa','pepa@gmail.com','1234','2022-01-02'),
('pipa','pipa@gmail.com','1234','2022-01-02'),
('pupa','poupa@gmail.com','1234','2022-01-02'),
('ana','ana@gmail.com','1234','2022-01-02'),
('julia','julia@gmail.com','1234','2022-01-03'),
('fabio','fabio@gmail.com','1234','2022-01-03'),
('murillo','murillo@gmail.com','1234','2022-01-03'),
('lindão','lindoncior@gmail.com','1234','2022-01-03'),
('aaaaa','aaaa@gmail.com','1234','2022-01-03'),
('pobbbbpa','pobbb@gmail.com','1234','2022-01-04'),
('bbbbb','bbbbb@gmail.com','1234','2022-01-04'),
('ccccc','ccccc@gmail.com','1234','2022-01-04'),
('ddd','ddddd@gmail.com','1234','2022-01-04'),
('eeeee','eeeee@gmail.com','1234','2022-01-04'),
('fffff','ffff@gmail.com','1234','2022-01-05'),
('ggggg','ggggg@gmail.com','1234','2022-01-05'),
('hhhh','hhhh@gmail.com','1234','2022-01-05'),
('iiiii','iiiii@gmail.com','1234','2022-01-06'),
('jjjj','jjjjjj@gmail.com','1234','2022-01-06'),
('kkkkkk','kkkkk@gmail.com','1234','2022-01-06'),
('lllll','llllll@gmail.com','1234','2022-01-06'),
('mmmmmm','mmmmm@gmail.com','1234','2022-01-06'),
('nnnnn','nnnnn@gmail.com','1234','2022-01-06'),
('oooo','ooooo@gmail.com','1234','2022-01-06'),
('ppppp','ppppp@gmail.com','1234','2022-01-06');







insert into usuario (nome, email, senha, dtCadastro) values
('plim','plim@gmail.com','1234','2022-01-03'),
('julio','julio@gmail.com','1234','2022-01-03'),
('pinio','pinio@gmail.com','1234','2022-01-03'),
('pino','pino@gmail.com','1234','2022-01-03'),
('cauam','cauam@gmail.com','1234','2022-01-03'),
('cleber','cleber@gmail.com','1234','2022-01-03'),
('jackSparrow','jack@gmail.com','1234','2022-01-03');




insert into public (titulo, descricao, gostei, report, fk_usuario) values
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ', 0 , 10, 2),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ', 50 , 0, 2),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.', 20 , 0, 3),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.', 10 , 0, 4),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ', 15 , 10, 5),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ', 82 , 20, 6),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.', 90 , 30, 7),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.', 0 , 2, 7),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.', 0 , 2, 4),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.', 0 , 2, 10),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. ', 0 , 2, 12),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.', 0 , 2, 15),
('Seja Bem Vindo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. ', 0 , 2, 22);