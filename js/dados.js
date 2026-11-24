/* ==========================================================================
   DADOS DO PORTFÓLIO
   --------------------------------------------------------------------------
   Este é o único arquivo que você precisa editar para personalizar o site.
   - Campos vazios ("") são simplesmente escondidos na página.
   - Para adicionar um item (projeto, experiência...), copie um bloco { ... },
     cole na lista e troque os valores.
   ========================================================================== */

const PERFIL = {
  nome: "Diogo Albuquerque",
  cargo: "IA & Automação · Dados · Integrações",

  // Frase curta que aparece logo abaixo do seu nome.
  bio: "Treino e evoluo agentes de IA em produção, automatizo processos com n8n e Python e transformo dados em decisões com SQL e Power BI.",

  // Texto da seção "Sobre mim". Cada item da lista vira um parágrafo.
  sobre: [
    "Trabalho com inteligência artificial, automação e integrações na Active Corp. No dia a dia, treino e valido agentes de IA que fazem o atendimento N1 pelo WhatsApp e pelo Bitrix24, analiso os dados desses atendimentos, crio dashboards em Power BI e desenvolvo automações com n8n e Python.",
    "Antes da tecnologia, construí minha carreira na logística e nos transportes: planejamento de cargas, gestão de agregados, negociação de fretes e emissão de documentos fiscais. Essa vivência me ajuda a entender o negócio por trás de cada integração e de cada requisito.",
    "Estudo na UNINTER e uso este portfólio para reunir os projetos que desenvolvo ao longo do caminho.",
  ],

  localizacao: "Guarulhos, SP",

  // Tecnologias que aparecem na janela de código do topo.
  stack: ["n8n", "Python", "SQL", "Power BI"],

  // Competências, organizadas em grupos.
  habilidades: [
    { grupo: "IA & Automação", itens: ["Agentes de IA", "Engenharia de prompts", "RAG", "Embeddings", "n8n"] },
    { grupo: "Dados", itens: ["SQL Server", "Power BI", "Python"] },
    { grupo: "Integrações", itens: ["APIs REST", "SOAP", "Webhooks", "JSON / XML", "Postman"] },
    { grupo: "Web", itens: ["HTML", "CSS", "JavaScript", "Git"] },
  ],

  formacao: [
    {
      curso: "", // ex.: "Análise e Desenvolvimento de Sistemas"
      instituicao: "UNINTER — Centro Universitário Internacional",
      periodo: "", // ex.: "2023 — 2026"
    },
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/diogo-albuquerque-5312811b8",
    github: "https://github.com/Diogo632",
    email: "", // ex.: "voce@email.com"
    curriculo: "", // ex.: "assets/curriculo.pdf"
  },
};

/* --------------------------------------------------------------------------
   EXPERIÊNCIA (da mais recente para a mais antiga)
   - area:      agrupa as experiências na linha do tempo
   - cargos:    um ou mais cargos na mesma empresa (o mais recente primeiro);
                se o período tiver a palavra "atual", aparece o selo "Atual"
   - resumo:    uma frase sobre o trabalho (opcional)
   - destaques: lista de realizações (opcional)
   - tags:      tecnologias/competências (opcional)
   -------------------------------------------------------------------------- */
const EXPERIENCIA = [
  {
    area: "Tecnologia",
    empresa: "Active Corp",
    local: "Guarulhos, SP",
    periodo: "dez. 2023 — atual",
    cargos: [
      { titulo: "Analista de Suporte Júnior II", periodo: "jan. 2026 — atual" },
      { titulo: "Analista de Suporte Júnior", periodo: "jan. 2025 — jan. 2026" },
      { titulo: "Analista de Suporte Trainee", periodo: "dez. 2023 — jan. 2025" },
    ],
    resumo: "",
    destaques: [
      "Treinamento, validação e evolução de agentes de IA para atendimento N1 integrados ao WhatsApp e ao Bitrix24, com engenharia de prompts e evolução contínua da base de conhecimento.",
      "Análise dos atendimentos feitos pela IA (desempenho, assertividade e pontos de melhoria) e criação de dashboards de indicadores em Power BI.",
      "Automações e fluxos de trabalho com n8n e Python, reduzindo atividades manuais e aumentando a eficiência operacional.",
      "Integrações com sistemas de terceiros via APIs REST e SOAP: webhooks, payloads em XML e JSON e testes com Postman e Boomerang.",
      "Levantamento de requisitos e mapeamento de processos com clientes e equipes de TI, propondo melhorias junto aos times de produto e desenvolvimento.",
      "Suporte especializado aos sistemas ActiveTrans, OnSupply e TudoEntregue: análise de incidentes, reprodução de bugs, validação de correções e consultas em SQL Server.",
    ],
    tags: ["Agentes de IA", "Engenharia de prompts", "n8n", "Python", "Power BI", "SQL Server", "APIs REST/SOAP", "Postman"],
  },
  {
    area: "Logística e transportes",
    empresa: "TSA Cargo Transportes",
    local: "Guarulhos, SP",
    periodo: "mar. 2023 — dez. 2023",
    cargos: [{ titulo: "Analista de Logística", periodo: "mar. 2023 — dez. 2023" }],
    resumo: "Gestão e contratação de agregados para as filiais de Guarulhos, Campinas e São Vicente, negociação de fretes e controle de custos logísticos.",
  },
  {
    area: "Logística e transportes",
    empresa: "Novorumo Transportes",
    local: "Guarulhos, SP",
    periodo: "jun. 2021 — mar. 2023",
    cargos: [
      { titulo: "Analista de Logística", periodo: "out. 2022 — mar. 2023" },
      { titulo: "Assistente de Logística", periodo: "jun. 2021 — out. 2022" },
    ],
    resumo: "Planejamento de transportes e programação de frota, contratação de agregados, negociação de fretes e emissão de CT-e, MDF-e e CIOT.",
  },
  {
    area: "Logística e transportes",
    empresa: "GEFCO",
    local: "Guarulhos, SP",
    periodo: "set. 2018 — mai. 2019",
    cargos: [{ titulo: "Auxiliar Administrativo", periodo: "set. 2018 — mai. 2019" }],
    resumo: "Análise de fretes, pedágios e rotas, cadastro na gerenciadora de riscos e abertura de viagens.",
  },
  {
    area: "Logística e transportes",
    empresa: "Grupo Prime Cargo",
    local: "São Paulo, SP",
    periodo: "mar. 2016 — set. 2017",
    cargos: [{ titulo: "Auxiliar Administrativo", periodo: "mar. 2016 — set. 2017" }],
    resumo: "Controle de pagamentos de parceiros e agentes e acompanhamento de cargas perecíveis e secas.",
  },
];

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
