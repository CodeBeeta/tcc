<?php
include('../connection.php');
session_start();

$mesa = json_decode($_POST["data"], true);
try {

	$stmt = $conn->prepare('UPDATE mesa SET cd_numero_mesa = :cd_numero_mesa, qt_cadeira_mesa = :qt_cadeira_mesa, ds_mesa = :ds_mesa, disponibilidade = :disponibilidade WHERE id_mesa = :id_mesa');
	$stmt->bindValue(':id_mesa', $mesa["id"]);

	$stmt->bindValue(':cd_numero_mesa', $mesa["numero"]);
	$stmt->bindValue(':qt_cadeira_mesa', $mesa["qt_cadeira"]);
	$stmt->bindValue(':ds_mesa', $mesa['descricao']);
	$stmt->bindValue(':disponibilidade', 1);

	if ($stmt->execute()) {
		echo 1;
	} else {
		echo 'ERROR';
	}
} catch (Exception $e) {
	throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
