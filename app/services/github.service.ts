import { Injectable } from '@angular/core';  
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class GitHubService {  
    username: string;
    url     : string =  `https://api.github.com/search/users?`;
    constructor(private http: Http) {
        // constructor code here..
    }
    // get users data from github api
    getUsers (username:string) {
        let url:string;
        if(!username){
            return  Observable.throw(new Error("User name query can not be empty."));
        }
        this.username = username;
        url = this.url + 'q=' + this.username;
        return this.http.get(url).map(res => res.json().items);
    }
}