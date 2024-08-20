<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title>Busca Letras</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="../../index.php">
                    <img src="../../img/logo.png" alt="logo" width="30" height="24" class="d-inline-block align-text-top">
                    SmartMind
                </a>
            </div>
        </nav>
    </header>
    
    <div id="imageContainer"></div>
    <p id="guessWord"></p>
    <div id="letterButtons"></div>
    <p id="infoText"></p>
    <script src="script.js"></script>

    <a id="antes" href="../silabas/page1.php">Regresar</a>
    <a id="pasar" href="../../level3/sopaLetras/index.php">Siguiente Nivel</a>
</body>

</html>