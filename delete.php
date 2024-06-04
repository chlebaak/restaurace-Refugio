<?php


$servername = "db.bagros.eu";
      $username = "zub";
      $password = "tajnyZub";
      $database = "zubDB";
      $port = 8100;

$conn = new mysqli($servername, $username, $password, $database, $port);

// Kontrola připojení
if ($conn->connect_error) {
    die("Připojení k databázi selhalo: " . $conn->connect_error);
}

// Zpracování požadavku na odstranění
if(isset($_GET["id"])) {
    $id = $_GET["id"];

    // SQL dotaz pro odstranění aktuality
    $sql = "DELETE FROM aktuality WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        // Přesměrování na aktuality.php po úspěšném odstranění
        header("Location: aktuality.php");
        exit();
    } else {
        echo "Chyba při odstraňování aktuality: " . $conn->error;
    }
}

// Uzavření spojení s databází
$conn->close();
?>