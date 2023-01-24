var block, ground, jumpBlock;
var talkBlock, decorationBlock1, decorationBlock2, decorationBlock3, decorationBlock4, decorationBlock5, evilBlock;
var blockIMG1,blockIMG2, blockIMGAtt, evilBlockIMG1, evilBlockIMG2,evilBlockIMG3,backgroundIMG, backgroundIMG2, backgroundIMG3, backgroundIMG4, backgroundIMG5, backgroundIMG6, talkBlockIMG, decorationBlock1IMG, decorationBlock2IMG, decorationBlock3IMG, decorationBlock4IMG, decorationBlock5IMG;
var edges;
var test = 1; //Andar para todas as entidates
var BlLevel = 1; //Andar do Jogador
var health = 5; // Vida do Jogador
var enemyDied = false; //Se o Inimigo já morreu (Falso)
var diedCount = 0; //Contagem de quantas vezes os inimigos morreram
var Ehealth = 3; //Vida do Inimigo
var testLimit = 4; //Limite de andares
var questActivated = true; //Missão Ativa ou Desativa
var questFinished = false; //Missão Concluida ou Não
var quest2Finished = false; //Missão Peixe Grande Concluida ou Não
var quest2Activated = false; //Missão do Peixe Grande Ativa Sim ou Não
var Victory = false; //Vitória

function preload(){
blockIMG1 = loadAnimation("knight1.png"); //Gato parado pra esquerda
blockIMG2 = loadAnimation("knight2.png"); //Gato parado pra direita
blockIMGAtt = loadAnimation("knight1.png", "knightattack.png", "knight1.png"); //Animação de ataque
evilBlockIMG1 = loadAnimation("doge.png"); //Imagem de Inimigo (cão)
evilBlockIMG2 = loadAnimation("doge2.png"); //Imagem de Inimigo porém esqueci de virar
evilBlockIMG3 = loadAnimation("Shibalien.png"); // Imagem de Inimigo mais forte
talkBlockIMG = loadAnimation("LilFish.webp"); //Imagem de gato de missão (gato peixe pequeno)
decorationBlock1IMG = loadAnimation("sportdaycat.webp"); //Imagem de decoração (gato do esporte)
decorationBlock2IMG = loadAnimation("piggeback.webp"); //Imagem de decoração (porco de esporte)
decorationBlock3IMG = loadAnimation("tree.webp"); //Imagem de decoração (árvore) 
decorationBlock4IMG = loadAnimation("gift.webp"); //Imagem de decoração (presente perto da árvore) 
decorationBlock5IMG = loadAnimation("Fish2.png"); //Imagem do Pai do Lil Fish (peixe)
//Imagem de fundos
backgroundIMG = loadImage("background.webp");
backgroundIMG2 = loadImage("background1.webp");
backgroundIMG3 = loadImage("background2.webp");
backgroundIMG4 = loadImage("background3.webp");
backgroundIMG5 = loadImage("background4.webp");
backgroundIMG6 = loadImage("background5.webp");
}

function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites();
  talkBlock = createSprite(700, 270, 50, 50);
  talkBlock.addAnimation("idleTalk", talkBlockIMG);

  decorationBlock1 = createSprite(170, 220, 50, 50);
  decorationBlock1.addAnimation("idleDeco1", decorationBlock1IMG);
  decorationBlock1.scale = 0.6;

  decorationBlock2 = createSprite(70, 210, 50, 50);
  decorationBlock2.addAnimation("idleDeco2", decorationBlock2IMG);
  decorationBlock2.scale = 1.5;

  decorationBlock3 = createSprite(400,160,50,50);
  decorationBlock3.addAnimation("idleDeco3", decorationBlock3IMG);

  decorationBlock4 = createSprite(500,250,50,50);
  decorationBlock4.addAnimation("idleDeco4", decorationBlock4IMG);
  decorationBlock4.scale = 0.7

  decorationBlock5 = createSprite(100,250,50,50);
  decorationBlock5.addAnimation("idleDeco5", decorationBlock5IMG);

  evilBlock = createSprite(700, 200, 50, 50);
  evilBlock.addAnimation("idle", evilBlockIMG2);
  evilBlock.addAnimation("idle2", evilBlockIMG3);
  evilBlock.addAnimation("testAnim", talkBlockIMG);
  block = createSprite(100, 200, 50, 50);
  block.addAnimation("idle1", blockIMG1);
  block.addAnimation("idle2", blockIMG2);
  block.addAnimation("attack", blockIMGAtt);
  ground = createSprite(400, 320, 800, 20);
  ground.visible = false;
  jumpBlock = createSprite(400, 290, 800, 20);
  jumpBlock.visible = false;
}

function draw() {
  if (test == 1){
    background(backgroundIMG);
    talkBlock.visible = false;
    decorationBlock1.visible = true;
    decorationBlock2.visible = true;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    decorationBlock5.visible = false;
    evilBlock.visible = false;
  }
  if (test == 2){
    background(backgroundIMG2);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
      BlLevel = BlLevel-1
      
    }
    talkBlock.visible = true;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    decorationBlock5.visible = false;
    evilBlock.visible = false;
  }
  if (test == 3){
    background(backgroundIMG2);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
      BlLevel = BlLevel-1
    }
    talkBlock.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = true;
    decorationBlock4.visible = true;
    decorationBlock5.visible = false;
    evilBlock.visible = false;
  }
  if (test == 4){
    background(backgroundIMG3);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
      BlLevel = BlLevel-1
    }
    talkBlock.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    decorationBlock5.visible = false;
    
    if(enemyDied == false && evilBlock.visible !== true){
      //evilBlock.visible = true;
    }
    else if(Ehealth == 0){
     // evilBlock.visible = false;
    }
  }
  if(test == 4 && evilBlock.position.x == 10000000000){
    evilBlock.position.x = 700;
    Ehealth = 3;
    enemyDied = false;
  }
  if(test == 7 && evilBlock.position.x == 10000000000){
    evilBlock.position.x = 700;
    Ehealth = 3;
    enemyDied = false;
  }
  if(test == 5){
    background(backgroundIMG5);
    talkBlock.visible = true;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    decorationBlock5.visible = true;
    evilBlock.visible = false;
  }
  if(test == 6){
    background(backgroundIMG5);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
      BlLevel = BlLevel-1
    }
    talkBlock.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    decorationBlock5.visible = false;
    evilBlock.visible = false
  }
  if(test == 7){
    background(backgroundIMG6);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
      BlLevel = BlLevel-1
    }
    talkBlock.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    decorationBlock5.visible = false;
  }
  if(test == 8){
    background(backgroundIMG6);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
      BlLevel = BlLevel-1
    }
    talkBlock.visible = false;
    decorationBlock1.visible = false;
    decorationBlock2.visible = false;
    decorationBlock3.visible = false;
    decorationBlock4.visible = false;
    decorationBlock5.visible = false;
  }
  if(test == 9){
    background(backgroundIMG4);
    if(block.isTouching(edges[0])) {
      block.position.x = 700
      test = test-1
      BlLevel = BlLevel-1
    }
    textSize(30)
    fill("White")
    text("Sala Teste",500,200);
    talkBlock.visible = true;
    decorationBlock1.visible = true;
    decorationBlock2.visible = true;
    decorationBlock3.visible = true;
    decorationBlock4.visible = true;
    decorationBlock5.visible = true;
    evilBlock.visible = true;
  }
  drawSprites();
  enemySpawn();
  block.collide(ground);
  evilBlock.collide(ground);
  block.collide(edges[0]);
  block.collide(edges[1]);
  
  block.velocityY = block.velocityY + 0.5; //Gravidade
  evilBlock.velocityY = evilBlock.velocityY + 0.5; //Gravidade do Inimigo
  if(keyDown("Left_Arrow")) { //Mover para esquerda
    block.changeAnimation("idle2")
    block.position.x = block.position.x-8
  }
  if(keyDown("Right_Arrow")) { //Mover para direita
    block.changeAnimation("idle1")
    block.position.x = block.position.x+8
  }
  if(keyDown("space")){ //Pular
    if(block.isTouching(jumpBlock)){
      block.velocityY = -10; 
    }
  }
  if(keyDown("E") && block.isTouching(talkBlock) && test == 2 && questActivated == false) { //Começar
   questActivated == true;
  }
  if(keyDown("E") && block.isTouching(talkBlock) && test == 2 && questFinished == true) { //Teletransporte
    test = test+3;
    BlLevel = BlLevel+3;
    testLimit = testLimit+4;
  }
  if(keyDown("E")&& block.isTouching(decorationBlock5)&& BlLevel == 5 && questFinished == true){ //Quest Terminada
    questFinished = false;
    questActivated = false;
    quest2Activated = true;
    diedCount = diedCount-5
  }
  if(keyDown("E")&& block.isTouching(decorationBlock5)&& BlLevel == 5 && quest2Finished == true){ //Quest Terminada
Victory == true;
  }
  if(keyDown("Q")&& BlLevel == 4){ //Ataque
    if(block.isTouching(evilBlock)){
evilBlock.visible = false;
block.changeAnimation("attack");
Ehealth = Ehealth-1;
    }
  }
    if(keyDown("Q")&& BlLevel == 7){ //Ataque
    if(block.isTouching(evilBlock)){
evilBlock.visible = false;
block.changeAnimation("attack");
Ehealth = Ehealth-1;
    }
}
  textSize(20);
  if (questActivated == true) { //Sistema de Quest
    if(diedCount < 5){
      fill("White")
    }
    else if(diedCount == 5) {
      fill("Green")
      stroke("DarkGreen")
      questFinished = true;
    }
  text("Objetivo: Mate 5 Doges",20,40);
  textSize(30)
  text(diedCount+"/5",100,80);
  }
  textSize(20);
 if(quest2Activated == true){
    if(diedCount < 10){
      questFinished = false;
      fill("White")
    }
    else if(diedCount == 10) {
      fill("Green")
      stroke(5)
      quest2Finished = true;
    }
    text("Objetivo: Mate 10 Aliens Doges",20,40);
    textSize(30)
    text(diedCount+"/10",100,80);
  }
  textSize(30);
  if (diedCount == 10){
    fill("Green")
    text("Parábens Você Ganhou",250,200);
  }

  if(Ehealth == 0 && enemyDied == false){
    enemyDied = true;
    evilBlock.visible = false;
    evilBlock.position.x = 10000000000;
    if(diedCount < 5 && questActivated == true){
      diedCount = diedCount+1;
    }
    if(diedCount < 10 && quest2Activated == true){
      diedCount = diedCount+1;
    }
    
  }
  if(health < 0.1){
    block.position.y = 1000;
    health = 0;
  }
  if(evilBlock.isTouching(edges[0])){
    evilBlock.position.x = 700;
  }
  if(block.isTouching(edges[1])) {
    if(test !== testLimit){
      block.position.x = 100
      test = test+1
      BlLevel = BlLevel+1
    }

  }
  textSize(15);
fill("White");
stroke(0);
text("Pressione E para pegar Missões com Peixes",500,40);
text("Pressione Q para atacar os Doges",500,60);
}
function enemySpawn(){
  if(BlLevel == 4){
    evilBlock.position.x = evilBlock.position.x-5;
    evilBlock.visible = true;
  }
  if(BlLevel == 7){
    evilBlock.position.x = evilBlock.position.x-7;
    evilBlock.visible = true;
    evilBlock.changeAnimation("idle2");
    evilBlock.scale = 1;
  }
}