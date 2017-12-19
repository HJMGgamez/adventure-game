const status = document.getElementById('choose');
const addButton = document.createElement("button");
const game = document.getElementById('game');
const choose = document.getElementById('choose');
const text = document.getElementById('shit');
const sound = document.getElementById("sound");
const nav = document.getElementById("nav");
const but1 = document.getElementById("button1");
const but2 = document.getElementById("button2");
const but3 = document.getElementById("button3");
const but4 = document.getElementById("button4");
const enemie = document.getElementById("zombie_ghost");
const enemie2 = document.getElementById("zombie1");
const see = document.getElementById("item")
var bedroom = "IMG/badroom.jpg";
var hallway = "IMG/hallway.jpg";
var door = "IMG/door.jpg";
var dia = "IMG/dia.jpg";
var kitchen = "IMG/kitchen.jpg";
var livingroom = "IMG/livingRoom.jpg";
var cellar = "IMG/kalder.png";
var livingroom2 = "IMG/livingRoom2.jpg";
var cry = "IMG/Cry.png";
var over = "IMG/over.png";
var name = "Naho: "
var key1 = "key.png"
var zombie = "IMG/zombie.gif"
var outside = "IMG/out.gif"
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var q = 0;
var key = false;
var bin1 = false;
var bin2 = false;
var end1 = false;
var end2 = false;
var end3 = false;

	function tell ()
{
	talk();
	a++;
}
function tell2 ()
{
	talk2();
	b++;
}
	function tell3 ()
{
	livingroomLog();
	c++;
}
	function tell5 ()
{
	console.log(f);
	f++;
	doorlog();
}
	function tell4 ()
{
	kitchenLog();
	d++;
}
	function tell6 ()
{
	bedroomlog();
	g++;
}
	function tell7 ()
{
	hallwaylog();
}
	function tell8 ()
{
	callerlog();
	q++;
}

function tellh ()
{
	hallwaylog();
	h++;
}

function true1 ()
{
	c = 19;
	end1 = true;
	livingroomLog();
	
}

function true2 ()
{
	d = 11;
	end2 = true;
	kitchenLog();
}

function true3 ()
{
	g = 6;
	end3 = true;
	bedroomlog();
}

function talk()
{
	if (a == 0){
		window.alert("this is a visual noval and you play by clicking on the buttons by some points and to progress the story click on the text bar. you win by getting trough the door.")
	}
	if (a == 1){
		text.innerHTML = name + "it was a normal night, like any other.";
	} else if (a == 2){
		text.innerHTML = name + "I was asleep,";
	} else if (a == 3){
		text.innerHTML = text.innerHTML + "And then.";
	} else if (a == 4) {
		text.innerHTML = "*scream!*";
		text.setAttribute ("style", "text-align: center;");
		game.src = bedroom;
	} else if (a == 5) {
		text.setAttribute ("style", "none;");
		text.innerHTML = name + "What was that?.";
	} else if (a == 6){
		text.setAttribute ("onclick", "");
		text.innerHTML = text.innerHTML + "should I look?";
		choose.innerHTML = '<button id="button1" onclick="tell2();">' + "yes" +"</button>"  + "<br>" +'<button id="button2" onclick="tell();">'+ "no" +"</button>"  + "<br>" + '<button id="button3" onclick="#">' + "0" +"</button>"+ "<br>" + '<button id="button4" onclick="#">' + "0" +"</button>";
		document.getElementById("button3").style.display = "none";
		document.getElementById("button4").style.display = "none";
	} else if (a == 7) {
		displayNone2()
		text.setAttribute ("onclick", "tell();");
		text.innerHTML = name + "it was probably just a cat or something.  I'm going back to sleep.";
	} else if (a == 8){
		document.getElementById("game").style.display = "none";
		text.innerHTML = name + "AAAAAAAAAH!.........";
	} else if (a == 9){
		document.getElementById("game").style.display = "inline";
		text.setAttribute ("onclick", "");
		game.src = over;
		enemie.src = zombie;
		enemie2.src = zombie;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "game over"
	} else if (a == 10){
		displayNone2();
		text.innerHTML = name + "I don't want anything to do with this. I'm going back to bed.";
		text.setAttribute ("onclick", "tell()");
		text.setAttribute ("style", "#");	
	} else if (a == 11){
		document.getElementById("game").style.display = "none";
		text.innerHTML = name + "AAAAAAAAAH!.........";
	} else if (a == 12){
		document.getElementById("game").style.display = "inline";
		text.setAttribute ("onclick", "");
		enemie.src = zombie;
		enemie2.src = zombie;		
		game.src = over;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "game over"
	}		
} 

function talk2 ()
{
	displayNone2()
	if (b == 0){
		text.setAttribute ("onclick", "tell2();");
		text.innerHTML = name + "ok , I will take a look.";
	} else if (b == 1){
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "in the hallway";
		game.src = hallway;
	} else if (b == 2){
		text.innerHTML = name + "where should i look first?";
		text.setAttribute ("onclick", "");
		display3();
		document.getElementById("button1").innerHTML = "livingroom";
		document.getElementById("button2").innerHTML = "kitchen";
		document.getElementById("button4").innerHTML = "door";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "tell4()");
		document.getElementById("button4").setAttribute ("onclick", "doorlog()");
	}
}
function livingroomLog() 
{
	if (c == 0) {
		displayNone4()
		text.setAttribute ("onclick", "tell3();");
		game.src = livingroom;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "livingroom";
	} else if (c == 1) {
		text.innerHTML = "????: Hello Naho. Welcome to your new home.";
	} else if (c == 2) {
		text.innerHTML = name + "Who are you.";
	} else if (c == 3) {
		text.innerHTML = "????: that is not inportant right now.";
	} else if (c == 4) {
		text.innerHTML = text.innerHTML + " What is important now is that you need to leave your house right now! .";
	} else if (c == 5) {
		text.innerHTML = name + "why?";
	} else if (c == 6) {
		text.innerHTML = "????: because you are in danger.";
	} else if (c == 7) {
		text.setAttribute ("onclick", "");
		text.setAttribute ("style", "text-align:center;");		
		display2(); 
		document.getElementById("button1").innerHTML = "yes";
		document.getElementById("button2").innerHTML = "no";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "tell()");
		a = 10;
	} else if (c == 8) {
		document.getElementById("button1").style.display = "none";
		document.getElementById("button2").style.display = "none";
		text.setAttribute ("onclick", "tell3()");
		text.innerHTML = name + "what should i do?!";
	} else if (c == 9){
		text.innerHTML = "????: You need to find your keys and get out of here! that is your only option.";
	} else if (c == 10){
		text.setAttribute ("onclick", "tell7()");
		text.innerHTML = name + "I will find them!";
	}
	if (c == 11) {
		displayNone4();
		text.setAttribute ("onclick", "tell3();");
		game.src = livingroom;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "livingroom";
	} else if (c == 12) {
		text.setAttribute ("style", "#");
		text.innerHTML = name + "oh shit, a zombie!!";
	} else if (c == 13) {
		text.innerHTML = name + "RUUUUUUUUUUUNNNN!!!!";
	} else if (c == 14) {
		text.innerHTML = name + "AAAAAAAAHHHHHHHH!";
	} else if (c == 15) {
		text.setAttribute ("onclick", "");
		game.src = over;
		enemie.src = zombie;
		enemie2.src = zombie;		
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "Game over.";
	} else if (c == 16) {
		displayNone4();
		text.setAttribute ("onclick", "tell3();");
		game.src = livingroom2;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "livingroom";
		h = 10;
	} else if (c == 17){
		text.innerHTML = name + "should i look for my keys here";
	} else if (c == 18 && end1 == false){
		text.setAttribute ("onclick", "");
		display2(); 
		document.getElementById("button1").innerHTML = "no";
		document.getElementById("button2").innerHTML = "yes";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "true1()");
		c = 20;
	} else if (c == 19 && end1 == true){
		text.setAttribute ("onclick", "tell3");
		text.innerHTML = name + "the keys are not here."
		displayNone2() 
	} else if (c == 20){
		text.setAttribute ("onclick", "tell3");
		text.innerHTML = name + "back to the hallway then"
	} else if (c == 21){
		hallwaylog();
	}
}
function kitchenLog()
{
	if (d == 0) {
	displayNone4()
		text.setAttribute ("onclick", "tell4();");
		game.src = kitchen;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "kitchen";
	} else if (d == 1) {
		text.setAttribute ("style", "#");
		text.innerHTML = name + "wtf is this.";
	} else if (d == 2) {
		text.innerHTML = name + "why is there a zombie here in my kitchen?";
	} else if (d == 3) {
		text.innerHTML = name + "Shit AAAAAAAAHHHHHHHH!";
	} else if (d == 4) {
		game.src = over;
		enemie.src = zombie;
		enemie2.src = zombie;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "Game over.";
		text.setAttribute ("onclick", "");
	} else if (d == 5) {
		game.src = kitchen;
		displayNone4();
		text.setAttribute ("style", "text-align: center;");
		text.setAttribute ("onclick", "tell4();");
		text.innerHTML = "kitchen";		
	} else if (d == 6) {
		text.setAttribute ("style", "#");
		text.innerHTML = name + "can't find the keys";		
	} else if (d == 7) {
		bin1 = true;	
		tell7();
	} else if (d == 8){
		displayNone4()
		text.setAttribute ("onclick", "tell4();");
		game.src = kitchen;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "kitchen";
		h = 10;
	} else if (d == 9){
		text.innerHTML = name + "should i look for my keys here?";
	} else if (d == 10 && end2 == false){
		text.setAttribute ("onclick", "");
		display2(); 
		document.getElementById("button1").innerHTML = "no";
		document.getElementById("button2").innerHTML = "yes";
		document.getElementById("button1").setAttribute ("onclick", "tell4()");
		document.getElementById("button2").setAttribute ("onclick", "true2()");
		d = 12;
	} else if (d == 11 && end2 == true){
		text.setAttribute ("onclick", "tell4");
		text.innerHTML = name + "the keys are not here."
		displayNone2() 
	} else if (d == 12){
		text.setAttribute ("onclick", "tell4");
		text.innerHTML = name + "back to the hallway then"
	} else if (d == 13) {
		hallwaylog();
	}
}
function doorlog()
{
	if (f == 0 && key == false) {
		window.alert("don't have the key with me");
	} else if (f == 0 && key == true) {
		displayNone4();
		game.src = door;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "Door";
		f = 6;	
	}
	if (f == 1){
		displayNone2();
		text.setAttribute ("onclick", "tell5();");
		text.innerHTML = name + "comming true.";
	} else if (f == 2){
		game.src = door;
		text.innerHTML = "BOOOOOOOOOM!";
	} else if (f == 3){
		game.src = dia;
		text.innerHTML = "AAAAAAAAAH!!!!!!";
	} else if (f == 4) {
		game.src = over;
		enemie.src = zombie;
		enemie2.src = zombie;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "Game over.";
		text.setAttribute ("onclick", "");
	}
	if (f == 6){
		text.setAttribute ("onclick", "tell5()");
		text.innerHTML = "fast i need to go outside";
	} else if (f == 7){
		console.log("hallo");
		game.src = outside;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "outside";
	} else if (f == 8){
		text.innerHTML = name + "I'm back.";
	} else if (f == 9){
		text.innerHTML = name + "back at the real world .";
	} else if (f == 10){
		win();
	}
}
function bedroomlog ()
{
	if (g == 0) {
        displayNone4();
		text.setAttribute ("onclick", "tell6();");
		game.src = bedroom;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "bedroom";
	} else if (g == 1) {
		text.setAttribute ("style", "#");
		text.innerHTML = name + "My keys are not here.";
	} else if (g == 2) {
		bin2 = true;
		tell7();	
	} else if (g == 3){
		h = 10;
		displayNone4();
		text.setAttribute ("onclick", "tell6();");
		game.src = bedroom;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "bedroom";
	} else if (g == 4){
		text.innerHTML = name + "should i look for my keys here";
	} else if (g == 5 && end3 == false){
		text.setAttribute ("onclick", "");
		display2(); 
		document.getElementById("button1").innerHTML = "no";
		document.getElementById("button2").innerHTML = "yes";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "true3()");
		g = 7;
	} else if (g == 6 && end3 == true){
		text.setAttribute ("onclick", "tell6()");
		text.innerHTML = name + "my keys were here after all.";
		key = true;
		displayNone2();
		g = 8; 
	} else if (g == 7){
		text.setAttribute ("onclick", "tell6()");
		text.innerHTML = name + "back to the hallway then";
		g = 9;
	} else if (g == 8){
		text.innerHTML = name + "now fast let me go fast to the door.";
	} else if (g == 9){
		h = 12;
		hallwaylog();
	}
}
function hallwaylog () 
{
	
	if (h == 0 && bin1 == false && bin2 == false){
	game.src = hallway;
	c = 11;
	d = 5;
	g = 0;
	text.setAttribute ("onclick", "");
		text.innerHTML = "where are my keys?";
		display4();
		document.getElementById("button1").innerHTML = "livingroom";
		document.getElementById("button2").innerHTML = "kitchen";
		document.getElementById("button3").innerHTML = "bedroom";
		document.getElementById("button4").innerHTML = "door";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "tell4()");
		document.getElementById("button3").setAttribute ("onclick", "tell6()");
		document.getElementById("button4").setAttribute ("onclick", "doorlog()");
	}
	if (h == 0 && bin1 == true && bin2 == false){
		game.src = hallway;
	c = 11;
	d = 5;
	g = 0;
	text.setAttribute ("onclick", "");
		text.innerHTML = "where are my keys?";
		display4();
		document.getElementById("button1").innerHTML = "livingroom";
		document.getElementById("button2").innerHTML = "kitchen";
		document.getElementById("button3").innerHTML = "bedroom";
		document.getElementById("button4").innerHTML = "door";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "tell4()");
		document.getElementById("button3").setAttribute ("onclick", "tell6()");
		document.getElementById("button4").setAttribute ("onclick", "doorlog()");
	}
	if (h == 0 && bin1 == false && bin2 == true){
		game.src = hallway;
	c = 11;
	d = 5;
	g = 0;
	text.setAttribute ("onclick", "");
		text.innerHTML = "where are my keys?";
		display4();
		document.getElementById("button1").innerHTML = "livingroom";
		document.getElementById("button2").innerHTML = "kitchen";
		document.getElementById("button3").innerHTML = "bedroom";
		document.getElementById("button4").innerHTML = "door";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "tell4()");
		document.getElementById("button3").setAttribute ("onclick", "tell6()");
		document.getElementById("button4").setAttribute ("onclick", "doorlog()");
	}
	if (h == 0 && bin1 == true && bin2 == true){
		game.src = hallway;
		text.innerHTML = name + "I don't know were my keys are.";
		text.setAttribute ("onclick", "tellh()");
	} else if (h == 1) {
		text.innerHTML =	"what should i do now?";
	} else if (h == 2) {
		text.setAttribute ("onclick", "");
		display2();
		document.getElementById("button1").innerHTML = "looking some more.";
		document.getElementById("button2").innerHTML = "going true the door.";
		document.getElementById("button1").setAttribute ("onclick", "tellh()");
		document.getElementById("button2").setAttribute ("onclick", "tell5()");
		f = 1;
	} else if (h == 3){
		displayNone2();
		text.innerHTML = name + "what is this?";
		text.setAttribute ("onclick", "tellh()");
	} else if (h == 4) {
		text.innerHTML =	"i have never seen this door before.";
	} else if (h == 5) {
		document.getElementById("button1").innerHTML = "????";
		document.getElementById("button1").style.display = "inline";
		document.getElementById("button1").setAttribute ("onclick", "tell8()");
		text.setAttribute ("onclick", "");
	}
	if (h == 6) {
		text.setAttribute ("onclick", "tellh()");
		game.src = cry;
		text.innerHTML = name + "what is this?" + " my hallway changed. in need to get out of here, and fast";
		g = 4;
		c = 16;
		f = 0;
		g = 3;
		d = 8;
	} else if (h == 7) {
		game.src = cry;
		text.innerHTML = name + "I need to find my keys and fast.";
	} else if (h == 8){
		text.innerHTML = name + "Where should i look first?";
	} else if (h == 9){
		game.src = cry;
		text.setAttribute ("onclick", "");
		display4();
		document.getElementById("button1").innerHTML = "livingroom";
		document.getElementById("button2").innerHTML = "kitchen";
		document.getElementById("button3").innerHTML = "bedroom";
		document.getElementById("button4").innerHTML = "door";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "tell4()");
		document.getElementById("button3").setAttribute ("onclick", "tell6()");
		document.getElementById("button4").setAttribute ("onclick", "doorlog()");
	}
	if (h == 10){
		game.src = cry;
		text.innerHTML = name + "Where should I look.";
		text.setAttribute ("onclick", "");
		display4();
		document.getElementById("button1").innerHTML = "livingroom";
		document.getElementById("button2").innerHTML = "kitchen";
		document.getElementById("button3").innerHTML = "bedroom";
		document.getElementById("button4").innerHTML = "door";
		document.getElementById("button1").setAttribute ("onclick", "tell3()");
		document.getElementById("button2").setAttribute ("onclick", "tell4()");
		document.getElementById("button3").setAttribute ("onclick", "tell6()");
		document.getElementById("button4").setAttribute ("onclick", "doorlog()");
		g = 4;
		c = 16;
		f = 0;
		g = 3;
		d = 8;
	}
	if (h == 11 && end1 == true && end2 == true && end3 == true){
		text.setAttribute ("onclick", "tellh()");
		text.innerHTML = name + "i have the keys now I can go outside.";
		game.src = cry;
	} else if (h == 11 && end1 == true && end2 == true && end3 == true){
		text.innerHTML = "Rin: no you don't.";
	} else if (h == 12 && end1 == true && end2 == true && end3 == true){
		text.innerHTML = "Rin: you are ganne play with me.";
	} else if (h == 13 && end1 == true && end2 == true && end3 == true){
		text.innerHTML = name + "No i don't gonna play with you.";
	} else if (h == 14 && end1 == true && end2 == true && end3 == true){
		text.innerHTML = "Rin: you wil forever.";
	} else if (h == 15 && end1 == true && end2 == true && end3 == true){
		text.innerHTML = name + "what!?";
	} else if (h == 16 && end1 == true && end2 == true && end3 == true){
		text.innerHTML = "Rin: die!!!!.";
	} else if (h == 17 && end1 == true && end2 == true && end3 == true){
		text.innerHTML = name + "AAAAAHHH!!";
	} else if (h == 11 && end1 == true && end2 == true && end3 == true){
		text.innerHTML = "Rin: no you don't.";
		game.src = over;
		enemie.src = zombie;
		enemie2.src = zombie;
		text.setAttribute ("style", "text-align: center;");
		text.innerHTML = "Game over.";
		text.setAttribute ("onclick", "");
	}
	if (h == 11 && end1 == false && end2 == true && end3 == true){
		text.setAttribute ("onclick", "tellh()");
		text.innerHTML = name + "i have the keys now I can go outside.";
		game.src = cry;
	} else if (h == 12){
		doorlog();
	}
	if (h == 11 && end1 == true && end2 == false && end3 == true){
		text.setAttribute ("onclick", "tellh()");
		text.innerHTML = name + "i have the keys now I can go outside.";
		game.src = cry;
	} else if (h == 12){
		doorlog();
	}
	if (h == 11 && end1 == false && end2 == false && end3 == true){
		text.setAttribute ("onclick", "tellh()");
		text.innerHTML = name + "i have the keys now I can go outside.";
		game.src = cry;
	} else if (h == 12){
		doorlog();
	}
}



function callerlog()
{
	if (q == 0){
		document.getElementById("button1").style.display = "none";
		text.setAttribute ("onclick", "tell8()");
		text.innerHTML = name +	"What is this ?";
	} else if (q == 1){
		text.innerHTML = "caller";
		text.setAttribute ("style", "text-align: center;");
		game.src = cellar;
	} else if (q == 2){
		text.innerHTML = name + "I never had a cellar before....";
		text.setAttribute ("style", "#");
		game.src = cellar;
	} else if (q == 3){
		text.innerHTML = "????: hello friend?";
	} else if (q == 4){
		text.innerHTML = name + "who is there?.";
	} else if (q == 5){
		text.innerHTML = "????: Just someone that wants to help you friend";
	} else if (q == 6){
		text.innerHTML = name + "sure, but first, tell me who you are.";
	} else if (q == 7){
		text.innerHTML = "Rin: I'm Rin, and i'm the one that trapped you in your home.";
	} else if (q == 8){
		text.innerHTML = name + "Why, what have I ever done to you?";
	} else if (q == 9){
		text.innerHTML = "Rin: AHAHAHAHAHAHAHAHAHAHAHAHAHAHA!";
	} else if (q == 10){
		text.innerHTML = "Rin: you have done nothing to me.";
	} else if (q == 11){
		text.innerHTML = name + "why are you doing this then";
	} else if (q == 12){
		text.innerHTML = "Rin: Just for shits and giggles really.";
	} else if (q == 13){
		text.innerHTML = "Rin: and you were at the perfect place for me to transport you here.";
	} else if (q == 14){
		text.innerHTML = name + "What is ''here''? where is this place?";
	} else if (q == 15){
		text.innerHTML = "Rin: My very own dimension.";
	} else if (q == 16){
		text.innerHTML = name  + "What!?.";
	} else if (q == 15){
		text.innerHTML = "Rin: Have a good day Naho.";
	} else if (q == 16){
		text.innerHTML = name  + "Wait!?.";
	} else if (q == 17){
		text.innerHTML = name  + "shit! She is gone. shit what do i do now?";
	} else if (q == 18){
		text.innerHTML = name  + "i need to find my keys and fast";
	} else if (q == 19){
		h = 6;
		hallwaylog();
	}
}
function win ()
{
	text.innerHTML = "You askeepd the horros" + "<br>" + "You win!!"
	text.setAttribute ("style", "text-align: center;");
}
function display4() 
{
		document.getElementById("button1").style.display = "inline";
		document.getElementById("button2").style.display = "inline";
		document.getElementById("button3").style.display = "inline";
		document.getElementById("button4").style.display = "inline";
}
function display3() 
{
		document.getElementById("button1").style.display = "inline";
		document.getElementById("button2").style.display = "inline";
		document.getElementById("button4").style.display = "inline";
}
function display2() 
{
		document.getElementById("button1").style.display = "inline";
		document.getElementById("button2").style.display = "inline";
} 
function displayNone4()
{
		document.getElementById("button1").style.display = "none";
		document.getElementById("button2").style.display = "none";
		document.getElementById("button3").style.display = "none";
		document.getElementById("button4").style.display = "none";
}
function displayNone2()
{
		document.getElementById("button1").style.display = "none";
		document.getElementById("button2").style.display = "none";
}
//status.removeChild(status.childNodes[0]);

//var textnode = document.createTextNode("Water");
    //li.appendChild(textnode);
    //status.appendChild(li);
    	//document.getElementById("button1").style.display = "inline";
		//document.getElementById("button1").innerHTML = "????";
		//document.getElementById("button1").setAttribute ("onclick", "tellh()");
		 