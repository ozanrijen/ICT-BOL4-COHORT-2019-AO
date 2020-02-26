<?php
$dbArray = [
    "Arnold",
    "Stefano",
    "Jan-Willem",
    "JanWillem",
    "Oguzhan"
];

$nameErr = $passwordErr =  "";
$name = $password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(in_array(($_POST["name"]), $dbArray)){
        header('Location: welcome.php');
    } else {
        $nameErr = "Wrong username";
    }
    
  if (empty($_POST["name"])) {
    $nameErr = "Username is required";
  } else {
    $name = input($_POST["name"]);
  }

  if (empty($_POST["password"])) {
      $passwordErr = "Password is required";
  } else {
      $password = input($_POST["password"]);
  }
}

function input($data) {
    $data = trim($data); //Verwijder witruimte (of andere tekens) vanaf het begin en einde van een tekenreeks
    $data = stripslashes($data); //Aanhalingstekens tussen aanhalingstekens ongedaan maken
    $data = htmlspecialchars($data); //Converteer speciale tekens naar HTML-entiteiten
    return $data;
  }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
    <img src="assets/img/logo.png" alt="">
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <label>Username:</label><input type="text" name="name">
        <span class="error">* <?php echo $nameErr;?></span> <br>
        <label>Password:</label><input type="password" name="password">
        <span class="error">* <?php echo $passwordErr;?></span> <br>
        <button type="submit">Verstuur</button>
    </form>
    </div>
</body>
</html>