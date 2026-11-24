/* ==========================================================================
   DADOS DO PORTFÓLIO
   --------------------------------------------------------------------------
   Este é o único arquivo que você precisa editar para personalizar o site.
   - Campos vazios ("") são simplesmente escondidos na página.
   - Para adicionar um projeto, copie um bloco { ... } da lista PROJETOS,
     cole no final e troque os valores.
   ========================================================================== */

const PERFIL = {
  nome: "Diogo",
  cargo: "Desenvolvedor Web",

  // Frase curta que aparece logo abaixo do seu nome.
  bio: "Construo sites e aplicações para a web com HTML, CSS e JavaScript. Aqui estão alguns dos projetos que venho desenvolvendo.",

  // Texto da seção "Sobre mim". Cada item da lista vira um parágrafo.
  sobre: [
    "Sou estudante de tecnologia e gosto de aprender construindo coisas: cada projeto abaixo é um passo nessa jornada.",
    "Neste portfólio reúno trabalhos acadêmicos e pessoais, com links para o código e, quando disponível, para a versão publicada.",
  ],

  localizacao: "", // ex.: "Curitiba, PR"

  // Tecnologias que você domina ou está estudando.
  habilidades: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],

  links: {
    github: "https://github.com/Diogo632",
    linkedin: "", // ex.: "https://www.linkedin.com/in/seu-usuario"
    email: "", // ex.: "voce@email.com"
    curriculo: "", // ex.: "assets/curriculo.pdf"
  },
};

/* --------------------------------------------------------------------------
   PROJETOS
   - titulo:    nome do projeto
   - descricao: 1 ou 2 frases sobre o que é e o que você fez
   - tags:      tecnologias usadas (viram os filtros da seção)
   - imagem:    caminho de uma captura de tela, ex.: "assets/projetos/adegas.png"
                (se ficar vazio, o site gera uma capa automática)
   - codigo:    link do repositório
   - demo:      link do site publicado (GitHub Pages, Vercel, etc.)
   - ano:       opcional
   -------------------------------------------------------------------------- */
const PROJETOS = [
  {
    titulo: "FDS Uninter",
    descricao: "Site desenvolvido para a disciplina de FDS na Uninter.",
    tags: ["HTML"],
    imagem: "",
    codigo: "https://github.com/Diogo632/fds.uninter",
    demo: "",
    ano: "",
  },
  {
    titulo: "Trabalho FDS",
    descricao: "", // TODO: descreva o projeto
    tags: [],
    imagem: "",
    codigo: "https://github.com/Diogo632/trabalho-fds",
    demo: "",
    ano: "",
  },
  {
    titulo: "AVA Movidesk",
    descricao: "", // TODO: descreva o projeto
    tags: ["JavaScript"],
    imagem: "",
    codigo: "https://github.com/Diogo632/AVA_MOVIDESK",
    demo: "",
    ano: "",
  },
  {
    titulo: "Active",
    descricao: "", // TODO: descreva o projeto
    tags: ["JavaScript"],
    imagem: "",
    codigo: "https://github.com/Diogo632/Active",
    demo: "",
    ano: "",
  },
  {
    titulo: "Adegas",
    descricao: "", // TODO: descreva o projeto
    tags: [],
    imagem: "",
    codigo: "https://github.com/Diogo632/Adegas",
    demo: "",
    ano: "",
  },
];
