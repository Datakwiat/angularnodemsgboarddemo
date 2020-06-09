import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
            {{message.text}} by {{message.owner}}
            <button mat-raised-button>Basic raised button</button>
        </div>
    `
})
export class MessagesComponent {
    messages = [{text:'some text', owner: 'Bob'}, {text: 'more text', owner: 'Jane'}];
}