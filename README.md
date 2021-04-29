## Desafio Nginx com Node.js - Docker

### Instruções:

- Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

- O retorno da aplicação node.js para o nginx deverá ser:

&lt;h1>Full Cycle Rocks!&lt;/h1>

Lista de nomes cadastrada no banco de dados.

- Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

### Comandos para execução:

Execução dos containers via Docker Compose
```sh
docker-compose up -d
```

### Validação

Após todos os comandos executados, acesse o endereço **http://localhost:8080/**. Sempre que o endereço for acessado, uma nova entrada de pessoa será criada e listada.

### Esboço da solução

![Esboço](/.github/esboco.png)

### Resultado

![Esboço](/.github/resultado_list.png)
