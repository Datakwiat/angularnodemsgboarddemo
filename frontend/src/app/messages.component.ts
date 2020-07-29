import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
        <mat-card class="card">
            <mat-card-title> {{message.owner}} </mat-card-title>
            <mat-card-content>
                {{message.text}}
            </mat-card-content>
        </mat-card>
        </div>
    `
})
export class MessagesComponent {
    constructor(private webService : WebService) {}

    async ngOnInit(){
        // Using await is a more elegant syntax of getting the promise result than promise.then, easier to read and write.
        var response = await this.webService.getMessages();
        //console.log(JSON.stringify(response));

        //this.messages = response.json(); //invalid object without typescript casting
        this.messages = response;

        console.log("Messages from backend: ", this.messages);
        
    }

    messages = [];
}