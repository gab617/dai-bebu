


async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  // Uso de la función fetchData
  const apiUrl = 'http://localhost:3000/archivos-galeria';
  fetchData(apiUrl)
    .then(data => {
      console.log('Datos recibidos:', data);
      // Hacer algo con los datos recibidos
    })
    .catch(error => {
      console.error('Hubo un error:', error);
      // Realizar acciones de manejo de errores, si es necesario
    });

