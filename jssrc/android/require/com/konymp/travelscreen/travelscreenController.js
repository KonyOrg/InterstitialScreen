define(function() {
    var controller = require("com/konymp/travelscreen/usertravelscreenController");
    var actions = require("com/konymp/travelscreen/travelscreenControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "title", function(val) {
            this.view.lblTitle.text = val;
        });
        defineGetter(this, "title", function() {
            return this.view.lblTitle.text;
        });
        defineSetter(this, "object2IsVisible", function(val) {
            this.view.flxObject2.isVisible = val;
        });
        defineGetter(this, "object2IsVisible", function() {
            return this.view.flxObject2.isVisible;
        });
        defineSetter(this, "backgroundSrc", function(val) {
            this.view.imgBackground.src = val;
        });
        defineGetter(this, "backgroundSrc", function() {
            return this.view.imgBackground.src;
        });
        defineSetter(this, "object1IsVisible", function(val) {
            this.view.imgObject1.isVisible = val;
        });
        defineGetter(this, "object1IsVisible", function() {
            return this.view.imgObject1.isVisible;
        });
        defineSetter(this, "description", function(val) {
            this.view.lblDescription.text = val;
        });
        defineGetter(this, "description", function() {
            return this.view.lblDescription.text;
        });
        defineSetter(this, "titleSkin", function(val) {
            this.view.lblTitle.skin = val;
        });
        defineGetter(this, "titleSkin", function() {
            return this.view.lblTitle.skin;
        });
        defineSetter(this, "object1src", function(val) {
            this.view.imgObject1.src = val;
        });
        defineGetter(this, "object1src", function() {
            return this.view.imgObject1.src;
        });
        defineSetter(this, "descriptionSkin", function(val) {
            this.view.lblDescription.skin = val;
        });
        defineGetter(this, "descriptionSkin", function() {
            return this.view.lblDescription.skin;
        });
        defineSetter(this, "object2Src", function(val) {
            this.view.imgObject2.src = val;
        });
        defineGetter(this, "object2Src", function() {
            return this.view.imgObject2.src;
        });
        defineSetter(this, "object1Top", function(val) {
            this.view.imgObject1.top = val;
        });
        defineGetter(this, "object1Top", function() {
            return this.view.imgObject1.top;
        });
        defineSetter(this, "object2Top", function(val) {
            this.view.flxObject2.top = val;
        });
        defineGetter(this, "object2Top", function() {
            return this.view.flxObject2.top;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});