## Exercícios Relações SQL

### Exercício 01
a) É uma chave que permite que relacionemos informações de tabelas diferentes, em uma mesma tabela.

c) A query retorna com um erro dizendo que o id informado não existe.

e) FOREIGN KEY não é permitido por causa da constraint dele mesmo

### Exercício 02
a) Essa tabela vai servir para podermos juntar os atores e os filmes, vamos poder ver quais atores fizeram qual filme e também ver os atores que participam de um determinado filme.


c) FOREIGN KEY não é permitido por causa da constraint dele mesmo

d) FOREIGN KEY não é permitido por causa da constraint dele mesmo

### Exercício 03
a) A query faz a junção entre as duas tabelas através da ligação pelo campo id da tabela movie com o movie_id da tabela Rating.

b) SELECT name, id, rating FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
o inner join já atua como filtro quando se junta com a tabela de rating, trazendo apenas filmes com avaliação nesta tabela.