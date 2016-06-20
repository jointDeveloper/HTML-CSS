
var texto = document.getElementById("tarea");
var boton = document.getElementById("btnTarea");
var contenedor = document.getElementById("listaTareas");
var tareas = [];//lista de tareas agregadas

boton.addEventListener("click",function(){
  var li = document.createElement("li");
  //No ingresa cadenas vacías ni tareas que ya estén agregadas
  if(texto.value != "" && tareas.indexOf(texto.value) === -1){
    var t = document.createTextNode(texto.value);
    li.appendChild(t);
    contenedor.appendChild(li);
    tareas.push(texto.value);
  }
});

listaTareas.addEventListener("click",function(ev){//tacha elementos
  if (ev.target.nodeName === 'LI') {
    if(ev.target.style.textDecoration === "line-through"){
      ev.target.style.textDecoration = "none";
    }else{
      ev.target.style.textDecoration = "line-through";
    }
  }
});
