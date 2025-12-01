function enableColorBlindMode() {
  document.body.classList.add("color-blind");
}

function enableFocusMode() {
  document.body.classList.add("focus-mode");
}

function enableSimpleRead() {
  const textEl = document.getElementById("longText");

  // Versão resumida (simples)
  const resumo = `
    A acessibilidade digital é essencial no mundo moderno. 
    O SensePath existe para tornar sites mais inclusivos 
    de forma inteligente e automática.
  `;

  textEl.textContent = resumo;
  textEl.classList.add("simple-read");
}

function resetModes() {
  document.body.className = "";
  location.reload();
}
