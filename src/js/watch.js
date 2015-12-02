///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="Clock.ts" />
'use strict';
$(document).ready(function () {
    var clock = new PrWatch.Clock(), isHide = true, isMirror = window.location.href.indexOf('#') > 0, year = $('#shape305-718').find('text'), monthArrow = $('#group245-605'), dOfMonthArrow = $('#shape282-692'), dayArrow = $('#shape142-373'), day2Arrow = $('#shape248-867'), workHourArrow = $('#shape368-869'), hourArrow = $('#group330-886'), minuteArrow = $('#group327-880'), secArrow = $('#shape141-371');
    isMirror && $('#mainG').attr('transform', 'scale(-1,1) translate(-420)');
    function run() {
        clock.setDate(new Date());
        year.html(clock.getYear());
        monthArrow.attr('transform', clock.getMonth());
        dOfMonthArrow.attr('transform', clock.getDayOfMonth());
        dayArrow.attr('transform', clock.getDay());
        day2Arrow.attr('transform', clock.getDay2());
        workHourArrow.attr('transform', clock.getWorkHour());
        hourArrow.attr('transform', clock.getHour());
        minuteArrow.attr('transform', clock.getMinute());
        secArrow.attr('transform', clock.getSecond());
        isHide && $('#svgWatch').attr('style', '');
    }
    setInterval(run, 1000);
});
