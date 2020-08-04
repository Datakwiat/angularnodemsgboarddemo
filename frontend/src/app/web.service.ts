import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class WebService {
    URI = 'http://localhost:1234/api/messages';

    messages = [];

    constructor(private http: HttpClient, public sb : MatSnackBar) {
      this.getMessages();
    }

    async getMessages() {
        try {
            // TypeScript casting to array is required to extract the object returned
            var response = await this.http.get<Array<any>>(this.URI).toPromise();
            this.messages = response;
            console.log("Got messages from backend: ", this.messages);
        } catch (error) {
            this.handleError("Unable to get messages");
        }
        
    }

    // Take input of message object
    async postMessage(message) {
      try {
          var response = await this.http.post(this.URI, message).toPromise();
          this.messages.push(response);
      } catch (error) {
          this.handleError("Unable to post message");
      }
        
    }

    private handleError(error) {
      console.error(error);
      this.sb.open(error, 'close', {duration: 2000});
    }
    
}