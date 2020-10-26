<?php
include('../connection.php');
session_start();

$newPrato = json_decode($_POST["data"], true);


try {
    $stmt = $conn->prepare('INSERT INTO prato(nm_prato, vl_prato, ds_prato)
            VALUES (:nm_prato, :vl_prato, :ds_prato)');
    $stmt->bindValue(':nm_prato', $newPrato["nome"]);
    $stmt->bindValue(':vl_prato', str_replace(",", ".", $newPrato["valor"]));
    $stmt->bindValue(':ds_prato', $newPrato["descricao"]);
    echo $stmt->execute();

    $sucesso = $conn->lastInsertId();

    if ($sucesso) {
        echo $sucesso;
    } else {
        echo 'ERROR';
    }
} catch (Exception $e) {
    throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
