<?php
include('../connection.php');
session_start();

$prato = json_decode($_POST["data"], true);
try {

	$stmt = $conn->prepare('UPDATE prato SET nm_prato= :nm_prato, vl_prato= :vl_prato, ds_prato= :ds_prato WHERE id_prato= :id_prato');
	$stmt->bindValue(':id_prato', $prato["id"]);

	$stmt->bindValue(':nm_prato', $prato["nome"]);
	$stmt->bindValue(':vl_prato', str_replace(",", ".", $prato["valor"]));
	$stmt->bindValue(':ds_prato', $prato["descricao"]);

	if ($stmt->execute()) {
		echo 1;
	} else {
		echo 'ERROR';
	}
} catch (Exception $e) {
	throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
