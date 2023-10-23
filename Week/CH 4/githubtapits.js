var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.getAll = function () {
        throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    };
    UserRepository.prototype.addUser = function (user) {
        throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    };
    UserRepository.prototype.getById = function (id) {
        throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    };
    UserRepository.prototype.deleteById = function (id) {
        throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    };
    return UserRepository;
}());
var UserRepositoryPostgres = /** @class */ (function (_super) {
    __extends(UserRepositoryPostgres, _super);
    function UserRepositoryPostgres(something) {
        var _this = _super.call(this) || this;
        _this._generateId = function () {
            return _this.users.length + 1;
        };
        _this.users = something;
        return _this;
    }
    UserRepositoryPostgres.prototype.getAll = function () {
        return this.users;
    };
    UserRepositoryPostgres.prototype.addUser = function (user) {
        var newUser = __assign({ id: this._generateId() }, user);
        this.users.push(newUser);
        return newUser;
    };
    UserRepositoryPostgres.prototype.getById = function (id) {
        return this.users.find(function (user) {
            return user.id === id;
        });
    };
    UserRepositoryPostgres.prototype.deleteById = function (id) {
        this.users = this.users.filter(function (user) {
            return user.id != id;
        });
        return "ID ".concat(id, " successfully deleted");
    };
    return UserRepositoryPostgres;
}(UserRepository));
var users = [
    {
        id: 1,
        name: "Agus",
    },
    {
        id: 2,
        name: "NHK",
    },
];
var test = new UserRepositoryPostgres(users);
console.log(test.getAll());
console.log(test.deleteById(1));
console.log(test.getAll());
