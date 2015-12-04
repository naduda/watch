///<reference path="SVGtrans.ts" />
///<reference path="Constants.ts" />
'use strict';
module PrWatch {
		import SVGtrans = PrWatch.SVGtrans;

		interface IClock {
				getYear(): number;
				getMonth(): string;
				getDayOfMonth(): string;
				getDay(): string;
				getDay2(): string;
				getWorkHour(): string;
				getHour(): string;
				getMinute(): string;
				getSecond(): string;
		}

		export class Clock implements IClock {
				private svgTrans: SVGtrans = new SVGtrans();

				constructor(private date?: Date) {}

				setDate(date: Date): void {
						this.date = date;
				}

				isNewMinute(): boolean {
						return this.date.getSeconds() < 2;
				}

				getYear(): number {
						return this.date.getFullYear();
				}

				getMonth(): string {
						var deg: string = 'rotate(' + (this.date.getMonth() + 1) * 30 + ')';
						var result: string = this.svgTrans.getMatrix(Constants.MONTH,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-1.41732,-595.28)'));
						return result;
				}

				getDayOfMonth(): string {
						var deg: string = 'rotate(' + this.date.getDate() * 360 / 31 + ')';
						var result: string = this.svgTrans.getMatrix(Constants.DAY_OF_MONTH,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
						return result;
				}

				getDay(): string {
						var deg: string = 'rotate(' + this.date.getDay() * 360 / 7 + ')';
						var result: string = this.svgTrans.getMatrix(Constants.DAY,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-2.83,-595.28)'));
						return result;
				}

				getDay2(): string {
						var deg: string = 'rotate(' + (0.5 - this.date.getDay() -
								this.date.getHours() / 24) * 45 + ')';
						var result: string = this.svgTrans.getMatrix(Constants.DAY2,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
						return result;
				}

				getWorkHour(): string {
						var deg: string = this.date.getHours() > 8 && this.date.getHours() < 18 ?
								'rotate(' + ((8.5 - this.date.getHours()) * 36 -
										this.date.getMinutes() * 0.6) + ')' : 'rotate(0)';
						var result: string = this.svgTrans.getMatrix(Constants.DAY2,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
						return result;
				}

				getHour(): string {
						var deg: string = 'rotate(' + (this.date.getHours() * 30 +
								this.date.getMinutes() * 0.5) + ')';
						var result: string = this.svgTrans.getMatrix(Constants.HOUR,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-3.54331,-595.28)'));
						return result;
				}

				getMinute(): string {
						var deg: string = 'rotate(' + this.date.getMinutes() * 6 + ')';
						var result: string = this.svgTrans.getMatrix(Constants.HOUR,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-3.54331,-595.28)'));
						return result;
				}

				getSecond(): string {
						var deg: string = 'rotate(' + this.date.getSeconds() * 6 + ')';
						var result: string = this.svgTrans.getMatrix(Constants.SECOND,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-1.42,-595.28)'));
						return result;
				}
		}
}