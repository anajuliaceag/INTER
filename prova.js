let times = [];

function inscricao() {

  if (times.length >= 4) {
    document.getElementById("avisos").innerHTML = "Limite de times atingido.";
    return;
  }
   let nomeTime = prompt("Nome do time:");
   if (!nomeTime) return;
   nomeTime = nomeTime.toUpperCase();

 
    let soma = 0;
    let jogadores = [];
    for (let i = 1; i <= 3; i++) {
    let nome = prompt("Nome do jogador " + i + ":").toLowerCase();
    let idade = parseInt(prompt("Idade de " + nome + ":"));
    if (!nome || isNaN(idade)) return;
    jogadores.push({ nome, idade });
    soma += idade;
  }

  let media = Math.round(soma / 3);
  if (media > 15) {
    document.getElementById("avisos").innerHTML = "Média acima de 15. Cadastre outro time.";
    return;
  }

  times.push({ nome: nomeTime, media, jogadores });
  mostrarTimes();
}

function mostrarTimes() {
  var html = "";
  for (let t of times) {
    html += "<div class='time'><strong>" + t.nome + ", " + t.media + "</strong><br>";
    for (let j of t.jogadores)
      html += "<div class='jogador'>" + j.nome + ", " + j.idade + "</div>";
    html += "</div>";
  }
  document.getElementById("listaTimes").innerHTML = html;
  document.getElementById("avisos").innerHTML = "";
}
