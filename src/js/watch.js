///<reference path="prWatch/Clock.ts" />
'use strict';
document.addEventListener("DOMContentLoaded", function (e) {
    var clock = new PrWatch.Clock(), isHide = true, isMirror = window.location.href.indexOf('#') > 0, $id = function (id) { return document.getElementById(id); }, $q = function (q) { return document.querySelector(q); }, year = $q('#shape305-718 text'), monthArrow = $id('group245-605'), dOfMonthArrow = $id('shape282-692'), dayArrow = $id('shape142-373'), day2Arrow = $id('shape248-867'), workHourArrow = $id('shape368-869'), hourArrow = $id('group330-886'), minuteArrow = $id('group327-880'), secArrow = $id('shape141-371');
    isMirror && document.getElementById('mainG')
        .setAttribute('transform', 'scale(-1,1) translate(-420)');
    function run() {
        clock.setDate(new Date());
        secArrow.setAttribute('transform', clock.getSecond());
        if (isHide || clock.isNewMinute()) {
            year.textContent = clock.getYear().toString();
            monthArrow.setAttribute('transform', clock.getMonth());
            dOfMonthArrow.setAttribute('transform', clock.getDayOfMonth());
            dayArrow.setAttribute('transform', clock.getDay());
            day2Arrow.setAttribute('transform', clock.getDay2());
            workHourArrow.setAttribute('transform', clock.getWorkHour());
            hourArrow.setAttribute('transform', clock.getHour());
            minuteArrow.setAttribute('transform', clock.getMinute());
        }
        if (isHide) {
            $id('svgWatch').setAttribute('style', '');
            isHide = false;
        }
    }
    setInterval(run, 1000);
});
