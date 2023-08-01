
function names() {
    let name1 = document.getElementById("name1").textContent;
    let name2 = document.getElementById("name2").textContent;
    let lastName1 = document.getElementById("lastName1").textContent;
    let lastName2 = document.getElementById("lastName2").textContent;
    let name3 = document.getElementById("name3").textContent;
    let name4 = document.getElementById("name4").textContent;
    let lastName3 = document.getElementById("lastName3").textContent;
    let lastName4 = document.getElementById("lastName4").textContent;
  
    if (name1 === name3) {
      alert(`Hay coincidencias en los nombres:  "${name1}" `);
      color = prompt(`Ingresar un color para destacar los nombres:`);
      console.log(`Hubo coincidencias en los nombres: "${name1}"`);
      document.getElementById("name1").style.color = color;
      document.getElementById("name3").style.color = color;
    }  else {
      alert("No se encontraron coincidencias en los nombres");
      console.log("No hay coincidencias en los nombres");
    }

  
    preguntaSegundoNombre = prompt("Comparar los segundos nombres? (y/n)");
  
    if (preguntaSegundoNombre === "y") {
      if (name2 === name4) {
        alert(`Hay coincidencias en los segundos nombres: "${name2}"`);
        color = prompt(`Ingrese un color para destacar los nombres:`);
        console.log(`Hay coincidencias en los nombres: "${name2}"`);
        document.getElementById("name2").style.color = color;
        document.getElementById("name4").style.color = color;
      } else {
        alert("No se encontraron coincidencias");
        console.log("No hay coincidencias en los segundos nombres");
      }
    }

    preguntaApellido = prompt("Comparar los apellidos? (y/n)");

    if (preguntaApellido === "y"){
        if(lastName1 === lastName3){
            alert(`Hay conincidencias en los apellidos: "${lastName1}"`);
            color = prompt(`Ingrese un color para destacar los nombres:`);
            console.log(`Hay conincidencias en los apellidos: "${lastName1}"`);
            document.getElementById("lastName1").style.color = color;
            document.getElementById("lastName3").style.color = color;
        }else{
            alert("No se encontraron coincidencias");
            console.log("No hay coincidencias en los apellidos");
        }
    }

    preguntaSegundoApellido = prompt("comparar los segundos apellidos? (y/n)");

    if(preguntaSegundoApellido === "y"){
        if(lastName2 === lastName4){
            alert(`Hay conincidencias en los segundos apellidos: "${lastName2}"`); 
            color = prompt(`Ingrese un color para destacar los nombres:`);
            console.log(`Hay coincidencias en los segundos apellidos: "${lastName2}"`);
            document.getElementById("lastName2").style.color = color;
            document.getElementById("lastName4").style.color = color;
        }else{
            alert("No se encontraron coincidencias");
            console.log("No hay coincidencias en los segundos apellidos");
        }
    }
}
names();