drop database if exists Livrariamontesdb;
CREATE DATABASE if not exists Livrariamontesdb;

use Livrariamontesdb;




create table `tb_conta_usuario` (
ID_CONTA_USUARIO   INT primary key auto_increment,
NM_USUARIO     VARCHAR(100),
DS_EMAIL      VARCHAR(100),
DS_SENHA     VARCHAR(100),
DS_CELULAR   VARCHAR(100)
);

CREATE TABLE `tb_usuario_endereco` (
ID_USUARIO_ENDERECO     INT primary key auto_increment,
id_conta_usuario		int,
ds_referencia			varchar(100),
NR_CEP  				VARCHAR(100),
NR_RESIDENCIA			bigint,
DS_ESTADO 				varchar(100),
DS_CIDADE				varchar(100),
DS_LOGRADOURO			varchar(300),
DS_COMPLEMENTO			varchar(100),
DS_BAIRRO				varchar(100),
foreign key (id_conta_usuario) references tb_conta_usuario (id_conta_usuario)
);





CREATE TABLE `tb_login_usuario`(
ID_LOGIN_USUARIO INT primary key auto_increment,
ID_CONTA_USUARIO INT,
foreign key(ID_CONTA_USUARIO) REFERENCES TB_CONTA_USUARIO(ID_CONTA_USUARIO)
);



CREATE TABLE `tb_genero`(
ID_GENERO	INT primary key auto_increment,
NM_GENERO	varchar(100)
);

create  TABLE `tb_livro`(
id_livro		INT primary key auto_increment,
nm_livro		varchar(200),
nm_autor		varchar(100),
vl_preco		decimal(15,2),
ds_livro		varchar(700),
nr_paginas		int,
img_livro		varchar(800),
id_genero       int,
foreign key(id_genero) references tb_genero(id_genero)

);

create table `tb_livro_favorito`(
id_livro_favorito		int,
id_livro int,
foreign key (id_livro) references tb_livro(id_livro),
id_conta_usuario				int,
foreign key(id_conta_usuario) references tb_conta_usuario(id_conta_usuario)
);


create table `tb_carrinho`(
id_carrinho    int,
id_livro int,
foreign key (id_livro) references tb_livro(id_livro),
id_conta_usuario				int,
foreign key(id_conta_usuario) references tb_conta_usuario(id_conta_usuario)
);

create table `tb_adm_login`(
id_adm_login       int primary key auto_increment,
ds_email           varchar(100),
ds_senha           varchar(100)
);

create table `tb_pedido`(
id_pedido 	int primary key auto_increment,
id_conta_usuario        int,
id_usuario_endereco     int,
dt_horario				datetime,
tp_pagamento            varchar(100),
ds_status   			varchar(100),
cod_nota_fiscal         varchar(200),
foreign key(id_conta_usuario) references tb_conta_usuario(id_conta_usuario),
foreign key(id_usuario_endereco) references tb_usuario_endereco(id_usuario_endereco)

);


create table `tb_pedido_pag_cartao`(
id_pedido_pag_cartao    int primary key auto_increment,
nr_cartao  				int,
nr_cvv					int,
dt_vencimento   		date,
nm_proprietario 		varchar(100),
id_pedido  				int,
foreign key(id_pedido) references tb_pedido(id_pedido)
);

create table `tb_pedido_pag_boleto`(
id_pedido_pag_boleto	int primary key auto_increment,
id_pedido				int,
foreign key(id_pedido) references tb_pedido(id_pedido)
);

create table `tb_pedido_pag_pix`(
id_pedido_pag_pix	int primary key auto_increment,
id_pedido			int,
foreign key(id_pedido) references tb_pedido(id_pedido)	
);

create table `tb_item_pedido`(
id_item_pedido         int primary key auto_increment,
qtd_itens              int,
vl_produto             decimal(15,2),
id_pedido 			   int,
foreign key(id_pedido) references tb_pedido(id_pedido),
id_livro 			   int,
foreign key(id_livro) references tb_livro(id_livro)
);