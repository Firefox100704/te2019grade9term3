$(document).ready(function(){
	$("#button1").click(getpokemon);

	function getpokemon(){
		let id = Math.floor(Math.random()*800);
		$.get('https://pokeapi.co/api/v2/pokemon/${id}/',function(response){
			console.log(response);
		}
			)
		}
	
})