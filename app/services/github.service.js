"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var GitHubService = (function () {
    function GitHubService(http) {
        this.http = http;
        this.url = "https://api.github.com/search/users?";
        // constructor code here..
    }
    // get users data from github api
    GitHubService.prototype.getUsers = function (username) {
        var url;
        if (!username) {
            return Observable_1.Observable.throw(new Error("User name query can not be empty."));
        }
        this.username = username;
        url = this.url + 'q=' + this.username;
        return this.http.get(url).map(function (res) { return res.json().items; });
    };
    GitHubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GitHubService);
    return GitHubService;
}());
exports.GitHubService = GitHubService;
//# sourceMappingURL=github.service.js.map