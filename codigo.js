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

    document.getElementById("ide").value = null;
    document.getElementById("apa").value = null;
    document.getElementById("ama").value = null;
    document.getElementById("nom").value = null;
    document.getElementById("eda").value = null;
    document.getElementById("obs").value = null;
    document.getElementById("ide").focus();

    console.log(usuarios);
    document.getElementById("lista").innerHTML = null;
    const tbody = document.querySelector("#lista");

    usuarios.forEach(persona => {
        const fila = document.createElement("tr");
        const celdaide = document.createElement("td");
        celdaide.textContent = persona.identificacion;
        fila.appendChild(celdaide);
        const celdaapa = document.createElement("td");
        celdaapa.textContent = persona.apellido_paterno;
        fila.appendChild(celdaapa);
        const celdaama = document.createElement("td");
        celdaama.textContent = persona.apellido_materno;
        fila.appendChild(celdaama);
        const celdanom = document.createElement("td");
        celdanom.textContent = persona.nombre;
        fila.appendChild(celdanom);
        const celdaeda = document.createElement("td");
        celdaeda.textContent = persona.edad;
        fila.appendChild(celdaeda);
        const celdaobs = document.createElement("td");
        celdaobs.textContent = persona.observaciones;
        fila.appendChild(celdaobs);
        tbody.appendChild(fila); 
    });
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

function arrayAcsv(ar) {
	//comprobamos compatibilidad
	if(window.Blob && (window.URL || window.webkitURL)){
		var contenido = "",
			//d = new Date(),
			blob,
			reader,
			save,
			clicEvent;
		//creamos contenido del archivo
		for (var i = 0; i < ar.length; i++) {
			//construimos cabecera del csv
			if (i == 0)
				contenido += Object.keys(ar[i]).join(",") + "\n";
			//resto del contenido
			contenido += Object.keys(ar[i]).map(function(key){
							return ar[i][key];
						}).join(",") + "\n";
		}
		//creamos el blob
		blob =  new Blob(["\ufeff", contenido], {type: 'text/csv'});
		//creamos el reader
		var reader = new FileReader();
		reader.onload = function (event) {
			//escuchamos su evento load y creamos un enlace en dom
			save = document.createElement('a');
			save.href = event.target.result;
			save.target = '_blank';
			//aquí le damos nombre al archivo
			save.download = "usuarios.csv";
			try {
				//creamos un evento click
				clicEvent = new MouseEvent('click', {
					'view': window,
					'bubbles': true,
					'cancelable': true
				});
			} catch (e) {
				//si llega aquí es que probablemente implemente la forma antigua de crear un enlace
				clicEvent = document.createEvent("MouseEvent");
				clicEvent.initEvent('click', true, true);
			}
			//disparamos el evento
			save.dispatchEvent(clicEvent);
			//liberamos el objeto window.URL
			(window.URL || window.webkitURL).revokeObjectURL(save.href);
		}
		//leemos como url
		reader.readAsDataURL(blob);
	}else {
		//el navegador no admite esta opción
		alert("Su navegador no permite esta acción");
	}
};

function crear_csv() {
	arrayAcsv(usuarios);
}