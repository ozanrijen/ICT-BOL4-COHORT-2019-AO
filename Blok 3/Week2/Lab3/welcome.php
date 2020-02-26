<?php
include("index.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    return("index.php")
    ?>
    Welcome <?php echo $_POST["name"]; ?><br>
    You just signed in.
</body>
</html>