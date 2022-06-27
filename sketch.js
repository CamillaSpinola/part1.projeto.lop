var nivel = 1;
var larguraop = 100
var xopcao = 165
var larguraPróximo = 100

var tela = 1;
var largura = 200;
var altura = 50;
var xMenu = 115;
var yMenu1 = 205;
var yMenu2 = 265;
var yMenu3 = 325;

var yVoltar = 380;
var xVoltar = 320;
var alturaVoltar = 40;
var larguraVoltar = 70;

let img;

function preload(){
  img = loadImage('Tela do Menu.png')
}

function setup() {
  createCanvas(450, 450);
}


function draw() {
  textStyle(BOLDITALIC)
  //Tela do menu
  if(tela == 1){
    background('#FFCCFF')
    image(img,0,0)
    textAlign(CENTER)
    textSize(30)
    
    fill('#6633CC');
    text("Solarium Quest",215, 100)
   
    //Botão de começar o jogo
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
      stroke('#6633CC');
      fill('#FF99FF');
      rect(xMenu, yMenu1, largura, altura, 15);
    }
    fill('#6633CC')
    noStroke();
    text("Começar", 215, 240)
    
    //Botão para informações do jogo
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
       stroke('#6633CC');
       fill('#FF99FF');
       rect(xMenu, yMenu2, largura, altura, 15);
      if (mouseIsPressed === true) {
        tela = 3;
      }
    }
    fill('#6633CC')
    noStroke();
    text("Informações", 215, 300)
    
    //Botão de créditos
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
       stroke('#6633CC');
       fill('#FF99FF');
       rect(xMenu, yMenu3, largura, altura, 15);
      if (mouseIsPressed === true) {
        tela = 4;
       }
     }
    fill('#6633CC')
    noStroke();
    text("Créditos", 215, 360)
  }
  //Tela do jogo em ação
  if(tela == 2){
    background('#FFCCFF');
    if(nivel == 1){
      textSize(25);
      fill('#6633CC');
      text("Qual planeta é conhecido como\n'Planeta Vermelho'?",210, 50);
      
      //Botão de sair
      if(mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar){
        stroke('#6633CC');
        fill('#FF99FF');
        rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 15)
      }
      fill('#6633CC')
      noStroke();
      textSize(23)
      text("sair",xVoltar+32,yVoltar+25)
      
      textSize(25)
      
      //opção A
      if(mouseX > xopcao && mouseX < xopcao + larguraop && mouseY > yMenu1 && mouseY < yMenu1 + altura){
        stroke('#6633CC');
        fill('#FF99FF');
        rect(xopcao, yMenu1, larguraop, altura, 15);
      }
      fill('#6633CC')
      noStroke();
      text("Netuno", 215, 240)
      
      //opção B
      if(mouseX > xopcao && mouseX < xopcao + larguraop && mouseY > yMenu2 && mouseY < yMenu2 + altura){
        stroke('#6633CC');
        fill('#FF99FF');
        rect(xopcao, yMenu2, larguraop, altura, 15);
        if (mouseIsPressed === true) {
          tela = 5;
        }
      }
      fill('#6633CC')
      noStroke();
      text("Vênus", 215, 300)
      
      //opção C
      if(mouseX > xopcao && mouseX < xopcao + larguraop && mouseY > yMenu3 && mouseY < yMenu3 + altura){
        stroke('#6633CC');
        fill('#FF99FF');
        rect(xopcao, yMenu3, larguraop, altura, 15);
        if(mouseIsPressed == true){
          tela = 6
        }
      }
      fill('#6633CC')
      noStroke();
      text("Marte", 215, 360)
    }
  }
  //Tela de informações do jogo
  if(tela == 3){
    background('#FFCCFF')
    textAlign(LEFT)
    textSize(22)
    fill('#6633CC')
    text("  Este jogo se trata de um questionário\nsobre assuntos gerais do sistema solar,\nem que o jogador deve selecionar a\nopção correta de acordo com seus\nconhecimentos básicos e gerais.", 15, 100)
    
    textAlign(CENTER)
    textSize(30)
    fill('#6633CC')
    text("Sobre o que é o jogo?",220, 50)
    
     //Botão de voltar
    if(mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar){
      stroke('#6633CC');
      fill('#FF99FF');
      rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 15)
      if(mouseIsPressed === true){
        tela = 1
      }
    }
    fill('#6633CC')
    noStroke();
    textSize(20)
    text("voltar",xVoltar+32,yVoltar+25)
  }
  //Tela de informações do jogo
  if(tela == 4){
    background('#FFCCFF')
    textAlign(LEFT)
    textSize(21)
    fill('#6633CC')
    text("  Este jogo foi criado pela programadora\nCamilla Spínola, estudante de Engenharia\nAmbiental da UFRN. Ele faz parte do\nprojeto da disciplina de Lógica de\nProgramação, orientado pelo professor\nOrivaldo Santana e que também é feito\nem colaboração com a ColabEduc.", 15, 100)
    
    textAlign(CENTER)
    textSize(30)
    fill('#6633CC')
    text("Créditos",220, 50)
    
    //Botão de voltar
    if(mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar){
      stroke('#6633CC');
      fill('#FF99FF');
      rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 15)
      if(mouseIsPressed === true){
        tela = 1
      }
    }
    fill('#6633CC')
    noStroke();
    textSize(20)
    text("voltar",xVoltar+32,yVoltar+25)
  }
  //Tela da resposta errada
  if(tela == 5){
    background('#FFCCFF')
    textAlign(CENTER)
    textSize(30)
    fill('#6633CC')
    text("Você errou!",200, 200)
    
    //Botão de repetir
    if(mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar){
      stroke('#6633CC');
      fill('#FF99FF');
      rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 15)
    }
    fill('#6633CC')
    noStroke();
    textSize(20)
    text("repetir",xVoltar+32,yVoltar+25)
  }
  //Tela da resposta certa
  if(tela == 6){
    background('#FFCCFF')
    textAlign(CENTER)
    textSize(30)
    fill('#6633CC')
    text("Você acertou!",200, 200)
    
    //Botão de Próximo
    if(mouseX > xVoltar && mouseX < xVoltar + larguraPróximo && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar){
      stroke('#6633CC');
      fill('#FF99FF');
      rect(xVoltar, yVoltar, larguraPróximo, alturaVoltar, 15)
    }
    fill('#6633CC')
    noStroke();
    textSize(20)
    text("próximo",xVoltar+50,yVoltar+25)
  }
}

function mouseClicked(){
  if(tela == 1){
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
      tela = 2
    }
  }
  else {
      if(mouseX > xopcao && mouseX < xopcao + larguraop && mouseY > yMenu1 && mouseY < yMenu1 + altura){
        tela = 5
      }
    }
  if(tela == 5 || tela == 6){
    if(mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar){
      tela = 2
    }
  }
  else {
      if(mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar){
        tela = 1
      }
  }
}