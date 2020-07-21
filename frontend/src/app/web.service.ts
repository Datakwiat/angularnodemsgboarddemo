import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    URI = 'http://localhost:1234/api/messages';
    constructor(private http: HttpClient) {}

    async getMessages() {
        // TypeScript casting to array is required to extract the object returned
        return this.http.get<Array<any>>(this.URI).toPromise();
    }

    // Take input of message object
    async postMessage(message) {
        return this.http.post(this.URI, message).toPromise();
    }
}