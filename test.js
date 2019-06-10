// Game starts with 1st player

var rolldice = document.getElementById("rolldice");

var blank = document.getElementById("dice");

var pl1;

var pl2;

var diceval;

var A1cpos=0;

var A2cpos=0;

var B1cpos=0;

var B2cpos=0;

var counterA1=1;

var counterA2=0;

var counterB1=15;

var counterB2=15;

var flagA1=0;

var flagA2=0;

var flagB1=0;

var flagB2=0;

var inplayA1=0;

var inplayA2=0;

var inplayB1=0;

var inplayB2=0;

var beforeA1=0;

var beforeA2=0;

var beforeB1=0;

var beforeB2=0;




function position_A1(){

	beforeA1.innerHTML="";

	
	 if (A1cpos==2) {
			var p2 = document.getElementById("n2");

			p2.innerHTML = "A1";	   
	}
	
	else if (A1cpos==3) {
			var p3 = document.getElementById("n3");

			p3.innerHTML = "A1";	   
	}
	
	else if (A1cpos==4) {
			var p4 = document.getElementById("n4");

			p4.innerHTML = "A1";	   
	}

	else if (A1cpos==5) {
			var p5 = document.getElementById("n5");

			p5.innerHTML = "A1";	   
	}
	
	else if (A1cpos==6) {
			var p6 = document.getElementById("n6");

			p6.innerHTML = "A1";	   
	}
	else if (A1cpos==7) {
			var p7 = document.getElementById("n7");

			p7.innerHTML = "A1";	   
	}
	else if (A1cpos==8) {
			var p8 = document.getElementById("n8");

			p8.innerHTML = "A1";	   
	}
	else if (A1cpos==9) {
			var p9 = document.getElementById("n9");

			p9.innerHTML = "A1";	   
	}
	else if (A1cpos==10) {
			var p10 = document.getElementById("n10");

			p10.innerHTML = "A1";	   
	}
	else if (A1cpos==11) {
			var p11 = document.getElementById("n11");

			p11.innerHTML = "A1";	   
	}
	else if (A1cpos==12) {
			var p12 = document.getElementById("n12");

			p12.innerHTML = "A1";	   
	}
	else if (A1cpos==13) {
			var p13 = document.getElementById("n13");

			p13.innerHTML = "A1";	   
	}
	else if (A1cpos==14) {
			var p14 = document.getElementById("n14");

			p14.innerHTML = "A1";	   
	}
	else if (A1cpos==15) {
			var p15 = document.getElementById("n15");

			p15.innerHTML = "A1";	   
	}
	else if (A1cpos==16) {
			var p16 = document.getElementById("n16");

			p16.innerHTML = "A1";	   
	}
	else if (A1cpos==17) {
			var p17 = document.getElementById("n17");

			p17.innerHTML = "A1";	   
	}
	else if (A1cpos==18) {
			var p18 = document.getElementById("n18");

			p18.innerHTML = "A1";	   
	}
	else if (A1cpos==19) {
			var p19 = document.getElementById("n19");

			p19.innerHTML = "A1";	   
	}
	else if (A1cpos==20) {
			var p20 = document.getElementById("n20");

			p20.innerHTML = "A1";	   
	}
	else if (A1cpos==21) {
			var p21 = document.getElementById("n21");

			p21.innerHTML = "A1";	   
	}
	else if (A1cpos==22) {
			var p22 = document.getElementById("n22");

			p22.innerHTML = "A1";	   
	}
	else if (A1cpos==23) {
			var p23 = document.getElementById("n23");

			p23.innerHTML = "A1";	   
	}
	else if (A1cpos==24) {
			var p24 = document.getElementById("n24");

			p24.innerHTML = "A1";	   
	}
	else if (A1cpos==25) {
			var p25 = document.getElementById("n25");

			p25.innerHTML = "A1";	   
	}
	else if (A1cpos==26) {
			var p26 = document.getElementById("n26");

			p26.innerHTML = "A1";	   
	}
	else if (A1cpos==27) {
			var p27 = document.getElementById("n27");

			p27.innerHTML = "A1";	   
	}
	else if (A1cpos==28) {
			var p28 = document.getElementById("n28");

			p28.innerHTML = "";
			flagA1=2;
			alert("PLAYER A WINS PLEASE RELOAD TO PLAY AGAIN");//2 denotes destination reached	   
	}

	else if(A1cpos>28){
		A1cpos = counterA1;
		var chgturnA = document.getElementById("player");

		chgturnA.innerHTML = "TURN : PLAYER B";
	}
	

/*	if ((diceval == 1) || (diceval == 2) || (diceval == 3) || (diceval == 4) || (diceval == 5)) {
		
		pl1=0;pl2=1;

		var chgturnA = document.getElementById("player");

		chgturnA.innerHTML = "TURN : PLAYER B";


		
	}

	if (diceval==6) {
		pl1=1;pl2=0;
	}*/
	return 0;
		
	}



	function position_B1(){


	if (B1cpos==29) {
			var p1 = document.getElementById("n1");

			p1.innerHTML = "B1";	   
	}

	else if (B1cpos==30) {
			var p2 = document.getElementById("n2");

			p2.innerHTML = "B1";	   
	}
	
	else if (B1cpos==31) {
			var p3 = document.getElementById("n3");

			p3.innerHTML = "B1";	   
	}
	
	else if (B1cpos==32) {
			var p4 = document.getElementById("n4");

			p4.innerHTML = "B1";	   
	}

	else if (B1cpos==33) {
			var p5 = document.getElementById("n5");

			p5.innerHTML = "B1";	   
	}
	
	else if (B1cpos==34) {
			var p6 = document.getElementById("n6");

			p6.innerHTML = "B1";	   
	}
	else if (B1cpos==35) {
			var p7 = document.getElementById("n7");

			p7.innerHTML = "B1";	   
	}
	else if (B1cpos==36) {
			var p8 = document.getElementById("n8");

			p8.innerHTML = "B1";	   
	}
	else if (B1cpos==37) {
			var p9 = document.getElementById("n9");

			p9.innerHTML = "B1";	   
	}
	else if (B1cpos==38) {
			var p10 = document.getElementById("n10");

			p10.innerHTML = "B1";	   
	}
	else if (B1cpos==39) {
			var p11 = document.getElementById("n11");

			p11.innerHTML = "B1";	   
	}
	else if (B1cpos==40) {
			var p12 = document.getElementById("n12");

			p12.innerHTML = "B1";	   
	}
	else if (B1cpos==41) {
			var p13 = document.getElementById("n13");

			p13.innerHTML = "B1";	   
	}
	else if (B1cpos==42) {
			var p14 = document.getElementById("n14");

			p14.innerHTML = "";	

			alert("PLAYER B WINS PLEASE RELOAD TO PLAY AGAIN");   
	}
	else if (B1cpos==15) {
			var p15 = document.getElementById("n15");

			p15.innerHTML = "B1";	   
	}
	else if (B1cpos==16) {
			var p16 = document.getElementById("n16");

			p16.innerHTML = "B1";	   
	}
	else if (B1cpos==17) {
			var p17 = document.getElementById("n17");

			p17.innerHTML = "B1";	   
	}
	else if (B1cpos==18) {
			var p18 = document.getElementById("n18");

			p18.innerHTML = "B1";	   
	}
	else if (B1cpos==19) {
			var p19 = document.getElementById("n19");

			p19.innerHTML = "B1";	   
	}
	else if (B1cpos==20) {
			var p20 = document.getElementById("n20");

			p20.innerHTML = "B1";	   
	}
	else if (B1cpos==21) {
			var p21 = document.getElementById("n21");

			p21.innerHTML = "B1";	   
	}
	else if (B1cpos==22) {
			var p22 = document.getElementById("n22");

			p22.innerHTML = "B1";	   
	}
	else if (B1cpos==23) {
			var p23 = document.getElementById("n23");

			p23.innerHTML = "B1";	   
	}
	else if (B1cpos==24) {
			var p24 = document.getElementById("n24");

			p24.innerHTML = "B1";	   
	}
	else if (B1cpos==25) {
			var p25 = document.getElementById("n25");

			p25.innerHTML = "B1";	   
	}
	else if (B1cpos==26) {
			var p26 = document.getElementById("n26");

			p26.innerHTML = "B1";	   
	}
	else if (B1cpos==27) {
			var p27 = document.getElementById("n27");

			p27.innerHTML = "B1";	   
	}
	else if (B1cpos==28) {
			var p28 = document.getElementById("n28");

			p28.innerHTML = "B1";
			   
	}

	else if(B1cpos>42){
		B1cpos = counterA1;

		var chgturnB = document.getElementById("player");

		chgturnB.innerHTML = "TURN : PLAYER A";
	
	}

	

	/*if ( (diceval == 1) || (diceval == 2) || (diceval == 3) || (diceval == 4) || (diceval == 5)) {
		
		pl1=1;pl2=0;

		var chgturnA = document.getElementById("player");

		chgturnA.innerHTML = "TURN : PLAYER A";

		
	}

	if (diceval==6) {
		pl1=0;pl2=1;
	}*/

	return 0;
		
	}


	function position_1_A1(){
		if (A1cpos=1) {
			var p1 = document.getElementById("n1");

			p1.innerHTML = "A1";	   
	}
	}





function after28b1(){
	if (B1cpos>28) {
		counterB1 = (counterB1 + diceval)-28 ;
	}
}

function after28b2(){
	if (B2cpos>28) {
		counterB2 = (counterB2 + diceval)-28 ;
	}
}

function  pos28A(){
	if (A1cpos==28 || A2cpos==28) {
		var vanish = document.getElementById("no28");
		vanish.innerHTML = "";
	}
}

function  pos14B(){
	if (B1cpos==14 || B2cpos==14) {
		var vanish = document.getElementById("no14");
		vanish.innerHTML = "";
	}
}

function finishA(){
	if (A1cpos==28 && A2cpos==28) {
		var fnoteA = document.getElementById("nber");
		fnoteA.innerHTML = "A WINS";
		alert("To replay Please reload page");
	}
}

function finishB(){
	if (B1cpos==14 && B2cpos==14) {
		var fnoteB = document.getElementById("nber");
		fnoteB.innerHTML = "B WINS";
		alert("To replay reload");
	}
}

function overlapB(){
	if (A1cpos==B1cpos) {
		B1cpos = 0;
	}
	else if (A1cpos==B2cpos) {
		B2cpos = 0;
	}
	else if (A2cpos==B1cpos) {
		B1cpos = 0;
	}
	else if (A2cpos==B2cpos) {
		B2cpos = 0;
	}
	else{
		return 0;
	}
}

function overlapA(){
	if (A1cpos==B1cpos) {
		A1cpos = 0;
	}
	else if (A1cpos==B2cpos) {
		A2cpos = 0;
	}
	else if (A2cpos==B1cpos) {
		A1cpos = 0;
	}
	else if (A2cpos==B2cpos) {
		A2cpos = 0;
	}
	else{
		return 0;
	}
}

function overlapA12(){
	if (A1cpos==A2cpos) {
		A1cpos.innerHTML = "A1,A2";
}

}

function laststageA1(){

	if ( (A1cpos+counterA1>28) && (flagA2==0 || A2cpos==28) ) {
		
		A1cpos = A1cpos;

		 var chgturnA = document.getElementById("player");

		 chgturnA.innerHTML = "TURN : PLAYER B";

	}
	else{
		A2cpos= A2cpos + counterA2;
	}

}

function laststageA2(){

	if ( (A2cpos+counterA2>28) && (flagA1==0||A1cpos==28) ) {
		
		A2cpos = A2cpos;

		 var chgturnA = document.getElementById("player");

		 chgturnA.innerHTML = "TURN : PLAYER B";

	}
	else{
		A1cpos= A1cpos + counterA1;
	}

}




function laststageB1(){

	if ((B1cpos<=13)&&(B1cpos>=9) ) {
		
		if ( (B1cpos+counterB1>14) && (flagB2==0 || B2cpos==14)) {
		
		B1cpos = B1cpos;

		var chgturnB = document.getElementById("player");

		chgturnB.innerHTML = "TURN : PLAYER A";

		}

		else{
			B2cpos = B2cpos + counterB2;
		}

		}


}

function laststageB2(){

	if ( ((B2cpos<=13) && (B2cpos>=9))&&(flagB1==0 || B1cpos==14) ){
		
		if (B2cpos+counterB2>14) {
		
		B2cpos = B2cpos;

		var chgturnB = document.getElementById("player");

		chgturnB.innerHTML = "TURN : PLAYER A";

		}
		else{
			B1cpos = B1cpos + counterB1;	
		}		
	}

}

function outA1(){

	if (diceval==6) {
		A1cpos=1;
		position_A1();
		flagA1 =1;
		pl1=1;pl2=0;
		inplayA1=1;
		var chgturnA = document.getElementById("player");

		chgturnA.innerHTML = "TURN : PLAYER A";



	}
	else
	{
		var chgturnA = document.getElementById("player");

		chgturnA.innerHTML = "TURN : PLAYER B";
		pl2=1;pl1=0;
	}

}

function outB1(){

	if (diceval==6) {
		B1cpos=15;
		position_B1();
		flagB1 =1;
		pl2=1;pl1=0;
		inplayB1=1;

		var chgturnA = document.getElementById("player");

		chgturnA.innerHTML = "TURN : PLAYER B";


	}
	else
	{
		var chgturnB = document.getElementById("player");

		chgturnB.innerHTML = "TURN : PLAYER A";

		pl1=1;pl2=0;
	}

}

function chanceA1(){
	    if (diceval != 6) {
		
			pl1=0;pl2=1;

			var chgturnA = document.getElementById("player");

			chgturnA.innerHTML = "TURN : PLAYER B";

			return;
		}

			else {
			pl1=1;pl2=0;

			return;
			}
}

function chanceB1(){
	    if (diceval != 6) {
		
			pl1=1;pl2=0;

			var chgturnA = document.getElementById("player");

			chgturnA.innerHTML = "TURN : PLAYER A";

			return;
		}

			else {
			pl1=0;pl2=1;

			return;
			}
}



/*function outA1(){
	if (flagA1==1) {
		dice();
		counterA1 = diceval;
		A1cpos = A1cpos+diceval;
		var visA1 = document.getElementById();
	}
}*/

function starter(){

}


//Start of program

alert("Start Game");

var playerName = document.getElementById("player");

pl1=0;

pl2=0;

playerName.innerHTML = "TURN : PLAYER A";

rolldice.onclick = function dice(){
	

	diceval = Math.floor((Math.random()*6)+1);

	blank.innerHTML = diceval;


	if ((pl1==1)&&(inplayA1==1)) {

			if (A1cpos==1) {
			
			var p1 = document.getElementById("n1");

			p1.innerHTML = "";
			
			}
	
			A1cpos= diceval +counterA1;	    	

	    	position_A1();

	    	counterA1=A1cpos;

	    	chanceA1();


}


	if((pl2 == 1) && (inplayB1 == 1)){
		
		if (B1cpos == 15) {
			
			var p15 = document.getElementById("n15");

			p15.innerHTML = "";
		   
			
			}

		B1cpos = diceval + counterB1;

	    counterB1=B1cpos;

	    position_B1();

	    chanceB1();
	    

	}


	if ((pl1==1)&&(pl2==0)&&(inplayA1==0)) {
			outA1();
		}
	else{
			outB1();
	}	

	

	
}





/*A1cpos= diceval +counterA1;

	position_A1();

	counterA1=A1cpos;*/


/*counterA1= diceval;

A1cpos=A1cpos+counterA1;*/












































