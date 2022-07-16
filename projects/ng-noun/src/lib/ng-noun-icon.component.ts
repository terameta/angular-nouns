import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, AfterViewInit } from '@angular/core';
import { IconService } from './ng-noun-icon.service';

@Component( {
	selector: 'nn-icon',
	template: `
		<ng-content></ng-content>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class IconComponent implements AfterViewInit {

	private _size = 1;
	private svgIcon: SVGElement | null = null;
	private _iconName = '';

	@Input()
	set size ( iconSize: number ) {
		this._size = iconSize;
	}

	@Input() set name ( iconName: string ) { this._iconName = iconName; }

	// @Input() size = 1;


	constructor(
		private element: ElementRef,
		private iconService: IconService,
		@Optional() @Inject( DOCUMENT ) private document: any,
	) { }

	private svgElementFromString ( svgContent: string ): SVGElement {
		svgContent = svgContent.replace( '<svg', `<svg style="width:${ this._size }rem;height:${ this._size }rem;"` );
		// console.log( svgContent.indexOf( '<svg' ) );
		const div = this.document.createElement( 'div' );
		div.innerHTML = svgContent;
		// console.log( svgContent );
		return div.querySelector( 'svg' ) || this.document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
	}

	ngAfterViewInit (): void {
		if ( this.svgIcon ) {
			this.element.nativeElement.removeChild( this.svgIcon );
		}
		const svgData = this.iconService.getIcon( this._iconName );
		this.svgIcon = this.svgElementFromString( svgData! );
		this.element.nativeElement.appendChild( this.svgIcon );
	}

}
