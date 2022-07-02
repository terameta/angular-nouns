import { Injectable } from '@angular/core';
import { Icon } from './icons';

@Injectable( { providedIn: 'root' } )
export class IconService {

	private registry = new Map<string, string>();

	constructor() { }

	public registerIcons = ( icons: Icon[] ): void => {

		for ( const icon of icons ) {
			console.log( icon );
			this.registry.set( icon.name, icon.data );
		}

	}


	public getIcon ( iconName: string ): string | undefined {
		if ( !this.registry.has( iconName ) ) {
			console.warn( `We could not find the dinosaur Icon with the name ${ iconName }, did you add it to the Icon registry?` );
		}
		return this.registry.get( iconName );
	}
}