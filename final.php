<?php
$messaggio = "";
// Verifica se il form è stato inviato
//$_SERVER è una variabile "superglobale" che contiene info riguardo il server e la sessione sottoforma di
// array chiave - valore
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ottieni i dati del form
    $name = htmlspecialchars($_POST['name']);
    $surname = htmlspecialchars($_POST['surname']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $birth = htmlspecialchars($_POST['birth']);
    $cf = htmlspecialchars($_POST['cf']);
    $pn = htmlspecialchars($_POST['pn']);
    $pron = htmlspecialchars($_POST['pron']);
    $pares = htmlspecialchars($_POST['pares']);
    $prores = htmlspecialchars($_POST['prores']);
    $cr = htmlspecialchars($_POST['cr']);
    $address = htmlspecialchars($_POST['address']);
    $civico = htmlspecialchars($_POST['civico']);
    $cap = htmlspecialchars($_POST['cap']);

    // Crea un messaggio di benvenuto
    $messaggio = "Benvenuto $name $surname! <br>
    La tua email è: $email;<br>
    Il tuo numero di telefono è: $phone;<br>
    La tua data di nascita è: $birth;<br>
    Il tuo codice fiscale è: $cf;<br>
    Il tuo paese di nascita è: $pn ($pron);<br> 
    Risiedi in: $address,$civico in $pares ($prores) comune di $cr ($cap), ;<br>";

}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finale</title>
</head>

<body>
    <p><?php echo $messaggio; ?></p>
</body>

</html>