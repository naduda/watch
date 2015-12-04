///<reference path="SVGtrans.ts" />
'use strict';
module PrWatch {
		export class Constants {
				private static svgTrans: PrWatch.SVGtrans = new PrWatch.SVGtrans();

				static get MONTH(): string {
						return this.svgTrans.getMatrix(
								'matrix(1.0,0.0,0.0,1.0,200.5477376351994,-184.91156487470812)',
								this.svgTrans.toMatrix('translate(1.41732,595.28)')
						);
				}

				static get DAY(): string {
						return this.svgTrans.getMatrix(
								'matrix(1.0,0.0,0.0,1.0,92.54211012072123,-289.69371699023174)',
								this.svgTrans.toMatrix('translate(2.83,595.28)')
						);
				}

				static get DAY2(): string {
						return this.svgTrans.getMatrix(
								'matrix(1,0.0,0.0,1,303.67376849073605,-289.3052647383786)',
								this.svgTrans.toMatrix('translate(2.13,595.28)')
						);
				}

				static get DAY_OF_MONTH(): string {
						return this.svgTrans.getMatrix(
								'matrix(1.0,0.0,0.0,1.0,199.4529305763151,-184.7842781123805)',
								this.svgTrans.toMatrix('translate(2.13,595.28)')
						);
				}

				static get HOUR(): string {
						return this.svgTrans.getMatrix(
								'matrix(1.0,0.0,0.0,1.0,197.14752635431816,-290.08114601071054)',
								this.svgTrans.toMatrix('translate(3.54331,595.28)')
						);
				}

				static get SECOND(): string {
						return this.svgTrans.getMatrix(
								'matrix(1,0.0,0.0,1,93.92443654301435,-289.75807529460815)',
								this.svgTrans.toMatrix('translate(1.42,595.28)')
						);
				}
		}
}