///<reference path="SVGtrans.ts" />
'use strict';
var PrWatch;
(function (PrWatch) {
    var Clock = (function () {
        function Clock() {
            this.date = new Date();
            this.svgTrans = new PrWatch.SVGtrans();
            this.monthConst = this.svgTrans.getMatrix('matrix(1.0,0.0,0.0,1.0,200.5477376351994,-184.91156487470812)', this.svgTrans.toMatrix('translate(1.41732,595.28)'));
            this.dOfMonthConst = this.svgTrans.getMatrix('matrix(1.0,0.0,0.0,1.0,199.4529305763151,-184.7842781123805)', this.svgTrans.toMatrix('translate(2.13,595.28)'));
            this.dayConst = this.svgTrans.getMatrix('matrix(1.0,0.0,0.0,1.0,92.54211012072123,-289.69371699023174)', this.svgTrans.toMatrix('translate(2.83,595.28)'));
            this.day2Const = this.svgTrans.getMatrix('matrix(1,0.0,0.0,1,303.67376849073605,-289.3052647383786)', this.svgTrans.toMatrix('translate(2.13,595.28)'));
            this.hourConst = this.svgTrans.getMatrix('matrix(1.0,0.0,0.0,1.0,197.14752635431816,-290.08114601071054)', this.svgTrans.toMatrix('translate(3.54331,595.28)'));
            this.secondConst = this.svgTrans.getMatrix('matrix(1,0.0,0.0,1,93.92443654301435,-289.75807529460815)', this.svgTrans.toMatrix('translate(1.42,595.28)'));
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
            var result = this.svgTrans.getMatrix(this.monthConst, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-1.41732,-595.28)'));
            return result;
        };
        Clock.prototype.getDayOfMonth = function () {
            var deg = 'rotate(' + this.date.getDate() * 360 / 31 + ')';
            var result = this.svgTrans.getMatrix(this.dOfMonthConst, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
            return result;
        };
        Clock.prototype.getDay = function () {
            var deg = 'rotate(' + this.date.getDay() * 360 / 7 + ')';
            var result = this.svgTrans.getMatrix(this.dayConst, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-2.83,-595.28)'));
            return result;
        };
        Clock.prototype.getDay2 = function () {
            var deg = 'rotate(' + (0.5 - this.date.getDay() -
                this.date.getHours() / 24) * 45 + ')';
            var result = this.svgTrans.getMatrix(this.day2Const, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
            return result;
        };
        Clock.prototype.getWorkHour = function () {
            var deg = this.date.getHours() > 8 && this.date.getHours() < 18 ?
                'rotate(' + ((8.5 - this.date.getHours()) * 36 -
                    this.date.getMinutes() * 0.6) + ')' : 'rotate(0)';
            var result = this.svgTrans.getMatrix(this.day2Const, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
            return result;
        };
        Clock.prototype.getHour = function () {
            var deg = 'rotate(' + (this.date.getHours() * 30 +
                this.date.getMinutes() * 0.5) + ')';
            var result = this.svgTrans.getMatrix(this.hourConst, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-3.54331,-595.28)'));
            return result;
        };
        Clock.prototype.getMinute = function () {
            var deg = 'rotate(' + this.date.getMinutes() * 6 + ')';
            var result = this.svgTrans.getMatrix(this.hourConst, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-3.54331,-595.28)'));
            return result;
        };
        Clock.prototype.getSecond = function () {
            var deg = 'rotate(' + this.date.getSeconds() * 6 + ')';
            var result = this.svgTrans.getMatrix(this.secondConst, this.svgTrans.toMatrix(deg));
            result = this.svgTrans.getMatrix(result, this.svgTrans.toMatrix('translate(-1.42,-595.28)'));
            return result;
        };
        return Clock;
    })();
    PrWatch.Clock = Clock;
})(PrWatch || (PrWatch = {}));
