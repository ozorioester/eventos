<?php
/**
 * Cria conexao com bd */
function conectar(){
$server = "localhost";
$user = "root";
$senha = "brasil";
$banco = "eventos";
$dsn = "mysql:host=$server;port = 8889;dbname=$banco";

$con = new \PDO($dsn, $user, $senha);

return $con;
}