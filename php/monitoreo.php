<?php 

try{
	require 'meta.php';

	$id = 0;
	$verifica = Meta::Consulta_Unico("SELECT * FROM tanques LIMIT 1");
	if ($verifica['id_datos']==''){
		$crea = Meta::Nuevo_Dato(0, 0, 0, 0,0, 0, 0);
	}else{
		$id = $verifica['id_datos'];
	}

	if ((isset($_GET['t1m1']))&&(isset($_GET['t1m2']))&&(isset($_GET['t1n']))){
		$actualiza = Meta::Actualizar_Campo('tanques', 'tanque1_motor1', $_GET['t1m1'], 'id_datos', $id);
		$actualiza = Meta::Actualizar_Campo('tanques', 'tanque1_motor2', $_GET['t1m2'], 'id_datos', $id);
		$actualiza = Meta::Actualizar_Campo('tanques', 'tanque1_nivel', $_GET['t1n'], 'id_datos', $id);
		echo 'ok<br>';
	}else{
		echo 'Debe ingresar todos los datos (estado motores, nivel) del tanque 1.<br>';
	}

	if ((isset($_GET['t2m1']))&&(isset($_GET['t2m2']))&&(isset($_GET['t2n']))){
		$actualiza = Meta::Actualizar_Campo('tanques', 'tanque2_motor1', $_GET['t2m1'], 'id_datos', $id);
		$actualiza = Meta::Actualizar_Campo('tanques', 'tanque2_motor2', $_GET['t2m2'], 'id_datos', $id);
		$actualiza = Meta::Actualizar_Campo('tanques', 'tanque2_nivel', $_GET['t2n'], 'id_datos', $id);
		echo 'ok<br>';
	}else{
		echo 'Debe ingresar todos los datos (estado motores, nivel) del tanque 2.<br>';
	}

	if (isset($_GET['t3n'])){		
		$actualiza = Meta::Actualizar_Campo('tanques', 'tanque3_nivel', $_GET['t3n'], 'id_datos', $id);
		echo 'ok<br>';
	}else{
		echo 'Debe ingresar el nivel del tanque 3.<br>';
	}

	if (isset($_GET['pozo'])){		
		$actualiza = Meta::Actualizar_Campo('tanques', 'pozo_motor', $_GET['pozo'], 'id_datos', $id);
		echo 'ok<br>';
	}else{
		echo 'Debe ingresar el estado del motor del pozo.<br>';
	}
}catch(Exception $e){
	echo $e->getMessage();
}
