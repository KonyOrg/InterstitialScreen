define(function() {
    var controller = require("com/bojo/loadingindicator3drotate/userloadingindicator3drotateController");
    var actions = require("com/bojo/loadingindicator3drotate/loadingindicator3drotateControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "loadingIndicatorBackgroundBlurSkin", function(val) {
            this.view.flexBlurBackgroundDuringProgress.skin = val;
        });
        defineGetter(this, "loadingIndicatorBackgroundBlurSkin", function() {
            return this.view.flexBlurBackgroundDuringProgress.skin;
        });
        defineSetter(this, "loadingIndicatorTextSkin", function(val) {
            this.view.lblLoadingIndicator.skin = val;
        });
        defineGetter(this, "loadingIndicatorTextSkin", function() {
            return this.view.lblLoadingIndicator.skin;
        });
        defineSetter(this, "loadingIndicatorSkin", function(val) {
            this.view.flexProgressIndicator.skin = val;
        });
        defineGetter(this, "loadingIndicatorSkin", function() {
            return this.view.flexProgressIndicator.skin;
        });
        defineSetter(this, "loadingIndicatorText", function(val) {
            this.view.lblLoadingIndicator.text = val;
        });
        defineGetter(this, "loadingIndicatorText", function() {
            return this.view.lblLoadingIndicator.text;
        });
        defineSetter(this, "imgLoadingIndicatorSrc", function(val) {
            this.view.imgLoadingIndicator.src = val;
        });
        defineGetter(this, "imgLoadingIndicatorSrc", function() {
            return this.view.imgLoadingIndicator.src;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});