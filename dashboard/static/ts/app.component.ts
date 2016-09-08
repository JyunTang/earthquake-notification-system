import {Component} from 'angular2/core';
import {CountryListComponent} from './country/country-list.component';
import {HelloComponent} from './hello/hello.component';

@Component({
    selector: 'my-app',
    template: `
        <hello></hello>
		<country-list></country-list>
	`,
	directives: [HelloComponent,CountryListComponent]
})

export class AppComponent {
}
