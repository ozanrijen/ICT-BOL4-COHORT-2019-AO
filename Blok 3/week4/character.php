<?php
require "sql/conn.php";

$id = $char = '';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
}

$db = $conn->prepare("SELECT * FROM characters WHERE id=?");
$db->execute([$id]);
$char = $db->fetch();

$conn = null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="assets/css/style3.css" rel="stylesheet"/>
    <title><?=$char['name']?></title>
</head>
<body>
    <header>
        <?=$char['name']?><a class='backbutton' href='index.php'><i class='fas fa-long-arrow-alt-left'></i> Terug</a>
    </header>
    <div id="container">
    <div class='detail'>
        <div class='left'>
            <img class='avatar' src='assets/img/<?=$char['avatar']?>'>
            <div class='stats' style='background-color: <?=$char['color']?>'>
                <ul class='fa-ul'>
                    <li><span class='fa-li'><i class='fas fa-heart'></i></span><?=$char['health']?></li>
                    <li><span class='fa-li'><i class='fas fa-fist-raised'></i></span><?=$char['attack']?></li>
                    <li><span class='fa-li'><i class='fas fa-shield-alt'></i></span><?=$char['defense']?></li>
                </ul>
                <ul class='gear'>
                    <?php
                    if (isset($char['weapon'])) {
                        echo "<b>Weapon:</b> $char[weapon]<br>";
                    }
                    if (isset($char['armor'])) {
                        echo "<b>Armor:</b> $char[armor]";
                    }
                    ?>
                </ul>
            </div>
        </div>
        <div class='right'>
            <p>
                <?=nl2br($char['bio'])?>
            </p>
        </div>
        <div style='clear: both'></div>
        </div>
    </div>
    <?php
    include "assets/incl/footer.php";
    ?>
</body>
</html>