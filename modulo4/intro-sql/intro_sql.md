### Exercício 1

a) VARCHAR(255) é utilizado para indicar que aquele campo sera do tipo string, com até 255 caracteres. DATE representa uma data no formato YYYY-MM-DD. NOT NULL não aceita um valor null naquele campo. PRIMARY KEY é a chave primaria daquele item.

b) SHOW DATABASES trouxe o as informações do meu banco de dados. SHOW TABLES trouxe as tabelas.

c) DESCRIBE Actor touxe todos os campos da tabela Actor.

### Exercício 2

b) erro de duplicação da chave primária.

c) a contagem de colunas informadas não equivale ao que foi estabelecido na primeira linha do comando.
Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) o campo name não tem um valor default, o que significa que deve sempre ser informado algum valor.
Correção: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Ator X",
  400000,
  "1949-04-18", 
  "male"
);

e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Exercício 3
a) SELECT * FROM Actor WHERE gender = "female";
b) SELECT salary FROM Actor WHERE name = "Tony Ramos";
c) retorna uma tabela em branco