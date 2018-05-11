define(function() {
    return function(controller) {
        var loadingindicator3drotate = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "loadingindicator3drotate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        loadingindicator3drotate.setDefaultUnit(kony.flex.DP);
        var flexBlurBackgroundDuringProgress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexBlurBackgroundDuringProgress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknBlur1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 99
        }, {}, {});
        flexBlurBackgroundDuringProgress.setDefaultUnit(kony.flex.DP);
        var flexProgressIndicator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flexProgressIndicator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "86dp",
            "skin": "sknProgressIndicator1",
            "width": "100%",
            "zIndex": 100
        }, {}, {});
        flexProgressIndicator.setDefaultUnit(kony.flex.DP);
        var imgLoadingIndicator = new kony.ui.Image2({
            "centerY": "50%",
            "height": "40dp",
            "id": "imgLoadingIndicator",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "konyicon.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblLoadingIndicator = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblLoadingIndicator",
            "isVisible": true,
            "left": "65dp",
            "skin": "sknLoadingMessage",
            "text": "Loading ...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexProgressIndicator.add(imgLoadingIndicator, lblLoadingIndicator);
        flexBlurBackgroundDuringProgress.add(flexProgressIndicator);
        loadingindicator3drotate.add(flexBlurBackgroundDuringProgress);
        return loadingindicator3drotate;
    }
})