function setup() {
    createCanvas(600, 400);
    somTrilha.loop();
    somTrilha.setVolume(0.1)
  }
  
  function draw() {
    background(estrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    verificaColisao();
    placar();
    ponto();
    verificaPonto();
    limites();
  }