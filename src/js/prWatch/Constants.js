'use strict';
var PrWatch;
(function (PrWatch) {
    var Constants = (function () {
        function Constants() {
        }
        Object.defineProperty(Constants, "MONTH", {
            get: function () {
                return 'matrix(1,0,0,1,201.9650576351994,410.36843512529185)';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "DAY", {
            get: function () {
                return 'matrix(1,0,0,1,95.37211012072123,305.58628300976824)';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "DAY2", {
            get: function () {
                return 'matrix(1,0,0,1,305.80376849073605,305.9747352616214)';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "DAY_OF_MONTH", {
            get: function () {
                return 'matrix(1,0,0,1,201.5829305763151,410.4957218876195)';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "HOUR", {
            get: function () {
                return 'matrix(1,0,0,1,200.69083635431815,305.19885398928943)';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Constants, "SECOND", {
            get: function () {
                return 'matrix(1, 0, 0, 1, 95.34443654301435, 305.5219247053918)';
            },
            enumerable: true,
            configurable: true
        });
        return Constants;
    })();
    PrWatch.Constants = Constants;
})(PrWatch || (PrWatch = {}));
