// Datos que queremos convertir a CSV
const data = [
    ["Nombre", "Edad", "Ciudad"],
    ["Juan", 28, "Colima"],
    ["María", 22, "Guadalajara"],
    ["Pedro", 35, "Monterrey"]
  ];
  
  // Función para convertir los datos a formato CSV
  function convertToCSV(data) {
    return data.map(row => row.join(",")).join("\n");
  }
  
  // Crear el contenido del archivo CSV
  const csvContent = convertToCSV(data);
  
  // Crear un enlace para descargar el archivo
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(new Blob([csvContent], { type: 'text/csv' }));
  downloadLink.download = "datos.csv";
  
  // Añadir el enlace al documento y hacer clic en él para iniciar la descarga
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  