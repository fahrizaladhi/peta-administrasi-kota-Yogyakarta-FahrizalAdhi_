var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Kecamatan_1 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_1 = format_Batas_Kecamatan_1.readFeatures(json_Batas_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_1.addFeatures(features_Batas_Kecamatan_1);
var lyr_Batas_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Kecamatan_1, 
                style: style_Batas_Kecamatan_1,
                popuplayertitle: 'Batas_Kecamatan',
                interactive: true,
    title: 'Batas_Kecamatan<br />\
    <img src="styles/legend/Batas_Kecamatan_1_0.png" /> DANUREJAN<br />\
    <img src="styles/legend/Batas_Kecamatan_1_1.png" /> GEDONGTENGEN<br />\
    <img src="styles/legend/Batas_Kecamatan_1_2.png" /> GONDOKUSUMAN<br />\
    <img src="styles/legend/Batas_Kecamatan_1_3.png" /> GONDOMANAN<br />\
    <img src="styles/legend/Batas_Kecamatan_1_4.png" /> JETIS<br />\
    <img src="styles/legend/Batas_Kecamatan_1_5.png" /> KOTA GEDE<br />\
    <img src="styles/legend/Batas_Kecamatan_1_6.png" /> KRATON<br />\
    <img src="styles/legend/Batas_Kecamatan_1_7.png" /> MANTRIJERON<br />\
    <img src="styles/legend/Batas_Kecamatan_1_8.png" /> MERGANGSAN<br />\
    <img src="styles/legend/Batas_Kecamatan_1_9.png" /> NGAMPILAN<br />\
    <img src="styles/legend/Batas_Kecamatan_1_10.png" /> PAKUALAM<br />\
    <img src="styles/legend/Batas_Kecamatan_1_11.png" /> TEGALREJO<br />\
    <img src="styles/legend/Batas_Kecamatan_1_12.png" /> UMBULAHARJO<br />\
    <img src="styles/legend/Batas_Kecamatan_1_13.png" /> WIROBRAJAN<br />\
    <img src="styles/legend/Batas_Kecamatan_1_14.png" /> <br />' });
var format_Garis_2 = new ol.format.GeoJSON();
var features_Garis_2 = format_Garis_2.readFeatures(json_Garis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Garis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Garis_2.addFeatures(features_Garis_2);
var lyr_Garis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Garis_2, 
                style: style_Garis_2,
                popuplayertitle: 'Garis',
                interactive: true,
    title: 'Garis<br />\
    <img src="styles/legend/Garis_2_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/Garis_2_1.png" /> Jalan Arteri Sekunder<br />\
    <img src="styles/legend/Garis_2_2.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Garis_2_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Garis_2_4.png" /> Rel KAI<br />\
    <img src="styles/legend/Garis_2_5.png" /> Sungai<br />\
    <img src="styles/legend/Garis_2_6.png" /> <br />' });
var format_Tempat_Penting_3 = new ol.format.GeoJSON();
var features_Tempat_Penting_3 = format_Tempat_Penting_3.readFeatures(json_Tempat_Penting_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempat_Penting_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempat_Penting_3.addFeatures(features_Tempat_Penting_3);
var lyr_Tempat_Penting_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempat_Penting_3, 
                style: style_Tempat_Penting_3,
                popuplayertitle: 'Tempat_Penting',
                interactive: true,
                title: '<img src="styles/legend/Tempat_Penting_3.png" /> Tempat_Penting'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Batas_Kecamatan_1.setVisible(true);lyr_Garis_2.setVisible(true);lyr_Tempat_Penting_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Batas_Kecamatan_1,lyr_Garis_2,lyr_Tempat_Penting_3];
lyr_Batas_Kecamatan_1.set('fieldAliases', {'Id': 'Id', 'Kecamatan': 'Kecamatan', 'Luas': 'Luas', });
lyr_Garis_2.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', });
lyr_Tempat_Penting_3.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Batas_Kecamatan_1.set('fieldImages', {'Id': 'Range', 'Kecamatan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Garis_2.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', });
lyr_Tempat_Penting_3.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Batas_Kecamatan_1.set('fieldLabels', {'Id': 'no label', 'Kecamatan': 'no label', 'Luas': 'no label', });
lyr_Garis_2.set('fieldLabels', {'Id': 'no label', 'Keterangan': 'no label', });
lyr_Tempat_Penting_3.set('fieldLabels', {'Id': 'no label', 'Keterangan': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_Tempat_Penting_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});