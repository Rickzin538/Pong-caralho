// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2;
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

// variáveis da raquete
let xRaqueteEsquerda = 10;
let yRaqueteEsquerda = 150;
let xRaqueteDireita = 580;
let yRaqueteDireita = 150;
let larguraRaquete = 10;
let alturaRaquete = 100;




function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("orange");
  criaBolinha();
  movimentaBolinha();
  bateBolinhaBorda();
  criaRaquete();
}

function criaBolinha(){
  fill('black')
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function bateBolinhaBorda() {
  if (xBolinha + raio >width || xBolinha + raio <0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio >height || yBolinha + raio <0){
    velocidadeYBolinha *= -1;  
  }
}

function criaRaquete(){
  fill('red')
  rect(xRaqueteEsquerda,yRaqueteEsquerda,larguraRaquete,alturaRaquete);
  
  rect(xRaqueteDireita,yRaqueteDireita,larguraRaquete,alturaRaquete);
  
  
  
  
}





