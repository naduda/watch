///<reference path="SVGtrans.ts" />
///<reference path="Constants.ts" />
'use strict';
var PrWatch;
(function (PrWatch) {
    var SVGtrans = PrWatch.SVGtrans;
    var Clock = (function () {
        function Clock(date) {
            this.date = date;
            this.svgTrans = new SVGtrans();
        }
        Clock.prototype.setDate = function (date) {
            this.date = date;
        };
        Clock.prototype.isNewMinute = function () {
            return this.date.getSeconds() < 2;
        };
        Clock.prototype.getYear = function () {
            return this.date.getFullYear();
        };
        Clock.prototype.getMonth = function () {
            var deg = 'rotate(' + (this.date.getMonth() + 1) * 30 + ')';
            var result = this.svgTrans.getMatrix(PrWatch.Constants.MONTH, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-1.41732,-595.28)'));
            return result;
        };
        Clock.prototype.getDayOfMonth = function () {
            var deg = 'rotate(' + this.date.getDate() * 360 / 31 + ')';
            var result = this.svgTrans.getMatrix(PrWatch.Constants.DAY_OF_MONTH, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
            return result;
        };
        Clock.prototype.getDay = function () {
            var deg = 'rotate(' + this.date.getDay() * 360 / 7 + ')';
            var result = this.svgTrans.getMatrix(PrWatch.Constants.DAY, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-2.83,-595.28)'));
            return result;
        };
        Clock.prototype.getDay2 = function () {
            var deg = 'rotate(' + (0.5 - this.date.getDay() -
                this.date.getHours() / 24) * 45 + ')';
            var result = this.svgTrans.getMatrix(PrWatch.Constants.DAY2, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
            return result;
        };
        Clock.prototype.getWorkHour = function () {
            var deg = this.date.getHours() > 8 && this.date.getHours() < 18 ?
                'rotate(' + ((8.5 - this.date.getHours()) * 36 -
                    this.date.getMinutes() * 0.6) + ')' : 'rotate(0)';
            var result = this.svgTrans.getMatrix(PrWatch.Constants.DAY2, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
            return result;
        };
        Clock.prototype.getHour = function () {
            var deg = 'rotate(' + (this.date.getHours() * 30 +
                this.date.getMinutes() * 0.5) + ')';
            var result = this.svgTrans.getMatrix(PrWatch.Constants.HOUR, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-3.54331,-595.28)'));
            return result;
        };
        Clock.prototype.getMinute = function () {
            var deg = 'rotate(' + this.date.getMinutes() * 6 + ')';
            var result = this.svgTrans.getMatrix(PrWatch.Constants.HOUR, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-3.54331,-595.28)'));
            return result;
        };
        Clock.prototype.getSecond = function () {
            var deg = 'rotate(' + this.date.getSeconds() * 6 + ')';
            var result = this.svgTrans.getMatrix(PrWatch.Constants.SECOND, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-1.42,-595.28)'));
            return result;
        };
        return Clock;
    })();
    PrWatch.Clock = Clock;
})(PrWatch || (PrWatch = {}));
