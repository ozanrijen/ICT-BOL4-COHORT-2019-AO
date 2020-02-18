<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="assets/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body id="<?=$staat;?>">

    <?php
    $staat = "";
    $tijd = date("H");

    switch($tijd) {
        case "0":
            echo $staat = "nacht";
            break;
        case "6":
            echo $staat = "ochtend";
            break;
        case "12":
            echo $staat = "middag";
            break;
        case "18":
            echo $staat = "avond";
            break;
    }

    if ($tijd >= 0) {
        $staat = "nacht";
    } else if ($tijd >= 6) {
        $staat = "ochtend";
    } else if ($tijd >= 12) {
        $staat = "middag";
    } else if ($tijd >= 18) {
        $staat = "avond";
    }
    ?>
</body>
</html>