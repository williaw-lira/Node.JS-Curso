


INSERT INTO usuarios (nome,idade,email) VALUES(
    "marcelo",
    20,
    "marcelo.com"
);

SELECT * FROM usuarios WHERE idade <=  21;

CREATE TABLE ex (
    nome VARCHAR(100),
    idade INT (10),
);

DROP DATABASE sistemacadastro;

UPDATE usuarios SET nome = "nome teste", email = "teste.com" WHERE nome = "william";