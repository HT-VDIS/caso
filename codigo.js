function agregar_registro(){

    registro = {
        "identificacion":document.getElementById("ide").value,
        "apellido paterno":document.getElementById("apa").value,
        "apellido materno":document.getElementById("ama").value,
        "nombre":document.getElementById("nom").value,
        "edad":document.getElementById("eda").value,
        "observaciones":document.getElementById("obs").value
    };

    document.getElementById("ide").value = null;
    document.getElementById("apa").value = null;
    document.getElementById("ama").value = null;
    document.getElementById("nom").value = null;
    document.getElementById("eda").value = null;
    document.getElementById("obs").value = null;

    console.log(registro);
}