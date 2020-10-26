<?php
include('../connection.php');
session_start();

$reserva = json_decode($_POST["reserva"], true);
$retorno = [];
try {
    $stmt = $conn->prepare('SELECT * FROM mesa where id_mesa = (SELECT id_mesa from reserva where id_reserva= :reserva)');
    $stmt->bindValue(':reserva', $reserva);
    $stmt->execute();

    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($data) {
        $retorno['result'] = 1;
        $retorno['mesa'] = $data;

        $stmt = null;
        $stmt = $conn->prepare('SELECT pr.prato, pr.quantidade, p.nm_prato, p.vl_prato, p.ds_prato FROM `prato_reserva` as pr JOIN prato as p ON p.id_prato = pr.prato WHERE pr.reserva = :reserva');
        $stmt->bindValue(':reserva', $reserva);
        $stmt->execute();

        $data = null;
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($data) {
            $retorno['result'] = 1;
            $retorno['pratos'] = $data;

        } else {
            $retorno['result'] = "ERROR";
            $retorno['error'] = $stmt->errorCode();
        }
    } else {
        $retorno['result'] = "ERROR";
        $retorno['error'] = $stmt->errorCode();
    }


    echo json_encode($retorno);
} catch (Exception $e) {
    throw new MyDatabaseException($e->getMessage(), $e->getCode());
}
