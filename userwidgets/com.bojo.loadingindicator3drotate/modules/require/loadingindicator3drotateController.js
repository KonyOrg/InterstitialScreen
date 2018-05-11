define(function() {
	var konymp = konymp || {};
    var KonyLoggerModule = require("com/bojo/loadingindicator3drotate/konyLogger");
    konymp.logger = (new KonyLoggerModule("Interstitial Screen Component")) || function() {};
  	konymp.logger.setLogLevel("DEBUG");
    return {
        /**
         * @constructor constructor
         * @param basicConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
         	konymp.logger.debug("constructor", konymp.logger.FUNCTION_ENTRY);
            this.view.isVisible = false;
            this.view.forceLayout();
          	konymp.logger.debug("constructor", konymp.logger.FUNCTION_EXIT);
        },
      
        /**
         * @initGettersSetters Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
           	konymp.logger.debug("initGettersSetters", konymp.logger.FUNCTION_ENTRY);
          	konymp.logger.debug("initGettersSetters", konymp.logger.FUNCTION_EXIT);
        },

        /**
         * @function animateProgressIndicator
         * @scope private
         * @description 3D translation animation
         * @param widget {reference of widget to be animated}
         * @param duration {decimal Value}
         * @param iterationCount {Integer}
         */
      	animateProgressIndicator: function (widget, duration, iterationCount) {
          var transform1 = kony.ui.makeAffineTransform();
          transform1.rotate3D(0,0,1,0);

          var transform2 = kony.ui.makeAffineTransform();
          transform2.rotate3D(90,0,1,0);

          var transform3 = kony.ui.makeAffineTransform();
          transform3.rotate3D(180,0,1,0);

          var transform4 = kony.ui.makeAffineTransform();
          transform4.rotate3D(270,0,1,0);

          var transform5 = kony.ui.makeAffineTransform();
          transform5.rotate3D(360,0,1,0);

          var animationObject = {
            0: {"transform": transform1,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
            25: {"transform": transform2,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
            50: {"transform": transform3,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
            75: {"transform": transform4,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
            100: {"transform": transform5,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
          };

          var animationConfigObject = {
            "duration":duration,
            "iterationCount":iterationCount,
            "direction":kony.anim.DIRECTION_NONE,
            "fillMode":kony.anim.FILL_MODE_NONE
          };
          var animationCallbackObject = {"animationEnd" : function(){}};
          
          widget.animate(kony.ui.createAnimation(animationObject),animationConfigObject,animationCallbackObject);
    	},
      
      	/**
         * @function show
         * @description This API shows the loading indicator 3d rotate screen animation
         * @scope Public {API Exposed}
         */
      	show: function () {
          konymp.logger.debug("show", konymp.logger.FUNCTION_ENTRY);
          try{
            this.view.isVisible = true;
            this.view.forceLayout();
            this.animateProgressIndicator(this.view.imgLoadingIndicator, 1, 0);
          }catch(exception){
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
          }  
          konymp.logger.debug("show", konymp.logger.FUNCTION_EXIT);
        },
      
      	/**
         * @function hide
         * @description This API hides the loading indicator 3d rotate screen animation
         * @scope Public {API Exposed}
         */
      	hide: function () {
          konymp.logger.debug("hide", konymp.logger.FUNCTION_ENTRY);
          try{
            this.view.isVisible = false;
            this.view.forceLayout();
            this.animateProgressIndicator(this.view.imgLoadingIndicator, 1, 1);
          }catch(exception){
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
          }  
          konymp.logger.debug("hide", konymp.logger.FUNCTION_EXIT);
        }
      
    };
});