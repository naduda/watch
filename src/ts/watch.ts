///<reference path="prWatch/Clock.ts" />
'use strict';
document.addEventListener("DOMContentLoaded", function(event) {
		var clock = new PrWatch.Clock(),
				isHide = true,
				isMirror = window.location.href.indexOf('#') > 0,
				year = document.querySelector('#shape305-718 text'),
				monthArrow = document.getElementById('group245-605'),
				dOfMonthArrow = document.getElementById('shape282-692'),
				dayArrow = document.getElementById('shape142-373'),
				day2Arrow = document.getElementById('shape248-867'),
				workHourArrow = document.getElementById('shape368-869'),
				hourArrow = document.getElementById('group330-886'),
				minuteArrow = document.getElementById('group327-880'),
				secArrow = document.getElementById('shape141-371');

		isMirror && document.getElementById('mainG')
							.setAttribute('transform', 'scale(-1,1) translate(-420)');
		function run(){
				clock.setDate(new Date());
				year.textContent = 'y = ' + clock.getYear();
				monthArrow.setAttribute('transform', clock.getMonth());
				dOfMonthArrow.setAttribute('transform', clock.getDayOfMonth());
				dayArrow.setAttribute('transform', clock.getDay());
				day2Arrow.setAttribute('transform', clock.getDay2());
				workHourArrow.setAttribute('transform', clock.getWorkHour());
				hourArrow.setAttribute('transform', clock.getHour());
				minuteArrow.setAttribute('transform', clock.getMinute());
				secArrow.setAttribute('transform', clock.getSecond());
				isHide && document.getElementById('svgWatch').setAttribute('style', '');
		}
		setInterval(run, 1000);
});