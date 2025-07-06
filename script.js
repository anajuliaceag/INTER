let times = [];

function cadastrarTime() {
  const avisos = document.getElementById("avisos");

  if (times.length >= 4) {
    avisos.textContent = "Limite de 4 times atingido. Não é possível cadastrar mais.";
    return;
  }

  let nomeTime = prompt("Digite o nome do time:");
  if (!nomeTime) return;

  nomeTime = nomeTime.trim().toUpperCase();

  let jogadores = [];

  for (let i = 1; i <= 3; i++) {
    let nome = prompt(`Digite o nome do jogador ${i}:`);
    if (!nome) return;

    nome = nome.trim().toLowerCase();

    let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
    if (isNaN(idade)) return;

    jogadores.push({ nome: nome, idade: idade });
  }

  // Calcular média
  let somaIdades = jogadores.reduce((soma, jogador) => soma + jogador.idade, 0);
  let media = Math.round(somaIdades / jogadores.length);

  if (media > 15) {
    avisos.textContent = "A média do time passou de 15 anos. Cadastre outro time válido.";
    return;
  }

  jogadores.sort((a, b) => a.idade - b.idade);

  let time = {
    nome: nomeTime,
    media: media,
    jogadores: jogadores
  };

  times.push(time);
  avisos.textContent = "";
  mostrarTimes();
}

function mostrarTimes() {
  const lista = document.getElementById("listaTimes");
  lista.innerHTML = "";

  times.forEach(time => {
    let div = document.createElement("div");
    div.className = "time";

    let html = `<strong>${time.nome}, ${time.media}</strong><br>`;

    time.jogadores.forEach(jogador => {
      html += `<div class="jogador">${jogador.nome}, ${jogador.idade}</div>`;
    });

    div.innerHTML = html;
    lista.appendChild(div);
  });
}
