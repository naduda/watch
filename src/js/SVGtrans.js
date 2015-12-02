'use strict';
var PrWatch;
(function (PrWatch) {
    var SVGtrans = (function () {
        function SVGtrans() {
        }
        SVGtrans.prototype.getMatrix = function (s1, s2) {
            var sep;
            sep = s1.indexOf(',') < 0 ? ' ' : ',';
            s1 = s1.slice(7, s1.length - 1);
            s2 = s2.slice(7, s2.length - 1);
            var arr1 = s1.split(sep);
            sep = s2.indexOf(',') < 0 ? ' ' : ',';
            var arr2 = s2.split(sep);
            return 'matrix(' +
                (Number(arr1[0]) * Number(arr2[0]) + Number(arr1[2]) * Number(arr2[1])) + sep +
                (Number(arr1[1]) * Number(arr2[0]) + Number(arr1[3]) * Number(arr2[1])) + sep +
                (Number(arr1[0]) * Number(arr2[2]) + Number(arr1[2]) * Number(arr2[3])) + sep +
                (Number(arr1[1]) * Number(arr2[2]) + Number(arr1[3]) * Number(arr2[3])) + sep +
                (Number(arr1[0]) * Number(arr2[4]) + Number(arr1[2]) * Number(arr2[5]) + Number(arr1[4])) + sep +
                (Number(arr1[1]) * Number(arr2[4]) + Number(arr1[3]) * Number(arr2[5]) + Number(arr1[5])) + ')';
        };
        SVGtrans.prototype.toMatrix = function (transform) {
            var sp = transform.split(')'), matrix = '';
            for (var i = 0; i < sp.length; i++) {
                if (sp[i].length < 1)
                    break;
                sp[i] = sp[i].trim() + ')';
                var key = sp[i].slice(0, sp[i].indexOf('('));
                var params = sp[i].slice(sp[i].indexOf('(') + 1, sp[i].length - 1).split(',');
                switch (key) {
                    case 'translate':
                        matrix += 'matrix(1,0,0,1,' + params[0] + ',' + params[1] + ')';
                        break;
                    case 'scale':
                        if (params.length > 1) {
                            matrix += 'matrix(' + params[0] + ',0,0,' + params[1] + ',0,0)';
                        }
                        else {
                            matrix += 'matrix(' + params[0] + ',0,0,' + params[0] + ',0,0)';
                        }
                        break;
                    case 'rotate':
                        function toRadians(angle) {
                            return angle * (Math.PI / 180);
                        }
                        var cosX = Math.cos(toRadians(params[0]));
                        var sinX = Math.sin(toRadians(params[0]));
                        matrix += 'matrix(' + cosX + ',' + sinX + ',' + (-sinX) + ',' + cosX + ',0,0)';
                        break;
                    default:
                        console.log(' === ' + sp[i] + '\n');
                        break;
                }
                matrix = matrix.replace(' ', '') + '|';
            }
            matrix = matrix.slice(0, matrix.length - 1);
            var matrixs = matrix.split('|');
            var result = '';
            for (var i = 1; i < matrixs.length; i++) {
                if (i == 1) {
                    result = this.getMatrix(matrixs[i - 1], matrixs[i]);
                }
                else {
                    result = this.getMatrix(result, matrixs[i]);
                }
            }
            if (matrixs.length == 1)
                result = matrixs[0];
            return result;
        };
        return SVGtrans;
    })();
    PrWatch.SVGtrans = SVGtrans;
})(PrWatch || (PrWatch = {}));
