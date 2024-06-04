<?php
session_start();


$servername = "db.bagros.eu";
      $username = "zub";
      $password = "tajnyZub";
      $database = "zubDB";
      $port = 8100;

$conn = new mysqli($servername, $username, $password, $database, $port);

// Kontrola připojení
if ($conn->connect_error) {
    die("Připojení k databázi selhalo: " . $conn->connect_error);
} else {
    echo "Připojení k databázi proběhlo úspěšně.";
}

// Funkce pro ověření uživatele
function login($username, $password, $conn) {
    // Připravený výrok
    $stmt = $conn->prepare("SELECT * FROM admin WHERE name=? AND password_hash = PASSWORD(?)");
    // Vázání parametrů
    $stmt->bind_param("ss", $username, $password);
    // Provedení dotazu
    $stmt->execute();
    // Získání výsledku
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        // Přihlášení úspěšné, nastavení session
        $_SESSION['username'] = $username;
        return true;
    } else {
        // Přihlášení neúspěšné
        return false;
    }
}

// Ošetření vstupů od uživatele
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Ověření uživatele
    if (login($username, $password, $conn)) {
        // Přesměrování na aktuality.php
        header("Location: aktuality.php");
        exit();
    } else {
        header("Location: aktuality.php");
    }
}

// Uzavření spojení s databází
$conn->close();


?>