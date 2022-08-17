CREATE SCHEMA auto_generated_field;

create table auto_generated_field.pessoa(
id_nome serial primary key,
primeiro_nome varchar(40) not null,
ultimo_nome varchar(50) not null,
nome_completo varchar(820) generated always as (primeiro_nome || '' || ultimo_nome) stored,
senha varchar(50) generated always as (primeiro_nome || '@' || ultimo_nome || '.' id_pessoa)stored
);

select * from auto_generated_field;

insert into auto_generated_field.pessoa(primeiro_nome, ultimo_nome)
values ('natan', 'nascimento');