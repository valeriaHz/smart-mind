﻿<!DOCTYPE html>
<html>

<head>
  <title>Nivel Avanzado</title>

  <link rel="stylesheet" type="text/css" href="style.css" media="all">
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="jquery-ui.css">
  <link href="jquery.tagit.css" rel="stylesheet" type="text/css">

  <script type="text/javascript" src="jquery.min.js"></script>
  <script type="text/javascript" src="wordfind.js"></script>
  <script type="text/javascript" src="wordfindgame.js"></script>
  <script type="text/javascript" src="bootstrap.min.js"></script>
  <script type="text/javascript" src="jquery-ui.min.js"></script>
  <script type="text/javascript" src="tag-it.js"></script>


</head>

<body>

  <style media="print">
    .ocultar {
      display: none;
    }

    .col-md-3 {
      width: 25%;
      float: left;
    }

    .col-md-9 {
      width: 75%;
      float: left;
    }
  </style>

  <h1 class="titulo">Sopa de Letras</h1>

  <div class="container">
    <div class="row">
      <div class="row text-center">
        <div class="ocultar">
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px"
            data-ad-client="ca-pub-4331617637495482" data-ad-slot="2764029251"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script><br /><br />
        </div>
        <div>

          <div class="row">


            <div class="panel panel-default">
              <div class="panel-heading ocultar">
                <script type="text/javascript">
                  var mytag;
                  $(document).ready(function () {
                    mytag = $("#myTags").tagit({});
                    Crear();
                  });
                </script>
                <div class="row  ocultar text-center">
                  <br />
                    <div class="panel-heading">
                      <h4>1.- Para generar el juego escribe las palabras, 
                        luego presiona el botón <strong>"Crear Juego"</strong></h4>
                    </div>
                    <div class="panel-body">
                      <ul id="myTags">
                        <li>frutas</li>
                      </ul>
                    </div>
                </div>
              </div>
              <div class="panel-body">
                <div class="ocultar">
                  <button onclick="Crear();" class="btn btn-success btn-lg"> Crear Juego</button>
                  <button id='solve' class="btn btn-danger btn-lg"> Resolver</button>
                </div>
                <div class="row">


                  <div class="col-md-3">
                    <div id='Palabras'></div>

                  </div>
                  <div class="col-md-9">
                    <div id='juego'></div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <a id="antes" class="btn btn-success" href="../../level2/buscaPalabras/index.php">Nivel Intermedio</a>
            <a id="next" class="btn btn-success" href="../pasaPalabra/index.php">Siguiente</a>
          </div>

          <script>
            var words = [];
            var gamePuzzle;
            function Crear() {

              datos = mytag[0].textContent.trim().split("×");

              for (i = 0; i < (datos.length) - 1; i++) {
                words.push(datos[i]);

              }
              $('#Juegos').show();
              gamePuzzle = wordfindgame.create(datos, '#juego', '#Palabras');
              var puzzle = wordfind.newPuzzle(datos, { height: 18, width: 18, fillBlanks: false });
              wordfind.print(puzzle);
            }
            $('#solve').click(function () { wordfindgame.solve(gamePuzzle, words); });
          </script>
        </div>
</body>

</html>