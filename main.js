//objetos de ciudades 
const ciudades = {
    barcelona: { nombre: "Barcelona", pais: "España", lat: 41.38, lon: 2.17, moneda: "EUR" },
    london:    { nombre: "London", pais: "United Kingdom", lat: 51.50, lon: -0.12, moneda: "GBP" },
    paris:     { nombre: "Paris", pais: "Francia", lat: 48.85, lon: 2.35, moneda: "EUR" },
    new_york:  { nombre: "New York", pais: "Estados Unidos", lat: 40.71, lon: -74.00, moneda: "USD" },
    tokyo:     { nombre: "Tokyo", pais: "Japón", lat: 35.67, lon: 139.65, moneda: "JPY" },
};
// ── EVENTO PRINCIPAL: cambio de ciudad ─────────
document.getElementById("city-select").addEventListener("change", async function () {
    const clave = this.value;

    if (!clave) {
        document.getElementById("dashboard").classList.add("hidden");
        return;
    }

    const ciudad = ciudades[clave];
    document.getElementById("dashboard").classList.remove("hidden");

    // Mostrar datos básicos de la ciudad
    document.getElementById("nombre-ciudad").textContent = ciudad.nombre;
    document.getElementById("pais-ciudad").textContent = ciudad.pais;
    document.getElementById("moneda-ciudad").textContent = ciudad.moneda;

    try {
        const urlClima = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.lon}&current=temperature_2m,precipitation_probability&timezone=auto`;
        const resClima = await fetch(urlClima);
        const datosClima = await resClima.json();

        const temp = Math.round(datosClima.current.temperature_2m);
        const lluvia = datosClima.current.precipitation_probability;

        document.getElementById("temperatura").textContent = temp + "°C";
        document.getElementById("lluvia").textContent = lluvia + "%";

         // Estado de lluvia
        let estadoLluvia;
        if (lluvia <= 20) estadoLluvia = "Sin lluvia";
        else if (lluvia <= 50) estadoLluvia = "Posible lluvia";
        else estadoLluvia = " Probable lluvia";

        document.getElementById("estado-lluvia").textContent = estadoLluvia;

        // Temperatura en el resumen
        document.getElementById("temp-resumen").textContent = temp + "°C";

        // Mensaje de recomendación
        let mensaje;
        if (lluvia > 50) mensaje = `Lleva paraguas en ${ciudad.nombre}, hay alta probabilidad de lluvia.`;
        else if (temp < 10) mensaje = `Hace frío en ${ciudad.nombre} (${temp}°C). ¡No olvides la chaqueta!`;
        else if (temp < 25) mensaje = `Buen tiempo en ${ciudad.nombre} (${temp}°C). Perfecto para pasear.`;
        else mensaje = `Hace calor en ${ciudad.nombre} (${temp}°C). ¡Hidrádate bien!`;

        document.getElementById("mensaje").textContent = mensaje;
    } catch (error) {
        document.getElementById("temperatura").textContent = "Error";
        document.getElementById("lluvia").textContent = "—";
        document.getElementById("estado-lluvia").textContent = "No disponible";
        document.getElementById("temp-resumen").textContent = "—";
        document.getElementById("mensaje").textContent = "No se pudo cargar el clima.";
    }

    //Evento: boton convertir moneda
    document.getElementById("btn-convertir").addEventListener("click", async function () {
        const clave = document.getElementById("city-select").value;
        if (!clave) return;

        const ciudad = ciudades[clave];
        const cantidad = parseFloat(document.getElementById("cantidad-eur").value);

        if (isNaN(cantidad) || cantidad < 0) {
            alert("Introduce una cantidad válida.");
            return;
        }

        try {
            let resultado, tasa;

            if (ciudad.moneda === "EUR") {
                tasa = 1;
                resultado = cantidad.toFixed(2);
            } else {
                const urlMoneda = `https://api.frankfurter.dev/v1/latest?base=EUR&symbols=${ciudad.moneda}`;
                const resMoneda = await fetch(urlMoneda);
                const datosMoneda = await resMoneda.json();
                tasa = datosMoneda.rates[ciudad.moneda];
                resultado = (cantidad * tasa).toFixed(2);
            }

            document.getElementById("resultado-conversion").textContent =
                `${cantidad} EUR → ${resultado} ${ciudad.moneda} (1 EUR = ${tasa} ${ciudad.moneda})`;

        } 
        }

        
    });

  
});