<?php
include('../connection.php');
session_start();

$cliente = json_decode($_POST['data'], true);
$nome = $cliente["nome"];
$email = $cliente["email"];
$telefone = $cliente["telefone"];
$login = $cliente["login"];
$senha = md5($cliente["senha"]);

try {

    	$stmt = $conn->prepare('INSERT INTO cliente(nm_cliente, nm_email_cliente, cd_telefone_cliente, nm_login, cd_senha) VALUES (:nm_cliente, :nm_email_cliente, :cd_telefone_cliente, :nm_login, :cd_senha)' );
    	$stmt->bindValue(':nm_cliente', $nome);
        $stmt->bindValue(':nm_email_cliente', $email);
        $stmt->bindValue(':cd_telefone_cliente', $telefone);
        $stmt->bindValue(':nm_login', $login);
        $stmt->bindValue(':cd_senha', $senha);
        echo $stmt->execute();

        $sucesso = $conn->lastInsertId();

        if($sucesso){
        	echo $sucesso;
        }else{
        	echo 'ERROR';
        }

} catch (Exception $e) {
	throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
