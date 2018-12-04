var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1900;
canvas.height = 1300;
canvas.setAttribute('style', "position: absolute;  left: 40%;margin-left:-400px; top: 40%;margin-top:-400px;");
document.body.appendChild(canvas);

var audio = new Audio();
audio.src ="audio/ponto.mp3";

//imagem do background
var bgReady1 = false;
var bgImage1 = new Image();
bgImage1.onload = function(){
	bgReady1 = true;
};
bgImage1.src = "image/fundo1.jpg";

var bgReady2 = false;
var bgImage2 = new Image();
bgImage2.onload = function(){
	bgReady2 = false;
};
bgImage2.src = "image/fundo2.jpg";

//imagem hero
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
	heroReady = true;
};
heroImage.src = "image/pipimidedo.png";

//imagem mosnter
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function(){
	monsterReady = true;
};
monsterImage.src = "image/popukudedo.png";

var monsterReadybo = false;
var monsterImagebo = new Image();
monsterImagebo.onload = function(){
	monsterReadybo = false;
};
monsterImagebo.src = "image/bobuko.png";

var monsterReadyba = false;
var monsterImageba = new Image();
monsterImageba.onload = function(){
	monsterReadyba = false;
};
monsterImageba.src = "image/bastao.png";

var monsterReadyca = false;
var monsterImageca = new Image();
monsterImageca.onload = function(){
	monsterReadyca = false;
};
monsterImageca.src = "image/cana.png";

//valores das variaveis
var hero = {
	speed: 400
};

var monster = {};
var monsterbo = {};
var monsterba = {};
var monsterca = {};

var monsterCaught = 0;

var keysDown = {};

//moveimento do personagem
addEventListener("keydown", function(e){
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e){
	delete keysDown[e.keyCode];
}, false);

//Resetando o Jogo
var reset = function(){
	//Testar outras opções
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	//Testar outras opções
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
	monsterbo.x = 32 + (Math.random() * (canvas.width - 64));
	monsterbo.y = 32 + (Math.random() * (canvas.height - 64));
	monsterba.x = 32 + (Math.random() * (canvas.width - 64));
	monsterba.y = 32 + (Math.random() * (canvas.height - 64));
	monsterca.x = 32 + (Math.random() * (canvas.width - 64));
	monsterca.y = 32 + (Math.random() * (canvas.height - 64));
	
	
};
//atualização
var update = function (modifier){
	if(38 in keysDown){
		//Para cima
		hero.y -= hero.speed * modifier;
	}
	if(40 in keysDown){
		//Para baixo
		hero.y += hero.speed * modifier;
	}
	if(37 in keysDown){
		//Para esquerda
		hero.x -= hero.speed * modifier;
	}
	if(39 in keysDown){
		//Para direita
		hero.x += hero.speed * modifier;
	}
	if(16 in keysDown){
		hero.speed= 800;
	}else{
		hero.speed = 400;
	}
	
	//Colisão
	if(
	hero.x <= (monster.x + 32)
	&& monster.x <= (hero.x + 32)
	&& hero.y <= (monster.y + 32)
	&& monster.y <= (hero.y + 32)
	){
		++monsterCaught;
		audio.play();
		reset();
		
	}
	if(
	hero.x <= (monsterbo.x + 32)
	&& monsterbo.x <= (hero.x + 32)
	&& hero.y <= (monsterbo.y + 32)
	&& monsterbo.y <= (hero.y + 32)
	){
		monsterCaught = monsterCaught + 2;
		audio.play();
		reset();
		
	}
	if(
	hero.x <= (monsterba.x + 32)
	&& monsterba.x <= (hero.x + 32)
	&& hero.y <= (monsterba.y + 32)
	&& monsterba.y <= (hero.y + 32)
	){
		monsterCaught = monsterCaught - 2;
		audio.play();
		reset();
	}
	if(
	hero.x <= (monsterca.x + 32)
	&& monsterca.x <= (hero.x + 32)
	&& hero.y <= (monsterca.y + 32)
	&& monsterca.y <= (hero.y + 32)
	){
		monsterCaught = monsterCaught - 5;
		audio.play();
		reset();
	}
};

//criando imagem
var render = function(){
	if(bgReady1){
		ctx.drawImage(bgImage1, 0, 0);
	}
	if(bgReady2){
		ctx.drawImage(bgImage2, 0, 0);
	}
	if(heroReady){
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
	if(monsterReady){
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	if(monsterReadybo){
		ctx.drawImage(monsterImagebo, monsterbo.x, monsterbo.y);
	}
	if(monsterReadyba){
		ctx.drawImage(monsterImageba, monsterba.x, monsterba.y);
	}
	if(monsterReadyca){
		ctx.drawImage(monsterImageca, monsterca.x, monsterca.y);
	}
	
	//Placar
	ctx.fillStyle = "#FF83FA";
	ctx.font = "50px Comic Sans MS";	
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Capturou a Popuko-chan:  " + monsterCaught, 32, 32);
	
	//atualização de acordo com pontos
	if(monsterCaught >= 5){
		monsterReadybo = true;
	}else{
		monsterReadybo = false;
	}
	if(monsterCaught >= 5){
		monsterReadyba = true;
	}else{
		monsterReadyba = false;;
	}
	if(monsterCaught >= 10){
		monsterReadyca = true;
	}else{
		monsterReadyca = false;;
	}
	
	if(monsterCaught >= 15){
		bgReady1 = false;
		bgReady2 = true;
		
	}else{
		bgReady1 = true;
		bgReady2 = false;
		
	}
	
};
//Loop
var main = function(){
	var now = Date.now();
	var delta = now - then;
	update(delta / 1000);
	render();
	then = now;
};

//Inicia o Jogo
reset();
var then = Date.now();
setInterval(main, 1);








