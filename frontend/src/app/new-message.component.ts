import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
        <mat-card-content>
            <mat-form-field appearance="fill">
                <input matInput placeholder="Name">
            </mat-form-field>
            
            <mat-form-field appearance="fill">
                <textarea matInput placeholder="Message"></textarea>
            </mat-form-field>
        </mat-card-content>
        </mat-card>
    `
})
export class NewMessageComponent {
    constructor(private webService : WebService) {}

}