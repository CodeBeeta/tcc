<?php
include('../connection.php');
session_start();

$mesa = json_decode($_POST["data"], true);


try {
    $stmt = $conn->prepare('INSERT INTO mesa(cd_numero_mesa, qt_cadeira_mesa, ds_mesa, disponibilidade)
        VALUES (:cd_numero_mesa, :qt_cadeira_mesa, :ds_mesa, :disponibilidade)');

    $stmt->bindValue(':cd_numero_mesa', $mesa["numero"]);
    $stmt->bindValue(':qt_cadeira_mesa', $mesa["qt_cadeira"]);
    $stmt->bindValue(':ds_mesa', $mesa["descricao"]);
    $stmt->bindValue(':disponibilidade', 1);

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
