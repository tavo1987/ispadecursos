//mostramos el menu
$(".icon-menu").click(function(){

	$(".menu").toggleClass("mostrar");
	$(this).toggleClass("icon-close");
});

//para comprobar si un li tiene listas anidadas dentro y agregarle la clase submenu
$(".menu li").has("ul").addClass("submenu");

//para desplegar el submenu
$(".submenu").click(function(){
	$(".submenu ul").slideToggle();

	});
