# Portfólio

Site pessoal para apresentar meus projetos. Feito com HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build: basta abrir o `index.html`.

## Estrutura

```
index.html          → estrutura da página
css/style.css       → visual (cores, fontes, layout)
js/dados.js         → SEUS DADOS: perfil, experiência e projetos  ← edite aqui
js/main.js          → monta a página a partir de dados.js
assets/             → favicon, imagens e (opcional) currículo em PDF
assets/projetos/    → capturas de tela dos projetos
```

## Como personalizar

Quase tudo se faz no arquivo **`js/dados.js`**:

- **`PERFIL`**: nome, cargo, bio, texto do "Sobre mim", competências (em grupos), formação e links (GitHub, LinkedIn, e-mail, currículo). Campos vazios (`""`) não aparecem no site.
- **`EXPERIENCIA`**: a linha do tempo profissional. Itens com `destaques` aparecem em destaque (cartão); os demais, em formato compacto.
- **`PROJETOS`**: a lista de projetos. Para adicionar um, copie um bloco `{ ... }`, cole no final da lista e preencha:

```js
{
  titulo: "Meu Projeto",
  descricao: "O que o projeto faz e o que eu aprendi com ele.",
  tags: ["HTML", "CSS", "JavaScript"],     // viram os filtros da seção
  imagem: "assets/projetos/meu-projeto.png", // opcional: sem imagem, o site gera uma capa
  codigo: "https://github.com/Diogo632/meu-projeto",
  demo: "https://diogo632.github.io/meu-projeto/", // opcional
  ano: "2026",                               // opcional
},
```

Para mudar a **cor de destaque**, altere `--acento` no topo de `css/style.css` (há um valor para o tema claro e outro para o escuro).

## Ver localmente

Abra o `index.html` no navegador, ou rode um servidor simples:

```bash
python3 -m http.server 8000
```

e acesse http://localhost:8000.

## Publicar no GitHub Pages (grátis)

1. Envie os arquivos para a branch `main` do repositório.
2. No GitHub, vá em **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e clique em **Save**.
4. Em alguns minutos o site estará em `https://diogo632.github.io/Portif-lio/`.

## Recursos

- Tema claro/escuro (segue o sistema e lembra a escolha do visitante)
- Filtro de projetos por tecnologia
- Layout responsivo para celular, tablet e desktop
- Capas automáticas para projetos sem imagem
- Acessível: navegação por teclado, link "pular para o conteúdo", respeita "reduzir movimento"
