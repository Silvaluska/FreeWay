// Variaveis de posição dos carros
let xCarros = [600, 600, 600, 600, 600, 600, 900, 900, 900, 900, 800, 800]
let yCarros = [320, 265, 215, 155, 105, 50, 320, 265, 215, 155, 105, 50]
let vCarros = [3, 3.5, 4, 5.2, 4.7, 3.2, 3, 3.5, 4, 5.2, 4.7, 3.2]

// Função para mostrar os carros na tela
function mostraCarro(){
  for (let i = 0; i < carros.length; i++){
    image(carros[i], xCarros[i], yCarros[i], 60, 30);
  }
}

// Função que movimenta os carros 
function movimentaCarro(){
  for (let i = 0; i < carros.length; i++){
    xCarros[i] -= vCarros[i];
  }
  for (let i = 0; i < carros.length; i++){
    if (xCarros[i] < -60){
      xCarros[i] = 600;
    }
  }
}