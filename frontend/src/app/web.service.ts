import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
          console.error("Unable to get messages");
          this.sb.open("Unable to get messages", 'close', {duration: 2000});
        }
        
    }

    // Take input of message object
    async postMessage(message) {
        var response = await this.http.post(this.URI, message)
        .pipe(catchError(this.handleError))
        .toPromise()
        ;
        this.messages.push(response);
    } 

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      }
    
}