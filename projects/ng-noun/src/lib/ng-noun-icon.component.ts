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

	private svgIcon: SVGElement | null = null;

	@Input()
	set name ( iconName: string ) {
		if ( this.svgIcon ) {
			this.element.nativeElement.removeChild( this.svgIcon );
		}
		const svgData = this.iconService.getIcon( iconName );
		this.svgIcon = this.svgElementFromString( svgData! );
		this.element.nativeElement.appendChild( this.svgIcon );
	}

	constructor(
		private element: ElementRef,
		private iconService: IconService,
		@Optional() @Inject( DOCUMENT ) private document: any,
	) {
	}

	private svgElementFromString ( svgContent: string ): SVGElement {
		const div = this.document.createElement( 'div' );
		div.innerHTML = svgContent;
		return div.querySelector( 'svg' ) || this.document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	}

}
