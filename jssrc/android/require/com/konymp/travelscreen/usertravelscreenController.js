/**
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
**/
define(function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/travelscreen/konyLogger");
    konymp.logger = (new KonyLoggerModule("Travel Screen Component")) || function() {};
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
            this._animateObject1 = true;
            this._animateObject2 = true;
            konymp.logger.debug("constructor", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @initGettersSetters Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            konymp.logger.debug("initGettersSetters", konymp.logger.FUNCTION_ENTRY);
            defineGetter(this, "object1Animate", function() {
                return this._animateObject1;
            });
            defineSetter(this, "object1Animate", function(val) {
                this._animateObject1 = val;
            });
            defineGetter(this, "object2Animate", function() {
                return this._animateObject2;
            });
            defineSetter(this, "object2Animate", function(val) {
                this._animateObject2 = val;
            });
            konymp.logger.debug("initGettersSetters", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function cloudAnimation
         * @scope private
         * @description translation Animation from left 0% to -100%
         * @param widget {reference of widget to be animated}
         * @param delay {decimal value}
         * @param duration {decimal Value}
         * @param count {Integer}
         */
        cloudAnimation: function(widget, delay, duration, count) {
            konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
            try {
                var animDefinitionOne = {
                    0: {
                        "left": "0%",
                        "stepConfig": {
                            "timingFunction": kony.anim.LINEAR
                        }
                    },
                    100: {
                        "left": "-150%",
                        "stepConfig": {
                            "timingFunction": kony.anim.LINEAR
                        }
                    }
                };
                animDef = kony.ui.createAnimation(animDefinitionOne);
                animationConfig = {
                    "duration": duration,
                    "iterationCount": count,
                    "delay": delay,
                    "fillMode": kony.anim.FILL_MODE_BACKWARDS
                };
                widget.animate(animDef, animationConfig, {});
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function cloudReplicaAnimation
         * @scope private
         * @description translation Animation from left 100% to 0%
         * @param widget {reference of widget to be animated}
         * @param delay {decimal value}
         * @param duration {decimal Value}
         * @param count {Integer}
         */
        cloudReplicaAnimation: function(widget, delay, duration, count) {
            konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
            try {
                var animDefinitionOne = {
                    0: {
                        "left": "150%",
                        "stepConfig": {
                            "timingFunction": kony.anim.LINEAR
                        }
                    },
                    100: {
                        "left": "0%",
                        "stepConfig": {
                            "timingFunction": kony.anim.LINEAR
                        }
                    }
                };
                animDef = kony.ui.createAnimation(animDefinitionOne);
                animationConfig = {
                    "duration": duration,
                    "iterationCount": count,
                    "delay": delay,
                    "fillMode": kony.anim.FILL_MODE_BACKWARDS
                };
                widget.animate(animDef, animationConfig, {});
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function planeAnimation
         * @scope private
         * @description translation animation up to down and vice versa
         * @param widget {reference of widget to be animated}
         * @param delay {decimal value}
         * @param duration {decimal Value}
         * @param count {Integer}
         */
        planeAnimation: function(widget, delay, duration, count) {
            konymp.logger.debug("", konymp.logger.FUNCTION_ENTRY);
            try {
                var top = this.object1Top;
                var animTop = parseInt(top);
                widget.animate(kony.ui.createAnimation({
                    "0": {
                        "top": top,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE_IN_OUT
                        }
                    },
                    "9": {
                        "top": top,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE_IN_OUT
                        }
                    },
                    "91": {
                        "top": (animTop - 10) + "%",
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE_IN_OUT
                        }
                    },
                    "100": {
                        "top": (animTop - 10) + "%",
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE_IN_OUT
                        }
                    }
                }), {
                    "delay": delay,
                    "iterationCount": count,
                    "fillMode": kony.anim.FILL_MODE_BOTH,
                    "duration": duration,
                    "direction": kony.anim.DIRECTION_ALTERNATE
                }, {});
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.debug("", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function show
         * @description This API shows the travel screen animation
         * @scope Public {API Exposed}
         */
        show: function() {
            konymp.logger.debug("show", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.isVisible = true;
                this.view.forceLayout();
                if (this.object1Animate) {
                    this.planeAnimation(this.view.imgObject1, 0, 2.3, 0);
                }
                if (this.object2Animate) {
                    this.cloudAnimation(this.view.imgObject2, 0, 2, 0);
                    this.cloudReplicaAnimation(this.view.imgObject2replica, 0, 2, 0);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.debug("show", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function hide
         * @description This API hides the travel screen animation
         * @scope Public {API Exposed}
         */
        hide: function() {
            konymp.logger.debug("hide", konymp.logger.FUNCTION_ENTRY);
            try {
                this.view.isVisible = false;
                this.view.forceLayout();
                if (this.object1Animate) {
                    this.planeAnimation(this.view.imgObject1, 0, 0.1, 2);
                }
                if (this.object2Animate) {
                    this.cloudAnimation(this.view.imgObject2, 0, 0.1, 1);
                    this.cloudReplicaAnimation(this.view.imgObject2replica, 0, 0.1, 1);
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
            konymp.logger.debug("hide", konymp.logger.FUNCTION_EXIT);
        }
    };
});