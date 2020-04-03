<?php
require "sql/conn.php";
$dbRows = $conn->prepare('SELECT * FROM characters ORDER BY name');
$dbRows->execute();

$charAmount = $dbRows->rowCount();
$conn = null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="assets/css/style3.css" rel="stylesheet"/>
    <title>Document</title>
</head>
<body>
    <header>
        Alle <?=$charAmount?> characters uit de database
    </header>
    <div id="container">
        <?php
        // Display the characters data
        foreach ($dbRows as $row) {
        echo "<a class='item' href='character.php?id=$row[0]'>
            <div class='left'>
                <img class='avatar' src='assets/img/$row[2]'>
            </div>
            <div class='right'>
                <h2>$row[1]</h2>
                <div class='stats'>
                    <ul class='fa-ul'>
                        <li><span class='fa-li'><i class='fas fa-heart'></i></span>$row[3]</li>
                        <li><span class='fa-li'><i class='fas fa-fist-raised'></i></span>$row[6]</li>
                        <li><span class='fa-li'><i class='fas fa-shield-alt'></i></span>$row[7]</li>
                    </ul>
                </div>
            </div>
            <div class='button'><i class='fas fa-search'></i> bekijk</div>
            </a>";
        }
        ?>
    </div>
    <?php
    include "assets/incl/footer.php";
    ?>
</body>
</html>