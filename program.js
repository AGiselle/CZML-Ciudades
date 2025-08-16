async function init() {
    // 🔑 Token Cesium
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTQ4OWZjMi1hZTc0LTQwZTAtODM3MS00ODJmZjlkZWI4NTkiLCJpZCI6MzMxMzYwLCJpYXQiOjE3NTUwNDI1NjV9.tuXtvIQKeq0hz8Em6bpv3GctChxnN05tKnFKdS049GU';

    // Crear visor
    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
        timeline: true,
        animation: true,
        baseLayerPicker: true
    });

    try {
        // Cargar CZML
        const ds = await Cesium.CzmlDataSource.load('ciudades.czml');
        viewer.dataSources.add(ds);
        await viewer.zoomTo(ds);
        console.log('CZML cargado correctamente');
    } catch (e) {
        console.error('Error cargando CZML:', e);
    }
}

init();
