<?php 

require 'meta.php';

$consulta = Meta::Consulta_Unico("SELECT * FROM tanques ORDER BY id_datos DESC LIMIT 1");
$respuesta = "";

if ($consulta['id_datos']!=''){    
    if ($consulta['tanque1_nivel']<=30){
        $respuesta .= "0-";
    }elseif ($consulta['tanque1_nivel']>=80) {
        $respuesta .= "1-";
    }else{
        $respuesta .= "2-";
    }

    if ($consulta['tanque2_nivel']<=30){
        $respuesta .= "0-";
    }elseif ($consulta['tanque2_nivel']>=80) {
        $respuesta .= "1-";
    }else{
        $respuesta .= "2-";
    }

    if ($consulta['tanque3_nivel']<=30){
        $respuesta .= "0";
    }elseif ($consulta['tanque3_nivel']>=80) {
        $respuesta .= "1";
    }else{
        $respuesta .= "2";
    }
}

echo  $respuesta;