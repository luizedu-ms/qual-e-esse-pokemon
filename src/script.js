const pokemon =  [
{ nome:"Charizard", urlSilhueta:"https://ae01.alicdn.com/kf/HTB1HlJLJVXXXXc6XpXXq6xXFXXXN.jpg", urlNormal: "https://i.pinimg.com/736x/c1/37/ec/c137ec0d43a67828128221911a58a9f8--pokemon-games-list-of-pokemon.jpg"},
{ nome:"Pikachu", urlSilhueta:"https://www.netclipart.com/pp/m/70-704918_pokemon-silhouette-png-whos-that-pokemon-pikachu.png", urlNormal: "https://www.intrinseca.com.br/blog/wp-content/uploads/2020/02/blog4.jpg "},
{ nome:"Squirtle", urlSilhueta:"https://i.pinimg.com/originals/7d/76/0d/7d760d55de246acb1e2a1a8127a29545.jpg", urlNormal: "https://cdn.bulbagarden.net/upload/thumb/4/4b/Ash_Squirtle.png/245px-Ash_Squirtle.png"},
{ nome:"Bulbasaur", urlSilhueta:"https://freestencilgallery.com/wp-content/uploads/2017/04/Pokemon-Bulbasaur-Silhouette-Stencil-thumb.jpg", urlNormal: "https://cdn.bulbagarden.net/upload/thumb/1/19/Ash_Bulbasaur.png/1200px-Ash_Bulbasaur.png"},
{ nome:"Pidgey", urlSilhueta:"https://freestencilgallery.com/wp-content/uploads/2017/04/Pokemon-Pidgey-Silhouette-Stencil-thumb.jpg", urlNormal: "http://pm1.narvii.com/6431/2c974aa47e30c0e30842aca4c66303a72dfd85a8_00.jpg"}	
]
var pokeMudar = null; 

novoJogo();

function novoJogo(){
	pokeMudar = pokemon[Math.floor(Math.random()*pokemon.length)];
	console.log(pokeMudar);
	document.getElementById("imagem").src = pokeMudar.urlSilhueta;
	document.getElementById("resultado").innerHTML = "<br>";
	document.getElementById("opcao").value =  "";
}

function descobrir(){

	var nomeDigitado = document.getElementById("opcao").value;

	if(nomeDigitado.toLowerCase() == pokeMudar.nome.toLowerCase() ){
		document.getElementById("resultado").innerHTML = pokeMudar.nome +"!!"; 
		document.getElementById("imagem").src = pokeMudar.urlNormal;
	}else if(nomeDigitado == ""){
		document.getElementById("resultado").innerHTML = "Digite algo"; 
	} else{
		document.getElementById("resultado").innerHTML = "Não é esse!"; 
		}		
	}