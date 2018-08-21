<?php 

$respuesta['estado'] = false;

try{
	require 'meta.php';

	$consulta = Meta::Consulta_Unico("SELECT * FROM tanques LIMIT 1");

	if ($consulta['id_datos']!=''){
		$respuesta['tanque1']['motor1'] = $consulta['tanque1_motor1'];
		$respuesta['tanque1']['motor2'] = $consulta['tanque1_motor2'];
		$respuesta['tanque1']['nivel'] = $consulta['tanque1_nivel'];
		$respuesta['tanque2']['motor1'] = $consulta['tanque2_motor1'];
		$respuesta['tanque2']['motor2'] = $consulta['tanque2_motor2'];
		$respuesta['tanque2']['nivel'] = $consulta['tanque2_nivel'];
		$respuesta['tanque3']['nivel'] = $consulta['tanque3_nivel'];
		$respuesta['pozo']['motor'] = $consulta['pozo_motor'];

		$respuesta['estado'] = true;
	}
}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);