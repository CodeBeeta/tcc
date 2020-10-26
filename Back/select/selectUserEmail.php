<?php
include('../connection.php');
session_start();

$cliente = json_decode($_POST["data"], true);

try {
    $stmt = $conn->prepare('SELECT * FROM cliente where nm_email_cliente = :email');
    $stmt->bindValue(':email', $cliente["email"]);
    $stmt->execute();

    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($data) {
        $_SESSION['login'] = $data['nm_login'];
        $_SESSION['senha'] = $data['cd_senha'];
        $_SESSION['id'] = $data['id_cliente'];
        echo 1;
    } else {
        echo 2;
    }
} catch (Exception $e) {
    throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
