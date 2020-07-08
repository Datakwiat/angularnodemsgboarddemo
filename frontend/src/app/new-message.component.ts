import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
        </mat-card>
    `
})
export class NewMessageComponent {
    constructor(private webService : WebService) {}

}