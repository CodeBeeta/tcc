<?php
include('../connection.php');
session_start();

$promocao = json_decode($_POST["data"], true);
try {

	$stmt = $conn->prepare('UPDATE promocao SET ativo = :ativo WHERE id_promocao = :id_promocao');
	$stmt->bindValue(':id_promocao', $promocao["id"]);

	$stmt->bindValue(':ativo', $promocao["situacao"]);


	if ($stmt->execute()) {
		echo 1;
	} else {
		echo 'ERROR';
	}
} catch (Exception $e) {
	throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
