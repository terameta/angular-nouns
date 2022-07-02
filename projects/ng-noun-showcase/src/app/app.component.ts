import { Component } from '@angular/core';
import { nniSignIn, nniUser } from './icons';
import { IconService } from 'projects/ng-noun/src/public-api';

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
		console.log( nniSignIn );
		console.log( nniUser );
		this.iconList.push( nniUser.name );
		this.iconList.push( nniSignIn.name );
		this.iconService.registerIcons( [ nniSignIn, nniUser ] );
	}
}
