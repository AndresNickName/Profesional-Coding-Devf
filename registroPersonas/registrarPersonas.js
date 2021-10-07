// objeto persona 
let arrObjPersona = [];

function addPersona() {
    // función para agregar personas
    // arrObjPersona.length + 1

    //variables con los valores de input
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var color_cabello = document.getElementById("color_cabello").value;
    var ocupacion = document.getElementById("ocupacion").value;
    var mascota_fav = document.getElementById("mascota_fav").value;
    var hobby = document.getElementById("hobby").value;
    var pais = document.getElementById("pais").value;
    var id = arrObjPersona.length + 1;

    // validacion de que los input no esten vacios
    if (!nombre || !edad || !color_cabello || !ocupacion || !mascota_fav || !hobby || !pais) {
        alert("¡¡¡ ERROR. Rellene todos los campos. !!!");
    } else {
        // aniade al objeto persona los datos de los input
        arrObjPersona.push({ id: id, nombre: nombre, edad: edad, color_cabello: color_cabello, ocupacion: ocupacion, mascota_fav: mascota_fav, hobby: hobby, pais: pais });
        // variable que contiene una fila de la tabla con los input y un boton eliminar
        var fila = "<tr><td id='contador'>" + id + "</td><td>" + nombre + "</td><td>" + edad + "</td><td>" + color_cabello + "</td><td>" + ocupacion + "</td><td>" + mascota_fav + "</td><td>" + hobby + "</td><td>" + pais + "</td><td><button type='button' onclick='dropPersona(this)'>Eliminar</button></td></tr>";
        // variable que contiene una nueva fila para la tabla
        var nuevoElemento = document.createElement("tr");
        // aniade la fila a la tabla (especificamente al bodyTable)
        nuevoElemento.innerHTML = fila;
        document.getElementById("filas").appendChild(nuevoElemento);
        //mostrar en consola el objeto persona
        readObjPersona();
    }
}

function dropPersona(id) {
    // función para eliminar personas
    const r = document.getElementById("contador").innerText;
    //eliminar en el objeto
    arrObjPersona.splice(r, 1);

    // eliminar fila de la tabla
    const tr = id.parentNode.parentNode;
    tr.parentNode.removeChild(tr);

    //mostrar en consola el objeto persona
    readObjPersona();
}

function readObjPersona() {
    console.log(arrObjPersona);
}