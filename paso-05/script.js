const init = () => {
    console.log("El sitio acaba de cargar");

    // cargar datos
    const req = new Request("https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=eth");

}
