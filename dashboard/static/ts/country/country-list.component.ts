import {Component} from 'angular2/core';
import {CountryComponent} from './country.component';

@Component({
		selector:'country-list',
		template:`
        <h3>Choose a country you want.</h3>
		<ul>
			<li *ngFor="#country of countries"
				(click)="onSelect(country)"
				[class.clicked]="selectedCountry === country"	
			>{{ country.name }}
			</li>
		</ul>
		<country [country]="selectedCountry"></country>
		`,
		directives: [CountryComponent],
		styleUrls: ["/css/app.css"],
})

export class CountryListComponent{
	public countries = [{
			id: 1,
			name: 'Taiwan',
			longitude: '121.33.20 - E',
			latitude: '25.05.14 - N'
	},{
			id: 2,
			name: 'Japan',
			longitude: '139.42.54 - E',
			latitude: '35.42.2 - N'
	},{
			id: 3,
			name: 'America',
			longitude: '77.02.14 - W',
			latitude: '38.53.55 - N'
	},{
			id: 4,
			name: 'Australia',
			longitude: '144.58 - E',
			latitude: '37.50 - S'
	}];
	
	public selectedCountry = {};

	onSelect(country){
		this.selectedCountry = country;
	};
}
