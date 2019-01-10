<?php 

$respuesta['estado'] = false;

try{
    require 'meta.php';

    $fecha_inicio = $_POST['fecha_inicio'];
    $fecha_final = $_POST['fecha_final'];
    $tanque = $_POST['tanque'];

    $tanque = Meta::Consulta("SELECT * FROM registros WHERE (id_tanque=".$tanque.") AND (fecha BETWEEN '".$fecha_inicio."' AND '".$fecha_final."') ORDER BY fecha DESC");

    
    if (count($tanque)>0){        
        $respuesta['fechas'] = array();
        $respuesta['valores'] = array();
        foreach ($tanque as $linea) {
            $punto = $linea['fecha']." ".$linea['hora'];
            array_push($respuesta['fechas'], $punto);
            array_push($respuesta['valores'], floatval($linea['nivel']));
        }
        $respuesta['tanque'] = $tanque;
        $respuesta['estado'] = true;
    }

}catch(Exception $e){
    $respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);