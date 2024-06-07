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

function login($username, $password, $conn) {
    $stmt = $conn->prepare("SELECT * FROM admin WHERE name=? AND password_hash = PASSWORD(?)");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $_SESSION['username'] = $username;
        return true;
    } else {
        return false;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    if (login($username, $password, $conn)) {
        header("Location: aktuality.php");
        exit();
    } else {
        header("Location: aktuality.php");
    }
}

$conn->close();


?>