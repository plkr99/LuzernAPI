<?php

$url = "https://portal.alfons.io/app/devicecounter/api/sensors?api_key=3ad08d9e67919877e4c9f364974ce07e36cbdc9e";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$output = curl_exec($ch);
curl_close($ch);

// Decode JSON data once
$data = json_decode($output, true);

// Check if the API call was successful and data is present
if (isset($data['success']) && $data['success']) {
    $sensor_data = [];
    foreach ($data['data'] as $item) {
        $sensor_details = [
            'Platz' => $item['name'],
            'Anzahl' => $item['counter'],
            'ISO_Time' => $item['ISO_time'],
        ];

        // Add each sensor's details to sensor_data array
        $sensor_data[] = $sensor_details;
        

        // Display each sensor's details
        foreach ($sensor_details as $key => $value) {
            // echo $key . ": " . $value . "<br>";
        }
        // echo "<br>";
    }

    // Output all sensor data at the end
    // echo "<pre>";
    // // print_r($sensor_data);
    // echo "</pre>";
} else {
    echo "Failed to retrieve data or 'success' key not set.";
}

print_r($sensor_data);

?>