define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
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
            var btnShowLoadingIndicator = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnShowLoadingIndicator",
                "isVisible": true,
                "onClick": controller.AS_Button_b199fef3bd594d0db46148316ddd8851,
                "skin": "sknBtn1",
                "text": "Show Loading Indicator",
                "top": "5%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnHideLoadingIndicator = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnHideLoadingIndicator",
                "isVisible": true,
                "onClick": controller.AS_Button_c5276bda869c431a8c02eb2d22f37647,
                "skin": "sknBtn2",
                "text": "Hide Loading Indicator",
                "top": "15%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var loadingindicator3drotate = new com.bojo.loadingindicator3drotate({
                "clipBounds": true,
                "height": "100%",
                "id": "loadingindicator3drotate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            loadingindicator3drotate.loadingIndicatorBackgroundBlurSkin = "sknBlur2";
            this.add(imgBackground, btnShowLoadingIndicator, btnHideLoadingIndicator, loadingindicator3drotate);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});