// Variaveis de imagens
let estrada;
let ator;
let carro1;
let carro2;
let carro3;

let somColidiu;
let somPontos;
let somTrilha;

// Pré-Carregamento das imagens
function preload(){
  estrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carros = [carro1, carro2, carro3, carro1, carro2, carro3, carro3, carro2, carro1, carro2, carro1, carro3];
  
  somColidiu = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somTrilha = loadSound("sons/trilha.mp3");
}