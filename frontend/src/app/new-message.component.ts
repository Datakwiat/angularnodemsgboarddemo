import { Component, EventEmitter, Output } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
        <mat-card-content>
            <mat-form-field appearance="fill">
                <input [(ngModel)]="message.owner" matInput placeholder="Name">
            </mat-form-field>
            
            <mat-form-field appearance="fill">
                <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
            </mat-form-field>
            <mat-card-actions>
                <button (click)="post()" mat-button color="primary">POST</button>
            </mat-card-actions>
        </mat-card-content>
        </mat-card>
    `
})
export class NewMessageComponent {

    // output property 
    @Output() onPosted = new EventEmitter();

    constructor(private webService : WebService) {}

    message = {
        owner: "",
        text: ""
    }

    async post() {
        await this.webService.postMessage(this.message);
        
        // call event when a new message is posted
        this.onPosted.emit(this.message);
    }
}