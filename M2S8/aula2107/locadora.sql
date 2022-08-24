create schema locadora;

create table locadora.categoria(
  id_categoria integer primary key,
  nome varchar(200) not null
);

create table locadora.filme(
  id_filme integer primary key,
  nome varchar(200) not null,
  id_categoria integer not null,
  constraint fk_categoria_id_categoria foreign key (id_categoria) references locadora.categoria (id_categoria)
);
select * from locadora.categoria;
select * from locadora.filme;

insert into locadora.categoria(id_categoria, nome)
values (1, 'Acao');
insert into locadora.categoria(id_categoria, nome)
values (2, 'Aventura');

insert into locadora.filme(id_filme, nome, id_categoria)
values (2, '007', 2);,
insert into locadora.filme(id_filme, nome, id_categoria)
values (3, '009', 2);


create table locadora.ator(
  id_ator integer primary key,
  nome varchar(200) not null,
  nome_artistico varchar(200)
);

create table locadora.historico(
  id_ator integer not null, 
  id_filme integer not null
);



