// Tu token de Cesium Ion
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTQ4OWZjMi1hZTc0LTQwZTAtODM3MS00ODJmZjlkZWI4NTkiLCJpZCI6MzMxMzYwLCJpYXQiOjE3NTUwNDI1NjV9.tuXtvIQKeq0hz8Em6bpv3GctChxnN05tKnFKdS049GU';

// Crear visor con terreno global
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
    timeline: true,
    animation: true,
    baseLayerPicker: true
});

// CZML integrado directamente
const czml = [
    {
        "id": "document",
        "name": "Ciudades con figuras",
        "version": "1.0",
        "clock": {
            "interval": "2025-08-16T12:00:00Z/2025-08-16T12:01:00Z",
            "currentTime": "2025-08-16T12:00:00Z",
            "multiplier": 10,
            "range": "LOOP_STOP"
        }
    },
    {
        "id": "ellipse-bogota",
        "name": "Elipse en Bogotá",
        "position": {"cartographicDegrees": [-74.08175, 4.60971, 0]},
        "ellipse": {
            "semiMajorAxis": 20000.0,
            "semiMinorAxis": 10000.0,
            "material": {"solidColor": {"color": {"rgba": [0, 255, 0, 150]}}},
            "extrudedHeight": {"epoch": "2025-08-16T12:00:00Z","number":[0,0,10,5000,20,10000,30,20000]},
            "extrudedHeightReference": "RELATIVE_TO_GROUND"
        }
    },
    {
        "id": "rectangle-medellin",
        "name": "Rectángulo en Medellín",
        "rectangle": {
            "coordinates": {"wsenDegrees": [-75.6, 6.2, -75.55, 6.3]},
            "material": {"solidColor": {"color": {"rgba": [255, 0, 0, 150]}}},
            "extrudedHeight": {"epoch": "2025-08-16T12:00:00Z","number":[0,0,10,3000,20,8000,30,15000]},
            "extrudedHeightReference": "RELATIVE_TO_GROUND"
        }
    },
    {
        "id": "triangle-cali",
        "name": "Triángulo en Cali",
        "polygon": {
            "positions": {"cartographicDegrees": [-76.55, 3.45, 0, -76.50, 3.45, 0, -76.525, 3.48, 0]},
            "material": {"solidColor": {"color": {"rgba": [0, 0, 255, 150]}}},
            "extrudedHeight": {"epoch": "2025-08-16T12:00:00Z","number":[0,0,10,4000,20,9000,30,18000]},
            "extrudedHeightReference": "RELATIVE_TO_GROUND"
        }
    },
    {
        "id": "polygon-cartagena",
        "name": "Polígono en Cartagena",
        "polygon": {
            "positions": {"cartographicDegrees": [-75.55, 10.40, 0, -75.52, 10.40, 0, -75.52, 10.44, 0, -75.55, 10.44, 0]},
            "material": {"solidColor": {"color": {"rgba": [255, 255, 0, 150]}}},
            "extrudedHeight": {"epoch": "2025-08-16T12:00:00Z","number":[0,0,10,2000,20,6000,30,12000]},
            "extrudedHeightReference": "RELATIVE_TO_GROUND"
        }
    }
];

// Cargar CZML en el visor
const czmlDataSource = new Cesium.CzmlDataSource();
viewer.dataSources.add(czmlDataSource);
czmlDataSource.load(czml).then(() => {
    viewer.zoomTo(czmlDataSource);
    console.log('CZML cargado y animado correctamente');
});
