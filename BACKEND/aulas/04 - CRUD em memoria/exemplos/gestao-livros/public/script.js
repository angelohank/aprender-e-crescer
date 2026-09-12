const API_URL = "http://localhost:3000/livros";

// Elementos - busca
const campoBusca = document.getElementById("campoBusca");
const btnBuscar = document.getElementById("btnBuscar");

// Elementos - adicionar
const btnMostrarForm = document.getElementById("btnMostrarForm");
const formAdicionar = document.getElementById("formAdicionar");
const btnCancelarAdd = document.getElementById("btnCancelarAdd");
const novoTitulo = document.getElementById("novoTitulo");
const novoAutor = document.getElementById("novoAutor");

// Elementos - resultado / status
const divResultado = document.getElementById("resultado");
const divStatus = document.getElementById("status");

// Elementos - modal de edição
const modalEditar = document.getElementById("modalEditar");
const editTitulo = document.getElementById("editTitulo");
const editAutor = document.getElementById("editAutor");
const btnAtualizar = document.getElementById("btnAtualizar");
const btnCancelarEdit = document.getElementById("btnCancelarEdit");

let idEmEdicao = null;

// Ícones (SVG inline, sem dependências externas)
const ICONE_EDITAR = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
  </svg>
`;

const ICONE_EXCLUIR = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 6h18"></path>
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
  </svg>
`;

// ---------- Inicialização ----------

document.addEventListener("DOMContentLoaded", () => {
  buscarLivros();
});

btnBuscar.addEventListener("click", () =>
  buscarLivros(campoBusca.value.trim()),
);
campoBusca.addEventListener("keydown", (e) => {
  if (e.key === "Enter") buscarLivros(campoBusca.value.trim());
});

btnMostrarForm.addEventListener("click", () => {
  formAdicionar.classList.toggle("hidden");
  if (!formAdicionar.classList.contains("hidden")) {
    novoTitulo.focus();
  }
});

btnCancelarAdd.addEventListener("click", () => {
  formAdicionar.reset();
  formAdicionar.classList.add("hidden");
});

formAdicionar.addEventListener("submit", (e) => {
  e.preventDefault();
  adicionarLivro(novoTitulo.value.trim(), novoAutor.value.trim());
});

btnCancelarEdit.addEventListener("click", fecharModalEdicao);
btnAtualizar.addEventListener("click", () => {
  atualizarLivro(idEmEdicao, editTitulo.value.trim(), editAutor.value.trim());
});

// ---------- Busca ----------

async function buscarLivros(nome = "") {
  divResultado.innerHTML = "";
  divStatus.textContent = "Buscando livros...";
  btnBuscar.disabled = true;

  try {
    // TODO: ajustar a rota de busca por nome no backend.
    // GET /livros?nome=valor (retornando todos quando "nome" vier vazio)
    const url = nome ? `${API_URL}?nome=${encodeURIComponent(nome)}` : API_URL;
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Erro na requisição: " + resposta.status);
    }

    const livros = await resposta.json();
    divStatus.textContent = "";
    renderizarLivros(livros);
  } catch (erro) {
    divStatus.textContent = "";
    renderizarErro("Erro ao buscar livros: " + erro.message);
  } finally {
    btnBuscar.disabled = false;
  }
}

// ---------- Adicionar ----------

async function adicionarLivro(titulo, autor) {
  if (!titulo || !autor) return;

  divStatus.textContent = "Adicionando livro...";

  try {
    // TODO: rota de criação ainda não implementada no backend.
    // POST /livros, body: { titulo, autor }
    const resposta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, autor }),
    });

    if (!resposta.ok) {
      throw new Error("Erro na requisição: " + resposta.status);
    }

    divStatus.textContent = "";
    formAdicionar.reset();
    formAdicionar.classList.add("hidden");
    buscarLivros(campoBusca.value.trim());
  } catch (erro) {
    divStatus.textContent = "";
    renderizarErro("Erro ao adicionar livro: " + erro.message);
  }
}

// ---------- Excluir ----------

async function excluirLivro(id) {
  const confirmar = confirm("Tem certeza que deseja excluir este livro?");
  if (!confirmar) return;

  divStatus.textContent = "Excluindo livro...";

  try {
    // TODO: rota de exclusão ainda não implementada no backend.
    // DELETE /livros/:id
    const resposta = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!resposta.ok) {
      throw new Error("Erro na requisição: " + resposta.status);
    }

    divStatus.textContent = "";
    buscarLivros(campoBusca.value.trim());
  } catch (erro) {
    divStatus.textContent = "";
    renderizarErro("Erro ao excluir livro: " + erro.message);
  }
}

// ---------- Editar ----------

function abrirModalEdicao(livro) {
  idEmEdicao = livro.id;
  editTitulo.value = livro.titulo || "";
  editAutor.value = livro.autor || "";
  modalEditar.classList.remove("hidden");
  editTitulo.focus();
}

function fecharModalEdicao() {
  idEmEdicao = null;
  modalEditar.classList.add("hidden");
}

async function atualizarLivro(id, titulo, autor) {
  if (!titulo || !autor) return;

  divStatus.textContent = "Atualizando livro...";

  try {
    // TODO: rota de atualização ainda não implementada no backend.
    // PUT /livros/:id (ou PATCH), body: { titulo, autor }
    const resposta = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, autor }),
    });

    if (!resposta.ok) {
      throw new Error("Erro na requisição: " + resposta.status);
    }

    divStatus.textContent = "";
    fecharModalEdicao();
    buscarLivros(campoBusca.value.trim());
  } catch (erro) {
    divStatus.textContent = "";
    renderizarErro("Erro ao atualizar livro: " + erro.message);
  }
}

// ---------- Renderização ----------

function renderizarLivros(livros) {
  divResultado.innerHTML = "";

  if (!Array.isArray(livros) || livros.length === 0) {
    const vazio = document.createElement("div");
    vazio.className = "vazio";
    vazio.textContent = "Nenhum livro encontrado.";
    divResultado.appendChild(vazio);
    return;
  }

  livros.forEach((livro) => {
    const item = document.createElement("div");
    item.className = "livro";

    const info = document.createElement("div");
    info.className = "livro-info";

    const titulo = document.createElement("div");
    titulo.className = "titulo";
    titulo.textContent = livro.titulo;

    const autor = document.createElement("div");
    autor.className = "autor";
    autor.textContent = livro.autor || "Autor não informado";

    const id = document.createElement("div");
    id.className = "id";
    id.textContent = "ID: " + livro.id;

    info.appendChild(titulo);
    info.appendChild(autor);
    info.appendChild(id);

    const acoes = document.createElement("div");
    acoes.className = "livro-acoes";

    const btnEditar = document.createElement("button");
    btnEditar.className = "icon-btn editar";
    btnEditar.title = "Editar livro";
    btnEditar.innerHTML = ICONE_EDITAR;
    btnEditar.addEventListener("click", () => abrirModalEdicao(livro));

    const btnExcluir = document.createElement("button");
    btnExcluir.className = "icon-btn excluir";
    btnExcluir.title = "Excluir livro";
    btnExcluir.innerHTML = ICONE_EXCLUIR;
    btnExcluir.addEventListener("click", () => excluirLivro(livro.id));

    acoes.appendChild(btnEditar);
    acoes.appendChild(btnExcluir);

    item.appendChild(info);
    item.appendChild(acoes);
    divResultado.appendChild(item);
  });
}

function renderizarErro(mensagem) {
  divResultado.innerHTML = "";
  const erro = document.createElement("div");
  erro.className = "erro";
  erro.textContent = mensagem;
  divResultado.appendChild(erro);
}
