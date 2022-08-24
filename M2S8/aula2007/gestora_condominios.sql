create schema if not exists gestora_condominios;

create table if not exists gestora_condominios.edificio(
  id_edificio integer primary key,
  endereco varchar(50) not null,
  data_construcao date,
  data_ultima_vistoria date
);

create table if not exists gestora_condominios.apartamento(
  area_apt float not null,
  apt_numero integer primary key,
  id_edificio integer not null
);

create table if not exists gestora_condominios.proprietario(
  	cpf bigint not null,
	apt_numero integer not null
);

create table if not exists gestora_condominios.pessoa(
  cpf bigint primary key,
  data_nascimento date not null,
  sexo varchar(1) not null,
  nome varchar(200) not null
);

alter table gestora_condominios.apartamento
add constraint fk_Edificio_id_edificio foreign key (id_edificio) 
references gestora_condominios.edificio (id_edificio);

alter table gestora_condominios.proprietario
add constraint fk_Apartamento_apt_numero foreign key (apt_numero)
references gestora_condominios.apartamento (apt_numero);

alter table gestora_condominios.proprietario
add constraint fk_Pessoa_cpf foreign key (cpf)
references gestora_condominios.pessoa (cpf);

select * from gestora_condominios.edificio;

select p.cpf, p.nome, p.data_nascimento, p.sexo 
from gestora_condominios.pessoa p;

-- FUNCOES DE AGREGAÇÃO
select count(1) from gestora_condominios.edificio;

select sum(area_apt) as "SOMA_AREA_APT"
from gestora_condominios.apartamento 
where id_edificio = 1;

select avg(area_apt) as "MEDIA_AREA_APT"
from gestora_condominios.apartamento;

select min(area_apt) as "MENOR_AREA_APT"
from gestora_condominios.apartamento;

select max(area_apt) as "MAIOR_AREA_APT"
from gestora_condominios.apartamento;

select * from gestora_condominios.pessoa;