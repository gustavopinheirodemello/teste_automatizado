## Usando pela primeira vez

1.  Clonando o repositório

```
$ git clone https://github.com/gustavopinheirodemello/teste_automatizado.git
```

2.  Instalando os pacotes

```
$ npm install
```

3.  Executando o cypress

```
$ npx cypress open
```
### Fixtures

Dentro da pasta fixtures colocamos todos os `.json` que contém dados mocados e que vão ser usados dentro dos testes.

### Integration

Dentro da pasta integration colocamos todos os `.spec.js` que contém os cenários que vamos testar.

### Plugins

Dentro da pasta plugins colocamos todos os `.js` que podemos usar para escrever seu próprio código personalizado que é executado durante estágios específicos do ciclo de vida do Cypress.

### Support

Dentro da pasta plugins colocamos todos os `.js` que usamos para criar configurações/comportamentos globais que modifica o cypress.

### cypress.json

É um arquivo de configuração do cypress.

### package.json

É um arquivo que determina quais os pacotes usamos e devemos instalar no projeto para que esse seja executado devidamente.