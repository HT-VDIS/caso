var usuarios = new Array();

function agregar_registro(){

    registro = {
        "identificacion":document.getElementById("ide").value,
        "apellido_paterno":document.getElementById("apa").value,
        "apellido_materno":document.getElementById("ama").value,
        "nombre":document.getElementById("nom").value,
        "edad":document.getElementById("eda").value,
        "observaciones":document.getElementById("obs").value
    };

    usuarios[usuarios.length] = registro;
    console.log(JSON.stringify(registro));

    document.getElementById("ide").value = null;
    document.getElementById("apa").value = null;
    document.getElementById("ama").value = null;
    document.getElementById("nom").value = null;
    document.getElementById("eda").value = null;
    document.getElementById("obs").value = null;

    console.log(registro);
}

function crear_json(){

    var eljason = {
        'usuarios' :[]
    };
    
    for (var i = 0; i < usuarios.length; i++) {
        eljason.usuarios.push({
            "identificacion": usuarios[i]['identificacion'],
            "apellido_paterno": usuarios[i]['apellido_paterno'],
            "apellido_materno": usuarios[i]['apellido_materno'],
            "nombre": usuarios[i]['nombre'],
            "edad": usuarios[i]['edad'],
            "observaciones": usuarios[i]['observaciones']
      });
    };

    const archivo = JSON.stringify(eljason);
    const blob = new Blob([archivo], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "usuarios.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function test(){
    console.log(usuarios);
    console.log(usuarios[1][2]);
}