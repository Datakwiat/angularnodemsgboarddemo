import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    URI = 'http://localhost:1234/api/messages';

    constructor(private http: HttpClient) {}

    getMessages() {
        // TypeScript casting to array is required to extract the object returned
        return this.http.get<Array<any>>(this.URI).toPromise();
    }

    // Take input of message object
    postMessage(message) {
        return this.http.post(this.URI, message, {responseType: 'text'})
        .pipe(catchError(this.handleError))
        .toPromise()
        ;
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