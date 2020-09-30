function guardar() {
	var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var texto = document.getElementById("texto").value;
	/*Guardamos los datos en localStorage*/
	localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("texto", texto);
	/* limpiamos el cambo */
	document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("texto").value = "";
};  

function cargar() {
	var animal = localStorage.getItem("animal");
	var vegetal = localStorage.getItem("vegetal");
	document.getElementById("nombreAnimal").value = animal;
	document.getElementById("nombreVegetal").value = vegetal;
}