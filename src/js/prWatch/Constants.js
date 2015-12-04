///<reference path="SVGtrans.ts" />
'use strict';
var PrWatch;
(function (PrWatch) {
    var Constants = (function () {
        function Constants() {
        }
        Object.defineProperty(Constants, "MONTH", {
            get: function () {
                return this.svgTrans.getMatrix('matrix(1.0,0.0,0.0,1.0,200.5477376351994,-184.91156487470812)', this.svgTrans.toMatrix('translate(1.41732,595.28)'));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "DAY", {
            get: function () {
                return this.svgTrans.getMatrix('matrix(1.0,0.0,0.0,1.0,92.54211012072123,-289.69371699023174)', this.svgTrans.toMatrix('translate(2.83,595.28)'));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "DAY2", {
            get: function () {
                return this.svgTrans.getMatrix('matrix(1,0.0,0.0,1,303.67376849073605,-289.3052647383786)', this.svgTrans.toMatrix('translate(2.13,595.28)'));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "DAY_OF_MONTH", {
            get: function () {
                return this.svgTrans.getMatrix('matrix(1.0,0.0,0.0,1.0,199.4529305763151,-184.7842781123805)', this.svgTrans.toMatrix('translate(2.13,595.28)'));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "HOUR", {
            get: function () {
                return this.svgTrans.getMatrix('matrix(1.0,0.0,0.0,1.0,197.14752635431816,-290.08114601071054)', this.svgTrans.toMatrix('translate(3.54331,595.28)'));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "SECOND", {
            get: function () {
                return this.svgTrans.getMatrix('matrix(1,0.0,0.0,1,93.92443654301435,-289.75807529460815)', this.svgTrans.toMatrix('translate(1.42,595.28)'));
            },
            enumerable: true,
            configurable: true
        });
        Constants.svgTrans = new PrWatch.SVGtrans();
        return Constants;
    })();
    PrWatch.Constants = Constants;
})(PrWatch || (PrWatch = {}));
