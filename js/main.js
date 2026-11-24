/* Monta a página a partir de PERFIL e PROJETOS (definidos em js/dados.js). */
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  // Cria um elemento com atributos e filhos (texto é sempre escapado).
  function el(tag, attrs, ...filhos) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v; // só usado com SVG fixo deste arquivo
      else n.setAttribute(k, v);
    }
    for (const f of filhos.flat(Infinity)) {
      if (f == null || f === false) continue;
      n.append(f instanceof Node ? f : document.createTextNode(String(f)));
    }
    return n;
  }

  const ICONES = {
    github:
      '<svg viewBox="0 0 16 16" aria-hidden="true" class="cheio"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true" class="cheio"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    curriculo:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    externo:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  };

  const ROTULOS = { github: "GitHub", linkedin: "LinkedIn", email: "E-mail", curriculo: "Currículo" };

  function hrefDe(tipo, valor) {
    return tipo === "email" ? "mailto:" + valor : valor;
  }

  function externo(tipo) {
    return tipo === "email" ? {} : { target: "_blank", rel: "noopener" };
  }

  const links = Object.entries(PERFIL.links || {}).filter(([, v]) => v);

  /* ---------------- Perfil ---------------- */
  function montarPerfil() {
    const iniciais = PERFIL.nome.trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
    $("[data-iniciais]").textContent = iniciais;
    $("[data-nome]").textContent = PERFIL.nome;
    $("[data-nome-rodape]").textContent = PERFIL.nome;
    $("[data-cargo]").textContent = PERFIL.cargo;
    $("[data-bio]").textContent = PERFIL.bio;
    $("[data-ano]").textContent = new Date().getFullYear();
    document.title = `${PERFIL.nome} · Portfólio`;

    // Ícones de redes no topo
    const sociais = $("[data-sociais]");
    for (const [tipo, valor] of links) {
      sociais.append(
        el("li", {},
          el("a", { href: hrefDe(tipo, valor), "aria-label": ROTULOS[tipo] || tipo, title: ROTULOS[tipo] || tipo, html: ICONES[tipo] || ICONES.externo, ...externo(tipo) })
        )
      );
    }

    // Sobre
    const sobre = $("[data-sobre]");
    for (const p of PERFIL.sobre || []) sobre.append(el("p", {}, p));

    // Competências: aceita grupos ({ grupo, itens }) ou uma lista simples.
    const hab = $("[data-habilidades]");
    const habs = PERFIL.habilidades || [];
    const grupos = habs.length && typeof habs[0] === "string" ? [{ grupo: "", itens: habs }] : habs;
    for (const g of grupos) {
      hab.append(el("div", { class: "hab-grupo" },
        g.grupo ? el("p", { class: "hab-titulo" }, g.grupo) : null,
        el("ul", { class: "chips" }, g.itens.map((h) => el("li", { class: "chip" }, h)))));
    }

    const formacao = (PERFIL.formacao || []).filter((f) => f.curso || f.instituicao);
    if (formacao.length) {
      $("[data-formacao]").append(...formacao.map((f) =>
        el("li", {},
          f.curso ? el("strong", {}, f.curso) : null,
          f.instituicao ? el("span", {}, f.instituicao) : null,
          f.periodo ? el("span", { class: "formacao-periodo" }, f.periodo) : null)));
      $("[data-formacao-bloco]").hidden = false;
    }

    if (PERFIL.localizacao) {
      const local = $("[data-local]");
      local.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
      local.append(PERFIL.localizacao);
      local.hidden = false;
    }

    // Botões de contato
    const contatos = $("[data-contatos]");
    links.forEach(([tipo, valor], i) => {
      contatos.append(
        el("a", { class: "btn " + (i === 0 ? "btn-primario" : "btn-secundario"), href: hrefDe(tipo, valor), ...externo(tipo), html: ICONES[tipo] || "" },
          ROTULOS[tipo] || tipo)
      );
    });

    if (PERFIL.links && PERFIL.links.github) {
      $("[data-github-todos]").href = PERFIL.links.github + "?tab=repositories";
      $("[data-mais]").hidden = false;
    }

    montarCodigo();
  }

  // Bloco de código decorativo do topo, gerado a partir dos seus dados.
  function montarCodigo() {
    const s = (t) => el("span", { class: "c-str" }, `"${t}"`);
    const k = (t) => el("span", { class: "c-chave" }, t);
    const p = (t) => el("span", { class: "c-pont" }, t);
    const todas = (PERFIL.habilidades || []).flatMap((h) => (typeof h === "string" ? [h] : h.itens));
    const stack = PERFIL.stack && PERFIL.stack.length ? PERFIL.stack : todas.slice(0, 3);
    const foco = PERFIL.cargo.split("·")[0].trim();
    const linhas = [
      [el("span", { class: "c-kw" }, "const "), el("span", { class: "c-var" }, "dev"), p(" = {")],
      ["  ", k("nome"), p(": "), s(PERFIL.nome), p(",")],
      ["  ", k("foco"), p(": "), s(foco), p(",")],
      PERFIL.localizacao ? ["  ", k("local"), p(": "), s(PERFIL.localizacao), p(",")] : null,
      ["  ", k("stack"), p(": ["), stack.flatMap((t, i) => (i ? [p(", "), s(t)] : [s(t)])), p("],")],
      ["  ", k("projetos"), p(": "), el("span", { class: "c-num" }, String(PROJETOS.length)), p(",")],
      ["  ", k("aprendendo"), p(": "), el("span", { class: "c-kw" }, "true")],
      [p("};"), el("span", { class: "cursor" })],
    ].filter(Boolean);
    const code = $("[data-codigo]");
    linhas.forEach((l, i) => code.append(el("span", { class: "linha" }, el("span", { class: "n" }, String(i + 1)), l), "\n"));
  }

  /* ---------------- Experiência ---------------- */
  function montarExperiencia() {
    const alvo = $("[data-experiencia]");
    const lista = typeof EXPERIENCIA !== "undefined" ? EXPERIENCIA : [];
    if (!lista.length) {
      $("#experiencia").hidden = true;
      document.querySelector('.menu a[href="#experiencia"]')?.parentElement.remove();
      return;
    }

    // Agrupa itens seguidos da mesma área, mantendo a ordem do arquivo.
    const areas = [];
    for (const item of lista) {
      const ultima = areas[areas.length - 1];
      if (ultima && ultima.nome === (item.area || "")) ultima.itens.push(item);
      else areas.push({ nome: item.area || "", itens: [item] });
    }

    for (const area of areas) {
      alvo.append(el("div", { class: "exp-area" },
        area.nome ? el("h3", { class: "exp-area-titulo" }, area.nome) : null,
        el("ol", { class: "exp-lista" }, area.itens.map(itemExperiencia))));
    }
  }

  function itemExperiencia(x) {
    const cargos = x.cargos || [];
    const atual = cargos.some((c) => /atual/i.test(c.periodo || ""));
    const detalhado = Boolean(x.destaques && x.destaques.length);
    const meta = [x.local, x.periodo].filter(Boolean).join(" · ");

    return el("li", { class: "exp-item" + (atual ? " exp-atual" : "") + (detalhado ? " exp-detalhado" : "") },
      el("div", { class: "exp-cabeca" },
        el("h4", { class: "exp-empresa" }, x.empresa),
        meta ? el("p", { class: "exp-meta" }, meta) : null),
      cargos.length
        ? el("ul", { class: "exp-cargos" }, cargos.map((c) =>
            el("li", {},
              el("span", { class: "exp-cargo" }, c.titulo),
              /atual/i.test(c.periodo || "") ? el("span", { class: "selo" }, "Atual") : null,
              c.periodo ? el("span", { class: "exp-periodo" }, c.periodo) : null)))
        : null,
      x.resumo ? el("p", { class: "exp-resumo" }, x.resumo) : null,
      x.destaques && x.destaques.length ? el("ul", { class: "exp-destaques" }, x.destaques.map((d) => el("li", {}, d))) : null,
      x.tags && x.tags.length ? el("ul", { class: "tags", "aria-label": "Competências" }, x.tags.map((t) => el("li", {}, t))) : null);
  }

  /* ---------------- Projetos ---------------- */

  // Gera um tom de cor estável a partir do título (para a capa automática).
  function matiz(texto) {
    let h = 0;
    for (const c of texto) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    return h % 360;
  }

  function capa(proj) {
    if (proj.imagem) {
      return el("div", { class: "capa" },
        el("img", { src: proj.imagem, alt: `Captura de tela de ${proj.titulo}`, loading: "lazy" }));
    }
    const h = matiz(proj.titulo);
    const sigla = proj.titulo.replace(/[^\p{L}\p{N} ]/gu, " ").trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join("").toUpperCase();
    return el("div", { class: "capa capa-auto", style: `--h:${h}`, "aria-hidden": "true" },
      el("span", { class: "capa-sigla" }, sigla),
      el("span", { class: "capa-arquivo" }, slug(proj.titulo) + "/"));
  }

  function slug(t) {
    return t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function cartao(proj) {
    const acoes = [];
    if (proj.demo) acoes.push(el("a", { class: "btn btn-mini btn-primario", href: proj.demo, target: "_blank", rel: "noopener", html: ICONES.externo }, "Ver site"));
    if (proj.codigo) acoes.push(el("a", { class: "btn btn-mini btn-secundario", href: proj.codigo, target: "_blank", rel: "noopener", html: ICONES.github }, "Código"));

    return el("li", { class: "projeto", "data-tags": (proj.tags || []).join("|") },
      el("article", {},
        capa(proj),
        el("div", { class: "projeto-corpo" },
          el("div", { class: "projeto-topo" },
            el("h3", {}, proj.titulo),
            proj.ano ? el("span", { class: "projeto-ano" }, proj.ano) : null),
          proj.descricao ? el("p", { class: "projeto-desc" }, proj.descricao) : null,
          proj.tags && proj.tags.length ? el("ul", { class: "tags", "aria-label": "Tecnologias" }, proj.tags.map((t) => el("li", {}, t))) : null,
          acoes.length ? el("div", { class: "projeto-acoes" }, acoes) : null)));
  }

  function montarProjetos() {
    const lista = $("[data-projetos]");
    const itens = PROJETOS.map(cartao);
    lista.append(...itens);

    $("[data-contagem]").textContent = `${PROJETOS.length} ${PROJETOS.length === 1 ? "projeto" : "projetos"}`;

    // Filtros: uma opção por tecnologia usada em algum projeto.
    const contagem = new Map();
    for (const p of PROJETOS) for (const t of p.tags || []) contagem.set(t, (contagem.get(t) || 0) + 1);
    const tags = [...contagem.keys()].sort((a, b) => contagem.get(b) - contagem.get(a) || a.localeCompare(b));
    if (tags.length < 2) return; // não vale a pena filtrar

    const filtros = $("[data-filtros]");
    const botoes = ["Todos", ...tags].map((t, i) =>
      el("button", { type: "button", class: "filtro", "data-tag": i === 0 ? "" : t, "aria-pressed": i === 0 ? "true" : "false" },
        t, el("span", { class: "filtro-n" }, String(i === 0 ? PROJETOS.length : contagem.get(t)))));
    filtros.append(...botoes);

    filtros.addEventListener("click", (e) => {
      const b = e.target.closest(".filtro");
      if (!b) return;
      const tag = b.dataset.tag;
      botoes.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      let visiveis = 0;
      for (const li of itens) {
        const mostra = !tag || li.dataset.tags.split("|").includes(tag);
        li.hidden = !mostra;
        if (mostra) visiveis++;
      }
      $("[data-vazio]").hidden = visiveis > 0;
    });
  }

  /* ---------------- Interface ---------------- */
  function montarTema() {
    const raiz = document.documentElement;
    $("[data-tema-btn]").addEventListener("click", () => {
      const escuroAgora = raiz.dataset.theme
        ? raiz.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
      const novo = escuroAgora ? "light" : "dark";
      raiz.dataset.theme = novo;
      try { localStorage.setItem("tema", novo === "light" ? "claro" : "escuro"); } catch (e) {}
    });
  }

  function montarMenu() {
    const btn = $("[data-menu-btn]");
    const menu = $("#menu");
    const fechar = () => { menu.classList.remove("aberto"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Abrir menu"); };
    btn.addEventListener("click", () => {
      const abrir = !menu.classList.contains("aberto");
      menu.classList.toggle("aberto", abrir);
      btn.setAttribute("aria-expanded", String(abrir));
      btn.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
    });
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) fechar(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") fechar(); });
  }

  // Destaca no menu a seção visível e anima a entrada das seções.
  function montarRolagem() {
    const linksMenu = [...document.querySelectorAll(".menu a")];
    const secoes = linksMenu.map((a) => $(a.getAttribute("href"))).filter(Boolean);

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".revelar").forEach((s) => s.classList.add("visivel"));
      return;
    }

    const ativo = new IntersectionObserver((ents) => {
      for (const e of ents) {
        if (!e.isIntersecting) continue;
        linksMenu.forEach((a) => a.classList.toggle("ativo", a.getAttribute("href") === "#" + e.target.id));
      }
    }, { rootMargin: "-45% 0px -50% 0px" });
    secoes.forEach((s) => ativo.observe(s));

    const revela = new IntersectionObserver((ents) => {
      for (const e of ents) if (e.isIntersecting) { e.target.classList.add("visivel"); revela.unobserve(e.target); }
    }, { threshold: 0.08 });
    document.querySelectorAll(".revelar").forEach((s) => revela.observe(s));
  }

  montarPerfil();
  montarExperiencia();
  montarProjetos();
  montarTema();
  montarMenu();
  montarRolagem();
  document.documentElement.classList.add("js");
})();
