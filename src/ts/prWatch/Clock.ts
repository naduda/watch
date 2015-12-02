///<reference path="SVGtrans.ts" />

'use strict';
module PrWatch {
		interface IClock {
				getYear(): string;
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
				private date: any;
				private svgTrans: PrWatch.ISVGtrans;
				private monthConst: string;
				private dayConst: string;
				private day2Const: string;
				private dOfMonthConst: string;
				private hourConst: string;
				private secondConst: string;
				constructor() {
						this.date = new Date();
						this.svgTrans = new PrWatch.SVGtrans();
						this.monthConst = this.svgTrans.getMatrix(
								'matrix(1.0,0.0,0.0,1.0,200.5477376351994,-184.91156487470812)',
								this.svgTrans.toMatrix('translate(1.41732,595.28)')
						);
						this.dOfMonthConst = this.svgTrans.getMatrix(
								'matrix(1.0,0.0,0.0,1.0,199.4529305763151,-184.7842781123805)',
								this.svgTrans.toMatrix('translate(2.13,595.28)')
						);
						this.dayConst = this.svgTrans.getMatrix(
								'matrix(1.0,0.0,0.0,1.0,92.54211012072123,-289.69371699023174)',
								this.svgTrans.toMatrix('translate(2.83,595.28)')
						);
						this.day2Const = this.svgTrans.getMatrix(
								'matrix(1,0.0,0.0,1,303.67376849073605,-289.3052647383786)',
								this.svgTrans.toMatrix('translate(2.13,595.28)')
						);
						this.hourConst = this.svgTrans.getMatrix(
								'matrix(1.0,0.0,0.0,1.0,197.14752635431816,-290.08114601071054)',
								this.svgTrans.toMatrix('translate(3.54331,595.28)')
						);
						this.secondConst = this.svgTrans.getMatrix(
								'matrix(1,0.0,0.0,1,93.92443654301435,-289.75807529460815)',
								this.svgTrans.toMatrix('translate(1.42,595.28)')
						);
				}

				setDate(date: any): void {
						this.date = date;
				}

				getYear(): string {
						return this.date.getFullYear();
				}

				getMonth(): string {
						var deg: string = 'rotate(' + (this.date.getMonth() + 1) * 30 + ')';
						var result: string = this.svgTrans.getMatrix(this.monthConst,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-1.41732,-595.28)'));
						return result;
				}

				getDayOfMonth(): string {
						var deg: string = 'rotate(' + this.date.getDate() * 360 / 31 + ')';
						var result: string = this.svgTrans.getMatrix(this.dOfMonthConst,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
						return result;
				}

				getDay(): string {
						var deg: string = 'rotate(' + this.date.getDay() * 360 / 7 + ')';
						var result: string = this.svgTrans.getMatrix(this.dayConst,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-2.83,-595.28)'));
						return result;
				}

				getDay2(): string {
						var deg: string = 'rotate(' + (0.5 - this.date.getDay() -
								this.date.getHours() / 24) * 45 + ')';
						var result: string = this.svgTrans.getMatrix(this.day2Const,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
						return result;
				}

				getWorkHour(): string {
						var deg: string = this.date.getHours() > 8 && this.date.getHours() < 18 ?
								'rotate(' + ((8.5 - this.date.getHours()) * 36 -
										this.date.getMinutes() * 0.6) + ')' : 'rotate(0)';
						var result: string = this.svgTrans.getMatrix(this.day2Const,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-2.13,-595.28)'));
						return result;
				}

				getHour(): string {
						var deg: string = 'rotate(' + (this.date.getHours() * 30 +
								this.date.getMinutes() * 0.5) + ')';
						var result: string = this.svgTrans.getMatrix(this.hourConst,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-3.54331,-595.28)'));
						return result;
				}

				getMinute(): string {
						var deg: string = 'rotate(' + this.date.getMinutes() * 6 + ')';
						var result: string = this.svgTrans.getMatrix(this.hourConst,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-3.54331,-595.28)'));
						return result;
				}

				getSecond(): string {
						var deg: string = 'rotate(' + this.date.getSeconds() * 6 + ')';
						var result: string = this.svgTrans.getMatrix(this.secondConst,
								this.svgTrans.toMatrix(deg));
						result = this.svgTrans.getMatrix(result,
								this.svgTrans.toMatrix('translate(-1.42,-595.28)'));
						return result;
				}
		}
}