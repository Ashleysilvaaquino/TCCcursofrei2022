use Livrariamontesdb;

insert into tb_estado(id_estado , nm_estado)
   values('27', 'Tocantins');
   
/* estados para inserir no insert:
1 Acre 
2 Alagoas 
3 Amapá 
4 Amazonas 
5 Bahia 
6 Ceará 
7 Distrito Federal 
8 Espírito Santo 
9 Goiás 
10 Maranhão
11 Mato Grosso
12 Mato Grosso do Sul
13 Minas Gerais
14 Pará
15 Paraíba
16 Paraná
17 Pernambuco
18 Piauí
19 Rio de Janeiro
20 Rio Grande do Norte
21 Rio Grande do Sul
22 Rondônia 
23 Roraima 
24 Santa Catarina 
25 São Paulo 
26 Sergipe 
27 Tocantins 
*/

   
insert into tb_usuario_endereco(nr_cep , nr_residencia)
   values('04752285','30');
   
select * from tb_usuario_endereco;
   
insert into tb_conta_usuario(nm_usuario, ds_email, ds_senha, ds_celular)
   values('Ashley', 'ashleysilvaaquino2@gmail.com','21918570173','11958861234');
select * from tb_conta_usuario;
   
select tb_conta_usuario.id_conta_usuario,
	   tb_conta_usuario.ds_email,
       tb_conta_usuario.ds_senha,
	   tb_login_usuario.id_login_usuario
from tb_conta_usuario 
inner join tb_login_usuario
  on tb_conta_usuario.id_conta_usuario = tb_login_usuario.id_conta_usuario
  where ds_email = 'ashleysilvaaquino2@gmail.com'
  and ds_senha = '21918570173';


insert into tb_genero(nm_genero)
   values('Romance');

select * from tb_genero;

/*generos para adicionar nos insert : 
Romance  
Poesia
Literatura
Ficção 
Ficcção cientifica 
Infantil 
Conto 
Religião 
Aventura
Terror
Fantasia
Mistério 
  */


/*inserir um livro*/
insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas)
   values('É assim que acaba', 'Colleen Hoover', '80.00', 'E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela. Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava.e', '368'); 



/*inserir uma imagem */
UPDATE tb_livro
   SET img_livro     = '/storage/filme/asdfasdf.jp'
 WHERE id_filme = 1;
select id_livro     id, 
	nm_livro        nome,
    nm_autor 		autor,
    vl_preco		preco,
    ds_livro		descricao,
    nr_paginas		paginas,
    id_genero 		genero
from tb_livro;

select * from tb_livro;

insert into tb_livro_favorito(id_livro_favorito, id_livro, id_conta_usuario)
    values('1', '1', '2');
    
select * from tb_livro_favorito;

    
insert into tb_adm_login(id_adm_login, ds_email, ds_senha)
   values('2','admlivrariamonte@gmail.com', 'senha1234' );
   
   
select * from tb_adm_login;

   
insert into tb_pedido(id_pedido, dt_horario	, tp_pagamento , ds_status, qtd_livro, id_conta_usuario)
    values('2', '2022-09-20 21:05:00', 'cartao', 'processando', '3', '2');

select * from tb_pedido;
    
insert into tb_pedido_pag_cartao(nr_cartao,nr_cvv, dt_vencimento , nm_proprietario, nr_codigo, id_pedido)
     values('0000111222333', '123', '2022-09-20 23:05:00', 'Rosana', '859746145', '1');

select * from tb_pedido_pag_cartao;
     
insert into tb_pedido_pag_boleto(nr_codigo, id_pedido)
    values('859746146','2');
select * from tb_pedido_pag_boleto;
    
insert into tb_pedido_pag_pix(nr_codigo,id_pedido)
    values('859746149','1');
    
    
insert into tb_item_pedido(id_pedido , id_livro)
   values('1', '1');