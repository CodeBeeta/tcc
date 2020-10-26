<?php
include('../connection.php');
session_start();

$usuario = json_decode($_POST["data"], true);
try {

    	$stmt = $conn->prepare('UPDATE usuario SET nome= :nome,login= :login,senha= :senha WHERE id= :cd_usuario' );
    	$stmt->bindValue(':cd_usuario', $usuario["id"]);
    	$stmt->bindValue(':nome', $usuario["nome"]);
        $stmt->bindValue(':login', $usuario["login"]);
        $stmt->bindValue(':senha', md5($usuario["senha"]));

        if($stmt->execute()){
        	echo 1;
        }else{
        	echo 'ERROR';
        }

} catch (Exception $e) {
	throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
