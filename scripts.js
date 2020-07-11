//alert("Hola Mundo");
//alert(5 + 5)
//alert("La Suma de 50 + 45 =" + (50+45));
function sumar(){
	alert("La Suma de 50 + 45 =" + (50+45))
}
function cambiaColor(){
	document.getElementById('pepito').style.backgroundColor='pink';
}
function cambiaColor2(colorElegido){
	document.getElementById('pepito').style.backgroundColor=colorElegido;
}
function calcular(){
	var nro1 = document.getElementById("nro1").value;
	var nro2 = document.getElementById("nro2").value;
	var suma = parseInt(nro1) + parseInt(nro2);
	alert(suma)
}