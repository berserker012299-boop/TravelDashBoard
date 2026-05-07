# 🌍 Travel Dashboard — Consulta de Viajes en HTML, CSS y JavaScript

Una aplicación web interactiva que funciona como panel de información de viajes, construida con **JavaScript vanilla** sin ninguna librería externa.

---

## 📦 Contenido del Proyecto

El proyecto contiene la implementación completa del Travel Dashboard, incluyendo:

- Selector de ciudades predefinidas con datos asociados en estructuras de JavaScript
- Consumo de APIs externas con `fetch` y `async/await` para datos en tiempo real
- Widget meteorológico con temperatura actual y probabilidad de lluvia
- Conversor de divisa de EUR a la moneda local de cada ciudad
- Card resumen de la ciudad seleccionada con datos clave del destino
- Mensaje de recomendación de viaje generado dinámicamente según los datos cargados
- Diseño responsive y Mobile First sin frameworks ni librerías

---

## ⚙️ Funcionalidades Principales

- **Selector de ciudad**: Menú desplegable con ciudades predefinidas (Barcelona, London, Paris, New York, Tokyo) que actualiza todo el dashboard al cambiar la selección
- **Resumen del destino**: Card principal con ciudad, país, temperatura actual y moneda local
- **Información meteorológica**: Temperatura actual y probabilidad de lluvia obtenidas en tiempo real desde una API del tiempo
- **Indicador visual de lluvia**: Representación textual y con emojis según el porcentaje de precipitación (0–20% ☀️, 20–50% 🌦️, +50% 🌧️)
- **Conversor de divisa**: Introduce una cantidad en EUR y obtén el equivalente en la moneda local de la ciudad seleccionada, usando datos en tiempo real de una API de cambio de moneda
- **Mensaje de viaje**: Recomendación generada automáticamente combinando el tiempo y la conversión (ej: *"Hoy hace buen tiempo para pasear por Tokyo. 100 EUR equivalen a 15.000 JPY."*)

---

## 🛠️ Stack Tecnológico

| Tecnología / Concepto | Uso |
|---|---|
| HTML5 | Estructura semántica del dashboard |
| CSS3 | Estilos, layout y diseño visual |
| JavaScript Vanilla | Lógica de la aplicación sin librerías externas |
| Fetch + Async/Await | Consumo de APIs meteorológica y de divisas |
| DOM Manipulation | Actualización dinámica de la interfaz con `querySelector` y `getElementById` |
| Event Listeners | Detección de cambios en el selector de ciudad y el conversor |
| Flexbox + CSS Grid | Maquetación del dashboard y las cards |
| Responsive / Mobile First | Diseño adaptado a móvil, tablet y escritorio con media queries |
| Git + GitHub | Control de versiones con commits semánticos |
| Vercel | Deploy y hosting de la aplicación en producción |

---

## 🏙️ Ciudades Disponibles

| Ciudad | País | Moneda |
|---|---|---|
| Barcelona | España | EUR |
| London | Reino Unido | GBP |
| Paris | Francia | EUR |
| New York | Estados Unidos | USD |
| Tokyo | Japón | JPY |

---

## 🌤️ APIs Utilizadas

- **API Meteorológica** — Datos de temperatura y probabilidad de lluvia en tiempo real a partir de las coordenadas de cada ciudad
- **API de Cambio de Divisa** — Tasas de conversión actualizadas desde EUR a la moneda local del destino seleccionado

---

## 🚀 Cómo Ejecutar

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/travel-dashboard.git

# Accede a la carpeta
cd travel-dashboard

# Abre el archivo principal en tu navegador
open index.html
```

> También puedes ver la versión desplegada en producción directamente desde **Vercel**.

---

## 📁 Estructura del Proyecto

```
travel-dashboard/
├── index.html       ← Estructura principal del dashboard
├── style.css        ← Estilos, layout responsive y Mobile First
└── main.js          ← Lógica, llamadas a APIs y manipulación del DOM
```

---

## 📱 Diseño Responsive

La aplicación está desarrollada con enfoque **Mobile First**: el diseño base está pensado para pantallas pequeñas y se adapta progresivamente a tablets y escritorio. El layout no se rompe en ninguna resolución.

---

## 👤 Autor

Desarrollado como proyecto de práctica de JavaScript vanilla, consumo de APIs y diseño web responsive.
