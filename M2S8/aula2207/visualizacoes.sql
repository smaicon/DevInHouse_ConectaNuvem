select count(1) from university.alunos;
select count(1) from university.cursos;
select count(1) from university.departamentos as dep;
select count(1) from university.disciplinas as disciplinas;
select count(1) from university.matriculas ;
select count(1) from university.matrizes_cursos mc;

select distinct mat_alu from university.matriculas;

select avg(nota)  as "média nota reprovados"
from university.matriculas
where status='R';

select mat_alu, round(avg(nota)) as MEDIA_FINAL
from university.matriculas
group by mat_alu
order by MEDIA_FINAL desc;

select mat_alu, round(avg(nota)) as MEDIA_FINAL
from university.matriculas
group by mat_alu
limit 3;


select * from university.cursos
where nom_curmo like 'Direito%';


-- contagem de alunos por curso
select c.nom_curso, count(1) as "Contagem"
from university.alunos a
inner join university.cursos c on a.cod_curso = c.cod_curso
group by c.nom_curso
order by  "Contagem" desc;

-- total de faltas por disciplina
select cod_disc , sum(m.faltas) as "Total_faltas" 
from university.matriculas m
group by cod_disc
order by "Total_faltas" desc;

-- com nome da disciplina
select d.nome_disc as "disciplina", sum(m.faltas) as "Total_faltas" 
from university.matriculas m
inner join university.disciplinas d on m.cod_disc = d.cod_disc
group by d.none_disc
order by "Total_faltas" desc;

select * from university.disciplinas d

--extraindo pessoas que entraram em 2004
select * from university.alunos a
inner join university.matriculas m  on a.mat_alu = m.mat_alu
where a.cotista='S' and m.faltas < 5 and extract(year from a.dat_entrada) = 2004
order by m.faltas desc;
