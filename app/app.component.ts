import { Component } from "@angular/core";  
import { Observable } from 'rxjs/Observable';  
import { GitHubService } from './services/github.service';

@Component({
    selector: "my-app",
    providers: [GitHubService],
    templateUrl: "app.component.html",
})
export class AppComponent  {  
    public username:string;
    public isLoading:boolean = false;
    public users:Array<Object> = [];
    // inject github services
    constructor(private github:GitHubService) {
        // constructor code here...
    }
    // onSearch Button tap
    public onSearchTap() {
        if(!this.username){
            alert("Username can not be empty!");
            return;
        }
        this.isLoading = true;
        this.github.getUsers(this.username).subscribe((users) => {
            this.users = users;
            this.isLoading = false;
        });
    }
}