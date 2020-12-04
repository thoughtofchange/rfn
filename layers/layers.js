var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AncientWoodlandinRochdale_1 = new ol.format.GeoJSON();
var features_AncientWoodlandinRochdale_1 = format_AncientWoodlandinRochdale_1.readFeatures(json_AncientWoodlandinRochdale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AncientWoodlandinRochdale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AncientWoodlandinRochdale_1.addFeatures(features_AncientWoodlandinRochdale_1);
var lyr_AncientWoodlandinRochdale_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AncientWoodlandinRochdale_1, 
                style: style_AncientWoodlandinRochdale_1,
                interactive: false,
    title: 'Ancient Woodland in Rochdale<br />\
    <img src="styles/legend/AncientWoodlandinRochdale_1_0.png" /> Ancient Semi-Natural Woodland<br />\
    <img src="styles/legend/AncientWoodlandinRochdale_1_1.png" /> Plantation on Ancient Woodland Site<br />'
        });
var format_Contours_2 = new ol.format.GeoJSON();
var features_Contours_2 = format_Contours_2.readFeatures(json_Contours_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_2.addFeatures(features_Contours_2);
var lyr_Contours_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contours_2, 
                style: style_Contours_2,
                interactive: false,
    title: 'Contours<br />\
    <img src="styles/legend/Contours_2_0.png" /> 30 - 100 m<br />\
    <img src="styles/legend/Contours_2_1.png" /> 100 - 200 m<br />\
    <img src="styles/legend/Contours_2_2.png" /> 200 - 300 m<br />\
    <img src="styles/legend/Contours_2_3.png" /> 300 - 400 m<br />\
    <img src="styles/legend/Contours_2_4.png" /> 400 - 480 m<br />'
        });
var format_AncientWoodlandinRochdale_3 = new ol.format.GeoJSON();
var features_AncientWoodlandinRochdale_3 = format_AncientWoodlandinRochdale_3.readFeatures(json_AncientWoodlandinRochdale_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AncientWoodlandinRochdale_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AncientWoodlandinRochdale_3.addFeatures(features_AncientWoodlandinRochdale_3);
var lyr_AncientWoodlandinRochdale_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AncientWoodlandinRochdale_3, 
                style: style_AncientWoodlandinRochdale_3,
                interactive: false,
    title: 'Ancient Woodland in Rochdale<br />\
    <img src="styles/legend/AncientWoodlandinRochdale_3_0.png" /> Ancient Semi-Natural Woodland<br />\
    <img src="styles/legend/AncientWoodlandinRochdale_3_1.png" /> Plantation on Ancient Woodland Site<br />'
        });
var format_Contours_4 = new ol.format.GeoJSON();
var features_Contours_4 = format_Contours_4.readFeatures(json_Contours_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_4.addFeatures(features_Contours_4);
var lyr_Contours_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contours_4, 
                style: style_Contours_4,
                interactive: false,
    title: 'Contours<br />\
    <img src="styles/legend/Contours_4_0.png" /> 30 - 100 m<br />\
    <img src="styles/legend/Contours_4_1.png" /> 100 - 200 m<br />\
    <img src="styles/legend/Contours_4_2.png" /> 200 - 300 m<br />\
    <img src="styles/legend/Contours_4_3.png" /> 300 - 400 m<br />\
    <img src="styles/legend/Contours_4_4.png" /> 400 - 480 m<br />'
        });
var format_OSGRTetrad_5 = new ol.format.GeoJSON();
var features_OSGRTetrad_5 = format_OSGRTetrad_5.readFeatures(json_OSGRTetrad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSGRTetrad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSGRTetrad_5.addFeatures(features_OSGRTetrad_5);
var lyr_OSGRTetrad_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OSGRTetrad_5, 
                style: style_OSGRTetrad_5,
                interactive: false,
                title: '<img src="styles/legend/OSGRTetrad_5.png" /> OSGR  Tetrad'
            });
var format_Dunnock_6 = new ol.format.GeoJSON();
var features_Dunnock_6 = format_Dunnock_6.readFeatures(json_Dunnock_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dunnock_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dunnock_6.addFeatures(features_Dunnock_6);
var lyr_Dunnock_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dunnock_6, 
                style: style_Dunnock_6,
                interactive: false,
                title: '<img src="styles/legend/Dunnock_6.png" /> Dunnock'
            });
var format_Waxwing_7 = new ol.format.GeoJSON();
var features_Waxwing_7 = format_Waxwing_7.readFeatures(json_Waxwing_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waxwing_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waxwing_7.addFeatures(features_Waxwing_7);
var lyr_Waxwing_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Waxwing_7, 
                style: style_Waxwing_7,
                interactive: false,
                title: '<img src="styles/legend/Waxwing_7.png" /> Waxwing'
            });
var format_Wren_8 = new ol.format.GeoJSON();
var features_Wren_8 = format_Wren_8.readFeatures(json_Wren_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wren_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wren_8.addFeatures(features_Wren_8);
var lyr_Wren_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wren_8, 
                style: style_Wren_8,
                interactive: false,
                title: '<img src="styles/legend/Wren_8.png" /> Wren'
            });
var format_Dipper_9 = new ol.format.GeoJSON();
var features_Dipper_9 = format_Dipper_9.readFeatures(json_Dipper_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dipper_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dipper_9.addFeatures(features_Dipper_9);
var lyr_Dipper_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dipper_9, 
                style: style_Dipper_9,
                interactive: false,
                title: '<img src="styles/legend/Dipper_9.png" /> Dipper'
            });
var format_GreatCrestedGrebe_10 = new ol.format.GeoJSON();
var features_GreatCrestedGrebe_10 = format_GreatCrestedGrebe_10.readFeatures(json_GreatCrestedGrebe_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreatCrestedGrebe_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreatCrestedGrebe_10.addFeatures(features_GreatCrestedGrebe_10);
var lyr_GreatCrestedGrebe_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreatCrestedGrebe_10, 
                style: style_GreatCrestedGrebe_10,
                interactive: false,
                title: '<img src="styles/legend/GreatCrestedGrebe_10.png" /> Great Crested Grebe'
            });
var format_LittleGrebe_11 = new ol.format.GeoJSON();
var features_LittleGrebe_11 = format_LittleGrebe_11.readFeatures(json_LittleGrebe_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LittleGrebe_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LittleGrebe_11.addFeatures(features_LittleGrebe_11);
var lyr_LittleGrebe_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LittleGrebe_11, 
                style: style_LittleGrebe_11,
                interactive: false,
                title: '<img src="styles/legend/LittleGrebe_11.png" /> Little Grebe'
            });
var format_PiedbilledGrebe_12 = new ol.format.GeoJSON();
var features_PiedbilledGrebe_12 = format_PiedbilledGrebe_12.readFeatures(json_PiedbilledGrebe_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PiedbilledGrebe_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PiedbilledGrebe_12.addFeatures(features_PiedbilledGrebe_12);
var lyr_PiedbilledGrebe_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PiedbilledGrebe_12, 
                style: style_PiedbilledGrebe_12,
                interactive: false,
                title: '<img src="styles/legend/PiedbilledGrebe_12.png" /> Pied-billed Grebe'
            });
var format_Coot_13 = new ol.format.GeoJSON();
var features_Coot_13 = format_Coot_13.readFeatures(json_Coot_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coot_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coot_13.addFeatures(features_Coot_13);
var lyr_Coot_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coot_13, 
                style: style_Coot_13,
                interactive: false,
                title: '<img src="styles/legend/Coot_13.png" /> Coot'
            });
var format_Goldeneye_14 = new ol.format.GeoJSON();
var features_Goldeneye_14 = format_Goldeneye_14.readFeatures(json_Goldeneye_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Goldeneye_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Goldeneye_14.addFeatures(features_Goldeneye_14);
var lyr_Goldeneye_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Goldeneye_14, 
                style: style_Goldeneye_14,
                interactive: false,
                title: '<img src="styles/legend/Goldeneye_14.png" /> Goldeneye'
            });
var format_CanadaGoose_15 = new ol.format.GeoJSON();
var features_CanadaGoose_15 = format_CanadaGoose_15.readFeatures(json_CanadaGoose_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanadaGoose_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanadaGoose_15.addFeatures(features_CanadaGoose_15);
var lyr_CanadaGoose_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CanadaGoose_15, 
                style: style_CanadaGoose_15,
                interactive: false,
                title: '<img src="styles/legend/CanadaGoose_15.png" /> Canada Goose'
            });
var format_GreylagGoose_16 = new ol.format.GeoJSON();
var features_GreylagGoose_16 = format_GreylagGoose_16.readFeatures(json_GreylagGoose_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreylagGoose_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreylagGoose_16.addFeatures(features_GreylagGoose_16);
var lyr_GreylagGoose_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreylagGoose_16, 
                style: style_GreylagGoose_16,
                interactive: false,
                title: '<img src="styles/legend/GreylagGoose_16.png" /> Greylag Goose'
            });
var format_PinkfootedGoose_17 = new ol.format.GeoJSON();
var features_PinkfootedGoose_17 = format_PinkfootedGoose_17.readFeatures(json_PinkfootedGoose_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PinkfootedGoose_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PinkfootedGoose_17.addFeatures(features_PinkfootedGoose_17);
var lyr_PinkfootedGoose_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PinkfootedGoose_17, 
                style: style_PinkfootedGoose_17,
                interactive: false,
                title: '<img src="styles/legend/PinkfootedGoose_17.png" /> Pink-footed Goose'
            });
var format_Chaffinch_18 = new ol.format.GeoJSON();
var features_Chaffinch_18 = format_Chaffinch_18.readFeatures(json_Chaffinch_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chaffinch_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chaffinch_18.addFeatures(features_Chaffinch_18);
var lyr_Chaffinch_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chaffinch_18, 
                style: style_Chaffinch_18,
                interactive: false,
                title: '<img src="styles/legend/Chaffinch_18.png" /> Chaffinch'
            });
var format_Bullfinch_19 = new ol.format.GeoJSON();
var features_Bullfinch_19 = format_Bullfinch_19.readFeatures(json_Bullfinch_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bullfinch_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bullfinch_19.addFeatures(features_Bullfinch_19);
var lyr_Bullfinch_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bullfinch_19, 
                style: style_Bullfinch_19,
                interactive: false,
                title: '<img src="styles/legend/Bullfinch_19.png" /> Bullfinch'
            });
var format_Goldfinch_20 = new ol.format.GeoJSON();
var features_Goldfinch_20 = format_Goldfinch_20.readFeatures(json_Goldfinch_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Goldfinch_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Goldfinch_20.addFeatures(features_Goldfinch_20);
var lyr_Goldfinch_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Goldfinch_20, 
                style: style_Goldfinch_20,
                interactive: false,
                title: '<img src="styles/legend/Goldfinch_20.png" /> Goldfinch'
            });
var format_Greenfinch_21 = new ol.format.GeoJSON();
var features_Greenfinch_21 = format_Greenfinch_21.readFeatures(json_Greenfinch_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Greenfinch_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greenfinch_21.addFeatures(features_Greenfinch_21);
var lyr_Greenfinch_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Greenfinch_21, 
                style: style_Greenfinch_21,
                interactive: false,
                title: '<img src="styles/legend/Greenfinch_21.png" /> Greenfinch'
            });
var format_CommonRedpoll_22 = new ol.format.GeoJSON();
var features_CommonRedpoll_22 = format_CommonRedpoll_22.readFeatures(json_CommonRedpoll_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommonRedpoll_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommonRedpoll_22.addFeatures(features_CommonRedpoll_22);
var lyr_CommonRedpoll_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommonRedpoll_22, 
                style: style_CommonRedpoll_22,
                interactive: false,
                title: '<img src="styles/legend/CommonRedpoll_22.png" /> Common Redpoll'
            });
var format_Linnet_23 = new ol.format.GeoJSON();
var features_Linnet_23 = format_Linnet_23.readFeatures(json_Linnet_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linnet_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linnet_23.addFeatures(features_Linnet_23);
var lyr_Linnet_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Linnet_23, 
                style: style_Linnet_23,
                interactive: false,
                title: '<img src="styles/legend/Linnet_23.png" /> Linnet'
            });
var format_Siskin_24 = new ol.format.GeoJSON();
var features_Siskin_24 = format_Siskin_24.readFeatures(json_Siskin_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siskin_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siskin_24.addFeatures(features_Siskin_24);
var lyr_Siskin_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Siskin_24, 
                style: style_Siskin_24,
                interactive: false,
                title: '<img src="styles/legend/Siskin_24.png" /> Siskin'
            });
var format_Twite_25 = new ol.format.GeoJSON();
var features_Twite_25 = format_Twite_25.readFeatures(json_Twite_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Twite_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Twite_25.addFeatures(features_Twite_25);
var lyr_Twite_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Twite_25, 
                style: style_Twite_25,
                interactive: false,
                title: '<img src="styles/legend/Twite_25.png" /> Twite'
            });
var format_LesserRedpoll_26 = new ol.format.GeoJSON();
var features_LesserRedpoll_26 = format_LesserRedpoll_26.readFeatures(json_LesserRedpoll_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LesserRedpoll_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LesserRedpoll_26.addFeatures(features_LesserRedpoll_26);
var lyr_LesserRedpoll_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LesserRedpoll_26, 
                style: style_LesserRedpoll_26,
                interactive: false,
                title: '<img src="styles/legend/LesserRedpoll_26.png" /> Lesser Redpoll'
            });
var format_HouseSparrow_27 = new ol.format.GeoJSON();
var features_HouseSparrow_27 = format_HouseSparrow_27.readFeatures(json_HouseSparrow_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HouseSparrow_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HouseSparrow_27.addFeatures(features_HouseSparrow_27);
var lyr_HouseSparrow_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HouseSparrow_27, 
                style: style_HouseSparrow_27,
                interactive: false,
                title: '<img src="styles/legend/HouseSparrow_27.png" /> House Sparrow'
            });
var format_TreeSparrow_28 = new ol.format.GeoJSON();
var features_TreeSparrow_28 = format_TreeSparrow_28.readFeatures(json_TreeSparrow_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreeSparrow_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreeSparrow_28.addFeatures(features_TreeSparrow_28);
var lyr_TreeSparrow_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TreeSparrow_28, 
                style: style_TreeSparrow_28,
                interactive: false,
                title: '<img src="styles/legend/TreeSparrow_28.png" /> Tree Sparrow'
            });
var format_Raven_29 = new ol.format.GeoJSON();
var features_Raven_29 = format_Raven_29.readFeatures(json_Raven_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Raven_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Raven_29.addFeatures(features_Raven_29);
var lyr_Raven_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Raven_29, 
                style: style_Raven_29,
                interactive: false,
                title: '<img src="styles/legend/Raven_29.png" /> Raven'
            });
var format_EurasianNuthatch_30 = new ol.format.GeoJSON();
var features_EurasianNuthatch_30 = format_EurasianNuthatch_30.readFeatures(json_EurasianNuthatch_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EurasianNuthatch_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EurasianNuthatch_30.addFeatures(features_EurasianNuthatch_30);
var lyr_EurasianNuthatch_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EurasianNuthatch_30, 
                style: style_EurasianNuthatch_30,
                interactive: false,
                title: '<img src="styles/legend/EurasianNuthatch_30.png" /> Eurasian Nuthatch'
            });
var format_EurasianTreecreeper_31 = new ol.format.GeoJSON();
var features_EurasianTreecreeper_31 = format_EurasianTreecreeper_31.readFeatures(json_EurasianTreecreeper_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EurasianTreecreeper_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EurasianTreecreeper_31.addFeatures(features_EurasianTreecreeper_31);
var lyr_EurasianTreecreeper_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EurasianTreecreeper_31, 
                style: style_EurasianTreecreeper_31,
                interactive: false,
                title: '<img src="styles/legend/EurasianTreecreeper_31.png" /> Eurasian Treecreeper'
            });
var format_SpottedFlycatcher_32 = new ol.format.GeoJSON();
var features_SpottedFlycatcher_32 = format_SpottedFlycatcher_32.readFeatures(json_SpottedFlycatcher_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpottedFlycatcher_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpottedFlycatcher_32.addFeatures(features_SpottedFlycatcher_32);
var lyr_SpottedFlycatcher_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpottedFlycatcher_32, 
                style: style_SpottedFlycatcher_32,
                interactive: false,
                title: '<img src="styles/legend/SpottedFlycatcher_32.png" /> Spotted Flycatcher'
            });
var format_CoalTit_33 = new ol.format.GeoJSON();
var features_CoalTit_33 = format_CoalTit_33.readFeatures(json_CoalTit_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoalTit_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoalTit_33.addFeatures(features_CoalTit_33);
var lyr_CoalTit_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoalTit_33, 
                style: style_CoalTit_33,
                interactive: false,
                title: '<img src="styles/legend/CoalTit_33.png" /> Coal Tit'
            });
var format_LongtailedTit_34 = new ol.format.GeoJSON();
var features_LongtailedTit_34 = format_LongtailedTit_34.readFeatures(json_LongtailedTit_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LongtailedTit_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LongtailedTit_34.addFeatures(features_LongtailedTit_34);
var lyr_LongtailedTit_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LongtailedTit_34, 
                style: style_LongtailedTit_34,
                interactive: false,
                title: '<img src="styles/legend/LongtailedTit_34.png" /> Long-tailed Tit'
            });
var format_BlueTit_35 = new ol.format.GeoJSON();
var features_BlueTit_35 = format_BlueTit_35.readFeatures(json_BlueTit_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueTit_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueTit_35.addFeatures(features_BlueTit_35);
var lyr_BlueTit_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BlueTit_35, 
                style: style_BlueTit_35,
                interactive: false,
                title: '<img src="styles/legend/BlueTit_35.png" /> Blue Tit'
            });
var format_GreatTit_36 = new ol.format.GeoJSON();
var features_GreatTit_36 = format_GreatTit_36.readFeatures(json_GreatTit_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreatTit_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreatTit_36.addFeatures(features_GreatTit_36);
var lyr_GreatTit_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreatTit_36, 
                style: style_GreatTit_36,
                interactive: false,
                title: '<img src="styles/legend/GreatTit_36.png" /> Great Tit'
            });
var format_Blackcap_37 = new ol.format.GeoJSON();
var features_Blackcap_37 = format_Blackcap_37.readFeatures(json_Blackcap_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blackcap_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blackcap_37.addFeatures(features_Blackcap_37);
var lyr_Blackcap_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Blackcap_37, 
                style: style_Blackcap_37,
                interactive: false,
                title: '<img src="styles/legend/Blackcap_37.png" /> Blackcap'
            });
var format_SedgeWarbler_38 = new ol.format.GeoJSON();
var features_SedgeWarbler_38 = format_SedgeWarbler_38.readFeatures(json_SedgeWarbler_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SedgeWarbler_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SedgeWarbler_38.addFeatures(features_SedgeWarbler_38);
var lyr_SedgeWarbler_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SedgeWarbler_38, 
                style: style_SedgeWarbler_38,
                interactive: false,
                title: '<img src="styles/legend/SedgeWarbler_38.png" /> Sedge Warbler'
            });
var format_Chiffchaff_39 = new ol.format.GeoJSON();
var features_Chiffchaff_39 = format_Chiffchaff_39.readFeatures(json_Chiffchaff_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chiffchaff_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chiffchaff_39.addFeatures(features_Chiffchaff_39);
var lyr_Chiffchaff_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chiffchaff_39, 
                style: style_Chiffchaff_39,
                interactive: false,
                title: '<img src="styles/legend/Chiffchaff_39.png" /> Chiffchaff'
            });
var format_WillowWarbler_40 = new ol.format.GeoJSON();
var features_WillowWarbler_40 = format_WillowWarbler_40.readFeatures(json_WillowWarbler_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WillowWarbler_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WillowWarbler_40.addFeatures(features_WillowWarbler_40);
var lyr_WillowWarbler_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WillowWarbler_40, 
                style: style_WillowWarbler_40,
                interactive: false,
                title: '<img src="styles/legend/WillowWarbler_40.png" /> Willow Warbler'
            });
var format_GardenWarbler_41 = new ol.format.GeoJSON();
var features_GardenWarbler_41 = format_GardenWarbler_41.readFeatures(json_GardenWarbler_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GardenWarbler_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GardenWarbler_41.addFeatures(features_GardenWarbler_41);
var lyr_GardenWarbler_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GardenWarbler_41, 
                style: style_GardenWarbler_41,
                interactive: false,
                title: '<img src="styles/legend/GardenWarbler_41.png" /> Garden Warbler'
            });
var format_GrasshopperWarbler_42 = new ol.format.GeoJSON();
var features_GrasshopperWarbler_42 = format_GrasshopperWarbler_42.readFeatures(json_GrasshopperWarbler_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrasshopperWarbler_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrasshopperWarbler_42.addFeatures(features_GrasshopperWarbler_42);
var lyr_GrasshopperWarbler_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrasshopperWarbler_42, 
                style: style_GrasshopperWarbler_42,
                interactive: false,
                title: '<img src="styles/legend/GrasshopperWarbler_42.png" /> Grasshopper Warbler'
            });
var format_ReedWarbler_43 = new ol.format.GeoJSON();
var features_ReedWarbler_43 = format_ReedWarbler_43.readFeatures(json_ReedWarbler_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReedWarbler_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReedWarbler_43.addFeatures(features_ReedWarbler_43);
var lyr_ReedWarbler_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReedWarbler_43, 
                style: style_ReedWarbler_43,
                interactive: false,
                title: '<img src="styles/legend/ReedWarbler_43.png" /> Reed Warbler'
            });
var format_Whitethroat_44 = new ol.format.GeoJSON();
var features_Whitethroat_44 = format_Whitethroat_44.readFeatures(json_Whitethroat_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Whitethroat_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Whitethroat_44.addFeatures(features_Whitethroat_44);
var lyr_Whitethroat_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Whitethroat_44, 
                style: style_Whitethroat_44,
                interactive: false,
                title: '<img src="styles/legend/Whitethroat_44.png" /> Whitethroat'
            });
var format_PiedWagtail_45 = new ol.format.GeoJSON();
var features_PiedWagtail_45 = format_PiedWagtail_45.readFeatures(json_PiedWagtail_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PiedWagtail_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PiedWagtail_45.addFeatures(features_PiedWagtail_45);
var lyr_PiedWagtail_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PiedWagtail_45, 
                style: style_PiedWagtail_45,
                interactive: false,
                title: '<img src="styles/legend/PiedWagtail_45.png" /> Pied Wagtail'
            });
var format_GreyWagtail_46 = new ol.format.GeoJSON();
var features_GreyWagtail_46 = format_GreyWagtail_46.readFeatures(json_GreyWagtail_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreyWagtail_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreyWagtail_46.addFeatures(features_GreyWagtail_46);
var lyr_GreyWagtail_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreyWagtail_46, 
                style: style_GreyWagtail_46,
                interactive: false,
                title: '<img src="styles/legend/GreyWagtail_46.png" /> Grey Wagtail'
            });
var format_YellowWagtail_47 = new ol.format.GeoJSON();
var features_YellowWagtail_47 = format_YellowWagtail_47.readFeatures(json_YellowWagtail_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YellowWagtail_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YellowWagtail_47.addFeatures(features_YellowWagtail_47);
var lyr_YellowWagtail_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YellowWagtail_47, 
                style: style_YellowWagtail_47,
                interactive: false,
                title: '<img src="styles/legend/YellowWagtail_47.png" /> Yellow Wagtail'
            });
var format_MeadowPipit_48 = new ol.format.GeoJSON();
var features_MeadowPipit_48 = format_MeadowPipit_48.readFeatures(json_MeadowPipit_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeadowPipit_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeadowPipit_48.addFeatures(features_MeadowPipit_48);
var lyr_MeadowPipit_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MeadowPipit_48, 
                style: style_MeadowPipit_48,
                interactive: false,
                title: '<img src="styles/legend/MeadowPipit_48.png" /> Meadow Pipit'
            });
var format_TreePipit_49 = new ol.format.GeoJSON();
var features_TreePipit_49 = format_TreePipit_49.readFeatures(json_TreePipit_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreePipit_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreePipit_49.addFeatures(features_TreePipit_49);
var lyr_TreePipit_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TreePipit_49, 
                style: style_TreePipit_49,
                interactive: false,
                title: '<img src="styles/legend/TreePipit_49.png" /> Tree Pipit'
            });
var format_Skylark_50 = new ol.format.GeoJSON();
var features_Skylark_50 = format_Skylark_50.readFeatures(json_Skylark_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skylark_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skylark_50.addFeatures(features_Skylark_50);
var lyr_Skylark_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Skylark_50, 
                style: style_Skylark_50,
                interactive: false,
                title: '<img src="styles/legend/Skylark_50.png" /> Skylark'
            });
var format_HouseMartin_51 = new ol.format.GeoJSON();
var features_HouseMartin_51 = format_HouseMartin_51.readFeatures(json_HouseMartin_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HouseMartin_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HouseMartin_51.addFeatures(features_HouseMartin_51);
var lyr_HouseMartin_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HouseMartin_51, 
                style: style_HouseMartin_51,
                interactive: false,
                title: '<img src="styles/legend/HouseMartin_51.png" /> House Martin'
            });
var format_SandMartin_52 = new ol.format.GeoJSON();
var features_SandMartin_52 = format_SandMartin_52.readFeatures(json_SandMartin_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandMartin_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandMartin_52.addFeatures(features_SandMartin_52);
var lyr_SandMartin_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SandMartin_52, 
                style: style_SandMartin_52,
                interactive: false,
                title: '<img src="styles/legend/SandMartin_52.png" /> Sand Martin'
            });
var format_Swallow_53 = new ol.format.GeoJSON();
var features_Swallow_53 = format_Swallow_53.readFeatures(json_Swallow_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Swallow_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swallow_53.addFeatures(features_Swallow_53);
var lyr_Swallow_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swallow_53, 
                style: style_Swallow_53,
                interactive: false,
                title: '<img src="styles/legend/Swallow_53.png" /> Swallow'
            });
var format_GreenWoodpeckers_54 = new ol.format.GeoJSON();
var features_GreenWoodpeckers_54 = format_GreenWoodpeckers_54.readFeatures(json_GreenWoodpeckers_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenWoodpeckers_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenWoodpeckers_54.addFeatures(features_GreenWoodpeckers_54);
var lyr_GreenWoodpeckers_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreenWoodpeckers_54, 
                style: style_GreenWoodpeckers_54,
                interactive: false,
                title: '<img src="styles/legend/GreenWoodpeckers_54.png" /> Green Woodpeckers'
            });
var format_GreatSpottedWoodpecker_55 = new ol.format.GeoJSON();
var features_GreatSpottedWoodpecker_55 = format_GreatSpottedWoodpecker_55.readFeatures(json_GreatSpottedWoodpecker_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreatSpottedWoodpecker_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreatSpottedWoodpecker_55.addFeatures(features_GreatSpottedWoodpecker_55);
var lyr_GreatSpottedWoodpecker_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreatSpottedWoodpecker_55, 
                style: style_GreatSpottedWoodpecker_55,
                interactive: false,
                title: '<img src="styles/legend/GreatSpottedWoodpecker_55.png" /> Great Spotted Woodpecker'
            });
var format_Tawny_56 = new ol.format.GeoJSON();
var features_Tawny_56 = format_Tawny_56.readFeatures(json_Tawny_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tawny_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tawny_56.addFeatures(features_Tawny_56);
var lyr_Tawny_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tawny_56, 
                style: style_Tawny_56,
                interactive: false,
                title: '<img src="styles/legend/Tawny_56.png" /> Tawny'
            });
var format_LittleOwl_57 = new ol.format.GeoJSON();
var features_LittleOwl_57 = format_LittleOwl_57.readFeatures(json_LittleOwl_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LittleOwl_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LittleOwl_57.addFeatures(features_LittleOwl_57);
var lyr_LittleOwl_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LittleOwl_57, 
                style: style_LittleOwl_57,
                interactive: false,
                title: '<img src="styles/legend/LittleOwl_57.png" /> Little Owl'
            });
var format_Swifts_58 = new ol.format.GeoJSON();
var features_Swifts_58 = format_Swifts_58.readFeatures(json_Swifts_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Swifts_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swifts_58.addFeatures(features_Swifts_58);
var lyr_Swifts_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Swifts_58, 
                style: style_Swifts_58,
                interactive: false,
                title: '<img src="styles/legend/Swifts_58.png" /> Swifts'
            });
var format_Kestrel_59 = new ol.format.GeoJSON();
var features_Kestrel_59 = format_Kestrel_59.readFeatures(json_Kestrel_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kestrel_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kestrel_59.addFeatures(features_Kestrel_59);
var lyr_Kestrel_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kestrel_59, 
                style: style_Kestrel_59,
                interactive: false,
                title: '<img src="styles/legend/Kestrel_59.png" /> Kestrel'
            });
var format_Sparrowhawk_60 = new ol.format.GeoJSON();
var features_Sparrowhawk_60 = format_Sparrowhawk_60.readFeatures(json_Sparrowhawk_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sparrowhawk_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sparrowhawk_60.addFeatures(features_Sparrowhawk_60);
var lyr_Sparrowhawk_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sparrowhawk_60, 
                style: style_Sparrowhawk_60,
                interactive: false,
                title: '<img src="styles/legend/Sparrowhawk_60.png" /> Sparrowhawk'
            });
var format_Curlew_61 = new ol.format.GeoJSON();
var features_Curlew_61 = format_Curlew_61.readFeatures(json_Curlew_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curlew_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curlew_61.addFeatures(features_Curlew_61);
var lyr_Curlew_61 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curlew_61, 
                style: style_Curlew_61,
                interactive: false,
                title: '<img src="styles/legend/Curlew_61.png" /> Curlew'
            });
var format_Dunlin_62 = new ol.format.GeoJSON();
var features_Dunlin_62 = format_Dunlin_62.readFeatures(json_Dunlin_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dunlin_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dunlin_62.addFeatures(features_Dunlin_62);
var lyr_Dunlin_62 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dunlin_62, 
                style: style_Dunlin_62,
                interactive: false,
                title: '<img src="styles/legend/Dunlin_62.png" /> Dunlin'
            });
var format_Lapwing_63 = new ol.format.GeoJSON();
var features_Lapwing_63 = format_Lapwing_63.readFeatures(json_Lapwing_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapwing_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapwing_63.addFeatures(features_Lapwing_63);
var lyr_Lapwing_63 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lapwing_63, 
                style: style_Lapwing_63,
                interactive: false,
                title: '<img src="styles/legend/Lapwing_63.png" /> Lapwing'
            });
var format_CommonSandpiper_64 = new ol.format.GeoJSON();
var features_CommonSandpiper_64 = format_CommonSandpiper_64.readFeatures(json_CommonSandpiper_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommonSandpiper_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommonSandpiper_64.addFeatures(features_CommonSandpiper_64);
var lyr_CommonSandpiper_64 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommonSandpiper_64, 
                style: style_CommonSandpiper_64,
                interactive: false,
                title: '<img src="styles/legend/CommonSandpiper_64.png" /> Common Sandpiper'
            });
var format_Oystercatcher_65 = new ol.format.GeoJSON();
var features_Oystercatcher_65 = format_Oystercatcher_65.readFeatures(json_Oystercatcher_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oystercatcher_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oystercatcher_65.addFeatures(features_Oystercatcher_65);
var lyr_Oystercatcher_65 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Oystercatcher_65, 
                style: style_Oystercatcher_65,
                interactive: false,
                title: '<img src="styles/legend/Oystercatcher_65.png" /> Oystercatcher'
            });
var format_Redshank_66 = new ol.format.GeoJSON();
var features_Redshank_66 = format_Redshank_66.readFeatures(json_Redshank_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redshank_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redshank_66.addFeatures(features_Redshank_66);
var lyr_Redshank_66 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Redshank_66, 
                style: style_Redshank_66,
                interactive: false,
                title: '<img src="styles/legend/Redshank_66.png" /> Redshank'
            });
var format_Mask_67 = new ol.format.GeoJSON();
var features_Mask_67 = format_Mask_67.readFeatures(json_Mask_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mask_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mask_67.addFeatures(features_Mask_67);
var lyr_Mask_67 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mask_67, 
                style: style_Mask_67,
                interactive: false,
                title: '<img src="styles/legend/Mask_67.png" /> Mask'
            });
var group_RochdaleSurveyBoundary = new ol.layer.Group({
                                layers: [lyr_Mask_67,],
                                title: "Rochdale Survey Boundary"});
var group_Waders = new ol.layer.Group({
                                layers: [lyr_Curlew_61,lyr_Dunlin_62,lyr_Lapwing_63,lyr_CommonSandpiper_64,lyr_Oystercatcher_65,lyr_Redshank_66,],
                                title: "Waders"});
var group_BirdsofPrey = new ol.layer.Group({
                                layers: [lyr_Kestrel_59,lyr_Sparrowhawk_60,],
                                title: "Birds of Prey"});
var group_Swifts = new ol.layer.Group({
                                layers: [lyr_Swifts_58,],
                                title: "Swifts"});
var group_Owls = new ol.layer.Group({
                                layers: [lyr_Tawny_56,lyr_LittleOwl_57,],
                                title: "Owls"});
var group_Woodpeckers = new ol.layer.Group({
                                layers: [lyr_GreenWoodpeckers_54,lyr_GreatSpottedWoodpecker_55,],
                                title: "Woodpeckers"});
var group_SwallowsMartins = new ol.layer.Group({
                                layers: [lyr_HouseMartin_51,lyr_SandMartin_52,lyr_Swallow_53,],
                                title: "Swallows & Martins"});
var group_Larks = new ol.layer.Group({
                                layers: [lyr_Skylark_50,],
                                title: "Larks"});
var group_PipitsWagtails = new ol.layer.Group({
                                layers: [lyr_PiedWagtail_45,lyr_GreyWagtail_46,lyr_YellowWagtail_47,lyr_MeadowPipit_48,lyr_TreePipit_49,],
                                title: "Pipits & Wagtails"});
var group_Warblers = new ol.layer.Group({
                                layers: [lyr_Blackcap_37,lyr_SedgeWarbler_38,lyr_Chiffchaff_39,lyr_WillowWarbler_40,lyr_GardenWarbler_41,lyr_GrasshopperWarbler_42,lyr_ReedWarbler_43,lyr_Whitethroat_44,],
                                title: "Warblers"});
var group_Tits = new ol.layer.Group({
                                layers: [lyr_CoalTit_33,lyr_LongtailedTit_34,lyr_BlueTit_35,lyr_GreatTit_36,],
                                title: "Tits"});
var group_Flycatchers = new ol.layer.Group({
                                layers: [lyr_SpottedFlycatcher_32,],
                                title: "Flycatchers"});
var group_NuthatchesCreepers = new ol.layer.Group({
                                layers: [lyr_EurasianNuthatch_30,lyr_EurasianTreecreeper_31,],
                                title: "Nuthatches & Creepers"});
var group_Corvids = new ol.layer.Group({
                                layers: [lyr_Raven_29,],
                                title: "Corvids"});
var group_Sparrows = new ol.layer.Group({
                                layers: [lyr_HouseSparrow_27,lyr_TreeSparrow_28,],
                                title: "Sparrows"});
var group_Finches = new ol.layer.Group({
                                layers: [lyr_Chaffinch_18,lyr_Bullfinch_19,lyr_Goldfinch_20,lyr_Greenfinch_21,lyr_CommonRedpoll_22,lyr_Linnet_23,lyr_Siskin_24,lyr_Twite_25,lyr_LesserRedpoll_26,],
                                title: "Finches"});
var group_Waterfowl = new ol.layer.Group({
                                layers: [lyr_Coot_13,lyr_Goldeneye_14,lyr_CanadaGoose_15,lyr_GreylagGoose_16,lyr_PinkfootedGoose_17,],
                                title: "Waterfowl"});
var group_Grebes = new ol.layer.Group({
                                layers: [lyr_GreatCrestedGrebe_10,lyr_LittleGrebe_11,lyr_PiedbilledGrebe_12,],
                                title: "Grebes"});
var group_WrensDippers = new ol.layer.Group({
                                layers: [lyr_Wren_8,lyr_Dipper_9,],
                                title: "Wrens & Dippers"});
var group_Waxwing = new ol.layer.Group({
                                layers: [lyr_Waxwing_7,],
                                title: "Waxwing"});
var group_Accentors = new ol.layer.Group({
                                layers: [lyr_Dunnock_6,],
                                title: "Accentors"});
var group_OSGRTetrad = new ol.layer.Group({
                                layers: [lyr_OSGRTetrad_5,],
                                title: "OSGR Tetrad"});
var group_Contours = new ol.layer.Group({
                                layers: [lyr_Contours_4,],
                                title: "Contours"});
var group_AncientWoodland = new ol.layer.Group({
                                layers: [lyr_AncientWoodlandinRochdale_3,],
                                title: "Ancient Woodland"});
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_AncientWoodlandinRochdale_3,lyr_Contours_4,],
                                title: "Base Layers"});

lyr_OSMStandard_0.setVisible(true);lyr_AncientWoodlandinRochdale_1.setVisible(true);lyr_Contours_2.setVisible(true);lyr_AncientWoodlandinRochdale_3.setVisible(false);lyr_Contours_4.setVisible(true);lyr_OSGRTetrad_5.setVisible(false);lyr_Dunnock_6.setVisible(false);lyr_Waxwing_7.setVisible(false);lyr_Wren_8.setVisible(false);lyr_Dipper_9.setVisible(false);lyr_GreatCrestedGrebe_10.setVisible(false);lyr_LittleGrebe_11.setVisible(false);lyr_PiedbilledGrebe_12.setVisible(false);lyr_Coot_13.setVisible(false);lyr_Goldeneye_14.setVisible(false);lyr_CanadaGoose_15.setVisible(false);lyr_GreylagGoose_16.setVisible(false);lyr_PinkfootedGoose_17.setVisible(false);lyr_Chaffinch_18.setVisible(false);lyr_Bullfinch_19.setVisible(false);lyr_Goldfinch_20.setVisible(false);lyr_Greenfinch_21.setVisible(false);lyr_CommonRedpoll_22.setVisible(false);lyr_Linnet_23.setVisible(false);lyr_Siskin_24.setVisible(false);lyr_Twite_25.setVisible(false);lyr_LesserRedpoll_26.setVisible(false);lyr_HouseSparrow_27.setVisible(false);lyr_TreeSparrow_28.setVisible(false);lyr_Raven_29.setVisible(false);lyr_EurasianNuthatch_30.setVisible(false);lyr_EurasianTreecreeper_31.setVisible(false);lyr_SpottedFlycatcher_32.setVisible(false);lyr_CoalTit_33.setVisible(false);lyr_LongtailedTit_34.setVisible(false);lyr_BlueTit_35.setVisible(false);lyr_GreatTit_36.setVisible(false);lyr_Blackcap_37.setVisible(false);lyr_SedgeWarbler_38.setVisible(false);lyr_Chiffchaff_39.setVisible(false);lyr_WillowWarbler_40.setVisible(false);lyr_GardenWarbler_41.setVisible(false);lyr_GrasshopperWarbler_42.setVisible(false);lyr_ReedWarbler_43.setVisible(false);lyr_Whitethroat_44.setVisible(false);lyr_PiedWagtail_45.setVisible(false);lyr_GreyWagtail_46.setVisible(false);lyr_YellowWagtail_47.setVisible(false);lyr_MeadowPipit_48.setVisible(false);lyr_TreePipit_49.setVisible(false);lyr_Skylark_50.setVisible(false);lyr_HouseMartin_51.setVisible(false);lyr_SandMartin_52.setVisible(false);lyr_Swallow_53.setVisible(false);lyr_GreenWoodpeckers_54.setVisible(false);lyr_GreatSpottedWoodpecker_55.setVisible(false);lyr_Tawny_56.setVisible(false);lyr_LittleOwl_57.setVisible(false);lyr_Swifts_58.setVisible(false);lyr_Kestrel_59.setVisible(false);lyr_Sparrowhawk_60.setVisible(false);lyr_Curlew_61.setVisible(false);lyr_Dunlin_62.setVisible(false);lyr_Lapwing_63.setVisible(false);lyr_CommonSandpiper_64.setVisible(false);lyr_Oystercatcher_65.setVisible(false);lyr_Redshank_66.setVisible(false);lyr_Mask_67.setVisible(true);
var layersList = [group_BaseLayers,group_OSGRTetrad,group_Accentors,group_Waxwing,group_WrensDippers,group_Grebes,group_Waterfowl,group_Finches,group_Sparrows,group_Corvids,group_NuthatchesCreepers,group_Flycatchers,group_Tits,group_Warblers,group_PipitsWagtails,group_Larks,group_SwallowsMartins,group_Woodpeckers,group_Owls,group_Swifts,group_BirdsofPrey,group_Waders,group_RochdaleSurveyBoundary];
lyr_AncientWoodlandinRochdale_1.set('fieldAliases', {'name': 'name', 'theme': 'theme', 'themname': 'themname', 'themid': 'themid', 'status': 'status', 'perimeter': 'perimeter', 'area': 'area', 'x_coord': 'x_coord', 'y_coord': 'y_coord', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Contours_2.set('fieldAliases', {'ID': 'ID', 'FEAT_TYPE': 'FEAT_TYPE', 'SUB_TYPE': 'SUB_TYPE', 'PROP_VALUE': 'PROP_VALUE', 'layer': 'layer', 'path': 'path', });
lyr_AncientWoodlandinRochdale_3.set('fieldAliases', {'name': 'name', 'theme': 'theme', 'themname': 'themname', 'themid': 'themid', 'status': 'status', 'perimeter': 'perimeter', 'area': 'area', 'x_coord': 'x_coord', 'y_coord': 'y_coord', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Contours_4.set('fieldAliases', {'ID': 'ID', 'FEAT_TYPE': 'FEAT_TYPE', 'SUB_TYPE': 'SUB_TYPE', 'PROP_VALUE': 'PROP_VALUE', 'layer': 'layer', 'path': 'path', });
lyr_OSGRTetrad_5.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', });
lyr_Dunnock_6.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Dunnock_re': 'Dunnock_re', 'Dunnock_ta': 'Dunnock_ta', 'Dunnock_sc': 'Dunnock_sc', 'Dunnock_co': 'Dunnock_co', 'Dunnock_st': 'Dunnock_st', 'Dunnock_su': 'Dunnock_su', 'Dunnock__1': 'Dunnock__1', 'Dunnock_he': 'Dunnock_he', });
lyr_Waxwing_7.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Waxwing_re': 'Waxwing_re', 'Waxwing_ta': 'Waxwing_ta', 'Waxwing_sc': 'Waxwing_sc', 'Waxwing_co': 'Waxwing_co', 'Waxwing_st': 'Waxwing_st', 'Waxwing_su': 'Waxwing_su', 'Waxwing__1': 'Waxwing__1', 'Waxwing_he': 'Waxwing_he', });
lyr_Wren_8.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Wren_recor': 'Wren_recor', 'Wren_taxon': 'Wren_taxon', 'Wren_scien': 'Wren_scien', 'Wren_commo': 'Wren_commo', 'Wren_start': 'Wren_start', 'Wren_surve': 'Wren_surve', 'Wren_sur_1': 'Wren_sur_1', 'Wren_hecta': 'Wren_hecta', });
lyr_Dipper_9.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Dipper_Gri': 'Dipper_Gri', 'Dipper_Dip': 'Dipper_Dip', 'Dipper_D_1': 'Dipper_D_1', 'Dipper_D_2': 'Dipper_D_2', 'Dipper_D_3': 'Dipper_D_3', 'Dipper_D_4': 'Dipper_D_4', 'Dipper_D_5': 'Dipper_D_5', 'Dipper_D_6': 'Dipper_D_6', 'Dipper_D_7': 'Dipper_D_7', });
lyr_GreatCrestedGrebe_10.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Great Cres': 'Great Cres', 'Great Cr_1': 'Great Cr_1', 'Great Cr_2': 'Great Cr_2', 'Great Cr_3': 'Great Cr_3', 'Great Cr_4': 'Great Cr_4', 'Great Cr_5': 'Great Cr_5', 'Great Cr_6': 'Great Cr_6', 'Great Cr_7': 'Great Cr_7', });
lyr_LittleGrebe_11.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Little Gre': 'Little Gre', 'Little G_1': 'Little G_1', 'Little G_2': 'Little G_2', 'Little G_3': 'Little G_3', 'Little G_4': 'Little G_4', 'Little G_5': 'Little G_5', 'Little G_6': 'Little G_6', 'Little G_7': 'Little G_7', });
lyr_PiedbilledGrebe_12.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Pied-bille': 'Pied-bille', 'Pied-bil_1': 'Pied-bil_1', 'Pied-bil_2': 'Pied-bil_2', 'Pied-bil_3': 'Pied-bil_3', 'Pied-bil_4': 'Pied-bil_4', 'Pied-bil_5': 'Pied-bil_5', 'Pied-bil_6': 'Pied-bil_6', 'Pied-bil_7': 'Pied-bil_7', });
lyr_Coot_13.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Coot_recor': 'Coot_recor', 'Coot_taxon': 'Coot_taxon', 'Coot_scien': 'Coot_scien', 'Coot_commo': 'Coot_commo', 'Coot_start': 'Coot_start', 'Coot_surve': 'Coot_surve', 'Coot_sur_1': 'Coot_sur_1', 'Coot_hecta': 'Coot_hecta', });
lyr_Goldeneye_14.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Goldeneye_': 'Goldeneye_', 'Goldeney_1': 'Goldeney_1', 'Goldeney_2': 'Goldeney_2', 'Goldeney_3': 'Goldeney_3', 'Goldeney_4': 'Goldeney_4', 'Goldeney_5': 'Goldeney_5', 'Goldeney_6': 'Goldeney_6', 'Goldeney_7': 'Goldeney_7', });
lyr_CanadaGoose_15.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Canada Goo': 'Canada Goo', 'Canada G_1': 'Canada G_1', 'Canada G_2': 'Canada G_2', 'Canada G_3': 'Canada G_3', 'Canada G_4': 'Canada G_4', 'Canada G_5': 'Canada G_5', 'Canada G_6': 'Canada G_6', 'Canada G_7': 'Canada G_7', });
lyr_GreylagGoose_16.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Greylag Go': 'Greylag Go', 'Greylag _1': 'Greylag _1', 'Greylag _2': 'Greylag _2', 'Greylag _3': 'Greylag _3', 'Greylag _4': 'Greylag _4', 'Greylag _5': 'Greylag _5', 'Greylag _6': 'Greylag _6', 'Greylag _7': 'Greylag _7', });
lyr_PinkfootedGoose_17.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Pink-foote': 'Pink-foote', 'Pink-foo_1': 'Pink-foo_1', 'Pink-foo_2': 'Pink-foo_2', 'Pink-foo_3': 'Pink-foo_3', 'Pink-foo_4': 'Pink-foo_4', 'Pink-foo_5': 'Pink-foo_5', 'Pink-foo_6': 'Pink-foo_6', 'Pink-foo_7': 'Pink-foo_7', });
lyr_Chaffinch_18.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Chaffinch_': 'Chaffinch_', 'Chaffinc_1': 'Chaffinc_1', 'Chaffinc_2': 'Chaffinc_2', 'Chaffinc_3': 'Chaffinc_3', 'Chaffinc_4': 'Chaffinc_4', 'Chaffinc_5': 'Chaffinc_5', 'Chaffinc_6': 'Chaffinc_6', 'Chaffinc_7': 'Chaffinc_7', });
lyr_Bullfinch_19.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Bullfinch_': 'Bullfinch_', 'Bullfinc_1': 'Bullfinc_1', 'Bullfinc_2': 'Bullfinc_2', 'Bullfinc_3': 'Bullfinc_3', 'Bullfinc_4': 'Bullfinc_4', 'Bullfinc_5': 'Bullfinc_5', 'Bullfinc_6': 'Bullfinc_6', 'Bullfinc_7': 'Bullfinc_7', });
lyr_Goldfinch_20.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Goldfinch_': 'Goldfinch_', 'Goldfinc_1': 'Goldfinc_1', 'Goldfinc_2': 'Goldfinc_2', 'Goldfinc_3': 'Goldfinc_3', 'Goldfinc_4': 'Goldfinc_4', 'Goldfinc_5': 'Goldfinc_5', 'Goldfinc_6': 'Goldfinc_6', 'Goldfinc_7': 'Goldfinc_7', });
lyr_Greenfinch_21.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Greenfinch': 'Greenfinch', 'Greenfin_1': 'Greenfin_1', 'Greenfin_2': 'Greenfin_2', 'Greenfin_3': 'Greenfin_3', 'Greenfin_4': 'Greenfin_4', 'Greenfin_5': 'Greenfin_5', 'Greenfin_6': 'Greenfin_6', 'Greenfin_7': 'Greenfin_7', });
lyr_CommonRedpoll_22.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Common Red': 'Common Red', 'Common R_1': 'Common R_1', 'Common R_2': 'Common R_2', 'Common R_3': 'Common R_3', 'Common R_4': 'Common R_4', 'Common R_5': 'Common R_5', 'Common R_6': 'Common R_6', 'Common R_7': 'Common R_7', });
lyr_Linnet_23.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Linnet_rec': 'Linnet_rec', 'Linnet_tax': 'Linnet_tax', 'Linnet_sci': 'Linnet_sci', 'Linnet_com': 'Linnet_com', 'Linnet_sta': 'Linnet_sta', 'Linnet_sur': 'Linnet_sur', 'Linnet_s_1': 'Linnet_s_1', 'Linnet_hec': 'Linnet_hec', });
lyr_Siskin_24.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Siskin_rec': 'Siskin_rec', 'Siskin_tax': 'Siskin_tax', 'Siskin_sci': 'Siskin_sci', 'Siskin_com': 'Siskin_com', 'Siskin_sta': 'Siskin_sta', 'Siskin_sur': 'Siskin_sur', 'Siskin_s_1': 'Siskin_s_1', 'Siskin_hec': 'Siskin_hec', });
lyr_Twite_25.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Twite_reco': 'Twite_reco', 'Twite_taxo': 'Twite_taxo', 'Twite_scie': 'Twite_scie', 'Twite_comm': 'Twite_comm', 'Twite_star': 'Twite_star', 'Twite_surv': 'Twite_surv', 'Twite_su_1': 'Twite_su_1', 'Twite_hect': 'Twite_hect', });
lyr_LesserRedpoll_26.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Lesser Red': 'Lesser Red', 'Lesser R_1': 'Lesser R_1', 'Lesser R_2': 'Lesser R_2', 'Lesser R_3': 'Lesser R_3', 'Lesser R_4': 'Lesser R_4', 'Lesser R_5': 'Lesser R_5', 'Lesser R_6': 'Lesser R_6', 'Lesser R_7': 'Lesser R_7', });
lyr_HouseSparrow_27.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'House_Spar': 'House_Spar', 'House_Sp_1': 'House_Sp_1', 'House_Sp_2': 'House_Sp_2', 'House_Sp_3': 'House_Sp_3', 'House_Sp_4': 'House_Sp_4', 'House_Sp_5': 'House_Sp_5', 'House_Sp_6': 'House_Sp_6', 'House_Sp_7': 'House_Sp_7', });
lyr_TreeSparrow_28.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Tree_Sparr': 'Tree_Sparr', 'Tree_Spa_1': 'Tree_Spa_1', 'Tree_Spa_2': 'Tree_Spa_2', 'Tree_Spa_3': 'Tree_Spa_3', 'Tree_Spa_4': 'Tree_Spa_4', 'Tree_Spa_5': 'Tree_Spa_5', 'Tree_Spa_6': 'Tree_Spa_6', 'Tree_Spa_7': 'Tree_Spa_7', });
lyr_Raven_29.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Raven_reco': 'Raven_reco', 'Raven_taxo': 'Raven_taxo', 'Raven_scie': 'Raven_scie', 'Raven_comm': 'Raven_comm', 'Raven_star': 'Raven_star', 'Raven_surv': 'Raven_surv', 'Raven_su_1': 'Raven_su_1', 'Raven_hect': 'Raven_hect', });
lyr_EurasianNuthatch_30.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Eurasian N': 'Eurasian N', 'Eurasian_1': 'Eurasian_1', 'Eurasian_2': 'Eurasian_2', 'Eurasian_3': 'Eurasian_3', 'Eurasian_4': 'Eurasian_4', 'Eurasian_5': 'Eurasian_5', 'Eurasian_6': 'Eurasian_6', 'Eurasian_7': 'Eurasian_7', });
lyr_EurasianTreecreeper_31.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Eurasian T': 'Eurasian T', 'Eurasian_1': 'Eurasian_1', 'Eurasian_2': 'Eurasian_2', 'Eurasian_3': 'Eurasian_3', 'Eurasian_4': 'Eurasian_4', 'Eurasian_5': 'Eurasian_5', 'Eurasian_6': 'Eurasian_6', 'Eurasian_7': 'Eurasian_7', });
lyr_SpottedFlycatcher_32.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Spotted Fl': 'Spotted Fl', 'Spotted _1': 'Spotted _1', 'Spotted _2': 'Spotted _2', 'Spotted _3': 'Spotted _3', 'Spotted _4': 'Spotted _4', 'Spotted _5': 'Spotted _5', 'Spotted _6': 'Spotted _6', 'Spotted _7': 'Spotted _7', });
lyr_CoalTit_33.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Coal Tit_r': 'Coal Tit_r', 'Coal Tit_t': 'Coal Tit_t', 'Coal Tit_s': 'Coal Tit_s', 'Coal Tit_c': 'Coal Tit_c', 'Coal Tit_1': 'Coal Tit_1', 'Coal Tit_2': 'Coal Tit_2', 'Coal Tit_3': 'Coal Tit_3', 'Coal Tit_h': 'Coal Tit_h', });
lyr_LongtailedTit_34.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Long-taile': 'Long-taile', 'Long-tai_1': 'Long-tai_1', 'Long-tai_2': 'Long-tai_2', 'Long-tai_3': 'Long-tai_3', 'Long-tai_4': 'Long-tai_4', 'Long-tai_5': 'Long-tai_5', 'Long-tai_6': 'Long-tai_6', 'Long-tai_7': 'Long-tai_7', });
lyr_BlueTit_35.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Blue Tit_r': 'Blue Tit_r', 'Blue Tit_t': 'Blue Tit_t', 'Blue Tit_s': 'Blue Tit_s', 'Blue Tit_c': 'Blue Tit_c', 'Blue Tit_1': 'Blue Tit_1', 'Blue Tit_2': 'Blue Tit_2', 'Blue Tit_3': 'Blue Tit_3', 'Blue Tit_h': 'Blue Tit_h', });
lyr_GreatTit_36.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Great Tit_': 'Great Tit_', 'Great Ti_1': 'Great Ti_1', 'Great Ti_2': 'Great Ti_2', 'Great Ti_3': 'Great Ti_3', 'Great Ti_4': 'Great Ti_4', 'Great Ti_5': 'Great Ti_5', 'Great Ti_6': 'Great Ti_6', 'Great Ti_7': 'Great Ti_7', });
lyr_Blackcap_37.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Blackcap_r': 'Blackcap_r', 'Blackcap_t': 'Blackcap_t', 'Blackcap_s': 'Blackcap_s', 'Blackcap_c': 'Blackcap_c', 'Blackcap_1': 'Blackcap_1', 'Blackcap_2': 'Blackcap_2', 'Blackcap_3': 'Blackcap_3', 'Blackcap_h': 'Blackcap_h', });
lyr_SedgeWarbler_38.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Sedge Warb': 'Sedge Warb', 'Sedge Wa_1': 'Sedge Wa_1', 'Sedge Wa_2': 'Sedge Wa_2', 'Sedge Wa_3': 'Sedge Wa_3', 'Sedge Wa_4': 'Sedge Wa_4', 'Sedge Wa_5': 'Sedge Wa_5', 'Sedge Wa_6': 'Sedge Wa_6', 'Sedge Wa_7': 'Sedge Wa_7', });
lyr_Chiffchaff_39.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Chiffchaff': 'Chiffchaff', 'Chiffcha_1': 'Chiffcha_1', 'Chiffcha_2': 'Chiffcha_2', 'Chiffcha_3': 'Chiffcha_3', 'Chiffcha_4': 'Chiffcha_4', 'Chiffcha_5': 'Chiffcha_5', 'Chiffcha_6': 'Chiffcha_6', 'Chiffcha_7': 'Chiffcha_7', });
lyr_WillowWarbler_40.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Willow War': 'Willow War', 'Willow W_1': 'Willow W_1', 'Willow W_2': 'Willow W_2', 'Willow W_3': 'Willow W_3', 'Willow W_4': 'Willow W_4', 'Willow W_5': 'Willow W_5', 'Willow W_6': 'Willow W_6', 'Willow W_7': 'Willow W_7', });
lyr_GardenWarbler_41.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Garden War': 'Garden War', 'Garden W_1': 'Garden W_1', 'Garden W_2': 'Garden W_2', 'Garden W_3': 'Garden W_3', 'Garden W_4': 'Garden W_4', 'Garden W_5': 'Garden W_5', 'Garden W_6': 'Garden W_6', 'Garden W_7': 'Garden W_7', });
lyr_GrasshopperWarbler_42.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Grasshoppe': 'Grasshoppe', 'Grasshop_1': 'Grasshop_1', 'Grasshop_2': 'Grasshop_2', 'Grasshop_3': 'Grasshop_3', 'Grasshop_4': 'Grasshop_4', 'Grasshop_5': 'Grasshop_5', 'Grasshop_6': 'Grasshop_6', 'Grasshop_7': 'Grasshop_7', });
lyr_ReedWarbler_43.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Reed Warbl': 'Reed Warbl', 'Reed War_1': 'Reed War_1', 'Reed War_2': 'Reed War_2', 'Reed War_3': 'Reed War_3', 'Reed War_4': 'Reed War_4', 'Reed War_5': 'Reed War_5', 'Reed War_6': 'Reed War_6', 'Reed War_7': 'Reed War_7', });
lyr_Whitethroat_44.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Whitethroa': 'Whitethroa', 'Whitethr_1': 'Whitethr_1', 'Whitethr_2': 'Whitethr_2', 'Whitethr_3': 'Whitethr_3', 'Whitethr_4': 'Whitethr_4', 'Whitethr_5': 'Whitethr_5', 'Whitethr_6': 'Whitethr_6', 'Whitethr_7': 'Whitethr_7', });
lyr_PiedWagtail_45.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Pied Wagta': 'Pied Wagta', 'Pied Wag_1': 'Pied Wag_1', 'Pied Wag_2': 'Pied Wag_2', 'Pied Wag_3': 'Pied Wag_3', 'Pied Wag_4': 'Pied Wag_4', 'Pied Wag_5': 'Pied Wag_5', 'Pied Wag_6': 'Pied Wag_6', 'Pied Wag_7': 'Pied Wag_7', });
lyr_GreyWagtail_46.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Grey Wagta': 'Grey Wagta', 'Grey Wag_1': 'Grey Wag_1', 'Grey Wag_2': 'Grey Wag_2', 'Grey Wag_3': 'Grey Wag_3', 'Grey Wag_4': 'Grey Wag_4', 'Grey Wag_5': 'Grey Wag_5', 'Grey Wag_6': 'Grey Wag_6', 'Grey Wag_7': 'Grey Wag_7', });
lyr_YellowWagtail_47.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Yellow Wag': 'Yellow Wag', 'Yellow W_1': 'Yellow W_1', 'Yellow W_2': 'Yellow W_2', 'Yellow W_3': 'Yellow W_3', 'Yellow W_4': 'Yellow W_4', 'Yellow W_5': 'Yellow W_5', 'Yellow W_6': 'Yellow W_6', 'Yellow W_7': 'Yellow W_7', });
lyr_MeadowPipit_48.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Meadow Pip': 'Meadow Pip', 'Meadow P_1': 'Meadow P_1', 'Meadow P_2': 'Meadow P_2', 'Meadow P_3': 'Meadow P_3', 'Meadow P_4': 'Meadow P_4', 'Meadow P_5': 'Meadow P_5', 'Meadow P_6': 'Meadow P_6', 'Meadow P_7': 'Meadow P_7', });
lyr_TreePipit_49.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Tree Pipit': 'Tree Pipit', 'Tree Pip_1': 'Tree Pip_1', 'Tree Pip_2': 'Tree Pip_2', 'Tree Pip_3': 'Tree Pip_3', 'Tree Pip_4': 'Tree Pip_4', 'Tree Pip_5': 'Tree Pip_5', 'Tree Pip_6': 'Tree Pip_6', 'Tree Pip_7': 'Tree Pip_7', });
lyr_Skylark_50.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Skylark_re': 'Skylark_re', 'Skylark_ta': 'Skylark_ta', 'Skylark_sc': 'Skylark_sc', 'Skylark_co': 'Skylark_co', 'Skylark_st': 'Skylark_st', 'Skylark_su': 'Skylark_su', 'Skylark__1': 'Skylark__1', 'Skylark_he': 'Skylark_he', });
lyr_HouseMartin_51.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'House Mart': 'House Mart', 'House Ma_1': 'House Ma_1', 'House Ma_2': 'House Ma_2', 'House Ma_3': 'House Ma_3', 'House Ma_4': 'House Ma_4', 'House Ma_5': 'House Ma_5', 'House Ma_6': 'House Ma_6', 'House Ma_7': 'House Ma_7', });
lyr_SandMartin_52.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Sand Marti': 'Sand Marti', 'Sand Mar_1': 'Sand Mar_1', 'Sand Mar_2': 'Sand Mar_2', 'Sand Mar_3': 'Sand Mar_3', 'Sand Mar_4': 'Sand Mar_4', 'Sand Mar_5': 'Sand Mar_5', 'Sand Mar_6': 'Sand Mar_6', 'Sand Mar_7': 'Sand Mar_7', });
lyr_Swallow_53.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Swallow_re': 'Swallow_re', 'Swallow_ta': 'Swallow_ta', 'Swallow_sc': 'Swallow_sc', 'Swallow_co': 'Swallow_co', 'Swallow_st': 'Swallow_st', 'Swallow_su': 'Swallow_su', 'Swallow__1': 'Swallow__1', 'Swallow_he': 'Swallow_he', });
lyr_GreenWoodpeckers_54.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Green Wood': 'Green Wood', 'Green Wo_1': 'Green Wo_1', 'Green Wo_2': 'Green Wo_2', 'Green Wo_3': 'Green Wo_3', 'Green Wo_4': 'Green Wo_4', 'Green Wo_5': 'Green Wo_5', 'Green Wo_6': 'Green Wo_6', 'Green Wo_7': 'Green Wo_7', });
lyr_GreatSpottedWoodpecker_55.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Great Spot': 'Great Spot', 'Great Sp_1': 'Great Sp_1', 'Great Sp_2': 'Great Sp_2', 'Great Sp_3': 'Great Sp_3', 'Great Sp_4': 'Great Sp_4', 'Great Sp_5': 'Great Sp_5', 'Great Sp_6': 'Great Sp_6', 'Great Sp_7': 'Great Sp_7', });
lyr_Tawny_56.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'TO_2019_re': 'TO_2019_re', 'TO_2019_ta': 'TO_2019_ta', 'TO_2019_sc': 'TO_2019_sc', 'TO_2019_co': 'TO_2019_co', 'TO_2019_st': 'TO_2019_st', 'TO_2019_su': 'TO_2019_su', 'TO_2019__1': 'TO_2019__1', 'TO_2019_he': 'TO_2019_he', });
lyr_LittleOwl_57.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Little Owl': 'Little Owl', 'Little O_1': 'Little O_1', 'Little O_2': 'Little O_2', 'Little O_3': 'Little O_3', 'Little O_4': 'Little O_4', 'Little O_5': 'Little O_5', 'Little O_6': 'Little O_6', 'Little O_7': 'Little O_7', });
lyr_Swifts_58.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Swifts_rec': 'Swifts_rec', 'Swifts_tax': 'Swifts_tax', 'Swifts_sci': 'Swifts_sci', 'Swifts_com': 'Swifts_com', 'Swifts_sta': 'Swifts_sta', 'Swifts_sur': 'Swifts_sur', 'Swifts_s_1': 'Swifts_s_1', 'Swifts_hec': 'Swifts_hec', });
lyr_Kestrel_59.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Kestrel_re': 'Kestrel_re', 'Kestrel_ta': 'Kestrel_ta', 'Kestrel_sc': 'Kestrel_sc', 'Kestrel_co': 'Kestrel_co', 'Kestrel_st': 'Kestrel_st', 'Kestrel_su': 'Kestrel_su', 'Kestrel__1': 'Kestrel__1', 'Kestrel_he': 'Kestrel_he', });
lyr_Sparrowhawk_60.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Sparrowhaw': 'Sparrowhaw', 'Sparrowh_1': 'Sparrowh_1', 'Sparrowh_2': 'Sparrowh_2', 'Sparrowh_3': 'Sparrowh_3', 'Sparrowh_4': 'Sparrowh_4', 'Sparrowh_5': 'Sparrowh_5', 'Sparrowh_6': 'Sparrowh_6', 'Sparrowh_7': 'Sparrowh_7', });
lyr_Curlew_61.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Curlew_rec': 'Curlew_rec', 'Curlew_tax': 'Curlew_tax', 'Curlew_sci': 'Curlew_sci', 'Curlew_com': 'Curlew_com', 'Curlew_sta': 'Curlew_sta', 'Curlew_sur': 'Curlew_sur', 'Curlew_s_1': 'Curlew_s_1', 'Curlew_hec': 'Curlew_hec', });
lyr_Dunlin_62.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Dunlin_rec': 'Dunlin_rec', 'Dunlin_tax': 'Dunlin_tax', 'Dunlin_sci': 'Dunlin_sci', 'Dunlin_com': 'Dunlin_com', 'Dunlin_sta': 'Dunlin_sta', 'Dunlin_sur': 'Dunlin_sur', 'Dunlin_s_1': 'Dunlin_s_1', 'Dunlin_hec': 'Dunlin_hec', });
lyr_Lapwing_63.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Lapwing_re': 'Lapwing_re', 'Lapwing_ta': 'Lapwing_ta', 'Lapwing_sc': 'Lapwing_sc', 'Lapwing_co': 'Lapwing_co', 'Lapwing_st': 'Lapwing_st', 'Lapwing_su': 'Lapwing_su', 'Lapwing__1': 'Lapwing__1', 'Lapwing_he': 'Lapwing_he', });
lyr_CommonSandpiper_64.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Common San': 'Common San', 'Common S_1': 'Common S_1', 'Common S_2': 'Common S_2', 'Common S_3': 'Common S_3', 'Common S_4': 'Common S_4', 'Common S_5': 'Common S_5', 'Common S_6': 'Common S_6', 'Common S_7': 'Common S_7', });
lyr_Oystercatcher_65.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Oystercatc': 'Oystercatc', 'Oysterca_1': 'Oysterca_1', 'Oysterca_2': 'Oysterca_2', 'Oysterca_3': 'Oysterca_3', 'Oysterca_4': 'Oysterca_4', 'Oysterca_5': 'Oysterca_5', 'Oysterca_6': 'Oysterca_6', 'Oysterca_7': 'Oysterca_7', });
lyr_Redshank_66.set('fieldAliases', {'GridType': 'GridType', 'GridRef': 'GridRef', 'Redshank_r': 'Redshank_r', 'Redshank_t': 'Redshank_t', 'Redshank_s': 'Redshank_s', 'Redshank_c': 'Redshank_c', 'Redshank_1': 'Redshank_1', 'Redshank_2': 'Redshank_2', 'Redshank_3': 'Redshank_3', 'Redshank_h': 'Redshank_h', });
lyr_Mask_67.set('fieldAliases', {'id': 'id', });
lyr_AncientWoodlandinRochdale_1.set('fieldImages', {'name': 'TextEdit', 'theme': 'TextEdit', 'themname': 'TextEdit', 'themid': 'TextEdit', 'status': 'TextEdit', 'perimeter': 'TextEdit', 'area': 'TextEdit', 'x_coord': 'TextEdit', 'y_coord': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Contours_2.set('fieldImages', {'ID': 'TextEdit', 'FEAT_TYPE': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'PROP_VALUE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AncientWoodlandinRochdale_3.set('fieldImages', {'name': 'TextEdit', 'theme': 'TextEdit', 'themname': 'TextEdit', 'themid': 'TextEdit', 'status': 'TextEdit', 'perimeter': 'TextEdit', 'area': 'TextEdit', 'x_coord': 'TextEdit', 'y_coord': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Contours_4.set('fieldImages', {'ID': 'TextEdit', 'FEAT_TYPE': 'TextEdit', 'SUB_TYPE': 'TextEdit', 'PROP_VALUE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_OSGRTetrad_5.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', });
lyr_Dunnock_6.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Dunnock_re': 'TextEdit', 'Dunnock_ta': 'TextEdit', 'Dunnock_sc': 'TextEdit', 'Dunnock_co': 'TextEdit', 'Dunnock_st': 'TextEdit', 'Dunnock_su': 'TextEdit', 'Dunnock__1': 'TextEdit', 'Dunnock_he': 'TextEdit', });
lyr_Waxwing_7.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Waxwing_re': 'TextEdit', 'Waxwing_ta': 'TextEdit', 'Waxwing_sc': 'TextEdit', 'Waxwing_co': 'TextEdit', 'Waxwing_st': 'TextEdit', 'Waxwing_su': 'TextEdit', 'Waxwing__1': 'TextEdit', 'Waxwing_he': 'TextEdit', });
lyr_Wren_8.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Wren_recor': 'TextEdit', 'Wren_taxon': 'TextEdit', 'Wren_scien': 'TextEdit', 'Wren_commo': 'TextEdit', 'Wren_start': 'TextEdit', 'Wren_surve': 'TextEdit', 'Wren_sur_1': 'TextEdit', 'Wren_hecta': 'TextEdit', });
lyr_Dipper_9.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Dipper_Gri': 'TextEdit', 'Dipper_Dip': 'TextEdit', 'Dipper_D_1': 'TextEdit', 'Dipper_D_2': 'TextEdit', 'Dipper_D_3': 'TextEdit', 'Dipper_D_4': 'TextEdit', 'Dipper_D_5': 'TextEdit', 'Dipper_D_6': 'TextEdit', 'Dipper_D_7': 'TextEdit', });
lyr_GreatCrestedGrebe_10.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Great Cres': 'TextEdit', 'Great Cr_1': 'TextEdit', 'Great Cr_2': 'TextEdit', 'Great Cr_3': 'TextEdit', 'Great Cr_4': 'TextEdit', 'Great Cr_5': 'TextEdit', 'Great Cr_6': 'TextEdit', 'Great Cr_7': 'TextEdit', });
lyr_LittleGrebe_11.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Little Gre': 'TextEdit', 'Little G_1': 'TextEdit', 'Little G_2': 'TextEdit', 'Little G_3': 'TextEdit', 'Little G_4': 'TextEdit', 'Little G_5': 'TextEdit', 'Little G_6': 'TextEdit', 'Little G_7': 'TextEdit', });
lyr_PiedbilledGrebe_12.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Pied-bille': 'TextEdit', 'Pied-bil_1': 'TextEdit', 'Pied-bil_2': 'TextEdit', 'Pied-bil_3': 'TextEdit', 'Pied-bil_4': 'TextEdit', 'Pied-bil_5': 'TextEdit', 'Pied-bil_6': 'TextEdit', 'Pied-bil_7': 'TextEdit', });
lyr_Coot_13.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Coot_recor': 'TextEdit', 'Coot_taxon': 'TextEdit', 'Coot_scien': 'TextEdit', 'Coot_commo': 'TextEdit', 'Coot_start': 'TextEdit', 'Coot_surve': 'TextEdit', 'Coot_sur_1': 'TextEdit', 'Coot_hecta': 'TextEdit', });
lyr_Goldeneye_14.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Goldeneye_': 'TextEdit', 'Goldeney_1': 'TextEdit', 'Goldeney_2': 'TextEdit', 'Goldeney_3': 'TextEdit', 'Goldeney_4': 'TextEdit', 'Goldeney_5': 'TextEdit', 'Goldeney_6': 'TextEdit', 'Goldeney_7': 'TextEdit', });
lyr_CanadaGoose_15.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Canada Goo': 'TextEdit', 'Canada G_1': 'TextEdit', 'Canada G_2': 'TextEdit', 'Canada G_3': 'TextEdit', 'Canada G_4': 'TextEdit', 'Canada G_5': 'TextEdit', 'Canada G_6': 'TextEdit', 'Canada G_7': 'TextEdit', });
lyr_GreylagGoose_16.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Greylag Go': 'TextEdit', 'Greylag _1': 'TextEdit', 'Greylag _2': 'TextEdit', 'Greylag _3': 'TextEdit', 'Greylag _4': 'TextEdit', 'Greylag _5': 'TextEdit', 'Greylag _6': 'TextEdit', 'Greylag _7': 'TextEdit', });
lyr_PinkfootedGoose_17.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Pink-foote': 'TextEdit', 'Pink-foo_1': 'TextEdit', 'Pink-foo_2': 'TextEdit', 'Pink-foo_3': 'TextEdit', 'Pink-foo_4': 'TextEdit', 'Pink-foo_5': 'TextEdit', 'Pink-foo_6': 'TextEdit', 'Pink-foo_7': 'TextEdit', });
lyr_Chaffinch_18.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Chaffinch_': 'TextEdit', 'Chaffinc_1': 'TextEdit', 'Chaffinc_2': 'TextEdit', 'Chaffinc_3': 'TextEdit', 'Chaffinc_4': 'TextEdit', 'Chaffinc_5': 'TextEdit', 'Chaffinc_6': 'TextEdit', 'Chaffinc_7': 'TextEdit', });
lyr_Bullfinch_19.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Bullfinch_': 'TextEdit', 'Bullfinc_1': 'TextEdit', 'Bullfinc_2': 'TextEdit', 'Bullfinc_3': 'TextEdit', 'Bullfinc_4': 'TextEdit', 'Bullfinc_5': 'TextEdit', 'Bullfinc_6': 'TextEdit', 'Bullfinc_7': 'TextEdit', });
lyr_Goldfinch_20.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Goldfinch_': 'TextEdit', 'Goldfinc_1': 'TextEdit', 'Goldfinc_2': 'TextEdit', 'Goldfinc_3': 'TextEdit', 'Goldfinc_4': 'TextEdit', 'Goldfinc_5': 'TextEdit', 'Goldfinc_6': 'TextEdit', 'Goldfinc_7': 'TextEdit', });
lyr_Greenfinch_21.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Greenfinch': 'TextEdit', 'Greenfin_1': 'TextEdit', 'Greenfin_2': 'TextEdit', 'Greenfin_3': 'TextEdit', 'Greenfin_4': 'TextEdit', 'Greenfin_5': 'TextEdit', 'Greenfin_6': 'TextEdit', 'Greenfin_7': 'TextEdit', });
lyr_CommonRedpoll_22.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Common Red': 'TextEdit', 'Common R_1': 'TextEdit', 'Common R_2': 'TextEdit', 'Common R_3': 'TextEdit', 'Common R_4': 'TextEdit', 'Common R_5': 'TextEdit', 'Common R_6': 'TextEdit', 'Common R_7': 'TextEdit', });
lyr_Linnet_23.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Linnet_rec': 'TextEdit', 'Linnet_tax': 'TextEdit', 'Linnet_sci': 'TextEdit', 'Linnet_com': 'TextEdit', 'Linnet_sta': 'TextEdit', 'Linnet_sur': 'TextEdit', 'Linnet_s_1': 'TextEdit', 'Linnet_hec': 'TextEdit', });
lyr_Siskin_24.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Siskin_rec': 'TextEdit', 'Siskin_tax': 'TextEdit', 'Siskin_sci': 'TextEdit', 'Siskin_com': 'TextEdit', 'Siskin_sta': 'TextEdit', 'Siskin_sur': 'TextEdit', 'Siskin_s_1': 'TextEdit', 'Siskin_hec': 'TextEdit', });
lyr_Twite_25.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Twite_reco': 'TextEdit', 'Twite_taxo': 'TextEdit', 'Twite_scie': 'TextEdit', 'Twite_comm': 'TextEdit', 'Twite_star': 'TextEdit', 'Twite_surv': 'TextEdit', 'Twite_su_1': 'TextEdit', 'Twite_hect': 'TextEdit', });
lyr_LesserRedpoll_26.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Lesser Red': 'TextEdit', 'Lesser R_1': 'TextEdit', 'Lesser R_2': 'TextEdit', 'Lesser R_3': 'TextEdit', 'Lesser R_4': 'TextEdit', 'Lesser R_5': 'TextEdit', 'Lesser R_6': 'TextEdit', 'Lesser R_7': 'TextEdit', });
lyr_HouseSparrow_27.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'House_Spar': 'TextEdit', 'House_Sp_1': 'TextEdit', 'House_Sp_2': 'TextEdit', 'House_Sp_3': 'TextEdit', 'House_Sp_4': 'TextEdit', 'House_Sp_5': 'TextEdit', 'House_Sp_6': 'TextEdit', 'House_Sp_7': 'TextEdit', });
lyr_TreeSparrow_28.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Tree_Sparr': 'TextEdit', 'Tree_Spa_1': 'TextEdit', 'Tree_Spa_2': 'TextEdit', 'Tree_Spa_3': 'TextEdit', 'Tree_Spa_4': 'TextEdit', 'Tree_Spa_5': 'TextEdit', 'Tree_Spa_6': 'TextEdit', 'Tree_Spa_7': 'TextEdit', });
lyr_Raven_29.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Raven_reco': 'TextEdit', 'Raven_taxo': 'TextEdit', 'Raven_scie': 'TextEdit', 'Raven_comm': 'TextEdit', 'Raven_star': 'TextEdit', 'Raven_surv': 'TextEdit', 'Raven_su_1': 'TextEdit', 'Raven_hect': 'TextEdit', });
lyr_EurasianNuthatch_30.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Eurasian N': 'TextEdit', 'Eurasian_1': 'TextEdit', 'Eurasian_2': 'TextEdit', 'Eurasian_3': 'TextEdit', 'Eurasian_4': 'TextEdit', 'Eurasian_5': 'TextEdit', 'Eurasian_6': 'TextEdit', 'Eurasian_7': 'TextEdit', });
lyr_EurasianTreecreeper_31.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Eurasian T': 'TextEdit', 'Eurasian_1': 'TextEdit', 'Eurasian_2': 'TextEdit', 'Eurasian_3': 'TextEdit', 'Eurasian_4': 'TextEdit', 'Eurasian_5': 'TextEdit', 'Eurasian_6': 'TextEdit', 'Eurasian_7': 'TextEdit', });
lyr_SpottedFlycatcher_32.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Spotted Fl': 'TextEdit', 'Spotted _1': 'TextEdit', 'Spotted _2': 'TextEdit', 'Spotted _3': 'TextEdit', 'Spotted _4': 'TextEdit', 'Spotted _5': 'TextEdit', 'Spotted _6': 'TextEdit', 'Spotted _7': 'TextEdit', });
lyr_CoalTit_33.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Coal Tit_r': 'TextEdit', 'Coal Tit_t': 'TextEdit', 'Coal Tit_s': 'TextEdit', 'Coal Tit_c': 'TextEdit', 'Coal Tit_1': 'TextEdit', 'Coal Tit_2': 'TextEdit', 'Coal Tit_3': 'TextEdit', 'Coal Tit_h': 'TextEdit', });
lyr_LongtailedTit_34.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Long-taile': 'TextEdit', 'Long-tai_1': 'TextEdit', 'Long-tai_2': 'TextEdit', 'Long-tai_3': 'TextEdit', 'Long-tai_4': 'TextEdit', 'Long-tai_5': 'TextEdit', 'Long-tai_6': 'TextEdit', 'Long-tai_7': 'TextEdit', });
lyr_BlueTit_35.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Blue Tit_r': 'TextEdit', 'Blue Tit_t': 'TextEdit', 'Blue Tit_s': 'TextEdit', 'Blue Tit_c': 'TextEdit', 'Blue Tit_1': 'TextEdit', 'Blue Tit_2': 'TextEdit', 'Blue Tit_3': 'TextEdit', 'Blue Tit_h': 'TextEdit', });
lyr_GreatTit_36.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Great Tit_': 'TextEdit', 'Great Ti_1': 'TextEdit', 'Great Ti_2': 'TextEdit', 'Great Ti_3': 'TextEdit', 'Great Ti_4': 'TextEdit', 'Great Ti_5': 'TextEdit', 'Great Ti_6': 'TextEdit', 'Great Ti_7': 'TextEdit', });
lyr_Blackcap_37.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Blackcap_r': 'TextEdit', 'Blackcap_t': 'TextEdit', 'Blackcap_s': 'TextEdit', 'Blackcap_c': 'TextEdit', 'Blackcap_1': 'TextEdit', 'Blackcap_2': 'TextEdit', 'Blackcap_3': 'TextEdit', 'Blackcap_h': 'TextEdit', });
lyr_SedgeWarbler_38.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Sedge Warb': 'TextEdit', 'Sedge Wa_1': 'TextEdit', 'Sedge Wa_2': 'TextEdit', 'Sedge Wa_3': 'TextEdit', 'Sedge Wa_4': 'TextEdit', 'Sedge Wa_5': 'TextEdit', 'Sedge Wa_6': 'TextEdit', 'Sedge Wa_7': 'TextEdit', });
lyr_Chiffchaff_39.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Chiffchaff': 'TextEdit', 'Chiffcha_1': 'TextEdit', 'Chiffcha_2': 'TextEdit', 'Chiffcha_3': 'TextEdit', 'Chiffcha_4': 'TextEdit', 'Chiffcha_5': 'TextEdit', 'Chiffcha_6': 'TextEdit', 'Chiffcha_7': 'TextEdit', });
lyr_WillowWarbler_40.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Willow War': 'TextEdit', 'Willow W_1': 'TextEdit', 'Willow W_2': 'TextEdit', 'Willow W_3': 'TextEdit', 'Willow W_4': 'TextEdit', 'Willow W_5': 'TextEdit', 'Willow W_6': 'TextEdit', 'Willow W_7': 'TextEdit', });
lyr_GardenWarbler_41.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Garden War': 'TextEdit', 'Garden W_1': 'TextEdit', 'Garden W_2': 'TextEdit', 'Garden W_3': 'TextEdit', 'Garden W_4': 'TextEdit', 'Garden W_5': 'TextEdit', 'Garden W_6': 'TextEdit', 'Garden W_7': 'TextEdit', });
lyr_GrasshopperWarbler_42.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Grasshoppe': 'TextEdit', 'Grasshop_1': 'TextEdit', 'Grasshop_2': 'TextEdit', 'Grasshop_3': 'TextEdit', 'Grasshop_4': 'TextEdit', 'Grasshop_5': 'TextEdit', 'Grasshop_6': 'TextEdit', 'Grasshop_7': 'TextEdit', });
lyr_ReedWarbler_43.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Reed Warbl': 'TextEdit', 'Reed War_1': 'TextEdit', 'Reed War_2': 'TextEdit', 'Reed War_3': 'TextEdit', 'Reed War_4': 'TextEdit', 'Reed War_5': 'TextEdit', 'Reed War_6': 'TextEdit', 'Reed War_7': 'TextEdit', });
lyr_Whitethroat_44.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Whitethroa': 'TextEdit', 'Whitethr_1': 'TextEdit', 'Whitethr_2': 'TextEdit', 'Whitethr_3': 'TextEdit', 'Whitethr_4': 'TextEdit', 'Whitethr_5': 'TextEdit', 'Whitethr_6': 'TextEdit', 'Whitethr_7': 'TextEdit', });
lyr_PiedWagtail_45.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Pied Wagta': 'TextEdit', 'Pied Wag_1': 'TextEdit', 'Pied Wag_2': 'TextEdit', 'Pied Wag_3': 'TextEdit', 'Pied Wag_4': 'TextEdit', 'Pied Wag_5': 'TextEdit', 'Pied Wag_6': 'TextEdit', 'Pied Wag_7': 'TextEdit', });
lyr_GreyWagtail_46.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Grey Wagta': 'TextEdit', 'Grey Wag_1': 'TextEdit', 'Grey Wag_2': 'TextEdit', 'Grey Wag_3': 'TextEdit', 'Grey Wag_4': 'TextEdit', 'Grey Wag_5': 'TextEdit', 'Grey Wag_6': 'TextEdit', 'Grey Wag_7': 'TextEdit', });
lyr_YellowWagtail_47.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Yellow Wag': 'TextEdit', 'Yellow W_1': 'TextEdit', 'Yellow W_2': 'TextEdit', 'Yellow W_3': 'TextEdit', 'Yellow W_4': 'TextEdit', 'Yellow W_5': 'TextEdit', 'Yellow W_6': 'TextEdit', 'Yellow W_7': 'TextEdit', });
lyr_MeadowPipit_48.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Meadow Pip': 'TextEdit', 'Meadow P_1': 'TextEdit', 'Meadow P_2': 'TextEdit', 'Meadow P_3': 'TextEdit', 'Meadow P_4': 'TextEdit', 'Meadow P_5': 'TextEdit', 'Meadow P_6': 'TextEdit', 'Meadow P_7': 'TextEdit', });
lyr_TreePipit_49.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Tree Pipit': 'TextEdit', 'Tree Pip_1': 'TextEdit', 'Tree Pip_2': 'TextEdit', 'Tree Pip_3': 'TextEdit', 'Tree Pip_4': 'TextEdit', 'Tree Pip_5': 'TextEdit', 'Tree Pip_6': 'TextEdit', 'Tree Pip_7': 'TextEdit', });
lyr_Skylark_50.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Skylark_re': 'TextEdit', 'Skylark_ta': 'TextEdit', 'Skylark_sc': 'TextEdit', 'Skylark_co': 'TextEdit', 'Skylark_st': 'TextEdit', 'Skylark_su': 'TextEdit', 'Skylark__1': 'TextEdit', 'Skylark_he': 'TextEdit', });
lyr_HouseMartin_51.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'House Mart': 'TextEdit', 'House Ma_1': 'TextEdit', 'House Ma_2': 'TextEdit', 'House Ma_3': 'TextEdit', 'House Ma_4': 'TextEdit', 'House Ma_5': 'TextEdit', 'House Ma_6': 'TextEdit', 'House Ma_7': 'TextEdit', });
lyr_SandMartin_52.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Sand Marti': 'TextEdit', 'Sand Mar_1': 'TextEdit', 'Sand Mar_2': 'TextEdit', 'Sand Mar_3': 'TextEdit', 'Sand Mar_4': 'TextEdit', 'Sand Mar_5': 'TextEdit', 'Sand Mar_6': 'TextEdit', 'Sand Mar_7': 'TextEdit', });
lyr_Swallow_53.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Swallow_re': 'TextEdit', 'Swallow_ta': 'TextEdit', 'Swallow_sc': 'TextEdit', 'Swallow_co': 'TextEdit', 'Swallow_st': 'TextEdit', 'Swallow_su': 'TextEdit', 'Swallow__1': 'TextEdit', 'Swallow_he': 'TextEdit', });
lyr_GreenWoodpeckers_54.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Green Wood': 'TextEdit', 'Green Wo_1': 'TextEdit', 'Green Wo_2': 'TextEdit', 'Green Wo_3': 'TextEdit', 'Green Wo_4': 'TextEdit', 'Green Wo_5': 'TextEdit', 'Green Wo_6': 'TextEdit', 'Green Wo_7': 'TextEdit', });
lyr_GreatSpottedWoodpecker_55.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Great Spot': 'TextEdit', 'Great Sp_1': 'TextEdit', 'Great Sp_2': 'TextEdit', 'Great Sp_3': 'TextEdit', 'Great Sp_4': 'TextEdit', 'Great Sp_5': 'TextEdit', 'Great Sp_6': 'TextEdit', 'Great Sp_7': 'TextEdit', });
lyr_Tawny_56.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'TO_2019_re': 'TextEdit', 'TO_2019_ta': 'TextEdit', 'TO_2019_sc': 'TextEdit', 'TO_2019_co': 'TextEdit', 'TO_2019_st': 'TextEdit', 'TO_2019_su': 'TextEdit', 'TO_2019__1': 'TextEdit', 'TO_2019_he': 'TextEdit', });
lyr_LittleOwl_57.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Little Owl': 'TextEdit', 'Little O_1': 'TextEdit', 'Little O_2': 'TextEdit', 'Little O_3': 'TextEdit', 'Little O_4': 'TextEdit', 'Little O_5': 'TextEdit', 'Little O_6': 'TextEdit', 'Little O_7': 'TextEdit', });
lyr_Swifts_58.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Swifts_rec': 'TextEdit', 'Swifts_tax': 'TextEdit', 'Swifts_sci': 'TextEdit', 'Swifts_com': 'TextEdit', 'Swifts_sta': 'TextEdit', 'Swifts_sur': 'TextEdit', 'Swifts_s_1': 'TextEdit', 'Swifts_hec': 'TextEdit', });
lyr_Kestrel_59.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Kestrel_re': 'TextEdit', 'Kestrel_ta': 'TextEdit', 'Kestrel_sc': 'TextEdit', 'Kestrel_co': 'TextEdit', 'Kestrel_st': 'TextEdit', 'Kestrel_su': 'TextEdit', 'Kestrel__1': 'TextEdit', 'Kestrel_he': 'TextEdit', });
lyr_Sparrowhawk_60.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Sparrowhaw': 'TextEdit', 'Sparrowh_1': 'TextEdit', 'Sparrowh_2': 'TextEdit', 'Sparrowh_3': 'TextEdit', 'Sparrowh_4': 'TextEdit', 'Sparrowh_5': 'TextEdit', 'Sparrowh_6': 'TextEdit', 'Sparrowh_7': 'TextEdit', });
lyr_Curlew_61.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Curlew_rec': 'TextEdit', 'Curlew_tax': 'TextEdit', 'Curlew_sci': 'TextEdit', 'Curlew_com': 'TextEdit', 'Curlew_sta': 'TextEdit', 'Curlew_sur': 'TextEdit', 'Curlew_s_1': 'TextEdit', 'Curlew_hec': 'TextEdit', });
lyr_Dunlin_62.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Dunlin_rec': 'TextEdit', 'Dunlin_tax': 'TextEdit', 'Dunlin_sci': 'TextEdit', 'Dunlin_com': 'TextEdit', 'Dunlin_sta': 'TextEdit', 'Dunlin_sur': 'TextEdit', 'Dunlin_s_1': 'TextEdit', 'Dunlin_hec': 'TextEdit', });
lyr_Lapwing_63.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Lapwing_re': 'TextEdit', 'Lapwing_ta': 'TextEdit', 'Lapwing_sc': 'TextEdit', 'Lapwing_co': 'TextEdit', 'Lapwing_st': 'TextEdit', 'Lapwing_su': 'TextEdit', 'Lapwing__1': 'TextEdit', 'Lapwing_he': 'TextEdit', });
lyr_CommonSandpiper_64.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Common San': 'TextEdit', 'Common S_1': 'TextEdit', 'Common S_2': 'TextEdit', 'Common S_3': 'TextEdit', 'Common S_4': 'TextEdit', 'Common S_5': 'TextEdit', 'Common S_6': 'TextEdit', 'Common S_7': 'TextEdit', });
lyr_Oystercatcher_65.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Oystercatc': 'TextEdit', 'Oysterca_1': 'TextEdit', 'Oysterca_2': 'TextEdit', 'Oysterca_3': 'TextEdit', 'Oysterca_4': 'TextEdit', 'Oysterca_5': 'TextEdit', 'Oysterca_6': 'TextEdit', 'Oysterca_7': 'TextEdit', });
lyr_Redshank_66.set('fieldImages', {'GridType': 'TextEdit', 'GridRef': 'TextEdit', 'Redshank_r': 'TextEdit', 'Redshank_t': 'TextEdit', 'Redshank_s': 'TextEdit', 'Redshank_c': 'TextEdit', 'Redshank_1': 'TextEdit', 'Redshank_2': 'TextEdit', 'Redshank_3': 'TextEdit', 'Redshank_h': 'TextEdit', });
lyr_Mask_67.set('fieldImages', {'id': 'TextEdit', });
lyr_AncientWoodlandinRochdale_1.set('fieldLabels', {});
lyr_Contours_2.set('fieldLabels', {});
lyr_AncientWoodlandinRochdale_3.set('fieldLabels', {});
lyr_Contours_4.set('fieldLabels', {});
lyr_OSGRTetrad_5.set('fieldLabels', {});
lyr_Dunnock_6.set('fieldLabels', {});
lyr_Waxwing_7.set('fieldLabels', {});
lyr_Wren_8.set('fieldLabels', {});
lyr_Dipper_9.set('fieldLabels', {});
lyr_GreatCrestedGrebe_10.set('fieldLabels', {});
lyr_LittleGrebe_11.set('fieldLabels', {});
lyr_PiedbilledGrebe_12.set('fieldLabels', {});
lyr_Coot_13.set('fieldLabels', {});
lyr_Goldeneye_14.set('fieldLabels', {});
lyr_CanadaGoose_15.set('fieldLabels', {});
lyr_GreylagGoose_16.set('fieldLabels', {});
lyr_PinkfootedGoose_17.set('fieldLabels', {});
lyr_Chaffinch_18.set('fieldLabels', {});
lyr_Bullfinch_19.set('fieldLabels', {});
lyr_Goldfinch_20.set('fieldLabels', {});
lyr_Greenfinch_21.set('fieldLabels', {});
lyr_CommonRedpoll_22.set('fieldLabels', {});
lyr_Linnet_23.set('fieldLabels', {});
lyr_Siskin_24.set('fieldLabels', {});
lyr_Twite_25.set('fieldLabels', {});
lyr_LesserRedpoll_26.set('fieldLabels', {});
lyr_HouseSparrow_27.set('fieldLabels', {});
lyr_TreeSparrow_28.set('fieldLabels', {});
lyr_Raven_29.set('fieldLabels', {});
lyr_EurasianNuthatch_30.set('fieldLabels', {});
lyr_EurasianTreecreeper_31.set('fieldLabels', {});
lyr_SpottedFlycatcher_32.set('fieldLabels', {});
lyr_CoalTit_33.set('fieldLabels', {});
lyr_LongtailedTit_34.set('fieldLabels', {});
lyr_BlueTit_35.set('fieldLabels', {});
lyr_GreatTit_36.set('fieldLabels', {});
lyr_Blackcap_37.set('fieldLabels', {});
lyr_SedgeWarbler_38.set('fieldLabels', {});
lyr_Chiffchaff_39.set('fieldLabels', {});
lyr_WillowWarbler_40.set('fieldLabels', {});
lyr_GardenWarbler_41.set('fieldLabels', {});
lyr_GrasshopperWarbler_42.set('fieldLabels', {});
lyr_ReedWarbler_43.set('fieldLabels', {});
lyr_Whitethroat_44.set('fieldLabels', {});
lyr_PiedWagtail_45.set('fieldLabels', {});
lyr_GreyWagtail_46.set('fieldLabels', {});
lyr_YellowWagtail_47.set('fieldLabels', {});
lyr_MeadowPipit_48.set('fieldLabels', {});
lyr_TreePipit_49.set('fieldLabels', {});
lyr_Skylark_50.set('fieldLabels', {});
lyr_HouseMartin_51.set('fieldLabels', {});
lyr_SandMartin_52.set('fieldLabels', {});
lyr_Swallow_53.set('fieldLabels', {});
lyr_GreenWoodpeckers_54.set('fieldLabels', {});
lyr_GreatSpottedWoodpecker_55.set('fieldLabels', {});
lyr_Tawny_56.set('fieldLabels', {});
lyr_LittleOwl_57.set('fieldLabels', {});
lyr_Swifts_58.set('fieldLabels', {});
lyr_Kestrel_59.set('fieldLabels', {});
lyr_Sparrowhawk_60.set('fieldLabels', {});
lyr_Curlew_61.set('fieldLabels', {});
lyr_Dunlin_62.set('fieldLabels', {});
lyr_Lapwing_63.set('fieldLabels', {});
lyr_CommonSandpiper_64.set('fieldLabels', {});
lyr_Oystercatcher_65.set('fieldLabels', {});
lyr_Redshank_66.set('fieldLabels', {});
lyr_Mask_67.set('fieldLabels', {});
lyr_Mask_67.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});