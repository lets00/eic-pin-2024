document.addEventListener("DOMContentLoaded", () => {
  const filmesContainer = document.getElementById("filmes");
  const erroContainer = document.getElementById("erro");

  async function fetchFilmes() {
    try {
      const response = await fetch("/api/filmes");

      if (!response.ok) {
        throw new Error("Erro ao conectar com a API");
      }

      const data = await response.json();
      renderFilmes(data);
    } catch (error) {
      mostrarErro("A API não está online. Tente novamente mais tarde.");
    }
  }

  function renderFilmes(filmes) {
    if (filmes.length === 0) {
      filmesContainer.innerHTML = "<p>Nenhum filme encontrado.</p>";
      return;
    }

    filmesContainer.innerHTML = "";
    erroContainer.textContent = "";

    filmes.forEach((filme) => {
      const filmeElement = document.createElement("div");
      filmeElement.classList.add("filme");

      filmeElement.innerHTML = `
                <h2>${filme.nome}</h2>
                <p><strong>ID:</strong> ${filme.id}</p>
                <p><strong>Ano:</strong> ${filme.ano}</p>
                <p><strong>Preço:</strong> ${filme.valor_ingresso}</p>
            `;

      filmesContainer.appendChild(filmeElement);
    });
  }

  function mostrarErro(mensagem) {
    filmesContainer.innerHTML = "";
    erroContainer.textContent = mensagem;
  }

  setInterval(fetchFilmes, 2000);
});
