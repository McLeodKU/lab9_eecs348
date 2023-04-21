<?php
if (isset($_POST['number'])) {
    $number = $_POST['number'];
    echo "<table>";
    for ($i = 0; $i <= $number; $i++) {
        echo "<tr>";
        for ($j = 0; $j <= $number; $j++) {
            if ($i == 0 && $j == 0) {
                echo "<td></td>";
            } elseif ($i == 0) {
                echo "<td>$j</td>";
            } elseif ($j == 0) {
                echo "<td>$i</td>";
            } else {
                echo "<td>" . $i * $j . "</td>";
            }
        }
        echo "</tr>";
    }
    echo "</table>";
}
?>