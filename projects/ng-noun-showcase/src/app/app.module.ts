import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgNounModule } from 'projects/ng-noun/src/public-api';

import { AppComponent } from './app.component';

@NgModule( {
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		NgNounModule
	],
	providers: [],
	bootstrap: [ AppComponent ],
} )
export class AppModule { }
