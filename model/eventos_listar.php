<?php

header("Content-type: application/json");

$dsn = 'mysql:host=localhost;dbname=eventos;port=8889;charset=utf8';
$user = "root";
$senha = "brasil";       
$con = new PDO($dsn,$user,$senha);

$sql = "SELECT * FROM eventos ORDER BY datahora ASC";

$res = $con->query($sql);

$dados = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados);


