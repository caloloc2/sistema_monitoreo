$(document).ready(function(){	
	setInterval(function(){
		Tanques();
	}, 1000)
})

function Tanques(){
	$.ajax({
		url: 'php/tanques.php',		
		dataType: 'json',		
		success: function(datos) {
			console.log(datos);
			if (datos['estado']){
				Niveles(datos['tanque1']['nivel'], datos['tanque2']['nivel'], datos['tanque3']['nivel']);
				Motores(datos['tanque1']['motor1'], datos['tanque1']['motor2'], datos['tanque2']['motor1'], datos['tanque2']['motor2']);
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

function Motores(tanque1_motor1, tanque1_motor2, tanque2_motor1, tanque2_motor2){
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
}