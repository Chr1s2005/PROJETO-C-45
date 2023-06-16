var bg1,bgImg1;
var bg2,bgImg2;
var olivierImg1,olivierImg2,olivierImg3,olivierImg4;
var ocultistaImg;
var zumbiDeSangueImg;
var amigoImaginárioImg;
var coracaoImg;
var borda1,borda2,borda3;


function preload(){
  
  olivierImg1 = loadImage("assets/OLIVIER1.webp");
  olivierImg2 = loadImage("assets/OLIVIER2.webp");
  olivierImg3 = loadImage("assets/OLIVIER3.webp");
  olivierImg4 = loadImage("assets/OLIVER4.webp");

  ocultistaImg = loadImage("assets/OCULTISTA.webp");

  zumbiDeSangueImg = loadImage("assets/ZUMBIDESANGUE.webp");

  amigoImaginárioImg = loadImage("assets/AMIGOIMAGINARIO.webp");

  bgImg1 = loadImage("assets/FLORESTA.jpg");
  bgImg2 = loadImage("assets/PRAIA.jpg");
  coracaoImg = loadImage("assets/heart_1.png");

}

function setup() {

  
  createCanvas(2000,1200);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg2)
  bg.scale = 1.5
  

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(olivierImg1);
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 

  borda1 = createSprite(displayWidth-550, displayHeight,50,displayHeight+1200)
  player.collide(borda1);
  borda1.visible = false;

  borda2 = createSprite(displayWidth-1420, displayHeight,50,displayHeight+1200)
  player.collide(borda2);
  borda2.visible = false;

  borda3 = createSprite(2000,600,50,50)
  player.collide(borda3);
  borda2.visible = true;
  




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x+30
  }

  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }


  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }

  drawSprites();

}
