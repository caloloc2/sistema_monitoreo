$('#inicio').submit(function(){
	Login();
	return false;
})

function Login(){
	var usuario = document.getElementById('usuario').value;
	var pass = document.getElementById('pass').value;

	if ((usuario!='')&&(pass!='')){
		if ((usuario=='admin')&&(pass=='1234')){
			Crear_Inicio();
		}else{
			alert("El usuario o contrasena son incorrectos.");
		}
	}else{
		alert("Debe especificar los dos campos obligatoriamente.");
	}
}

function Crear_Inicio(){
	$.ajax({
		url: 'php/login.php',
		dataType: 'json',
		async: false,
		success: function(datos) {
			console.log(datos);
			if (!datos['estado']){
				alert("Error al crear el inicio de sesion.");
				console.log(datos['error']);
			}else{
				window.location.href = 'index.html';
			}
		},
		error:function(e){
			console.log(e.responseText);
		}
	});
}

function Salir(){
	$.ajax({
		url: 'php/salir.php',
		dataType: 'json',
		async: false,
		success: function(datos) {
			console.log(datos);
			if (!datos['estado']){
				alert("Error al salir del sistema.");
				console.log(datos['error']);
			}else{
				window.location.href = 'login.html';
			}
		},
		error:function(e){
			console.log(e.responseText);
		}
	});
}

function Verifica_Inicio(){
	$.ajax({
		url: 'php/logueado.php',
		dataType: 'json',
		async: false,
		success: function(datos) {
			//console.log(datos);
			if (!datos['estado']){
				window.location.href = 'login.html';
			}else{				
				setInterval(function(){
					Tanques();
				}, 1000)
			}
		},
		error:function(e){
			console.log(e.responseText);
		}
	});	
}














function Tanques(){
	$.ajax({
		url: 'php/tanques.php',		
		dataType: 'json',		
		success: function(datos) {
			console.log(datos);
			if (datos['estado']){
				Niveles(datos['tanque1']['nivel'], datos['tanque2']['nivel'], datos['tanque3']['nivel']);
				Motores(datos['tanque1']['motor1'], datos['tanque1']['motor2'], datos['tanque2']['motor1'], datos['tanque2']['motor2'], datos['pozo']['motor']);
			}
		},
		error:function(e){
			console.log(e.responseText);
		}
	});
}

function Niveles(tanque1, tanque2, tanque3){
	$('#nivel_tanque1_texto').html(tanque1+'%');
	$('#nivel_tanque2_texto').html(tanque2+'%');
	$('#nivel_tanque3_texto').html(tanque3+'%');
	
	$('#nivel_tanque1').css({
		'height': tanque1+'%'
	});

	$('#nivel_tanque2').css({
		'height': tanque2+'%'
	});

	$('#nivel_tanque3').css({
		'height': tanque3+'%'
	});

	if (tanque3>0){
		$('.tanque:nth-child(4) > .motores > div:nth-child(1)').addClass('fluido');
		$('.tanque:nth-child(4) > .motores > div:nth-child(2)').addClass('fluido');
		$('.tanque:nth-child(4) > .motores > div:nth-child(3)').addClass('fluido');
		$('.tanque:nth-child(4) > .motores > div:nth-child(4)').addClass('fluido');
	}else{
		$('.tanque:nth-child(4) > .motores > div:nth-child(1)').removeClass('fluido');
		$('.tanque:nth-child(4) > .motores > div:nth-child(2)').removeClass('fluido');
		$('.tanque:nth-child(4) > .motores > div:nth-child(3)').removeClass('fluido');
		$('.tanque:nth-child(4) > .motores > div:nth-child(4)').removeClass('fluido');
	}
}

function Motores(tanque1_motor1, tanque1_motor2, tanque2_motor1, tanque2_motor2, pozo_motor){
	$('.tubo_h').removeClass('activo');
	for (x=9; x<=12; x++){
		$('.tanque:nth-child(2) > .motores > div:nth-child('+x+')').removeClass('fluido');
	}
	$('.tanque:nth-child(2) > .motores > div:nth-child(1)').removeClass('fluido');
	$('.tanque:nth-child(2) > .motores > div:nth-child(2)').removeClass('fluido');
	$('.tanque:nth-child(2) > .motores > div:nth-child(3)').removeClass('fluido');
	$('.tanque:nth-child(2) > .motores > div:nth-child(5)').removeClass('fluido');
	$('.tanque:nth-child(2) > .motores > div:nth-child(7)').removeClass('fluido');
	$('.tanque:nth-child(2) > .motores > div:nth-child(8)').removeClass('fluido');

	$('.tanque:nth-child(3) > .motores > div:nth-child(1)').removeClass('fluido');
	$('.tanque:nth-child(3) > .motores > div:nth-child(2)').removeClass('fluido');
	$('.tanque:nth-child(3) > .motores > div:nth-child(3)').removeClass('fluido');
	$('.tanque:nth-child(3) > .motores > div:nth-child(5)').removeClass('fluido');
	$('.tanque:nth-child(3) > .motores > div:nth-child(7)').removeClass('fluido');
	$('.tanque:nth-child(3) > .motores > div:nth-child(8)').removeClass('fluido');

	if (tanque1_motor1==1){
		$('#tanque1_motor1').addClass('activo');
		$('.tanque:nth-child(2) > .motores > div:nth-child(1)').addClass('fluido');
		$('.tanque:nth-child(2) > .motores > div:nth-child(2)').addClass('fluido');
		$('.tanque:nth-child(2) > .motores > div:nth-child(3)').addClass('fluido');
		$('.tanque:nth-child(2) > .motores > div:nth-child(7)').addClass('fluido');
		$('.tanque:nth-child(2) > .motores > div:nth-child(8)').addClass('fluido');
	}
	if (tanque1_motor2==1){
		$('#tanque1_motor2').addClass('activo');				
		$('.tanque:nth-child(2) > .motores > div:nth-child(2)').addClass('fluido');
		$('.tanque:nth-child(2) > .motores > div:nth-child(5)').addClass('fluido');
		$('.tanque:nth-child(2) > .motores > div:nth-child(7)').addClass('fluido');
		$('.tanque:nth-child(2) > .motores > div:nth-child(8)').addClass('fluido');
	}
	if (tanque2_motor1==1){
		$('#tanque2_motor1').addClass('activo');
		$('.tanque:nth-child(3) > .motores > div:nth-child(1)').addClass('fluido');
		$('.tanque:nth-child(3) > .motores > div:nth-child(2)').addClass('fluido');
		$('.tanque:nth-child(3) > .motores > div:nth-child(3)').addClass('fluido');
		$('.tanque:nth-child(3) > .motores > div:nth-child(7)').addClass('fluido');
		$('.tanque:nth-child(3) > .motores > div:nth-child(8)').addClass('fluido');
	}
	if (tanque2_motor2==1){
		$('#tanque2_motor2').addClass('activo');
		$('.tanque:nth-child(3) > .motores > div:nth-child(2)').addClass('fluido');
		$('.tanque:nth-child(3) > .motores > div:nth-child(5)').addClass('fluido');
		$('.tanque:nth-child(3) > .motores > div:nth-child(7)').addClass('fluido');
		$('.tanque:nth-child(3) > .motores > div:nth-child(8)').addClass('fluido');
	}
	if (pozo_motor==1){
		$('#pozo_motor').addClass('activo');
		for (x=9; x<=12; x++){
		$('.tanque:nth-child(2) > .motores > div:nth-child('+x+')').addClass('fluido');	
	}
	}
}


function Reporte(){
	document.getElementById('fecha_inicio').value = Fecha();
	document.getElementById('fecha_final').value = Fecha();
	$('#grafico').fadeIn(250);
}

$('#cerrar_grafico').click(function(){
	$('#grafico').fadeOut(250);
	return false;
})

$('#buscador').submit(function(){
	Graficador();
	return false;
})

function Graficador(){
	$.ajax({
		url: 'php/valores_grafica.php',
		data:{
			fecha_inicio: document.getElementById('fecha_inicio').value,
			fecha_final: document.getElementById('fecha_final').value,
			tanque: document.getElementById('selector_tanque').value
		},
		type: 'POST',
		dataType: 'json',		
		success: function(datos) {
			console.log(datos);
			if (datos['estado']){
				Mostrar_Grafica(datos['fechas'], datos['valores']);
			}			
		},
		error:function(e){
			console.log(e.responseText);
		}
	});
}


function Mostrar_Grafica(fechas, valores){	
	Highcharts.chart('highchart', {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Registros de Niveles en Tanque'
		},
		subtitle: {
			text: 'Universidad Tecnológica Israel'
		},
		xAxis: {
			categories: fechas
		},
		yAxis: {
			title: {
				text: 'Nivel del Tanque'
			}
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: false
			}
		},
		series: [{
			name: 'Nivel del Tanque',
			data: valores
		}]
	});
}

function Fecha(){
	// funcion para obtener fecha para los campos inicio y final
	var f = new Date();
	var anio = f.getFullYear();
	var mes = ('0' + (f.getMonth()+1)).slice(-2);
	var dia = ('0' + f.getDate()).slice(-2);
	var fecha = anio+"-"+mes+"-"+dia;

	return fecha;
}