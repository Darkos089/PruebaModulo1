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

	//cambio de color al pasar cursor por encima del icono

	$("#icono1").hover(
		function () {
			$("#icono1").css("color", "#000000");
		},
		function () {
			$("#icono1").css("color", "#C3C3C3");
		}
	);
	$("#icono2").hover(
		function () {
			$("#icono2").css("color", "#000000");
		},
		function () {
			$("#icono2").css("color", "#C3C3C3");
		}
	);

	$("#icono3").hover(
		function () {
			$("#icono3").css("color", "#000000");
		},
		function () {
			$("#icono3").css("color", "#C3C3C3");
		}
	);
	$("#icono4").hover(
		function () {
			$("#icono4").css("color", "#000000");
		},
		function () {
			$("#icono4").css("color", "#C3C3C3");
		}
	);

});
