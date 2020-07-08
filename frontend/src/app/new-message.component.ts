import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
            <mat-card-content>
            <mat-input-container>
                <input matinput placeholder="Name">
            </mat-input-container>
            </mat-card-content>  
        </mat-card>
    `
})
export class NewMessageComponent {
    constructor(private webService : WebService) {}

}