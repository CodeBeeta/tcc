<?php
include('../connection.php');
session_start();

$usuario = json_decode($_POST["data"], true);

try {
    $stmt = $conn->prepare('INSERT INTO usuario(login, nome, senha,ativo)
        VALUES (:login, :nome, :senha, :ativo)');

    $stmt->bindValue(':login', $usuario["login"]);
    $stmt->bindValue(':nome',  $usuario["nome"]);
    $stmt->bindValue(':senha', md5($usuario["senha"]));
    $stmt->bindValue(':ativo', 1);

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
