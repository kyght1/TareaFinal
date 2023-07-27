
const getRazas = async() =>{
    const URL = "https://dog.ceo/api/breeds/list/all";
      try {
        const response = await fetch(URL);
        const data = await response.json();
        


        // Verificar si data.message existe y es un objeto
        if (!data || typeof data.message !== "object") {
          throw new Error('Respuesta inválida desde la API.');
        }
        return data;
       
      } catch (error) {
        console.log(error);
      }
      
}; export default getRazas;