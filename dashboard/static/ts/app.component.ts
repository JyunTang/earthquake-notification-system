import {Component} from 'angular2/core';
import {ContactListComponent} from './contact/contact-list.component';

@Component({
    selector: 'my-app',
    template: `
		<contact-list></contact-list>
	`,
	directives: [ContactListComponent]
})

export class AppComponent {
}
