# Lab ChartJS Madrid

## Objetivo
Diseñar cinco gráficos a través de la librería ChartJS (utilizar [la versión 3](https://cdnjs.com/libraries/Chart.js/3.9.1)]. 
Los datos serán obtenidos mediante [axios](https://axios-http.com/) de la [API de montañas rusas](https://multiapi-app.fly.dev/coasters/allCoasters).

## Materiales
Se provee la base de trabajo con ExpressJS asi como la vista de estadísticas y el tratamiento estético base.

## Gráficos
El objetivo del producto son los siguientes charts:

### Gráfico de barras
Comparador de velocidad entre las cinco montañas rusas más rápidas (propiedad `speed`)

### Gráfico de dougnut
Comparador de longitud (propiedad `length`) de todas las montañas rusas en tres clasificaciones: menos de 1000m, de 1000 a 1500m, más de 1500m

### Gráfico de área polar
Comparador de países (propiedad `country`) de todas las montañas rusas en cuatro clasificaciones: EEUU, España, Japón y China

### Gráfico de radar
Comparador de inversiones (propiedad `inversions`) de todas las montañas rusas con más de 5 inversiones

### Gráfico de línea
Comparador de velocidad (propiedad `speed` en gráfico de barra) con altura (propiedad `height` en gráfico de línea) de las primeras cinco montañas rusas de la API. Es necesario combinar dos `datasets`, indicando una propiedad `type` específica para variar uno de los dos.


## Producto objetivo
![localhost_5005_estadisticas](https://user-images.githubusercontent.com/46670724/219382932-5c4e2930-871c-45ab-a705-378fc062e3df.png)
