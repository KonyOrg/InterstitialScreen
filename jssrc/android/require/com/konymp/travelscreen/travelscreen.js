define(function() {
    return function(controller) {
        var travelscreen = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "travelscreen",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "preShow": controller.AS_FlexContainer_a19e80bd91bb41688fe662bfa334556a,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        travelscreen.setDefaultUnit(kony.flex.DP);
        var imgBackground = new kony.ui.Image2({
            "height": "100%",
            "id": "imgBackground",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_travel_bg.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxObject2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20%",
            "id": "flxObject2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "80%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxObject2.setDefaultUnit(kony.flex.DP);
        var imgObject2 = new kony.ui.Image2({
            "height": "100%",
            "id": "imgObject2",
            "isVisible": true,
            "skin": "slImage",
            "src": "konymp_travel_clouds.png",
            "width": "150%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgObject2replica = new kony.ui.Image2({
            "height": "100%",
            "id": "imgObject2replica",
            "isVisible": true,
            "left": "150%",
            "skin": "slImage",
            "src": "konymp_clouds.png",
            "top": "0%",
            "width": "150%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxObject2.add(imgObject2, imgObject2replica);
        var lblTitle = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "konympSknLblTitle",
            "text": "INTERSTITIAL SCREEN TITLE",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDescription = new kony.ui.Label({
            "centerX": "50.00%",
            "id": "lblDescription",
            "isVisible": true,
            "skin": "konympSknLblDesc",
            "text": "Subtitle short description",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "29.00%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgObject1 = new kony.ui.Image2({
            "centerX": "50%",
            "id": "imgObject1",
            "isVisible": false,
            "skin": "slImage",
            "src": "konymp_travel_plane.png",
            "top": "70%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        travelscreen.add(imgBackground, flxObject2, lblTitle, lblDescription, imgObject1);
        return travelscreen;
    }
})