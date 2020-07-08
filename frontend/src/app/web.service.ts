import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Trial Angular Heroes tutorial class
// class getmsg {
//     constructor(
//         public text: string,
//         public owner: string
//     ) { }
// }

@Injectable()
export class WebService {

    constructor(private http: HttpClient) {}

    async getMessages() {
        let URI = 'http://localhost:1234/api/messages';
        //return this.http.get(URI).toPromise();
        // TypeScript casting to array is required to extract the object returned
        return this.http.get<Array<any>>(URI).toPromise();
        
    }
}