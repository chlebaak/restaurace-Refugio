<?php
session_start();

$servername = "db.bagros.eu";
$username = "zub";
$password = "tajnyZub";
$database = "zubDB";
$port = 8100;

$conn = new mysqli($servername, $username, $password, $database, $port);

if ($conn->connect_error) {
    die("Připojení k databázi selhalo: " . $conn->connect_error);
} else {
    echo "Připojení k databázi proběhlo úspěšně.";
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nazev = $_POST["nazev"];

    $obrazek_path = "";
    if (isset($_FILES["obrazek"]) && $_FILES["obrazek"]["error"] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["obrazek"]["name"]);
        if (move_uploaded_file($_FILES["obrazek"]["tmp_name"], $target_file)) {
            $obrazek_path = $target_file;
        } else {
            echo "Nahrání souboru selhalo.";
            exit();
        }
    } else {
        echo "Chyba při nahrávání souboru.";
        exit();
    }

    $created_at = date("Y-m-d H:i:s");

    $sql = "INSERT INTO aktuality (nazev, obrazek_path, created_at) VALUES ('$nazev', '$obrazek_path', '$created_at')";
    if ($conn->query($sql) === TRUE) {
        header("Location: aktuality.php");
        exit();
    } else {
        echo "Chyba při ukládání do databáze: " . $conn->error;
    }
}

$conn->close();
