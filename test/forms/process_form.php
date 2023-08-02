```php
<?php
// Replace these values with your actual database credentials and port number (3306 for MySQL/MariaDB).
$servername = 'localhost';
$port = '3306';
$dbname = 'vide_grenier';
$username = 'root';
$password = '';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST["prenom"];
    $nom = $_POST["nom"];
    $adresse = $_POST["adresse"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $place = $_POST["place"];

    // Insert the form data into the 'ev_23' table
    $stmt = $conn->prepare("INSERT INTO ev_23 (Prenom, Nom, Adresse, Email, Telephone, Place) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->execute([$prenom, $nom, $adresse, $email, $telephone, $place]);

    // Respond with an HTTP 200 status code to indicate success
    http_response_code(200);
} else {
    http_response_code(405); // Method Not Allowed
    die("Method not allowed.");
}
?>
```