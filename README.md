# Área do Aulo
projeto desenvolvido para auxiliar os aulos do curso de ADS - faculdade Mauricio de Nassau Caruaru/PE.

## Requisitos
Utilizar em um serviço de http.

### Instalando
faça clone do Repositório

```
git clone https://github.com/emersongin/area-do-aluno.git
```
## Utilização

Os arquivos na pasta /data armazenam dados em JSON; Uma matriz de objetos.

O arquvo <b>subjects.json</b> possui uma matriz com um objeto que contem os seguinte atributos:

```
{
    "title" : "titulo, descrição do conteúdo.",
    "course" : "nome do Curso que esta sendo ministrado",
    "teacher" : "nome do Professor"
}
```

O arquvo <b>courses.json</b> possui uma matriz de objetos que contem os seguinte atributos:

```
{
    "title" : "titulo da disciplina que está sendo ministrada",
    "tag" : "identificador no modelo HTML para a disciplina" ex: "programacao-1"
}
```

O arquvo <b>links.json</b> possui uma matriz de objetos que contem os seguinte atributos:

```
{
    "name" : "nome para identificar o link",
    "href" : "URL do endereço do link",
    "tag" : "identificador da disciplina, deve ser o mesmo criado no arquivo courses.json", ex: "programacao-1"
    "slug" : "identificador para categoria" ex: "Programação"
}
```

## Versão
1.0

## Autor
Emerson Andrey G. de Araujo

## log
- modelo inspirado no anterior, criado por: Prof. Marcones Lira (facul M. Nassau)

## Licença
Este projeto está licenciado sob a licença MIT - veja [LICENSE.md](LICENSE.md) para detalhes
