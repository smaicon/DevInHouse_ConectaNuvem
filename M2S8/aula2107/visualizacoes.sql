--visualizacao tabelas

select table_schema, table_name from information_schema.tables
where table_schema = 'gestora_condominios';
-- visualizacao das constraints 

select * from information_schema.constraint_table_usage;

alter table locadora.historico add constraint 
fk_categoria_id_ator foreign key(id_ator) 
references locadora.ator(id_ator);

alter table locadora.historico add constraint 
fk_filme_id_file foreign key(id_filme) 
references locadora.filme(id_filme);


-- consulta cpf por proprietarios

select * from gestora_condominios.proprietario A
inner join gestora_condominios.pessoa B on A.cpf = B.cpf ;

-- consulta de exemplo inner join - Combina registros de duas tabelas sempre que houver valores correspondentes

select B.nome,
case when B.sexo = 'F' then 'Feminino'
      when B.sexo = 'M' then 'Masculino'
	  else 'nao definido'
	 end as "sexo_pessoa",
	 B.data_nascimento, 
	 B.cpf,
	 A.apt_numero
	  
 from gestora_condominios.proprietario A
inner join gestora_condominios.pessoa B on A.cpf = B.cpf ;

-- exemplo left join (esquerda)

select * from gestora_condominios.proprietario A
left join gestora_condominios.pessoa B on A.cpf = B.cpf ;
-- exemplo right join (esquerda)

select * from gestora_condominios.proprietario A
right join gestora_condominios.pessoa B on A.cpf = B.cpf ;

--  // full outer join é pouco utilizado normalmente 
-- este retorna todos os registros de ambas as tabelas.
select * from gestora_condominios.proprietario A
full outer  join gestora_condominios.pessoa B on A.cpf = B.cpf ;