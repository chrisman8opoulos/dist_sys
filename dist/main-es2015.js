(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/add-user/add-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/add-user/add-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 offset-md-2 mt-2\">\n    <div class=\"alert alert-info\">\n        <strong>Admin </strong> Panel <br />\n    </div>\n    <div class=\"card\">\n        <h4 class=\"card-header\">Εγραφή χρήστη</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                  </div>\n              </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"name\">Όνομα</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.name.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Επώνυμο</label>\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                    <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.lastName.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                <label>Παράρτημα: </label>\n                <select (change)=\"selectDeparture($event)\">\n                  <option value=\"\">Επιλογή</option>\n                  <option value=\"1\">1 Παράρτημα</option>\n                  <option value=\"2\">2 Παραρτημα</option>\n                  <option value=\"3\">3 Παραρτημα</option>\n                </select>\n              </div>\n                <div class=\"form-group\">\n                    <label for=\"address\">Διεύθυνση</label>\n                    <input type=\"text\" formControlName=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\n                    <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.address.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"phone\">Τηλέφωνο</label>\n                    <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n                    <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.phone.errors.required\">Password is required</div>\n                    </div>\n                </div>\n              <div class=\"form-group\">\n              <label>Δικαιώμα: </label>\n              <select (change)=\"selectRights($event)\">\n                <option value=\"\">Επιλογή</option>\n                <option value=\"admin\">Διαχειριστλης</option>\n                <option value=\"supervisior\">Προιστάμενος</option>\n                <option value=\"subsistent\">Υφιστάμενος</option>\n                <option value=\"user\">Φοιτητης</option>\n              </select>\n            </div>\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Εγγραφή\n            </button>\n            <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n        </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 user-container\">\n  <h2 style=\"margin: auto\"> User Details</h2>\n  <button class=\"btn btn-danger\" style=\"width:100px\" (click)=\"addUser()\"> Add User</button>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Username</th>\n      <th>Όνομα</th>\n      <th>Επώνυμο</th>\n      <th>Τμήμα</th>\n      <th>Ρόλος</th>\n      <th>Διέυθυνση</th>\n      <th>Τηλέφωνο</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.username}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.department}}</td>\n      <td>{{user.role}}</td>\n      <td>{{user.address}}</td>\n      <td>{{user.phone}}</td>\n      <td><button class=\"btn btn-success\" (click)=\"deleteUser(user)\"> Delete</button>\n        <button class=\"btn btn-success\" (click)=\"editUser(user)\" style=\"margin-left: 20px;\"> Edit</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- <div class=\"col-md-10 offset-md-2 mt-2\">\n    <div class=\"alert alert-info\">\n        <strong>Admin </strong> Panel <br />\n    </div>\n    <div class=\"card\">\n        <h4 class=\"card-header\">Εγραφή χρήστη</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"username\">Username</label>\n                  <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                  <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                  </div>\n              </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n              <div class=\"form-group\">\n              <label>Δικαιώμα: </label>\n              <select (change)=\"selectChangeHandler($event)\">\n                <option value=\"\">Επιλογή</option>\n                <option value=\"admin\">Διαχειριστλης</option>\n                <option value=\"supervision\">Προιστάμενος</option>\n                <option value=\"subsistent\">Υφιστάμενος</option>\n                <option value=\"user\">Φοιτητης</option>\n              </select>\n            </div>\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Register\n            </button>\n            <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n        </form>\n    </div>\n  </div><\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/edit-user/edit-user.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/edit-user/edit-user.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n  <h2 class=\"text-center\">Edit User</h2>\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"hidden\">\n      <input readonly=\"readonly\" type=\"text\" formControlName=\"id\" placeholder=\"id\" name=\"id\" class=\"form-control\" id=\"id\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n      <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"firstName\">Όνομα</label>\n          <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.firstName.errors.required\">Password is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"lastName\">Επώνυμο</label>\n          <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lastName.errors.required\">Password is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n      <label>Παράρτημα: </label>\n      <select formControlName=\"department\" (change)=\"selectDeparture($event)\">\n        <option value=\"\">Επιλογή</option>\n        <option value=\"one\">1 Παράρτημα</option>\n        <option value=\"two\">2 Παραρτημα</option>\n        <option value=\"three\">3 Παραρτημα</option>\n      </select>\n    </div>\n      <div class=\"form-group\">\n          <label for=\"address\">Διεύθυνση</label>\n          <input type=\"text\" formControlName=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\n          <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.address.errors.required\">Password is required</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"phone\">Τηλέφωνο</label>\n          <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n          <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.phone.errors.required\">Password is required</div>\n          </div>\n      </div>\n    <div class=\"form-group\">\n    <label>Δικαιώμα: </label>\n    <select formControlName=\"role\" (change)=\"selectRights($event)\">\n      <option value=\"\">Επιλογή</option>\n      <option value=\"admin\">Διαχειριστλης</option>\n      <option value=\"supervision\">Προιστάμενος</option>\n      <option value=\"subsistent\">Υφιστάμενος</option>\n      <option value=\"user\">Φοιτητης</option>\n    </select>\n  </div>\n    <button class=\"btn btn-success\">Ενημέρωση</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- nav -->\n<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Κεντρική Σελίδα</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin\">Διαχειριστής</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/user\" *ngIf=\"isUser\">Φοιτητής</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/supervisior\" *ngIf=\"isSupervisior\">Προϊστάμενος</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/subsistent\" *ngIf=\"isSubsistent\">Υφιστάμενος</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Αποσύνδεδη</a>\n    </div>\n</nav>\n\n<!-- main app container -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<!-- credits -->\n<div class=\"text-center mt-4\">\n    <p>\n        <a href=\"https://www.hua.gr/index.php/el/\" target=\"_top\">Χαροκόπειο Πανεπιστήμιο</a>\n    </p>\n    <p>\n        <a href=\"https://www.hua.gr/index.php/el/administration-3/departments-secretariats\" target=\"_top\">Γραμματείες Τμημάτων</a>\n    </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\n    <h4 class=\"card-header\">Κεντρική Σελίδα</h4>\n    <div class=\"card-body\">\n        <p>Ο ρόλος σας είναι: <strong>{{currentUser.role}}</strong>.</p>\n        <p>Αυτή η σελίδα μπορεί να προσεγγιστεί από <u>όλους τους χρήστες που έχουν πιστοποιηθεί</u>.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 mt-5\">\n    <div class=\"alert alert-info\">\n      Καλως ηρθατε στην πλατφορμα για την συμπλήρωση της αίτησης στέγασης\n    </div>\n    <div class=\"card\">\n        <h4 class=\"card-header\">Είσοδος</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Login\n                </button>\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/subsistent/subsistent.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/subsistent/subsistent.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 user-container\">\n  <h2 style=\"margin: auto\"> User Details</h2>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Username</th>\n      <th>Όνομα</th>\n      <th>Επώνυμο</th>\n      <th>Τμήμα</th>\n      <th>Διέυθυνση</th>\n      <th>Τηλέφωνο</th>\n      <th>Ενεργός</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.username}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.department}}</td>\n      <td>{{user.address}}</td>\n      <td>{{user.phone}}</td>\n      <td>{{user.activate}}</td>\n      <td>\n        <button *ngIf=\"!user.activate\" class=\"btn btn-success\" (click)=\"activeUser(user)\" style=\"margin-left: 18px;\">Ενεργοποίηση</button>\n        <button *ngIf=\"user.activate\" class=\"btn btn-success\" (click)=\"dActiveUser(user)\" style=\"margin-left: 18px;\">Απενεργοποίηση</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/supervisior/supervisior.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/supervisior/supervisior.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 user-container\">\n  <h2 style=\"margin: auto\"> Τμήμα 1</h2>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Όνομα</th>\n      <th>Επώνυμο</th>\n      <th>Εισόδημα</th>\n      <th>Ανεργοι Γονεις</th>\n      <th>Αδέρφια στην ιδια πόλη</th>\n      <th>Σε άλλη πόλη</th>\n      <th>Χρόνια στην εστία</th>\n      <th>Χρόνια που σπυδάζει</th>\n      <th>Μόρια</th>\n      <th>Εγκρίνεται</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let dep1 of depart1\">\n      <td>{{dep1.firstName}}</td>\n      <td>{{dep1.lastName}}</td>\n      <td>{{dep1.income}}</td>\n      <td>{{dep1.notJob}}</td>\n      <td>{{dep1.brothersSameCity}}</td>\n      <td>{{dep1.brothersAnotherCity}}</td>\n      <td>{{dep1.yearHome}}</td>\n      <td>{{dep1.yearStudy}}</td>\n      <td>{{dep1.finalPoint}}</td>\n      <td>{{dep1.approve}}</td>\n      <td>\n        <button *ngIf=\"!dep1.approve\" class=\"btn btn-success\" (click)=\"activeRequest(dep1)\" style=\"margin-left: 18px;\">Ενεργοποίηση</button>\n        <button *ngIf=\"dep1.approve\" class=\"btn btn-success\" (click)=\"dActiveRequest(dep1)\" style=\"margin-left: 18px;\">Απενεργοποίηση</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"col-md-12 user-container\">\n  <h2 style=\"margin: auto\"> Τμήμα 2</h2>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Όνομα</th>\n      <th>Επώνυμο</th>\n      <th>Εισόδημα</th>\n      <th>Ανεργοι Γονεις</th>\n      <th>Αδέρφια στην ιδια πόλη</th>\n      <th>Σε άλλη πόλη</th>\n      <th>Χρόνια στην εστία</th>\n      <th>Χρόνια που σπυδάζει</th>\n      <th>Μόρια</th>\n      <th>Εγκρίνεται</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let dep2 of depart2\">\n      <td>{{dep2.firstName}}</td>\n      <td>{{dep2.lastName}}</td>\n      <td>{{dep2.income}}</td>\n      <td>{{dep2.notJob}}</td>\n      <td>{{dep2.brothersSameCity}}</td>\n      <td>{{dep2.brothersAnotherCity}}</td>\n      <td>{{dep2.yearHome}}</td>\n      <td>{{dep2.yearStudy}}</td>\n      <td>{{dep2.finalPoint}}</td>\n      <td>{{dep2.approve}}</td>\n      <td>\n        <button *ngIf=\"!dep2.approve\" class=\"btn btn-success\" (click)=\"activeRequest(dep2)\" style=\"margin-left: 18px;\">Ενεργοποίηση</button>\n        <button *ngIf=\"dep2.approve\" class=\"btn btn-success\" (click)=\"dActiveRequest(dep2)\" style=\"margin-left: 18px;\">Απενεργοποίηση</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"col-md-12 user-container\">\n  <h2 style=\"margin: auto\"> Τμήμα 3</h2>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Όνομα</th>\n      <th>Επώνυμο</th>\n      <th>Εισόδημα</th>\n      <th>Ανεργοι Γονεις</th>\n      <th>Αδέρφια στην ιδια πόλη</th>\n      <th>Σε άλλη πόλη</th>\n      <th>Χρόνια στην εστία</th>\n      <th>Χρόνια που σπυδάζει</th>\n      <th>Μόρια</th>\n      <th>Εγκρίνεται</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let dep3 of depart3\">\n      <td>{{dep3.firstName}}</td>\n      <td>{{dep3.lastName}}</td>\n      <td>{{dep3.income}}</td>\n      <td>{{dep3.notJob}}</td>\n      <td>{{dep3.brothersSameCity}}</td>\n      <td>{{dep3.brothersAnotherCity}}</td>\n      <td>{{dep3.yearHome}}</td>\n      <td>{{dep3.yearStudy}}</td>\n      <td>{{dep3.finalPoint}}</td>\n      <td>{{dep3.approve}}</td>\n      <td>\n        <button *ngIf=\"!dep3.approve\" class=\"btn btn-success\" (click)=\"activeRequest(dep3)\" style=\"margin-left: 18px;\">Ενεργοποίηση</button>\n        <button *ngIf=\"dep3.approve\" class=\"btn btn-success\" (click)=\"dActiveRequest(dep3)\" style=\"margin-left: 18px;\">Απενεργοποίηση</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/form/form.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/form/form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 offset-md-2 mt-2\">\n    <div class=\"alert alert-info\">\n        <strong>Δηλώνω ρητά και υπεύθυνα ότι κάθε στοιχείο που καταχωρώ είναι\n          ακριβές και αληθές. Με δική μου ευθύνη να ενημερώνω και να\n          επικαιροποιω τα καταχωρισμένα στοιχεία για τυχόν αλλαγές </strong> <br />\n    </div>\n    <div class=\"card\">\n        <h4 class=\"card-header\">Αιτηση για στεγαση</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"homeForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n                <div class=\"form-group\">\n                    <label for=\"income\">Εισόδημα</label>\n                    <input type=\"text\" formControlName=\"income\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.income.errors }\" />\n                    <div *ngIf=\"submitted && f.income.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">απαραιτητο πεδιο</div>\n                    </div>\n                </div>\n              <div class=\"form-group\">\n              <label>Άνεργοι γονείς: </label>\n              <select (change)=\"selectChangeHandler($event)\">\n                <option value=\"\">Επιλογή</option>\n                <option value=\"0\">Κανεις</option>\n                <option value=\"1\">Ένας</option>\n                <option value=\"2\">Δύο</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"childOut\">Αριθμος αδερφιών που σπουδαζουν σε άλλη Πόλη</label>\n                <input type=\"text\" formControlName=\"childOut\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.childOut.errors }\" />\n                <div *ngIf=\"submitted && f.childOut.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.childOut.errors.required\">απαραιτητο πεδιο</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"childIn\">Αριθμος αδερφιών που σπουδαζουν στην ιδια Πόλη</label>\n                <input type=\"text\" formControlName=\"childIn\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.childIn.errors }\" />\n                <div *ngIf=\"submitted && f.childIn.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.childIn.errors.required\">απαραιτητο πεδιο</div>\n                </div>\n            </div>\n          \n            <div class=\"form-group\">\n                <label for=\"years\">συνολο χρώνω διαμονείς στις Εστίες</label>\n                <input type=\"text\" formControlName=\"years\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.years.errors }\" />\n                <div *ngIf=\"submitted && f.years.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.years.errors.required\">απαραιτητο πεδιο</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"yearsStudy\">Έτος φοιτησεις</label>\n                <input type=\"text\" formControlName=\"yearsStudy\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.yearsStudy.errors }\" />\n                <div *ngIf=\"submitted && f.yearsStudy.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.yearsStudy.errors.required\">απαραιτητο πεδιο</div>\n                </div>\n            </div>\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                Send\n            </button>\n            <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n        </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            console.log(err);
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/app/_models/application.ts":
/*!****************************************!*\
  !*** ./src/app/_models/application.ts ***!
  \****************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
class Application {
    constructor() { }
}


/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: Role, User, Jwt, Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role */ "./src/app/_models/role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _role__WEBPACK_IMPORTED_MODULE_0__["Role"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });

/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt */ "./src/app/_models/jwt.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Jwt", function() { return _jwt__WEBPACK_IMPORTED_MODULE_2__["Jwt"]; });

/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application */ "./src/app/_models/application.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _application__WEBPACK_IMPORTED_MODULE_3__["Application"]; });







/***/ }),

/***/ "./src/app/_models/jwt.ts":
/*!********************************!*\
  !*** ./src/app/_models/jwt.ts ***!
  \********************************/
/*! exports provided: Jwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jwt", function() { return Jwt; });
class Jwt {
    constructor() { }
}


/***/ }),

/***/ "./src/app/_models/role.ts":
/*!*********************************!*\
  !*** ./src/app/_models/role.ts ***!
  \*********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
    Role["Subsistent"] = "subsistent";
    Role["Supervisior"] = "supervisior";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() { }
}


/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/_models */ "./src/app/_models/index.ts");







let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        let user = new _app_models__WEBPACK_IMPORTED_MODULE_6__["User"]();
        user.username = username;
        user.password = password;
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/authenticate`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            console.log("user");
            console.log(user);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    register(username, password, role, firstName, lastName, department, address, phone) {
        let user = new _app_models__WEBPACK_IMPORTED_MODULE_6__["User"]();
        user.username = username;
        user.password = password;
        user.role = role;
        user.firstName = firstName;
        user.lastName = lastName;
        user.department = department;
        user.address = address;
        user.phone = phone;
        console.log(user);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/register`, user);
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });





/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        let obj = JSON.parse(localStorage.getItem('currentUser'));
        console.log(obj);
        this.token = obj['token'];
    }
    requestRegister(request) {
        // let obj = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(obj);
        // let token = obj['token'];
        // console.log(token);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/request`, request, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    getUsers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/admin/getusers`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    createUser(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/admin/register`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    deleteUser(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/admin/delete`, user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    updateUser(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/admin/modify`, user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    getUserById(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/admin/getuser`, user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    getOnlyUsers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/subsistent/getusers`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    activateUsers(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/subsistent/activateuser`, user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    dActivateUsers(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/subsistent/dactivateuser`, user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    getRequest(request) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/supervisior/getrequest/` + request, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    activateRequest(request) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/supervisior/activaterequest`, request, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
    dActivateRequest(request) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/supervisior/dactivaterequest`, request, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            })
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/admin/add-user/add-user.component.less":
/*!********************************************************!*\
  !*** ./src/app/admin/add-user/add-user.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/admin/add-user/add-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/add-user/add-user.component.ts ***!
  \******************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




let AddUserComponent = class AddUserComponent {
    constructor(formBuilder, authenticationService) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    selectRights(event) {
        this.selectedRole = event.target.value;
    }
    selectDeparture(event) {
        this.selectedDepartment = event.target.value;
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        console.log(this.f.username.value);
        console.log(this.f.password.value);
        console.log(this.selectedRole);
        this.authenticationService.register(this.f.username.value, this.f.password.value, this.selectedRole, this.f.name.value, this.f.lastName.value, this.selectedDepartment, this.f.address.value, this.f.phone.value).subscribe((reponse) => {
            alert("Επιτυχής εγγραφή");
        });
        this.loading = false;
        this.loginForm.reset();
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/add-user/add-user.component.html"),
        styles: [__webpack_require__(/*! ./add-user.component.less */ "./src/app/admin/add-user/add-user.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AddUserComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdminComponent = class AdminComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getUsers()
            .subscribe(data => {
            this.users = data;
            console.log(data);
        });
    }
    deleteUser(user) {
        console.log(user);
        this.userService.deleteUser(user)
            .subscribe(data => {
            this.users = this.users.filter(u => u !== user);
        });
    }
    ;
    editUser(user) {
        console.log(user.id);
        const navigationExtras = { state: { example: user.id } };
        console.log(navigationExtras);
        this.router.navigate(['edit-user'], { queryParams: { serviceId: user.id } });
    }
    ;
    addUser() {
        this.router.navigate(['add-user']);
    }
    ;
};
AdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/edit-user/edit-user.component.less":
/*!**********************************************************!*\
  !*** ./src/app/admin/edit-user/edit-user.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/edit-user/edit-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/edit-user/edit-user.component.ts ***!
  \********************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_models */ "./src/app/_models/index.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EditUserComponent = class EditUserComponent {
    constructor(formBuilder, router, route, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    selectRights(event) {
        this.selectedRole = event.target.value;
    }
    selectDeparture(event) {
        this.selectedDepartment = event.target.value;
    }
    ngOnInit() {
        let sub = this.route
            .queryParams
            .subscribe(params => {
            // this.page = +params['serviceId'] || 0;
            this.idCurrent = params['serviceId'];
        });
        let user = new _app_models__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.id = this.idCurrent;
        console.log(user);
        this.userService.getUserById(user)
            .subscribe(data => {
            this.selectedRole = data.role;
            this.selectedDepartment = data.department;
            console.log(data);
            this.editForm = this.formBuilder.group({
                id: [data.id],
                username: [data.username, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ["****", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                firstName: [data.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                department: [data.department, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                role: [data.role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                lastName: [data.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: [data.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                phone: [data.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        });
    }
    onSubmit() {
        let values = this.editForm.value;
        console.log(values);
        let user = new _app_models__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.id = values.id;
        user.password = values.password;
        user.username = values.username;
        user.firstName = values.firstName;
        user.lastName = values.lastName;
        user.address = values.address;
        user.phone = values.phone;
        user.role = this.selectedRole;
        user.department = this.selectedDepartment;
        console.log(user);
        this.userService.updateUser(user)
            .subscribe(data => {
            console.log(data);
            if (data) {
                alert('User updated successfully.');
                this.router.navigate(['list-user']);
            }
            else {
                alert(data);
            }
        }, error => {
            alert(error);
        });
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: __webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/edit-user/edit-user.component.html"),
        styles: [__webpack_require__(/*! ./edit-user.component.less */ "./src/app/admin/edit-user/edit-user.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], EditUserComponent);



/***/ }),

/***/ "./src/app/admin/index.ts":
/*!********************************!*\
  !*** ./src/app/admin/index.ts ***!
  \********************************/
/*! exports provided: AddUserComponent, EditUserComponent, AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"]; });

/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/admin/add-user/add-user.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_1__["AddUserComponent"]; });

/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/admin/edit-user/edit-user.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["EditUserComponent"]; });




// export * from './list-user/list-user.component';


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_models */ "./src/app/_models/index.ts");





let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    get isAdmin() {
        return this.currentUser && this.currentUser.role === _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin;
    }
    get isUser() {
        return this.currentUser && this.currentUser.role === _models__WEBPACK_IMPORTED_MODULE_4__["Role"].User;
    }
    get isSupervisior() {
        return this.currentUser && this.currentUser.role === _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Supervisior;
    }
    get isSubsistent() {
        return this.currentUser && this.currentUser.role === _models__WEBPACK_IMPORTED_MODULE_4__["Role"].Subsistent;
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin */ "./src/app/admin/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _user_form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/form/form.component */ "./src/app/user/form/form.component.ts");
/* harmony import */ var _subsistent_subsistent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subsistent/subsistent.component */ "./src/app/subsistent/subsistent.component.ts");
/* harmony import */ var _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./supervisior/supervisior.component */ "./src/app/supervisior/supervisior.component.ts");
/* harmony import */ var _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/add-user/add-user.component */ "./src/app/admin/add-user/add-user.component.ts");
/* harmony import */ var _admin_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/edit-user/edit-user.component */ "./src/app/admin/edit-user/edit-user.component.ts");






// used to create fake backend
// import { fakeBackendProvider } from './_helpers';











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _admin__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
            _login__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _user_form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"],
            _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_13__["SupervisiorComponent"],
            _subsistent_subsistent_component__WEBPACK_IMPORTED_MODULE_12__["SubsistentComponent"],
            _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_14__["AddUserComponent"],
            _admin_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_15__["EditUserComponent"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin */ "./src/app/admin/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _user_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/form/form.component */ "./src/app/user/form/form.component.ts");
/* harmony import */ var _subsistent_subsistent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subsistent/subsistent.component */ "./src/app/subsistent/subsistent.component.ts");
/* harmony import */ var _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supervisior/supervisior.component */ "./src/app/supervisior/supervisior.component.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_models */ "./src/app/_models/index.ts");
/* harmony import */ var _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/add-user/add-user.component */ "./src/app/admin/add-user/add-user.component.ts");
/* harmony import */ var _admin_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/edit-user/edit-user.component */ "./src/app/admin/edit-user/edit-user.component.ts");











const routes = [
    {
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'admin',
        component: _admin__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { roles: [_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin] }
    },
    {
        path: 'add-user',
        component: _admin_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_9__["AddUserComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { roles: [_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin] }
    },
    {
        path: 'edit-user',
        component: _admin_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { roles: [_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin] }
    },
    {
        path: 'user',
        component: _user_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { roles: [_models__WEBPACK_IMPORTED_MODULE_8__["Role"].User] }
    },
    {
        path: 'subsistent',
        component: _subsistent_subsistent_component__WEBPACK_IMPORTED_MODULE_6__["SubsistentComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { roles: [_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Subsistent] }
    },
    {
        path: 'supervisior',
        component: _supervisior_supervisior_component__WEBPACK_IMPORTED_MODULE_7__["SupervisiorComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { roles: [_models__WEBPACK_IMPORTED_MODULE_8__["Role"].Supervisior] }
    },
    // // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



let HomeComponent = class HomeComponent {
    constructor(userService, authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        this.loading = true;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            console.log("data");
            console.log(data);
            this.router.navigate(['/' + data.role]);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html") }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/subsistent/subsistent.component.less":
/*!******************************************************!*\
  !*** ./src/app/subsistent/subsistent.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNpc3RlbnQvc3Vic2lzdGVudC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/subsistent/subsistent.component.ts":
/*!****************************************************!*\
  !*** ./src/app/subsistent/subsistent.component.ts ***!
  \****************************************************/
/*! exports provided: SubsistentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsistentComponent", function() { return SubsistentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



let SubsistentComponent = class SubsistentComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getOnlyUsers()
            .subscribe(data => {
            this.users = data;
            console.log(data);
        });
    }
    ngOnChanges(changes) {
        this.userService.getOnlyUsers()
            .subscribe(data => {
            this.users = data;
            console.log(data);
        });
    }
    activeUser(user) {
        console.log(user);
        this.userService.activateUsers(user).subscribe(data => {
            alert("Φοιτητής Ενεργοποιήθηκε");
            this.ngOnInit();
        });
    }
    dActiveUser(user) {
        console.log(user);
        this.userService.dActivateUsers(user).subscribe(data => {
            alert("Φοιτητής Απενεργοποίηση");
            this.ngOnInit();
        });
    }
};
SubsistentComponent.ctorParameters = () => [
    { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
SubsistentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subsistent',
        template: __webpack_require__(/*! raw-loader!./subsistent.component.html */ "./node_modules/raw-loader/index.js!./src/app/subsistent/subsistent.component.html"),
        styles: [__webpack_require__(/*! ./subsistent.component.less */ "./src/app/subsistent/subsistent.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], SubsistentComponent);



/***/ }),

/***/ "./src/app/supervisior/supervisior.component.less":
/*!********************************************************!*\
  !*** ./src/app/supervisior/supervisior.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVydmlzaW9yL3N1cGVydmlzaW9yLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/supervisior/supervisior.component.ts":
/*!******************************************************!*\
  !*** ./src/app/supervisior/supervisior.component.ts ***!
  \******************************************************/
/*! exports provided: SupervisiorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisiorComponent", function() { return SupervisiorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



let SupervisiorComponent = class SupervisiorComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getRequest('1')
            .subscribe(data => {
            this.depart1 = data;
            console.log(data);
        });
        this.userService.getRequest('2')
            .subscribe(data => {
            this.depart2 = data;
            console.log(data);
        });
        this.userService.getRequest('3')
            .subscribe(data => {
            this.depart3 = data;
            console.log(data);
        });
    }
    activeRequest(request) {
        this.userService.activateRequest(request).subscribe(data => {
            console.log(data);
            alert("Φοιτητής Εγκρηθηκε");
            this.ngOnInit();
        });
    }
    dActiveRequest(request) {
        this.userService.dActivateRequest(request).subscribe(data => {
            alert("Φοιτητής Εγκρηθηκε");
            this.ngOnInit();
        });
    }
};
SupervisiorComponent.ctorParameters = () => [
    { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
SupervisiorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supervisior',
        template: __webpack_require__(/*! raw-loader!./supervisior.component.html */ "./node_modules/raw-loader/index.js!./src/app/supervisior/supervisior.component.html"),
        styles: [__webpack_require__(/*! ./supervisior.component.less */ "./src/app/supervisior/supervisior.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], SupervisiorComponent);



/***/ }),

/***/ "./src/app/user/form/form.component.less":
/*!***********************************************!*\
  !*** ./src/app/user/form/form.component.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9ybS9mb3JtLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/user/form/form.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/form/form.component.ts ***!
  \*********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_models */ "./src/app/_models/index.ts");





let FormComponent = class FormComponent {
    constructor(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        var obj = JSON.parse(localStorage.getItem('currentUser'));
        this.active = obj['activate'];
        this.firstName = obj['firstName'];
        this.lastName = obj['lastName'];
        this.selectedDepartment = obj['department'];
        console.log(obj['activate']);
    }
    get f() { return this.homeForm.controls; }
    ngOnInit() {
        this.homeForm = this.formBuilder.group({
            income: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            childOut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            childIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            years: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            yearsStudy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    selectChangeHandler(event) {
        this.selectedNotWorking = event.target.value;
    }
    onSubmit() {
        this.submitted = true;
        if (this.homeForm.invalid) {
            return;
        }
        this.loading = true;
        if (!this.isNumeric(this.f.income.value)) {
            alert("Εισόδημα Δεν ειναι αριθμός");
        }
        else if (!this.isNumeric(this.f.childOut.value)) {
            alert("Αριθμος αδερφοιωνστην ιδια πολη Δεν ειναι αριθμός");
        }
        else if (!this.isNumeric(this.f.childIn.value)) {
            alert("Αριθμος αδερφοιων άλλη πόλη Δεν ειναι αριθμός");
        }
        else if (!this.isNumeric(this.f.years.value)) {
            alert("έτοι διαμονείς στις εστίες! Δεν ειναι αριθμός");
        }
        else if (!this.isNumeric(this.f.yearsStudy.value)) {
            alert("Ετος φοιτησεις! Δεν ειναι αριθμός");
        }
        else {
            let request = new _app_models__WEBPACK_IMPORTED_MODULE_4__["Application"]();
            request.income = this.f.income.value;
            request.brothersAnotherCity = this.f.childOut.value;
            request.brothersSameCity = this.f.childIn.value;
            request.yearHome = this.f.years.value;
            request.notJob = this.selectedNotWorking;
            request.yearStudy = this.f.yearsStudy.value;
            request.department = this.selectedDepartment;
            request.firstName = this.firstName;
            request.lastName = this.lastName;
            console.log(request);
            this.userService.requestRegister(request).subscribe((data) => {
                console.log(data);
                if (data) {
                    alert('User updated successfully.');
                }
                else {
                    alert(data);
                }
            });
        }
        this.loading = false;
    }
    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.less */ "./src/app/user/form/form.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], FormComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8085'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chris\Desktop\Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map