async function init() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTQ4OWZjMi1hZTc0LTQwZTAtODM3MS00ODJmZjlkZWI4NTkiLCJpZCI6MzMxMzYwLCJpYXQiOjE3NTUwNDI1NjV9.tuXtvIQKeq0hz8Em6bpv3GctChxnN05tKnFKdS049GU';

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain(),
        timeline: true,
        animation: true,
        baseLayerPicker: true
    });

    const czmlDataSource = new Cesium.CzmlDataSource();
    viewer.dataSources.add(czmlDataSource);

    try {
        await czmlDataSource.load('ciudades.czml');
        console.log('CZML cargado correctamente');
        await viewer.zoomTo(czmlDataSource);
    } catch (e) {
        console.error('Error cargando CZML:', e);
    }
}

init();
