var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_Streets_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Streets_1 = projection_Streets_1.getExtent();
    var size_Streets_1 = ol.extent.getWidth(projectionExtent_Streets_1) / 256;
    var resolutions_Streets_1 = new Array(14);
    var matrixIds_Streets_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Streets_1[z] = size_Streets_1 / Math.pow(2, z);
        matrixIds_Streets_1[z] = z;
    }
    var lyr_Streets_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://api.mapbox.com/styles/v1/iselasoria/cllv87835011501qb9qfeg9cu/wmts?access_token=pk.eyJ1IjoiaXNlbGFzb3JpYSIsImEiOiJjbGl1dG81djIwMXQwM2xua3JjeW41M3ZjIn0.zLgXnQN9vz8LSI8Eg6Ud9g",
    attributions: ' ',
                                "layer": "cllv87835011501qb9qfeg9cu",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Streets_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Streets_1),
                resolutions: resolutions_Streets_1,
                matrixIds: matrixIds_Streets_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Streets",
                            opacity: 1.0,
                            
                            
                          });
var format_Malls_2 = new ol.format.GeoJSON();
var features_Malls_2 = format_Malls_2.readFeatures(json_Malls_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malls_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malls_2.addFeatures(features_Malls_2);
var lyr_Malls_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Malls_2, 
                style: style_Malls_2,
                interactive: true,
                title: '<img src="styles/legend/Malls_2.png" /> Malls'
            });
var format_TopHospitalsbyHospitalBedCount_3 = new ol.format.GeoJSON();
var features_TopHospitalsbyHospitalBedCount_3 = format_TopHospitalsbyHospitalBedCount_3.readFeatures(json_TopHospitalsbyHospitalBedCount_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopHospitalsbyHospitalBedCount_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopHospitalsbyHospitalBedCount_3.addFeatures(features_TopHospitalsbyHospitalBedCount_3);
var lyr_TopHospitalsbyHospitalBedCount_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TopHospitalsbyHospitalBedCount_3, 
                style: style_TopHospitalsbyHospitalBedCount_3,
                interactive: true,
                title: '<img src="styles/legend/TopHospitalsbyHospitalBedCount_3.png" /> Top Hospitals by Hospital Bed Count'
            });
var format_TopAirports_4 = new ol.format.GeoJSON();
var features_TopAirports_4 = format_TopAirports_4.readFeatures(json_TopAirports_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopAirports_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopAirports_4.addFeatures(features_TopAirports_4);
var lyr_TopAirports_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TopAirports_4, 
                style: style_TopAirports_4,
                interactive: true,
    title: 'Top Airports<br />\
    <img src="styles/legend/TopAirports_4_0.png" /> 920673 - 6709080<br />\
    <img src="styles/legend/TopAirports_4_1.png" /> 6709080 - 19814052<br />\
    <img src="styles/legend/TopAirports_4_2.png" /> 19814052 - 45396001<br />'
        });
var format_TravelCentersofAmerica_5 = new ol.format.GeoJSON();
var features_TravelCentersofAmerica_5 = format_TravelCentersofAmerica_5.readFeatures(json_TravelCentersofAmerica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TravelCentersofAmerica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TravelCentersofAmerica_5.addFeatures(features_TravelCentersofAmerica_5);
var lyr_TravelCentersofAmerica_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TravelCentersofAmerica_5, 
                style: style_TravelCentersofAmerica_5,
                interactive: true,
                title: '<img src="styles/legend/TravelCentersofAmerica_5.png" /> Travel Centers of America'
            });
var format_Attractionsvaried_6 = new ol.format.GeoJSON();
var features_Attractionsvaried_6 = format_Attractionsvaried_6.readFeatures(json_Attractionsvaried_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Attractionsvaried_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Attractionsvaried_6.addFeatures(features_Attractionsvaried_6);
var lyr_Attractionsvaried_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Attractionsvaried_6, 
                style: style_Attractionsvaried_6,
                interactive: true,
                title: '<img src="styles/legend/Attractionsvaried_6.png" /> Attractions (varied)'
            });
var format_TopUniverisitiesbyEnrollment_7 = new ol.format.GeoJSON();
var features_TopUniverisitiesbyEnrollment_7 = format_TopUniverisitiesbyEnrollment_7.readFeatures(json_TopUniverisitiesbyEnrollment_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopUniverisitiesbyEnrollment_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopUniverisitiesbyEnrollment_7.addFeatures(features_TopUniverisitiesbyEnrollment_7);
var lyr_TopUniverisitiesbyEnrollment_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TopUniverisitiesbyEnrollment_7, 
                style: style_TopUniverisitiesbyEnrollment_7,
                interactive: true,
    title: 'Top Univerisities by Enrollment<br />\
    <img src="styles/legend/TopUniverisitiesbyEnrollment_7_0.png" /> 27621 - 50000<br />\
    <img src="styles/legend/TopUniverisitiesbyEnrollment_7_1.png" /> 50000 - 147866<br />'
        });
var format_TopCasinos_8 = new ol.format.GeoJSON();
var features_TopCasinos_8 = format_TopCasinos_8.readFeatures(json_TopCasinos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopCasinos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopCasinos_8.addFeatures(features_TopCasinos_8);
var lyr_TopCasinos_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TopCasinos_8, 
                style: style_TopCasinos_8,
                interactive: true,
                title: '<img src="styles/legend/TopCasinos_8.png" /> Top Casinos'
            });
var format_TopAmusementParks_9 = new ol.format.GeoJSON();
var features_TopAmusementParks_9 = format_TopAmusementParks_9.readFeatures(json_TopAmusementParks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopAmusementParks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopAmusementParks_9.addFeatures(features_TopAmusementParks_9);
var lyr_TopAmusementParks_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TopAmusementParks_9, 
                style: style_TopAmusementParks_9,
                interactive: true,
                title: '<img src="styles/legend/TopAmusementParks_9.png" /> Top Amusement Parks'
            });
var format_TopConventionCenters_10 = new ol.format.GeoJSON();
var features_TopConventionCenters_10 = format_TopConventionCenters_10.readFeatures(json_TopConventionCenters_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopConventionCenters_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopConventionCenters_10.addFeatures(features_TopConventionCenters_10);
var lyr_TopConventionCenters_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TopConventionCenters_10, 
                style: style_TopConventionCenters_10,
                interactive: true,
                title: '<img src="styles/legend/TopConventionCenters_10.png" /> Top Convention Centers'
            });
var format_LargestHotels_11 = new ol.format.GeoJSON();
var features_LargestHotels_11 = format_LargestHotels_11.readFeatures(json_LargestHotels_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LargestHotels_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LargestHotels_11.addFeatures(features_LargestHotels_11);
var lyr_LargestHotels_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LargestHotels_11, 
                style: style_LargestHotels_11,
                interactive: true,
                title: '<img src="styles/legend/LargestHotels_11.png" /> Largest Hotels'
            });
var format_NationalLabs_12 = new ol.format.GeoJSON();
var features_NationalLabs_12 = format_NationalLabs_12.readFeatures(json_NationalLabs_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalLabs_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalLabs_12.addFeatures(features_NationalLabs_12);
var lyr_NationalLabs_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NationalLabs_12, 
                style: style_NationalLabs_12,
                interactive: true,
                title: '<img src="styles/legend/NationalLabs_12.png" /> National Labs'
            });
var format_Courthouses_13 = new ol.format.GeoJSON();
var features_Courthouses_13 = format_Courthouses_13.readFeatures(json_Courthouses_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courthouses_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courthouses_13.addFeatures(features_Courthouses_13);
var lyr_Courthouses_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Courthouses_13, 
                style: style_Courthouses_13,
                interactive: true,
                title: '<img src="styles/legend/Courthouses_13.png" /> Courthouses'
            });
var format_TVStudios_14 = new ol.format.GeoJSON();
var features_TVStudios_14 = format_TVStudios_14.readFeatures(json_TVStudios_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TVStudios_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TVStudios_14.addFeatures(features_TVStudios_14);
var lyr_TVStudios_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TVStudios_14, 
                style: style_TVStudios_14,
                interactive: true,
                title: '<img src="styles/legend/TVStudios_14.png" /> TV Studios'
            });
var format_GroceryLeads_15 = new ol.format.GeoJSON();
var features_GroceryLeads_15 = format_GroceryLeads_15.readFeatures(json_GroceryLeads_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GroceryLeads_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroceryLeads_15.addFeatures(features_GroceryLeads_15);
var lyr_GroceryLeads_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GroceryLeads_15, 
                style: style_GroceryLeads_15,
                interactive: true,
                title: '<img src="styles/legend/GroceryLeads_15.png" /> Grocery Leads'
            });
var format_Military_16 = new ol.format.GeoJSON();
var features_Military_16 = format_Military_16.readFeatures(json_Military_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Military_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Military_16.addFeatures(features_Military_16);
var lyr_Military_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Military_16, 
                style: style_Military_16,
                interactive: true,
                title: '<img src="styles/legend/Military_16.png" /> Military'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Streets_1.setVisible(true);lyr_Malls_2.setVisible(true);lyr_TopHospitalsbyHospitalBedCount_3.setVisible(true);lyr_TopAirports_4.setVisible(true);lyr_TravelCentersofAmerica_5.setVisible(true);lyr_Attractionsvaried_6.setVisible(true);lyr_TopUniverisitiesbyEnrollment_7.setVisible(true);lyr_TopCasinos_8.setVisible(true);lyr_TopAmusementParks_9.setVisible(true);lyr_TopConventionCenters_10.setVisible(true);lyr_LargestHotels_11.setVisible(true);lyr_NationalLabs_12.setVisible(true);lyr_Courthouses_13.setVisible(true);lyr_TVStudios_14.setVisible(true);lyr_GroceryLeads_15.setVisible(true);lyr_Military_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Streets_1,lyr_Malls_2,lyr_TopHospitalsbyHospitalBedCount_3,lyr_TopAirports_4,lyr_TravelCentersofAmerica_5,lyr_Attractionsvaried_6,lyr_TopUniverisitiesbyEnrollment_7,lyr_TopCasinos_8,lyr_TopAmusementParks_9,lyr_TopConventionCenters_10,lyr_LargestHotels_11,lyr_NationalLabs_12,lyr_Courthouses_13,lyr_TVStudios_14,lyr_GroceryLeads_15,lyr_Military_16];
lyr_Malls_2.set('fieldAliases', {'Center Name': 'Center Name', 'Center ID': 'Center ID', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip Code': 'Zip Code', 'DMA Name': 'DMA Name', 'CBSA Name': 'CBSA Name', 'Latitude': 'Latitude', 'Logitude': 'Logitude', 'COUNTRY': 'COUNTRY', 'SHOPPING_CENTER_ID': 'SHOPPING_CENTER_ID', });
lyr_TopHospitalsbyHospitalBedCount_3.set('fieldAliases', {'id': 'id', 'hospital': 'hospital', 'bed_count': 'bed_count', 'lat': 'lat', 'lon': 'lon', 'coordinates': 'coordinates', 'field_7': 'field_7', });
lyr_TopAirports_4.set('fieldAliases', {'identifier': 'identifier', 'locID': 'locID', 'elevation': 'elevation', 'ops_status': 'ops_status', 'private_use': 'private_use', 'rank': 'rank', 'state': 'state', 'city': 'city', 'airport_name': 'airport_name', 'enplanements_2022': 'enplanements_2022', 'enplanements_2021': 'enplanements_2021', 'pct_change': 'pct_change', });
lyr_TravelCentersofAmerica_5.set('fieldAliases', {'LocationID': 'LocationID', 'state': 'state', 'city': 'city', 'location': 'location', 'address': 'address', 'zipcode': 'zipcode', 'lat': 'lat', 'lon': 'lon', 'service_bays': 'service_bays', 'service_pits': 'service_pits', 'in_bay_service_hrs': 'in_bay_service_hrs', 'truck_parking': 'truck_parking', 'handicapped_parking': 'handicapped_parking', 'showers': 'showers', 'handicapped_showers': 'handicapped_showers', 'full_restaurants': 'full_restaurants', 'qsr': 'qsr', 'pet_area': 'pet_area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy Score': 'Accuracy Score', 'Accuracy Type': 'Accuracy Type', 'Number': 'Number', 'Street': 'Street', 'Unit Type': 'Unit Type', 'Unit Number': 'Unit Number', 'City_1': 'City_1', 'State_1': 'State_1', 'County': 'County', 'Zip': 'Zip', 'Country': 'Country', 'Source': 'Source', });
lyr_Attractionsvaried_6.set('fieldAliases', {'attraction_type': 'attraction_type', 'name': 'name', 'lat': 'lat', 'lon': 'lon', 'group': 'group', 'city': 'city', 'state': 'state', 'coordinates': 'coordinates', });
lyr_TopUniverisitiesbyEnrollment_7.set('fieldAliases', {'institutio': 'institutio', 'lat': 'lat', 'lon': 'lon', 'state': 'state', 'rank': 'rank', 'control': 'control', 'level': 'level', 'enrollment': 'enrollment', 'coordinate': 'coordinate', 'enrolled': 'enrolled', });
lyr_TopCasinos_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'address': 'address', 'state': 'state', 'type': 'type', 'latitude': 'latitude', 'longitude': 'longitude', 'accuracy score': 'accuracy score', 'accuracy type': 'accuracy type', 'number': 'number', 'street': 'street', 'unit type': 'unit type', 'unit number': 'unit number', 'city': 'city', 'state_1': 'state_1', 'county': 'county', 'zip': 'zip', 'country': 'country', 'source': 'source', });
lyr_TopAmusementParks_9.set('fieldAliases', {'name': 'name', 'city': 'city', 'state': 'state', 'lat': 'lat', 'lon': 'lon', });
lyr_TopConventionCenters_10.set('fieldAliases', {'name': 'name', 'city': 'city', 'state': 'state', 'lat': 'lat', 'lon': 'lon', });
lyr_LargestHotels_11.set('fieldAliases', {'hotel_name': 'hotel_name', 'rooms': 'rooms', 'city': 'city', 'state': 'state', 'location': 'location', 'lat': 'lat', 'lon': 'lon', });
lyr_NationalLabs_12.set('fieldAliases', {'id': 'id', 'name': 'name', 'acronym': 'acronym', 'website': 'website', });
lyr_Courthouses_13.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'other_tags': 'other_tags', });
lyr_TVStudios_14.set('fieldAliases', {'network': 'network', 'city': 'city', 'state': 'state', 'lat': 'lat', 'lon': 'lon', });
lyr_GroceryLeads_15.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'name': 'name', 'other_tags': 'other_tags', });
lyr_Military_16.set('fieldAliases', {'ANSICODE': 'ANSICODE', 'AREAID': 'AREAID', 'FULLNAME': 'FULLNAME', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_Malls_2.set('fieldImages', {'Center Name': 'TextEdit', 'Center ID': 'Range', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zip Code': 'Range', 'DMA Name': 'TextEdit', 'CBSA Name': 'TextEdit', 'Latitude': 'TextEdit', 'Logitude': 'TextEdit', 'COUNTRY': 'TextEdit', 'SHOPPING_CENTER_ID': 'Range', });
lyr_TopHospitalsbyHospitalBedCount_3.set('fieldImages', {'id': 'Range', 'hospital': 'TextEdit', 'bed_count': 'Range', 'lat': 'TextEdit', 'lon': 'TextEdit', 'coordinates': 'TextEdit', 'field_7': 'TextEdit', });
lyr_TopAirports_4.set('fieldImages', {'identifier': 'TextEdit', 'locID': 'TextEdit', 'elevation': 'TextEdit', 'ops_status': 'TextEdit', 'private_use': 'Range', 'rank': 'Range', 'state': 'TextEdit', 'city': 'TextEdit', 'airport_name': 'TextEdit', 'enplanements_2022': 'TextEdit', 'enplanements_2021': 'TextEdit', 'pct_change': 'TextEdit', });
lyr_TravelCentersofAmerica_5.set('fieldImages', {'LocationID': 'Range', 'state': 'TextEdit', 'city': 'TextEdit', 'location': 'TextEdit', 'address': 'TextEdit', 'zipcode': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'service_bays': 'TextEdit', 'service_pits': 'TextEdit', 'in_bay_service_hrs': 'TextEdit', 'truck_parking': 'Range', 'handicapped_parking': 'Range', 'showers': 'Range', 'handicapped_showers': 'Range', 'full_restaurants': 'TextEdit', 'qsr': 'TextEdit', 'pet_area': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accuracy Score': 'TextEdit', 'Accuracy Type': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'Unit Type': 'TextEdit', 'Unit Number': 'TextEdit', 'City_1': 'TextEdit', 'State_1': 'TextEdit', 'County': 'TextEdit', 'Zip': 'Range', 'Country': 'TextEdit', 'Source': 'TextEdit', });
lyr_Attractionsvaried_6.set('fieldImages', {'attraction_type': 'TextEdit', 'name': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'coordinates': 'TextEdit', });
lyr_TopUniverisitiesbyEnrollment_7.set('fieldImages', {'institutio': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'state': 'TextEdit', 'rank': 'TextEdit', 'control': 'TextEdit', 'level': 'TextEdit', 'enrollment': 'TextEdit', 'coordinate': 'TextEdit', 'enrolled': 'TextEdit', });
lyr_TopCasinos_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'state': 'TextEdit', 'type': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'accuracy score': 'TextEdit', 'accuracy type': 'TextEdit', 'number': 'TextEdit', 'street': 'TextEdit', 'unit type': 'TextEdit', 'unit number': 'Range', 'city': 'TextEdit', 'state_1': 'TextEdit', 'county': 'TextEdit', 'zip': 'Range', 'country': 'TextEdit', 'source': 'TextEdit', });
lyr_TopAmusementParks_9.set('fieldImages', {'name': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_TopConventionCenters_10.set('fieldImages', {'name': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_LargestHotels_11.set('fieldImages', {'hotel_name': 'TextEdit', 'rooms': 'Range', 'city': 'TextEdit', 'state': 'TextEdit', 'location': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_NationalLabs_12.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'acronym': 'TextEdit', 'website': 'TextEdit', });
lyr_Courthouses_13.set('fieldImages', {'id': 'Range', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_TVStudios_14.set('fieldImages', {'network': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_GroceryLeads_15.set('fieldImages', {'id': 'Range', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Military_16.set('fieldImages', {'ANSICODE': 'TextEdit', 'AREAID': 'TextEdit', 'FULLNAME': 'TextEdit', 'MTFCC': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_Malls_2.set('fieldLabels', {'Center Name': 'no label', 'Center ID': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip Code': 'no label', 'DMA Name': 'no label', 'CBSA Name': 'no label', 'Latitude': 'no label', 'Logitude': 'no label', 'COUNTRY': 'no label', 'SHOPPING_CENTER_ID': 'no label', });
lyr_TopHospitalsbyHospitalBedCount_3.set('fieldLabels', {'id': 'no label', 'hospital': 'no label', 'bed_count': 'no label', 'lat': 'no label', 'lon': 'no label', 'coordinates': 'no label', 'field_7': 'no label', });
lyr_TopAirports_4.set('fieldLabels', {'identifier': 'no label', 'locID': 'no label', 'elevation': 'no label', 'ops_status': 'no label', 'private_use': 'no label', 'rank': 'no label', 'state': 'no label', 'city': 'no label', 'airport_name': 'no label', 'enplanements_2022': 'no label', 'enplanements_2021': 'no label', 'pct_change': 'no label', });
lyr_TravelCentersofAmerica_5.set('fieldLabels', {'LocationID': 'no label', 'state': 'no label', 'city': 'no label', 'location': 'no label', 'address': 'no label', 'zipcode': 'no label', 'lat': 'no label', 'lon': 'no label', 'service_bays': 'no label', 'service_pits': 'no label', 'in_bay_service_hrs': 'no label', 'truck_parking': 'no label', 'handicapped_parking': 'no label', 'showers': 'no label', 'handicapped_showers': 'no label', 'full_restaurants': 'no label', 'qsr': 'no label', 'pet_area': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Accuracy Score': 'no label', 'Accuracy Type': 'no label', 'Number': 'no label', 'Street': 'no label', 'Unit Type': 'no label', 'Unit Number': 'no label', 'City_1': 'no label', 'State_1': 'no label', 'County': 'no label', 'Zip': 'no label', 'Country': 'no label', 'Source': 'no label', });
lyr_Attractionsvaried_6.set('fieldLabels', {'attraction_type': 'no label', 'name': 'no label', 'lat': 'no label', 'lon': 'no label', 'group': 'no label', 'city': 'no label', 'state': 'no label', 'coordinates': 'no label', });
lyr_TopUniverisitiesbyEnrollment_7.set('fieldLabels', {'institutio': 'no label', 'lat': 'no label', 'lon': 'no label', 'state': 'no label', 'rank': 'no label', 'control': 'no label', 'level': 'no label', 'enrollment': 'no label', 'coordinate': 'no label', 'enrolled': 'no label', });
lyr_TopCasinos_8.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'address': 'no label', 'state': 'no label', 'type': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'accuracy score': 'no label', 'accuracy type': 'no label', 'number': 'no label', 'street': 'no label', 'unit type': 'no label', 'unit number': 'no label', 'city': 'no label', 'state_1': 'no label', 'county': 'no label', 'zip': 'no label', 'country': 'no label', 'source': 'no label', });
lyr_TopAmusementParks_9.set('fieldLabels', {'name': 'no label', 'city': 'no label', 'state': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr_TopConventionCenters_10.set('fieldLabels', {'name': 'no label', 'city': 'no label', 'state': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr_LargestHotels_11.set('fieldLabels', {'hotel_name': 'no label', 'rooms': 'no label', 'city': 'no label', 'state': 'no label', 'location': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr_NationalLabs_12.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'acronym': 'no label', 'website': 'no label', });
lyr_Courthouses_13.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'other_tags': 'no label', });
lyr_TVStudios_14.set('fieldLabels', {'network': 'no label', 'city': 'no label', 'state': 'no label', 'lat': 'no label', 'lon': 'no label', });
lyr_GroceryLeads_15.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'name': 'no label', 'other_tags': 'no label', });
lyr_Military_16.set('fieldLabels', {'ANSICODE': 'no label', 'AREAID': 'no label', 'FULLNAME': 'no label', 'MTFCC': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_Military_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});