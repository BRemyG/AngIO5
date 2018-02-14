"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TableComponent = (function () {
    function TableComponent() {
        // assuming this data is obtained from a call to the backend..
        this.month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.serverData = [
            { Year: 2012, Month: 1, Value: .5 },
            { Year: 2012, Month: 2, Value: .5 },
            { Year: 2012, Month: 3, Value: .75 },
            { Year: 2012, Month: 4, Value: .75 },
            { Year: 2012, Month: 5, Value: .5 },
            { Year: 2012, Month: 6, Value: .5 },
            { Year: 2012, Month: 7, Value: .75 },
            { Year: 2012, Month: 8, Value: .73 },
            { Year: 2012, Month: 9, Value: .5 },
            { Year: 2012, Month: 10, Value: .5 },
            { Year: 2012, Month: 11, Value: .75 },
            { Year: 2012, Month: 12, Value: .75 },
            { Year: 2013, Month: 1, Value: .5 },
            { Year: 2013, Month: 2, Value: .5 },
            { Year: 2013, Month: 3, Value: .75 },
            { Year: 2013, Month: 4, Value: .75 },
            { Year: 2013, Month: 5, Value: .5 },
            { Year: 2013, Month: 6, Value: .5 },
            { Year: 2013, Month: 7, Value: .75 },
            { Year: 2013, Month: 8, Value: .75 },
            { Year: 2013, Month: 9, Value: .5 },
            { Year: 2013, Month: 10, Value: .5 },
            { Year: 2013, Month: 11, Value: .75 },
            { Year: 2013, Month: 12, Value: .75 },
            { Year: 2014, Month: 2, Value: .85 },
            { Year: 2015 }
        ];
        this.newData = [];
        this.alert = '';
    }
    TableComponent.prototype.ngOnInit = function () {
        this.reorder(this.serverData);
    };
    TableComponent.prototype.ngDoCheck = function () {
    };
    TableComponent.prototype.reorder = function (arr) {
        this.newData = [];
        var monVal = {}, yearVal = {};
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var entry = arr_1[_i];
            if (!yearVal[entry.Year])
                yearVal[entry.Year] = [];
            yearVal[entry.Year][entry.Month - 1] = entry.Value;
        }
        ;
        for (var _a = 0, _b = Object.keys(yearVal); _a < _b.length; _a++) {
            var year = _b[_a];
            monVal = {};
            monVal['Year'] = year;
            monVal['Value'] = yearVal[year];
            monVal['total'] = 0;
            yearVal[year].forEach(function (val) {
                monVal['total'] += val;
            });
            this.newData.push(monVal);
        }
    };
    TableComponent.prototype.assignVal = function (key, val) {
    };
    TableComponent.prototype.addValue = function (year, month, value) {
        var rowEntry = {};
        if (year) {
            this.alert = '';
            rowEntry['Year'] = Number.parseInt(year);
            if (month)
                rowEntry['Month'] = Number.parseFloat(month);
            if (value)
                rowEntry['Value'] = Number.parseFloat(value) / 100;
            console.log('add value ', rowEntry);
            this.serverData.push(rowEntry);
            this.reorder(this.serverData);
        }
        else {
            this.alert = 'Add year';
        }
    };
    TableComponent.prototype.trackyear = function (data) {
        return data.Year;
    };
    TableComponent.prototype.deleteRow = function (year) {
        this.serverData = this.serverData.filter(function (entry) { return entry.Year != year; });
        this.reorder(this.serverData);
    };
    TableComponent.prototype.save = function () {
        console.log('server data : ', this.serverData);
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css', '../../w3.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map