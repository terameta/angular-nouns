import { Component } from '@angular/core';
// import * as icons from 'projects/ng-noun/src/lib/icons';
import { IconService } from 'projects/ng-noun/src/public-api';
import { dinosaurIconsArtist, dinosaurIconsChef } from 'projects/ng-noun/src/lib/icons';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
} )
export class AppComponent {
	title = 'ng-noun-showcase';

	public iconList: string[] = [];

	constructor( private iconService: IconService ) {

		// for ( const icon of Object.keys( icons ) ) {
		// 	console.log( ( icons as any )[ icon ] );
		// 	this.iconList.push( ( icons as any )[ icon ].name );
		// }
		this.iconService.registerIcons( [ dinosaurIconsArtist, dinosaurIconsChef ] );
	}
}
