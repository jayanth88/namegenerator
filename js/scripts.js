var prefix = ["Mega" , "Fatale" ," Maximus"];
var suffix = ["Wolf" , "Dog" ," Joker"];


$("#test").click(function() {
  generateTeamName();
})

function generateTeamName(){
  var randomNumber1 = parseInt(Math.random() * prefix.length);
  var randomNumber2 = parseInt(Math.random() * suffix.length);

  var name = prefix[randomNumber1] + " " + suffix[randomNumber2];

  $(".random-name-result").text(name);

  $(".element").css({transition: '0.5s ease-in-out',transform: 'rotate(360deg) scale(2) translate(50px, 100px)',animation: 'fade 0.6s',opacity:0});
  explode();
}

function explode(){
	
	var divsize = ((Math.random()*100) + 50).toFixed();
	var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
	$newDiv = $( "<div></div>" )
	$newDiv.css({
		'width':divsize+'px',
        'height':divsize+'px',
        'background-color': color
	}).text("VIOLS");
	$('random-name-result').append($newDiv);
	
}
