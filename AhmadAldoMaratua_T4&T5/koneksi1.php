<?php
$host = "127.0.0.1";
$username = "root";
$pass = "";
$db = "db_portofolio1";

$conn = mysqli_connect($host, $username, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>