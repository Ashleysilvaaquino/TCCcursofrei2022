use Livrariamontesdb;


insert into tb_usuario_endereco(id_conta_usuario,ds_referencia,nr_cep,nr_residencia,ds_estado,ds_cidade,ds_logradouro,ds_complemento,ds_bairro)
						values(1,"casa","04467-050",91,"SP","são paulo","Rua Dom João Batista Neri","Campainha 3","Jd Iatapura");
   
   select
	ds_referencia		referencia,
	nr_cep				cep,
    nr_residencia		residencia,
    ds_estado			estado,
    ds_cidade			cidade,
    ds_logradouro		logradouro,
    ds_complemento		complemento,
    ds_bairro			bairro
    
from tb_usuario_endereco
where id_conta_usuario = ?;

   
select * from tb_endereco_usuario;
   
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


select 	tb_conta_usuario.id_conta_usuario,
		tb_conta_usuario.ds_email,
        tb_conta_usuario.ds_senha
        
         from tb_conta_usuario
   
        where ds_email = 'ashleysilvaaquino2@gmail.com'
  and ds_senha = '21918570173';

   insert into tb_genero(nm_genero)
      values('Romance');

select * from tb_genero;

/*generos para adicionar nos insert : 
Romance  
Terror
Ciências
Artista
Ficcção cientifica 
Infantil 
Religião 
Aventura
Fantasia
Mistério
Suspense
Poesia
Histórico 
  */


/*inserir um livro*/
insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('Amor e gelato', 'Jenna Evans Welch', '25.00', 'conta a história de Lina, que é uma garota alegre e feliz com a vida que compartilha ao lado da mãe, mas toda essa felicidade vem por diminuir drasticamente quando ela a perde para o câncer e sua vida muda de uma hora para outra, já que ela tem que se mudar dos Estados Unidos para a Itália e viver com um velho amigo de sua mãe que nunca tinha ouvido falar antes da chegada da doença, e que por tudo que foi dito, deduz que ele é o pai que nunca esteve presente em sua vida.', '321', 1);

 
insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('É assim que começa', 'Collen Hoover', '40.00', 'É Assim que Começa “Lily e o seu ex-marido, Ryle, acabaram de se adaptar numa situação de compartilhamento de guarda quando, de repente, ela se reencontra com seu primeiro amor, Atlas. Depois de quase dois anos separados, o tempo finalmente parece estar ao favor de ambos, e Lily imediatamente aceita o convite para um encontro.', '390', 1);

insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('É assim que acaba', 'Collen Hoover', '25.00', ' É assim que acaba discute temas como violência doméstica e abuso psicológico de forma sensível e direta. Em É assim que acaba, Colleen Hoover nos apresenta Lily.', '386', 5);


 insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('Hertstopper', 'Alice Oceman', '25.00', 'Conta a história de dois jovens que se conhecem num grupo de estudo e começam a desenvolver uma relação de amizade que se tornará muito mais do que aquilo que inicialmente estavam a contar.', '291',5);

insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('Até o verão Terminar', 'Collen Hoover', '30.00', 'Até o Verão Terminar (título em inglês "Heart Bones") é um desses livros que você não percebe o tempo passar. Estive envolvida com a história da Beyah Grim e o Samson do início ao fim.', '336', 5);

insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('A maldição do mar', 'Shea Ernshaw', '15.00', 'A Maldição do Mar é o livro de estreia de Shea Ernshaw - publicado aqui no Brasil pela Galera Record. Na história, todo o verão a cidade de Sparrow passa pela temporadas das Swan, quando três irmãs.', '320', 1);


insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('Antes que as luzes se apaguem', 'Jay Asher', '15.00', 'Antes Que As Luzes Se Apaguem é um livro de 2016 que conta a história da adolescente Sierra. Ela vive no estado gelado do Oregon, onde tem seus amigos, sua escola, toda a sua vida.', '256', 1);


insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('Eu e esse meu coração', 'C. C. Hunter', '25.00', 'Eu e esse meu coração possui uma sinopse bem explicativa. Leah é uma jovem de 17 anos de idade, que está vivendo um dia de cada vez. Após um vírus ter causado miocardite.', '424', 5);

insert into tb_livro(nm_livro, nm_autor,vl_preco,ds_livro,nr_paginas, id_genero)
   values('Ainda sou eu', 'Lou Clark', '26.00', 'Resumo do livro Ainda sou eu – Jojo Moyes A personagem principal do livro, Lou Clark, é uma mulher jovem, cativante e muito bem humorada. Ela vive cercada por novas aventuras, desafios e difíceis decisões.', '400', 5);



/*inserir uma imagem */
UPDATE tb_livro
   SET img_livro     = '/storage/filme/asdfasdf.jp'
 WHERE id_livro = 1;
 
select id_livro     id, 
	nm_livro        nome,
    nm_autor 		autor,
    vl_preco		preco,
    ds_livro		descricao,
    nr_paginas, id_genero		paginas
from tb_livro;

select * from tb_livro;




    
insert into tb_adm_login(ds_email, ds_senha)
   values('adm@gmail.com', '1234' );
   
   
select * from tb_adm_login;

   
insert into tb_pedido(id_pedido, dt_horario	, tp_pagamento , ds_status, qtd_livro, id_conta_usuario)
    values('2', '2022-09-20 21:05:00', 'cartao', 'processando', '3', 1);

select * from tb_pedido;
    
insert into tb_pedido_pag_cartao(nr_cartao,nr_cvv, dt_vencimento , nm_proprietario, nr_codigo, id_pedido)
     values('0000111222333', '123', '2022-09-20 23:05:00', 'Rosana', '859746145', '1');

select * from tb_pedido_pag_cartao;
     
insert into tb_item_pedido(id_pedido , id_livro)
   values('1', '1');