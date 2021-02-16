# Projeto Instagram Clone

Projeto React utilizando Typescript e Redux desenvolvido na trilha React do Campinas Tech Talents, simulando um e-commerce de cervejas

* APIs fakes utilizadas: <a href="https://github.com/jenicarvalho/fake-api-emporio">fake-api-emporio</a>

<p align="center" width="50%"><img src="https://github.com/biagavirete/emporio_ecommerce/blob/master/src/assets/emporio.gif"></p>

## Como usar

**Para instalar**
> Clonar o repositório

```bash
$ git clone https://github.com/biagavirete/emporio_ecommerce.git
$ cd emporio_ecommerce
```

**Para rodar**
> Instalar dependências

```bash
$ yarn
```

> Iniciar o React

```bash
$  yarn start
```

**Utilizando a API fake**

> Clonar o repositório com a API fake

```bash
$ git clone https://github.com/jenicarvalho/fake-api-emporio.git
$ cd fake-api-emporio
```

> Instalar dependências

```bash
$ yarn
```

> Iniciando o servidor fake

```bash
$ json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000
```

## Desenvolvido com

* Typescript
* React
* Redux
* Axios
* React-router-dom
* React-helmet
* SASS
