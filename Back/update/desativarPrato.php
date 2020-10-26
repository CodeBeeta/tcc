<?php
include('../connection.php');
session_start();

$prato = json_decode($_POST["data"], true);
try {

	$stmt = $conn->prepare('UPDATE prato SET ativo = :ativo WHERE id_prato= :id_prato');
	$stmt->bindValue(':id_prato', $prato["id"]);

	$stmt->bindValue(':ativo', $prato["situacao"]);


	if ($stmt->execute()) {
		echo 1;
	} else {
		echo 'ERROR';
	}
} catch (Exception $e) {
	throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
