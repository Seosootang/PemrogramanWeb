<?php
function cetakBilangan($n) {
    for ($i = 1; $i <= $n; $i++) {
        if ($i % 4 == 0 && $i % 6 == 0) {
            echo "<br>Pemrograman Website 2024\n";
        } elseif ($i % 5 == 0) {
            echo "<br>2024\n";
        } elseif ($i % 4 == 0) {
            echo "<br>Pemrograman\n";
        } elseif ($i % 6 == 0) {
            echo "<br>Website\n";
        } else {
            echo "<br>$i\n";
        }
    }
}

cetakBilangan(30);
?>
