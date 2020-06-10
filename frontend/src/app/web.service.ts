import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

    constructor(private http: HttpClient) {}

    getMessages() {
        return this.http.get('http://localhost:1234/api/messages').toPromise();
    }
}