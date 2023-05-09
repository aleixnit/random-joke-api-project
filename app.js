// Tu códgigo aquí
const image = document.querySelector("img");
const jokeDIV = document.querySelector("#display-joke");
const button = document.querySelector("#get-joke");
 
button.addEventListener("click", function () {
  getRandomJoke();
});
 
async function getRandomJoke() {
  // 1. Va a pedir un chiste a la API de Chuck Norris
  // USamos el método 'fetch' que es una función global de JAvaScript, para hacer una petición GET a la API , en la URL que le pasamos como parámetro
  // Guardamos la respuesta en la variable response.
 
  // await -> usado para gestionar funciones que se ejecutan de forma asíncrona, es decir, que van a tardar un ratito más o menos largo, en ejecutarse.
  const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
  console.log("Response", respuesta);
 
  // 2. Va a procesar la respuesta, para convertirla en un tipo de datos que sea capaz mi programa de entederlo (objeto, array de objetos) 99% veces
  // Le decimos a JavaScript que esa respuesta contiene un string en formato JSON. Queremos que lo convieta de string a objeto (o array de objetos)
  const datos = await respuesta.json();
 
  // 3. Cuando tenga la información ya puedo actualizar el DOM
  console.log("datos: ", datos);
  jokeDIV.textContent = datos.value;
}
 