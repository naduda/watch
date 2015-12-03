'use strict';
module PrWatch {
	export interface ISVGtrans {
			toMatrix(transform: string): string;
			getMatrix(s1: string, s2: string): string;
	}
	export class SVGtrans implements ISVGtrans {
			getMatrix(s1: string, s2: string): string {
					var sep: string = s1.indexOf(',') < 0 ? ' ' : ',';
					s1 = s1.slice(7, s1.length - 1);
					s2 = s2.slice(7, s2.length - 1);
					var arr1: number[] = s1.split(sep).map(Number);
					sep = s2.indexOf(',') < 0 ? ' ' : ',';
					var arr2: number[] = s2.split(sep).map(Number);
					return 'matrix(' +
							(arr1[0] * arr2[0] + arr1[2] * arr2[1]) + sep +
							(arr1[1] * arr2[0] + arr1[3] * arr2[1]) + sep +
							(arr1[0] * arr2[2] + arr1[2] * arr2[3]) + sep +
							(arr1[1] * arr2[2] + arr1[3] * arr2[3]) + sep +
							(arr1[0] * arr2[4] + arr1[2] * arr2[5] + arr1[4]) + sep +
							(arr1[1] * arr2[4] + arr1[3] * arr2[5] + arr1[5]) + ')';
			}

			toMatrix(transform: string): string {
					var sp: string[] = transform.split(')'),
							matrix: string = '';
					for (var i: number = 0; i < sp.length; i++) {
							if (sp[i].length < 1) break;
							sp[i] = sp[i].trim() + ')';

							var key: string = sp[i].slice(0, sp[i].indexOf('(')),
									params: string[] = sp[i].slice(sp[i].indexOf('(') + 1,
									sp[i].length - 1).split(',');
							switch (key) {
									case 'translate':
											matrix += 'matrix(1,0,0,1,' + params[0] + ',' + params[1] + ')';
											break;
									case 'scale':
											if (params.length > 1) {
													matrix += 'matrix(' + params[0] + ',0,0,' + params[1] + ',0,0)';
											} else {
													matrix += 'matrix(' + params[0] + ',0,0,' + params[0] + ',0,0)';
											}
											break;
									case 'rotate':
											var toRadians = (deg) => deg * (Math.PI / 180),
													cosX: number = Math.cos(toRadians(params[0])),
													sinX: number = Math.sin(toRadians(params[0]));
											matrix += 'matrix(' + cosX + ',' + sinX + ',' + (-sinX) + ',' + cosX + ',0,0)';
											break;
									default:
											console.log(' === ' + sp[i] + '\n');
											break;
							}
							matrix = matrix.replace(' ', '') + '|';
					}
					matrix = matrix.slice(0, matrix.length - 1);
					var matrixs: string[] = matrix.split('|'),
							result: string = '';
					for (var i: number = 1; i < matrixs.length; i++) {
							result = i == 1 ? 
								this.getMatrix(matrixs[i - 1], matrixs[i]) :
								this.getMatrix(result, matrixs[i]);
					}
					if (matrixs.length == 1) result = matrixs[0];
					return result;
			}
	}
}