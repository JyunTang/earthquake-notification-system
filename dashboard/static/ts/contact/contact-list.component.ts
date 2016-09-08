import {Component} from 'angular2/core';
import {ContactComponent} from './contact.component';

@Component({
		selector:'contact-list',
		template:`
		<ul>
			<li *ngFor="#contact of contacts"
				(click)="onSelect(contact)"
				[class.clicked]="selectedContact === contact"	
			>{{ contact.firstname }} {{contact.lastname}}
			</li>
		</ul>
		<contact [contact]="selectedContact"></contact>
		`,
		directives: [ContactComponent],
		styleUrls: ["/css/app.css"],
})

export class ContactListComponent{
	public contacts = [{
			id: 1,
			firstname: 'JianHao',
			lastname: 'Chen',
			phone: '0983978729',
			email: 'a7533258@gmail.com'
	},{
			id: 2,
			firstname: 'PeiShan',
			lastname: 'Tsai',
			phone: '0987881769',
			email: 'tsai@gmail.com'
	},{
			id: 3,
			firstname: 'Father',
			lastname: 'Chen',
			phone: '0921272788',
			email: 'papa@gmail.com'
	},{
			id: 4,
			firstname: 'Mother',
			lastname: 'Hong',
			phone: '0913629882',
			email: 'mama@gmail.com'
	}];
	
	public selectedContact = {};

	onSelect(contact){
		this.selectedContact = contact;
	};
}
