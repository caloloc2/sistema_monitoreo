<?php 

require 'meta.php';

$consulta = Meta::Consulta_Unico("SELECT * FROM tanques ORDER BY id_datos DESC LIMIT 1");
$respuesta = "";

if ($consulta['id_datos']!=''){
    $respuesta .= $consulta['tanque1_motor1']."-".$consulta['tanque1_motor2']."-";
    $respuesta .= $consulta['tanque2_motor1']."-".$consulta['tanque2_motor2']."-";
    $respuesta .= $consulta['pozo_motor'];
}

echo  $respuesta;