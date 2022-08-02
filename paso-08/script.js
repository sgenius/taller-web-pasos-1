const monedaOriginal = 'usd';
let monedaEquivalencia = 'eth';

const init = () => {
    console.log("El sitio acaba de cargar");

    // obtener la referencia a un elemento HTML
    const datosElem = document.querySelector("#monedas");
    
    // Creando un objeto que representa la solicitud HTTP que haremos después
    const req = new Request(`https://api.coingecko.com/api/v3/simple/price?ids=${monedaOriginal}&vs_currencies=${monedaEquivalencia}`);

    // Haciendo la solicitud. El valor de retorno es una promesa.
    const promesa = fetch(req)
    const respuestaJson = promesa.then((response) => {
        // Cuando lleguen los datos de "promesa"...

        // Si la respuesta contiene un error, decir que hay un error y terminar
        if (!response.ok) {
            throw new Error("Error al cargar datos");
        }

        // Si no hay error, procesar los datos de respuesta como un objeto JSON.
        return response.json();
    })
    respuestaJson.then((respData) => {
        // Luego, obtener los datos JSON de la función anterior y desplegarlos en la consola por ahora.
        console.log(respData);

        const equivalencia = respData[monedaOriginal];
        const valor = equivalencia[monedaEquivalencia];

        const datoEnHtml = `
            <article class="respuesta">
                1 usd = ${valor} eth
            </article>`;
        
        datosElem.insertAdjacentHTML('beforeend', datoEnHtml);
    });
}
