$(document).ready(function(){
	
$("#button1").click(getpokemon);

let pokemon = {
	name:'',
	attack:0,
	img: ''
};
	function getpokemon(){
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`,function(response){
			console.log(response);
			console.log(response.name);
			$('#first').empty();
			$('#first').append(`<h1>${response.name}</h1>`);
		});
	}

	$("#button2").click(getpokemons);

let pokemons = {
	name:'',
	attack:0,
	img: ''
};
	function getpokemons(){
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`,function(response){
			console.log(response);
			console.log(response.name);
			$('#second').empty();
			$('#second').append(`<h1>${response.name}</h1>`);
		});
	}

	$("button3").click(choosepokemon);

})				

	