// Token Cesium Ion
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTQ4OWZjMi1hZTc0LTQwZTAtODM3MS00ODJmZjlkZWI4NTkiLCJpZCI6MzMxMzYwLCJpYXQiOjE3NTUwNDI1NjV9.tuXtvIQKeq0hz8Em6bpv3GctChxnN05tKnFKdS049GU";

// Crear visor con terreno y animación
const viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain(),
    timeline: true,
    animation: true,
    baseLayerPicker: true
});

// Crear y cargar CZML
const czmlDataSource = new Cesium.CzmlDataSource();
viewer.dataSources.add(czmlDataSource);

czmlDataSource.load("ciudades.czml").then(() => {
    console.log("CZML cargado correctamente");
    viewer.zoomTo(czmlDataSource);
}).catch((err) => console.error("Error cargando CZML:", err));
