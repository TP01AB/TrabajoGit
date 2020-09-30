function guardar() {
	var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var texto = document.getElementById("texto").value;
	/*Guardamos los datos en localStorage*/
	localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("texto", texto);
    /* Guardamos en cookies*/
    document.cookie='nombre='+nombre;
    document.cookie='email='+email;
    document.cookie='texto='+texto;    
	/* limpiamos el cambo */
	document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("texto").value = "";
    console.log("informacion almacenada en local storage");
    document.write("informacion almacenada en local storage");
};  

function cargarLocal() {
	var nombre = localStorage.getItem("nombre");
    var email = localStorage.getItem("email");
    var texto= localStorage.getItem("texto")
	document.getElementById("nombre").value = nombre;
    document.getElementById("email").value = email;
    document.getElementById("texto").value = texto;
}

function cargarCookie() {
    var nom_cookie, valor_cookie;
    var temp;
    var array_cookies = document.cookie.split('; ');
    document.cookie = "nombre=hola";
    for(var i = 0; i < array_cookies.length; i++) {
        temp = array_cookies[i].split('=');
        nom_cookie = temp[0];
        valor_cookie = temp[1];
        
        console.log("Nombre de la cookie: " + nom_cookie + "; valor de la cookie: " + valor_cookie);
        
}