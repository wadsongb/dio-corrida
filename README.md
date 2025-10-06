🏎️ Corrida de Atributos

Corrida de Atributos é um mini-jogo de corrida em turnos desenvolvido em Node.js, que combina sorte e estratégia através de disputas entre dois personagens em uma pista composta por diferentes tipos de desafios.
Cada rodada testa atributos específicos dos competidores, e ao final, quem acumular mais pontos vence a corrida.

🧍 Personagens

Cada personagem possui três atributos principais:

Velocidade 🏃‍♂️ – utilizada em trechos de reta.

Manobrabilidade 🌀 – utilizada em curvas.

Poder 💥 – utilizada em confrontos diretos.

Todos os personagens iniciam a corrida com 0 pontos.

🏁 Pista e Rodadas

A corrida é disputada em 5 rodadas.
A cada rodada, é sorteado aleatoriamente um bloco da pista, que pode ser:

1. Reta 🛣️

Cada jogador rola um dado de 6 lados.

Soma-se o valor do dado com o atributo Velocidade.

O maior resultado ganha +1 ponto.

2. Curva 🌀

Cada jogador rola um dado de 6 lados.

Soma-se o valor do dado com o atributo Manobrabilidade.

O maior resultado ganha +1 ponto.

3. Confronto ⚔️

Cada jogador rola um dado de 6 lados.

Soma-se o valor do dado com o atributo Poder.

O jogador com o menor resultado perde 1 ponto (sem pontuação negativa).

Em caso de empate, nenhum ponto é alterado.

🏆 Condição de Vitória

Após as 5 rodadas:

O personagem com mais pontos acumulados vence a corrida.

Em caso de empate, ambos os personagens são declarados vencedores.

🧠 Características do Jogo

✅ Código leve e simples

🌀 Combina elementos de sorte e estratégia

🧩 Fácil de expandir com novos tipos de blocos ou atributos

⚡ Executável diretamente no terminal com Node.js, sem dependências externas

▶️ Como Executar

Instale o Node.js
 (versão 14 ou superior).

Baixe ou clone este projeto.

No terminal, execute:

node corrida.js


Acompanhe a corrida rodada a rodada diretamente no console.
