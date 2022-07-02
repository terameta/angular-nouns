import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { IconService } from './ng-noun-icon.service';

@Component( {
	selector: 'nn-icon',
	template: `
		<ng-content></ng-content>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class IconComponent {

	private _size = 1;
	private svgIcon: SVGElement | null = null;

	@Input()
	set size ( iconSize: number ) {
		this._size = iconSize;
	}

	@Input()
	set name ( iconName: string ) {
		if ( this.svgIcon ) {
			this.element.nativeElement.removeChild( this.svgIcon );
		}
		const svgData = this.iconService.getIcon( iconName );
		this.svgIcon = this.svgElementFromString( svgData! );
		this.element.nativeElement.appendChild( this.svgIcon );
	}

	// @Input() size = 1;


	constructor(
		private element: ElementRef,
		private iconService: IconService,
		@Optional() @Inject( DOCUMENT ) private document: any,
	) {
		console.log( 'Size', this._size );
		setTimeout( () => {
			console.log( 'Size after 3 seconds', this._size );
		}, 3000 );
	}

	private svgElementFromString ( svgContent: string ): SVGElement {
		// svgContent = svgContent.replace( '<svg', `<svg style="width:${ this._size }rem;height:${ this._size }rem;"` );
		// console.log( svgContent.indexOf( '<svg' ) );
		const div = this.document.createElement( 'div' );
		div.innerHTML = svgContent;
		// console.log( svgContent );
		return div.querySelector( 'svg' ) || this.document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	}

}
