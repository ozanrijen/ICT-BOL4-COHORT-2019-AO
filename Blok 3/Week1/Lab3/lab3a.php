<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo "<h1> LAB3A </h1>";
    $getal1 = mt_rand(1,10);
    $getal2 = mt_rand(1,10);
    $plus = $getal1 + $getal2;
    $min = $getal1 - $getal2;
    $keer = $getal1 * $getal2;
    $deel = $getal1 / $getal2;

    echo $getal1 . " + " . $getal2 . " = " . $plus . "<br>";
    echo $getal1 . " - " . $getal2 . " = " . $min . "<br>";
    echo $getal1 . " * " . $getal2 . " = " . $keer . "<br>";
    echo $getal1 . " / " . $getal2 . " = " . $deel;

    echo "<h1>LAB3B</h1>";
        
    for ($y = 0; $y <= 10; $y++) {
        $totaal = 6 * $y;
        echo "6 * $y = $totaal<br>";
    }
    echo "<br>";

    function lab3b($i) {
        for ($y = 0; $y < $i; $y++) {
            $totaal3 = $i * $y;
            echo "$i * $y = $totaal3<br>";
        }
    }

    $array = ["3","5","8","12"];

    foreach ($array as $value) {
        for ($q = 0; $q <= 10; $q++) {
            $totaal2 = $value * $q;
            echo "$value * $q = $totaal2 <br>";
        }
        for ($y = 0; $y <= 2; $y++) {
            echo "<br>";
        }
      }
    ?>
</body>
</html>