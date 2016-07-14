"use strict";
var core_1 = require("@angular/core");
var github_service_1 = require('./services/github.service');
var AppComponent = (function () {
    // inject github services
    function AppComponent(github) {
        this.github = github;
        this.isLoading = false;
        this.users = [];
        // constructor code here...
    }
    // onSearch Button tap
    AppComponent.prototype.onSearchTap = function () {
        var _this = this;
        if (!this.username) {
            alert("Username can not be empty!");
            return;
        }
        this.isLoading = true;
        this.github.getUsers(this.username).subscribe(function (users) {
            _this.users = users;
            _this.isLoading = false;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [github_service_1.GitHubService],
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [github_service_1.GitHubService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map