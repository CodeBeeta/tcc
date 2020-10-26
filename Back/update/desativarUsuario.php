<?php
include('../connection.php');
session_start();

$usuario = json_decode($_POST["data"], true);
try {

    $stmt = $conn->prepare('UPDATE usuario SET ativo= :ativo WHERE id= :id');
    $stmt->bindValue(':id', $usuario["id"]);

    $stmt->bindValue(':ativo', $usuario["situacao"]);


    if ($stmt->execute()) {
        echo 1;
    } else {
        echo 'ERROR';
    }
} catch (Exception $e) {
    throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
