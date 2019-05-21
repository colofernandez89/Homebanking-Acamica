

//Declaración de variables

var nombreUsuario = "Luciano Fernández";

var codigoDeSeguridad = "2040";

var saldoCuenta = 10000;

var limiteExtraccion = 3000;

var sumarAlSaldo = function(ingreso) {
	saldoCuenta += ingreso;
	actualizarSaldoEnPantalla();
}

var restarAlSaldo = function(egreso){
	saldoCuenta -= egreso;
	actualizarSaldoEnPantalla();
}

var agua = 350;

var telefono = 425;

var luz = 210;

var internet = 570;

var cuentaAmiga1 = 1234567;

var cuentaAmiga2 = 7654321;

var puntosAcumulados = 4957;

var parlante = 6000;

var cargador = 1250;

var descuentoCombustible = 3400;

var puntosPorServicio = 200;

var restarPuntos = function(puntosCanjeados){
	puntosAcumulados -= puntosCanjeados;
	actualizarPuntosEnPantalla();
}

var sumarPuntos = function(puntos){
	puntosAcumulados += puntosPorServicio;
	alert("Usted ha sumado " + puntosPorServicio + " puntos por abonar online este servicio.");
	actualizarPuntosEnPantalla();
}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();
actualizarPuntosEnPantalla();


function cambiarLimiteDeExtraccion(nuevoLimite) {
	var stringNuevoLimite = prompt("Ingrese el nuevo límite de extracción que desea implementar:");

	if(stringNuevoLimite == undefined){
		return;
	}

	if((stringNuevoLimite === null) || (stringNuevoLimite === "")){
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

	var nuevoLimite = parseInt(stringNuevoLimite);
	if (Number.isNaN(nuevoLimite)) {
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

	limiteExtraccion = nuevoLimite;
	actualizarLimiteEnPantalla();
	alert("Nuevo límite de extracción: $" + limiteExtraccion);
}

//Funciones para la extracción
function chequearLimite(extraccion){
	if(extraccion > limiteExtraccion){
		alert("La cantidad de dinero que desea extraer es mayor a su límite de extracción.");
		return false;
	}
		restarAlSaldo(extraccion);
		return true;
}

function chequearSaldo(extraccion){
	if(extraccion > saldoCuenta){
		alert("El monto de dinero que desea extraer es mayor al saldo de su cuenta");
		return false;
	}
		return chequearLimite(extraccion);
}

function chequearCambio(extraccion){
	if(extraccion % 100 !== 0){
		alert("Sólo puede extraer cantidades que sean múltiplos de 100.");
		return false;
	}
		return chequearSaldo(extraccion);
}

function extraerDinero(extraccion) {
	var stringExtraccion = prompt("Ingrese la cantidad de dinero que desea extraer:");

	if(stringExtraccion == undefined){
		return;
	}

	if((stringExtraccion === null) || (stringExtraccion === "")){
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

	var extraccion = parseInt(stringExtraccion);
	if (Number.isNaN(extraccion)) {
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

	var saldoAnterior = saldoCuenta;
	var chequeoOk = chequearCambio(extraccion);
	if (chequeoOk) {
		alert("Ha retirado $" + extraccion + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoCuenta);
	}
}


//Funciones para el depósito
function depositarDinero(deposito) {
	var stringDeposito = prompt("Ingrese la cantidad de dinero que desea depositar:");

	if(stringDeposito == undefined){
		return;
	}

	if((stringDeposito === null) || (stringDeposito === "")){
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

	var deposito = parseInt(stringDeposito);
	if (Number.isNaN(deposito)) {
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

	var saldoAnterior = saldoCuenta;
	sumarAlSaldo(deposito);
	alert("Ha depositado: $" + deposito + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoCuenta);
}


//Funciones para la transferencia
function chequearTransferencia(montoTransferencia){
	if(montoTransferencia > saldoCuenta){
		alert("No puede transferir ese monto ya que es mayor al saldo de su cuenta.")
		return false;
	}

	var stringNroDeCuenta = prompt("Ingrese el número de cuenta a la que desea realizar la transferencia:");
	var nroDeCuenta = parseInt(stringNroDeCuenta);
	if((nroDeCuenta !== cuentaAmiga1) && (nroDeCuenta !== cuentaAmiga2)){
		alert("Sólo puede transferir dinero a una cuenta amiga.");
		return false;
	}

		alert("Saldo anterior: $" + saldoCuenta + "\nSe han transferido $" + montoTransferencia + "\nCuenta destino: " + nroDeCuenta + "\nSaldo actual: $" + (saldoCuenta - montoTransferencia));
		restarAlSaldo(montoTransferencia);
		return true;
}

function transferirDinero() {
	var stringMontoTransferencia = prompt("Ingrese el monto que desea transferir:");
	if(stringMontoTransferencia == undefined){
		return;
	}

	if((stringMontoTransferencia === null) || (stringMontoTransferencia === "")){
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

	var montoTransferencia = parseInt(stringMontoTransferencia);
	if (Number.isNaN(montoTransferencia)) {
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

		chequearTransferencia(montoTransferencia);
}


//Funciones para pagar servicios
function pagarServicio() {
	var servicio = prompt("Ingrese el número que se corresponda con el servicio que desea pagar:\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono");

	if(servicio == undefined){
		return;
	}

	if((servicio === null) || (servicio === "")){
		alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
		return;
	}

	switch(servicio){
		case "1":
			if (agua > saldoCuenta) {
				alert("No hay suficiente saldo en su cuenta para pagar este servicio.");
			} else {
					alert("Ha pagado el servicio de Agua.\nSaldo anterior: $" + saldoCuenta + "\nDinero descontado: $" + agua + "\nSaldo actual: $" + (saldoCuenta - agua));
					restarAlSaldo(agua);
					sumarPuntos();
				}
		break;

		case "2":
			if (luz > saldoCuenta) {
				alert("No hay suficiente saldo en su cuenta para pagar este servicio.");
			} else {
					alert("Ha pagado el servicio de Luz.\nSaldo anterior: $" + saldoCuenta + "\nDinero descontado: $" + luz + "\nSaldo actual: $" + (saldoCuenta - luz));
					restarAlSaldo(luz);
					sumarPuntos();
				}
		break;

		case "3":
			if (internet > saldoCuenta) {
				alert("No hay suficiente saldo en su cuenta para pagar este servicio.");
			} else {
					alert("Ha pagado el servicio de Internet.\nSaldo anterior: $" + saldoCuenta + "\nDinero descontado: $" + internet + "\nSaldo actual: $" + (saldoCuenta - internet));
					restarAlSaldo(internet);
					sumarPuntos();
				}
		break;

		case "4":
			if (telefono > saldoCuenta) {
				alert("No hay suficiente saldo en su cuenta para pagar este servicio.");
			} else {
					alert("Ha pagado el servicio de Teléfono.\nSaldo anterior: $" + saldoCuenta + "\nDinero descontado: $" + telefono + "\nSaldo actual: $" + (saldoCuenta - telefono));
					restarAlSaldo(telefono);
					sumarPuntos();
				}
		break;

		default:
			alert("No existe el servicio seleccionado.");
	}
}


//Funciones para iniciar sesión

function iniciarSesion() {
	var pedirCodigo = prompt("Ingrese su código de seguridad para iniciar sesión");

	if(pedirCodigo === codigoDeSeguridad){
		alert("Bienvenido/a, " + nombreUsuario + ". Ya podés comenzar a realizar operaciones.");
		return true;
	}

	if(pedirCodigo !== codigoDeSeguridad){
		alert("Código incorrecto. Su dinero será retenido por cuestiones de seguridad.");
		restarAlSaldo(saldoCuenta);
		return false;
	}
}


//Funciones para canjear puntos

function canjearPuntos() {
	var premioElegido = prompt("Ingrese la opción que corresponda al premio que quiere canjear:\n1- Parlante Bluetooth = 6000 puntos.\n2- Cargador de celular para el auto = 1250 puntos.\n3- Descuento del 30% en carga de combustible = 3400 puntos.");

		if(premioElegido == undefined){
			return;
		}

		if((premioElegido === null) || (premioElegido === "")){
			alert("El valor ingresado es incorrecto. Por favor, intente nuevamente.");
			return;
		}

	switch(premioElegido){
		case "1":
			if(parlante > puntosAcumulados){
				alert("Usted no posee los puntos suficientes para canjear este premio.");
			} else {
				alert("Usted ha canjeado " + parlante + " puntos por el parlante bluetooth. El premio llegará a su domicilio en las próximas 72/96 horas.");
				puntosCanjeados = parlante;
				restarPuntos(parlante);
			}
		break;

		case "2":
			if(cargador > puntosAcumulados){
				alert("Usted no posee los puntos suficientes para canjear este premio.");
			} else {
				alert("Usted ha canjeado " + cargador + " puntos por el cargador de celular para el auto. El premio llegará a su domicilio en las próximas 72/96 horas.");
				puntosCanjeados = cargador;
				restarPuntos(cargador);
			}
		break;

		case "3":
			if(descuentoCombustible > puntosAcumulados){
				alert("Usted no posee los puntos suficientes para canjear este premio.");
			} else {
				alert("Usted ha canjeado " + descuentoCombustible + " puntos por el 30% de descuento en la carga de combustible. El premio llegará a su domicilio en las próximas 72/96 horas.");
				puntosCanjeados = descuentoCombustible;
				restarPuntos(descuentoCombustible);
			}
		break;

		default:
			alert("No existe el premio seleccionado.");
	}
}




//Funciones que actualizan el valor de las variables en el HTML function cargarNombreEnPantalla() {
function cargarNombreEnPantalla(){
	document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

function actualizarPuntosEnPantalla() {
    document.getElementById("puntos-acumulados").innerHTML = "Tus puntos acumulados son: " + puntosAcumulados;
}
