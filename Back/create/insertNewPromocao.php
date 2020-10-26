<?php
include('../connection.php');
session_start();

$promocao = json_decode($_POST["data"], true);


try {
    $stmt = $conn->prepare('INSERT INTO promocao(vl_promocao, nm_promocao, ds_promocao) VALUES (:vl_promocao, :nm_promocao, :ds_promocao)');

    $stmt->bindValue(':vl_promocao', str_replace(",", ".", $promocao["valor"]));
    $stmt->bindValue(':nm_promocao', $promocao["nome"]);
    $stmt->bindValue(':ds_promocao', $promocao["descricao"]);

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
