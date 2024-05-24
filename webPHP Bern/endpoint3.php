<?php
header('Content-Type: application/json');

// Include the database configuration file to establish the connection
include 'config.php';

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the connection was successful
if (!isset($pdo)) {
    echo json_encode(["message" => "Database connection failed."]);
    exit();
}

// SQL query to select data from the Luzern table
$sql = "SELECT Platz, Anzahl, ISO_Time FROM Luzern";

try {
    $stmt = $pdo->query($sql);
    $data = $stmt->fetchAll();
    
    if (empty($data)) {
        $data = ["message" => "0 results"];
    }
} catch (PDOException $e) {
    $data = ["message" => "Error executing the query: " . $e->getMessage()];
}

// Return the data as JSON
echo json_encode($data);
?>