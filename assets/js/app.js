//  documento listo para usar
$(document).ready(function () {
	console.log("ready!");

	$("#destacados1").click(function () {
		$("#disabletexto1").toggle();
	});

	$("#destacados2").click(function () {
		$("#disabletexto2").toggle();
	});

	$("#destacados3").click(function () {
		$("#disabletexto3").toggle();
	});

	$("#destacados4").click(function () {
		$("#disabletexto4").toggle();
	});





// se debe colocar un  Modal para el quines somos en   tamaño sm o md





	$(".card-text1, .card-text2, .card-text3, .card-text4").css(
		"display",
		"none"
	);
});
