# Área de Estudos  
Projeto desenvolvido para auxilio dos aulos do curso de ADS - UniNassau Caruaru/PE.

## Requisitos
Utilizar em serviço Web com http.

### Instalando
faça o clone do Repositório e rode em um servidor WEB

```
git clone https://github.com/emersongin/area-do-aluno.git
```
## Telas
![alt text](/screen.png)

## Utilizando

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
Emerson Andrey Gonçalo de Araujo

## log
- modelo inspirado no anterior, criado por: Prof. Marcones Lira (UniNassau)

## Licença
Licença MIT  
veja [aqui](https://github.com/emersongin/area-do-aluno/blob/master/LICENSE) para mais detalhes.
