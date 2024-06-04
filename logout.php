<?php
// Spuštění relace
session_start();

// Zrušení všech dat relace
session_unset();

// Zničení relace
session_destroy();

// Přesměrování na přihlašovací stránku nebo jinou vhodnou stránku
header("Location: aktuality.php");
exit();
?>