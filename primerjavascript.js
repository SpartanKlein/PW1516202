alert("Alerta en archivo externo JavaSript");

function funcionAlerta(){
    alert("di clic");
}

function quitarSITEC(){
    let pregunta = confirm("¿Seguro de quitar SITEC?");
    if(pregunta === true){
        alert("SITEC borrado...:(");
        let chi = document.getElementById("SITEC");
        chi.innerHTML = "Chale";
    }else{

    }
}

async function traerPersona(){
    const respuesta = await fetch("https://randomuser.me/api");
    //console.log(respuesta);
    const datos = await respuesta.json();
    console.log(datos.results[0].name.title +" " + datos.results[0].name.last + " " + datos.results[0].name.first);
}