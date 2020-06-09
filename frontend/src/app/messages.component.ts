import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    template: 'this is the messages component {{messages[0].text}}'
})
export class MessagesComponent {
    messages = [{text:'some text', owner: 'Bob'}, {text: 'more text', owner: 'Jane'}];
}