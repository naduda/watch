///<reference path="prWatch/Clock.ts" />
'use strict';
document.addEventListener("DOMContentLoaded", (e) => {
		var clock = new PrWatch.Clock(),
				isHide = true,
				isMirror = window.location.href.indexOf('#') > 0,
				$id = (id) => document.getElementById(id),
				$q = (q) => document.querySelector(q),
				year: HTMLElement = <HTMLElement>$q('#shape305-718 text'),
				monthArrow: HTMLElement = <HTMLElement>$id('group245-605'),
				dOfMonthArrow: HTMLElement = <HTMLElement>$id('shape282-692'),
				dayArrow: HTMLElement = <HTMLElement>$id('shape142-373'),
				day2Arrow: HTMLElement = <HTMLElement>$id('shape248-867'),
				workHourArrow: HTMLElement = <HTMLElement>$id('shape368-869'),
				hourArrow: HTMLElement = <HTMLElement>$id('group330-886'),
				minuteArrow: HTMLElement = <HTMLElement>$id('group327-880'),
				secArrow: HTMLElement = <HTMLElement>$id('shape141-371');

		isMirror && document.getElementById('mainG')
							.setAttribute('transform', 'scale(-1,1) translate(-420)');
		function run(){
				clock.setDate(new Date());
				year.textContent = clock.getYear();
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