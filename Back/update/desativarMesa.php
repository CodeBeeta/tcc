<?php
include('../connection.php');
session_start();

$mesa = json_decode($_POST["data"], true);
try {

	$stmt = $conn->prepare('UPDATE mesa SET disponibilidade = :disponibilidade WHERE id_mesa = :id_mesa');
	$stmt->bindValue(':id_mesa', $mesa["id"]);

	$stmt->bindValue(':disponibilidade', $mesa["disponibilidade"]);


	if ($stmt->execute()) {
		echo 1;
	} else {
		echo 'ERROR';
	}
} catch (Exception $e) {
	throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
