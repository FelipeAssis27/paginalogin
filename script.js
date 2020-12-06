//document.getElementById("cep").value = "teste";
var inputCep = document.querySelector("#cep");

inputCep.addEventListener('change', function(event) {

	if (!Number(inputCep.value)) {
		document.getElementById("cep").value = "";
		alert("o cep digitado é invalido");
	}

}); 
