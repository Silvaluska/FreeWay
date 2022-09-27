// Variaveis de posição do ator
let xAtor = 300;
let yAtor = 365;
let colisao = false;
let pontos = 0

// Função para mostrar o ator na tela
function mostraAtor(){
  image(ator, xAtor, yAtor, 30, 30);
}

// Função para a movimentação do ator no jogo
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  else if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

// Função para verificar a colisão com os carros
function verificaColisao(){
  for (let i = 0; i < carros.length; i += 1){
    colisao = collideRectCircle((xCarros[i]-20), (yCarros[i]-15), 60, 30, xAtor, yAtor, 15);
    if (colisao == true){
      somColidiu.play()
      xAtor = 300;
      yAtor = 365;
      pontos -= 1;
    }
  }
}

// Função que cria o placar de pontuação
function placar(){
  textSize(20);
  fill(color(0,255,0))
  text(pontos, 300, 25);
}

// Função que adiciona 1 ponto toda vez que o ator chega do outro lado da pista
function ponto(){
  if (yAtor < 30){
    somPontos.play()
    yAtor = 365;
    pontos += 1;
  }
}

// Função que impede os pontos de ficarem negativos
function verificaPonto(){
  if (pontos < 0){
    pontos = 0;
  }
}

// Função que impede o ator de passar dos limites da tela
function limites(){
  if (xAtor < 0){
    xAtor = 0;
  }
  if (xAtor > 570){
    xAtor = 570;
  }
  if (yAtor < 0){
    yAtor = 0;
  }
  if (yAtor > 370){
    yAtor = 370;
  }
}