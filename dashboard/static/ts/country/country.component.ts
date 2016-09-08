import {Component} from 'angular2/core';

@Component({
		selector:'country',
		template:`
			<div>
                Subscribe Country: {{ country.name }} <br>
				longitude: {{ country.longitude }} <br>
				latitude: {{ country.latitude }}
			</div>
		`,
		inputs: ["country"]
})

export class CountryComponent{
		public country = {};
};
