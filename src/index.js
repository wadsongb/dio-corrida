// =======================
// 🧍 PERSONAGENS
// =======================
const personagem1 = {
  nome: "Relâmpago",
  velocidade: 5,
  manobrabilidade: 3,
  poder: 4,
  pontos: 0
};

const personagem2 = {
  nome: "Trovão",
  velocidade: 4,
  manobrabilidade: 5,
  poder: 3,
  pontos: 0
};

// =======================
// 🏁 CONFIGURAÇÃO DA PISTA
// =======================
const tiposBloco = ["RETA", "CURVA", "CONFRONTO"];
const totalRodadas = 5;

// Função para rolar dado de 6 lados
function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Função para sortear um tipo de bloco aleatório
function sortearBloco() {
  const indice = Math.floor(Math.random() * tiposBloco.length);
  return tiposBloco[indice];
}

// =======================
// 🧠 LÓGICA DO JOGO
// =======================
console.log("🏎️ INÍCIO DA CORRIDA 🏁");
console.log(`${personagem1.nome} VS ${personagem2.nome}\n`);

for (let rodada = 1; rodada <= totalRodadas; rodada++) {
  console.log(`---- Rodada ${rodada} ----`);

  const bloco = sortearBloco();
  console.log(`Bloco sorteado: ${bloco}`);

  const dado1 = rolarDado();
  const dado2 = rolarDado();

  let resultado1, resultado2;

  if (bloco === "RETA") {
    resultado1 = dado1 + personagem1.velocidade;
    resultado2 = dado2 + personagem2.velocidade;

    console.log(`${personagem1.nome}: dado ${dado1} + VELOCIDADE = ${resultado1}`);
    console.log(`${personagem2.nome}: dado ${dado2} + VELOCIDADE = ${resultado2}`);

    if (resultado1 > resultado2) {
      personagem1.pontos++;
      console.log(`🏅 ${personagem1.nome} venceu a rodada!`);
    } else if (resultado2 > resultado1) {
      personagem2.pontos++;
      console.log(`🏅 ${personagem2.nome} venceu a rodada!`);
    } else {
      console.log("⚖️ Empate! Ninguém ganha ponto.");
    }
  }

  else if (bloco === "CURVA") {
    resultado1 = dado1 + personagem1.manobrabilidade;
    resultado2 = dado2 + personagem2.manobrabilidade;

    console.log(`${personagem1.nome}: dado ${dado1} + MANOBRABILIDADE = ${resultado1}`);
    console.log(`${personagem2.nome}: dado ${dado2} + MANOBRABILIDADE = ${resultado2}`);

    if (resultado1 > resultado2) {
      personagem1.pontos++;
      console.log(`🏅 ${personagem1.nome} venceu a rodada!`);
    } else if (resultado2 > resultado1) {
      personagem2.pontos++;
      console.log(`🏅 ${personagem2.nome} venceu a rodada!`);
    } else {
      console.log("⚖️ Empate! Ninguém ganha ponto.");
    }
  }

  else if (bloco === "CONFRONTO") {
    resultado1 = dado1 + personagem1.poder;
    resultado2 = dado2 + personagem2.poder;

    console.log(`${personagem1.nome}: dado ${dado1} + PODER = ${resultado1}`);
    console.log(`${personagem2.nome}: dado ${dado2} + PODER = ${resultado2}`);

    if (resultado1 > resultado2) {
      personagem2.pontos = Math.max(0, personagem2.pontos - 1);
      console.log(`💥 ${personagem1.nome} venceu o confronto! ${personagem2.nome} perdeu 1 ponto.`);
    } else if (resultado2 > resultado1) {
      personagem1.pontos = Math.max(0, personagem1.pontos - 1);
      console.log(`💥 ${personagem2.nome} venceu o confronto! ${personagem1.nome} perdeu 1 ponto.`);
    } else {
      console.log("⚔️ Confronto empatado! Nada acontece.");
    }
  }

  console.log(`Placar parcial → ${personagem1.nome}: ${personagem1.pontos} | ${personagem2.nome}: ${personagem2.pontos}\n`);
}

// =======================
// 🏆 RESULTADO FINAL
// =======================
console.log("===== FIM DA CORRIDA =====");
console.log(`${personagem1.nome}: ${personagem1.pontos} pontos`);
console.log(`${personagem2.nome}: ${personagem2.pontos} pontos`);

if (personagem1.pontos > personagem2.pontos) {
  console.log(`🏆 ${personagem1.nome} é o grande vencedor!`);
} else if (personagem2.pontos > personagem1.pontos) {
  console.log(`🏆 ${personagem2.nome} é o grande vencedor!`);
} else {
  console.log("🤝 A corrida terminou empatada!");
}
