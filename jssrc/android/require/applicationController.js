define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.bojo.loadingindicator3drotate", "loadingindicator3drotate", "loadingindicator3drotateController");
        kony.application.registerMaster({
            "namespace": "com.bojo",
            "classname": "loadingindicator3drotate",
            "name": "com.bojo.loadingindicator3drotate"
        });
        kony.mvc.registry.add("com.konymp.travelscreen", "travelscreen", "travelscreenController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "travelscreen",
            "name": "com.konymp.travelscreen"
        });
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        setAppBehaviors();
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmHome").navigate();
    }
});