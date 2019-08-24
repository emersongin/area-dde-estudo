# Área do Aulo
projeto desenvolvido para auxiliar aulos do curso de ADS faculdade Mauricio de Nassau.

## Requisitos
Utilizar serviço de http.

### Instalando
faça clone do Repositório

```
https://github.com/emersongin/area-do-aluno.git
```
## Utilização

O arquivos na pasta data armazenam dados JSON; Uma matriz com objetos.

O arquvo subjects.json, possui um objeto com os seguinte atributos:

```
{
    "title" : "titulo, descrição do conteúdo.",
    "course" : "nome do Curso que esta sendo ministrado",
    "teacher" : "nome do Professor"
}
```

O arquvo courses.json, possui objetos com os seguinte atributos:

```
{
    "title" : "titulo da cadeira que está sendo ministrada",
    "tag" : "identificador no modelo HTML para a cadeira" ex: "programacao-1"
}
```

O arquvo links.json, possui objetos com os seguinte atributos:

```
{
    "name" : "nome para identificar o link",
    "href" : "link da URL",
    "tag" : "identificador da cadeira, deve ser o mesmo criado no arquivo courses.json", ex: "programacao-1"
    "slug" : "identificador para categoria" ex: "Programação"
}
```

## Versão
1.0

## Autor
Emerson Andrey

## log
- inspirado no modelo anterior, criado por: Prof. Marcones Lira (facul M. Nassau)

## Licença
Este projeto está licenciado sob a licença MIT - veja [LICENSE.md](LICENSE.md) para detalhes
