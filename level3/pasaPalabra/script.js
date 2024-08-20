
const TOTAL_PREGUNTAS = 10;
const TIEMPO_DEL_JUEGO = 60;
const bd_juego = [
  {
      id:'A',
      pregunta:"Nombre de insecto con 8 patas",
      respuesta:"araña"
  },
  {
    id:'B',
    pregunta:"Animal cuyo pelaje es llamado lana",
    respuesta:"borrego"
  },
  {
    id:'C',
    pregunta:"Bebida preparada a base de una mezcla de diferentes ingredientes",
    respuesta:"coctel"
  },
  {
    id:'D',
    pregunta:"Fruta del duraznero",
    respuesta:"durazno"
  },
  {
    id:'E',
    pregunta:"Nombre del caudillo del sur",
    respuesta:"emiliano"
  },
  {
    id:'F',
    pregunta:"Famosa red social creada por Mark Zuckerberg",
    respuesta:"facebook"
  },
  {
    id:'G',
    pregunta:"Mascota que ronronea",
    respuesta:"gato"
  },
  {
    id:'H',
    pregunta:"Sinónimo de bonita",
    respuesta:"hermosa"
  },
  {
    id:'I',
    pregunta:"Antónimo de saber",
    respuesta:"ignorar"
  },
  {
    id:'J',
    pregunta:"Bebida hecha a base de fruta",
    respuesta:"jugo"
  },
]

var estadoPreguntas = [0,0,0,0,0,0,0,0,0,0]
var cantidadAcertadas = 0;
var numPreguntaActual = -1;

const timer = document.getElementById("tiempo");
let timeLeft = TIEMPO_DEL_JUEGO;
var countdown;

var comenzar = document.getElementById("comenzar");
comenzar.addEventListener("click", function(event) {
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  largarTiempo();
  cargarPregunta();
});

const container = document.querySelector(".container");
for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.textContent = String.fromCharCode(i + 96);
  circle.id = String.fromCharCode(i + 96).toUpperCase();
  container.appendChild(circle);

  const angle = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI / 2);
  const x = Math.round(95 + 120 * Math.cos(angle));
  const y = Math.round(95 + 120 * Math.sin(angle));
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}


function cargarPregunta(){
  numPreguntaActual++;
  if(numPreguntaActual>=TOTAL_PREGUNTAS){
    numPreguntaActual=0;
  }

  if(estadoPreguntas.indexOf(0)>=0){ 
    while(estadoPreguntas[numPreguntaActual]==1){
      numPreguntaActual++;
      if(numPreguntaActual>=TOTAL_PREGUNTAS){
        numPreguntaActual=0;
      }
    }
  
    document.getElementById("letra-pregunta").textContent = bd_juego[numPreguntaActual].id
    document.getElementById("pregunta").textContent = bd_juego[numPreguntaActual].pregunta
    var letra =  bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.add("pregunta-actual");
  }
  else{
    clearInterval(countdown);
    mostrarPantallaFinal();
  }

}

var respuesta = document.getElementById("respuesta");
respuesta.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    if(respuesta.value==""){
      alert("Debe ingresar un valor!!");
      return;
    }
    var txtRespuesta = respuesta.value;
    controlarRespuesta(txtRespuesta.toLowerCase());
  }
});

function controlarRespuesta(txtRespuesta){
  if(txtRespuesta == bd_juego[numPreguntaActual].respuesta){
    cantidadAcertadas++;
    estadoPreguntas[numPreguntaActual] = 1;
    var letra =  bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    document.getElementById(letra).classList.add("bien-respondida");
  }else{
    estadoPreguntas[numPreguntaActual] = 1;
    var letra =  bd_juego[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("pregunta-actual");
    document.getElementById(letra).classList.add("mal-respondida");

  }
  respuesta.value="";
  cargarPregunta();
}


var pasar = document.getElementById("pasar");
pasar.addEventListener("click", function(event) {
  var letra =  bd_juego[numPreguntaActual].id;
  document.getElementById(letra).classList.remove("pregunta-actual");

  cargarPregunta();
});


function largarTiempo(){
  countdown = setInterval(() => {
    timeLeft--;
    timer.innerText = timeLeft;
    if (timeLeft < 0) {
      clearInterval(countdown);
      mostrarPantallaFinal();
    }
  }, 1000);
}

function mostrarPantallaFinal(){
  document.getElementById("acertadas").textContent = cantidadAcertadas;
  document.getElementById("score").textContent = (cantidadAcertadas*100)/10 + "% de acierto";
  document.getElementById("pantalla-juego").style.display =  "none";
  document.getElementById("pantalla-final").style.display =  "block";
}

var recomenzar = document.getElementById("recomenzar");
recomenzar.addEventListener("click", function(event) {
  numPreguntaActual = -1;
  timeLeft = TIEMPO_DEL_JUEGO;
  timer.innerText = timeLeft;
  cantidadAcertadas = 0;
  estadoPreguntas = [0,0,0,0,0,0,0,0,0,0];

  var circulos = document.getElementsByClassName("circle");
  for(i=0;i<circulos.length;i++){
    circulos[i].classList.remove("bien-respondida");
    circulos[i].classList.remove("mal-respondida");
  }

  document.getElementById("pantalla-final").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  largarTiempo();
  cargarPregunta();
});