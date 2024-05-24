<?php

// require once config.php
require_once 'config.php';
require_once 'extract.php';

try {
    // Erstellt eine neue PDO-Instanz mit der Konfiguration aus config.php
    require_once 'config.php';
    $pdo = new PDO($dsn, $username, $password, $options);

    // SQL-Query mit Platzhaltern für das Einfügen von Daten
    $sql = "INSERT INTO Luzern (Platz, Anzahl, ISO_Time) VALUES (?, ?, ?)";

    // Bereitet die SQL-Anweisung vor
    $stmt = $pdo->prepare($sql);

    // Fügt jedes Element im Array in die Datenbank ein
    foreach ($sensor_data as $item) {
        $stmt->execute([
            $item['Platz'],
            $item['Anzahl'],
            $item['ISO_Time'],
        ]);
    }

    echo "Daten erfolgreich eingefügt.";

} catch (PDOException $e) {
    die("Verbindung zur Datenbank konnte nicht hergestellt werden: " . $e->getMessage());
}

?>