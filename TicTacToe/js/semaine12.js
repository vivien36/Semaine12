$plateau = document.getElementById("plateau");
$info = document.getElementById("info");
$jeu = document.getElementById("jeu");
$reset = document.getElementById("reset");
$reset2 = document.getElementById("reset2");
$raz = document.getElementById("raz");
$raz2 = document.getElementById("raz2");
$gauche = document.getElementById("gauche");
$droite = document.getElementById("droite");
$score1 = document.getElementById("score1");
$score2 = document.getElementById("score2");
$rond = document.getElementById("rond");
$changement = document.getElementById("changement");
$regles = document.getElementById("regles");
$plateau.onclick= numDiv;
$reset.onclick= restart;
$reset2.onclick= restart;
$raz2.onclick=raz;
$raz.onclick= raz;
$changement.onclick= changerJoueur;
$regles.onclick= notice;
joueur=1
scoreJ1=0
scoreJ2=0

var joueur1 = prompt ("Qui sera le joueur numero 1 ?");
var joueur2 = prompt ("et le joueur numero 2 ?");
info.innerHTML="Au tour de " + joueur1;
gauche.innerHTML= joueur1;
droite.innerHTML= joueur2;
score1.innerHTML= scoreJ1;
score2.innerHTML= scoreJ2;
function numDiv(event){
if (joueur ==1 && event.target.className == "none"){
	info.innerHTML="Au tour de " + joueur2;
	soleil();
	event = event || window.event;
	var target = event.target || event.srcElement;
	console.log('Vous avez cliqué sur ' + target.id);
	event.target.className="player1";
	joueur=joueur+1;
}else if(joueur ==2 && event.target.className == "none"){
	info.innerHTML= "Au tour de " + joueur1;
		soleil2();
	event.target.className="player2";
	joueur=joueur-1;
}else{
	alert ("Cocher une case vide");
}
	gagnant();
};

function restart (){
  /*var raz = document.getElementsByClassName('player1');
 raz.className== "none";
  console.log (raz);*/
  case11.className='none';
  case21.className='none';
  case31.className='none';
  case12.className='none';
  case22.className='none';
  case32.className='none';
  case13.className='none';
  case23.className='none';
  case33.className='none';
  joueur=1;
  info.innerHTML="Au tour de " + joueur1;
  	soleil2();
}
  function raz (){
  case11.className='none';
  case21.className='none';
  case31.className='none';
  case12.className='none';
  case22.className='none';
  case32.className='none';
  case13.className='none';
  case23.className='none';
  case33.className='none';
  joueur=1;
  scoreJ1=0
  scoreJ2=0
  info.innerHTML="Au tour de " + joueur1;
  	soleil2();
  score1.innerHTML= scoreJ1;
  score2.innerHTML= scoreJ2;
  
  }

 function gagnant (){
	  if ((case11.className=='player2')&& (case21.className=='player2')&& (case31.className=='player2')){
			scoreJ2=scoreJ2+1;
			score2.innerHTML= scoreJ2;
		  alert (joueur2 + " à gagné !");
		  restart();
  }else if ((case12.className=='player2')&& (case22.className=='player2')&& (case32.className=='player2')){
		  scoreJ2=scoreJ2+1;
		  score2.innerHTML= scoreJ2;
		  alert (joueur2 + " à gagné !");
		  restart();
  }else if ((case13.className=='player2')&& (case23.className=='player2')&& (case33.className=='player2')){
		 scoreJ2=scoreJ2+1;
		 score2.innerHTML= scoreJ2;
		 alert (joueur2 + " à gagné !");
		  restart();
  }else if ((case11.className=='player2')&& (case12.className=='player2')&& (case13.className=='player2')){
		 scoreJ2=scoreJ2+1;
		 score2.innerHTML= scoreJ2;
		 alert (joueur2 + " à gagné !");
		  restart();
  }else if ((case21.className=='player2')&& (case22.className=='player2')&& (case23.className=='player2')){
		 scoreJ2=scoreJ2+1;
		 score2.innerHTML= scoreJ2;
		 alert (joueur2 + " à gagné !");
		  restart();
  }else if ((case31.className=='player2')&& (case32.className=='player2')&& (case33.className=='player2')){
		 scoreJ2=scoreJ2+1;
		 score2.innerHTML= scoreJ2;
		 alert (joueur2 + " à gagné !");
		  restart();
  }else if ((case13.className=='player2')&& (case22.className=='player2')&& (case31.className=='player2')){
		  scoreJ2=scoreJ2+1;
		  score2.innerHTML= scoreJ2;
		  alert (joueur2 + " à gagné !");
		  restart();
  }else if ((case11.className=='player2')&& (case22.className=='player2')&& (case33.className=='player2')){
		 scoreJ2=scoreJ2+1;
		 score2.innerHTML= scoreJ2;
		 alert (joueur2 + " à gagné !");
		  restart();
  }else if ((case11.className=='player1')&& (case21.className=='player1')&& (case31.className=='player1')){
		  scoreJ1=scoreJ1+1;
		  score1.innerHTML= scoreJ1;
		  alert (joueur1 + " à gagné !");
		  restart();
  }else if ((case12.className=='player1')&& (case22.className=='player1')&& (case32.className=='player1')){
		  scoreJ1=scoreJ1+1;
		score1.innerHTML= scoreJ1;
		  alert (joueur1 + " à gagné !");
		  restart();
  }else if ((case13.className=='player1')&& (case23.className=='player1')&& (case33.className=='player1')){
		   scoreJ1=scoreJ1+1;
		   score1.innerHTML= scoreJ1;
		  alert (joueur1 + " à gagné !");
		  restart();
  }else if ((case11.className=='player1')&& (case12.className=='player1')&& (case13.className=='player1')){
		   scoreJ1=scoreJ1+1;
		   score1.innerHTML= scoreJ1;
		  alert (joueur1 + " à gagné !");
		  restart();
  }else if ((case21.className=='player1')&& (case22.className=='player1')&& (case23.className=='player1')){
		  scoreJ1=scoreJ1+1;
		  score1.innerHTML= scoreJ1;
		 alert (joueur1 + " à gagné !");
		  restart();
  }else if ((case31.className=='player1')&& (case32.className=='player1')&& (case33.className=='player1')){
		  scoreJ1=scoreJ1+1;
		  score1.innerHTML= scoreJ1;
		 alert (joueur1 + " à gagné !");
		  restart();
  }else if ((case13.className=='player1')&& (case22.className=='player1')&& (case31.className=='player1')){
		   scoreJ1=scoreJ1+1;
		   score1.innerHTML= scoreJ1;
		  alert (joueur1 + " à gagné !");
		  restart();
  }else if ((case11.className=='player1')&& (case22.className=='player1')&& (case33.className=='player1')){
		   scoreJ1=scoreJ1+1;
		   score1.innerHTML= scoreJ1;
		  alert (joueur1 + " à gagné !");
		  restart();
  }else if ((case11.className!='none')&& (case21.className!='none')&& (case31.className!='none')&& (case12.className!='none')&& (case22.className!='none')&& (case32.className!='none')&& (case13.className!='none')&& (case23.className!='none')&& (case33.className!='none')){
	  alert ("égalité");
	  restart();
  }
  };

  function soleil() {
	$('#rond').animate({
		marginLeft:'70%',
});
}
function soleil2() {
	$('#rond').animate({
         marginLeft:'0%'
});
}
function changerJoueur() {
	var joueur1 = prompt ("Qui sera le joueur numero 1 ?");
	var joueur2 = prompt ("et le joueur numero 2 ?");
	gauche.innerHTML= joueur1;
	droite.innerHTML= joueur2;
}
function notice(){
	alert ("Le Tic-tac-toe se joue sur une grille carrée de 3×3 cases.Deux joueurs s'affrontent. Ils doivent remplir chacun à leur tour une case de la grille avec le symbole qui leur est attribué :Vert ou Rouge. Le gagnant est celui qui arrive à aligner trois symboles identiques, horizontalement, verticalement ou en diagonale.En raison du nombre de combinaisons limité, l'analyse complète du jeu est facile à réaliser : si les deux joueurs jouent chacun de manière optimale, la partie doit toujours se terminer par un match nul.");
}