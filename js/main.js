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
	$('#nivel_tanque1').css({
		'height': tanque1+'%'
	});

	$('#nivel_tanque2').css({
		'height': tanque2+'%'
	});

	$('#nivel_tanque3').css({
		'height': tanque3+'%'
	});
}

function Motores(tanque1_motor1, tanque1_motor2, tanque2_motor1, tanque2_motor2, pozo_motor){
	$('.tubo_h').removeClass('activo');
	if (tanque1_motor1==1){
		$('#tanque1_motor1').addClass('activo');
	}
	if (tanque1_motor2==1){
		$('#tanque1_motor2').addClass('activo');
	}
	if (tanque2_motor1==1){
		$('#tanque2_motor1').addClass('activo');
	}
	if (tanque2_motor2==1){
		$('#tanque2_motor2').addClass('activo');
	}
	if (pozo_motor==1){
		$('#pozo_motor').addClass('activo');
	}	
}