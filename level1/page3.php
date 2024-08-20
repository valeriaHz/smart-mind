<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>Nivel Fácil</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="../index.php">
                    <img src="../img/logo.png" alt="logo" width="30" height="24" class="d-inline-block align-text-top">
                    SmartMind
                </a>
            </div>
        </nav>
    </header>
    <main>
        <div class="card" style="width: 18rem;">
            <img src="../img/nivel1/abcMinus/a.png" class="card-img-top" alt="a">
            <i class="fas fa-volume-up audio-icon"></i>
            <audio>
                <source src="../audio/A.mp3" type="audio/mpeg">
            </audio>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="../img/nivel1/abcMinus/e.png" class="card-img-top" alt="a">
            <i class="fas fa-volume-up audio-icon"></i>
            <audio>
                <source src="../audio/E.mp3" type="audio/mpeg">
            </audio>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="../img/nivel1/abcMinus/i.png" class="card-img-top" alt="a">
            <i class="fas fa-volume-up audio-icon"></i>
            <audio>
                <source src="../audio/I.mp3" type="audio/mpeg">
            </audio>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="../img/nivel1/abcMinus/o.png" class="card-img-top" alt="a">
            <i class="fas fa-volume-up audio-icon"></i>
            <audio>
                <source src="../audio/O.mp3" type="audio/mpeg">
            </audio>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="../img/nivel1/abcMinus/u.png" class="card-img-top" alt="a">
            <i class="fas fa-volume-up audio-icon"></i>
            <audio>
                <source src="../audio/U.mp3" type="audio/mpeg">
            </audio>
        </div>
    </main>
    <a id="antes" href="./page2.php">Regresar</a>
    <a id="pasar" href="../level2/silabas/page1.php">Siguiente Nivel</a>

    <script>
        document.querySelectorAll('.audio-icon').forEach(function (icon) {
            icon.addEventListener('click', function () {
                var audio = this.nextElementSibling;
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            });
        });
    </script>
</body>
</html>