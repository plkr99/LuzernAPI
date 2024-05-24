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

// SQL query to select and group data by hour and minute
$sql = "
    SELECT 
        Platz,
        Anzahl,
        created
    FROM 
        Luzern
    ORDER BY 
        created DESC
";

try {
    $stmt = $pdo->query($sql);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (empty($data)) {
        $data = ["message" => "0 results"];
    } else {
        $result = [];
        foreach ($data as $row) {
            $result[] = [
                "Platz" => $row['Platz'],
                "created" => $row['created'],
                "Anzahl" => $row['Anzahl']
            ];
        }
        $data = [$result]; // Wrap the result in another array
    }

} catch (PDOException $e) {
    $data = ["message" => "Error executing the query: " . $e->getMessage()];
}

// Return the data as JSON
echo json_encode($data);
?>