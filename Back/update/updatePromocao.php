<?php
include('../connection.php');
session_start();

$promocao = json_decode($_POST["data"], true);
try {
	$stmt = $conn->prepare('UPDATE promocao SET vl_promocao = :vl_promocao, nm_promocao = :nm_promocao, ds_promocao = :ds_promocao WHERE id_promocao = :id_promocao');
	$stmt->bindValue(':id_promocao', $promocao["id"]);

	$stmt->bindValue(':vl_promocao', str_replace(",", ".", $promocao["valor"]));
	$stmt->bindValue(':nm_promocao', $promocao["nome"]);
	$stmt->bindValue(':ds_promocao', $promocao['descricao']);

	if ($stmt->execute()) {
		echo 1;
	} else {
		echo 'ERROR';
	}
} catch (Exception $e) {
	throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
