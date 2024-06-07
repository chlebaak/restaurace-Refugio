<?php


$servername = "db.bagros.eu";
      $username = "zub";
      $password = "tajnyZub";
      $database = "zubDB";
      $port = 8100;

$conn = new mysqli($servername, $username, $password, $database, $port);

if ($conn->connect_error) {
    die("Připojení k databázi selhalo: " . $conn->connect_error);
}

if(isset($_GET["id"])) {
    $id = $_GET["id"];

    $sql = "DELETE FROM aktuality WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        header("Location: aktuality.php");
        exit();
    } else {
        echo "Chyba při odstraňování aktuality: " . $conn->error;
    }
}

$conn->close();
?>