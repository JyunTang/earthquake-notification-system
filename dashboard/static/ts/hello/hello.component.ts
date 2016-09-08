import {Component} from 'angular2/core';

@Component({
    selector: 'hello',
    template: `
		<h2>Hello~ {{ username }}, Welcome to ENS.</h2>
		What's your name?
        <input [(ngModel)]="username" type="text">
	`
})

export class HelloComponent{
		public username = '';
};
