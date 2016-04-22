/*var data = localStorage.getItem('data1').value;

function drawTable() {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.orderID + "</td>"));
    row.append($("<td>" + rowData.patientId + "</td>"));
    row.append($("<td>" + rowData.testType + "</td>"));
    row.append($("<td>" + rowData.doctorID + "</td>"));
    row.append($("<td>" + rowData.diagAdminID + "</td>"));
    row.append($("<td>" + rowData.completeStatus + "</td>"));
    row.append($("<td><a href='" + rowData.docURL + "'>View/Download</a></td>"));
}

var mockDataForThisTest =localStorage.getItem('data1').value;

var app = angular.module('myApp1', []);

app.controller("PeopleCtrl", function ($scope, $http) {

    $scope.people = [];

    $scope.loadPeople = function() {
        var httpRequest = $http({
            method: 'POST',
            url: '/echo/json/',
            data: mockDataForThisTest

        }).success(function(data, status) {
            $scope.people = data;
        });

    };

});*/

var app=angular.module("myApp1", []);

app.controller("PeopleCtrl", function ($scope, $http) {

    $scope.people = [];
    //var mockDataForThisTest ="json=" + encodeURI(localStorage.getItem('data1'));
    var mockDataForThisTest = "json=" + (JSON.stringify([
                {
                id: 1,
                firstName: "Peter",
                lastName: "Jhons"},
            {
                id: 2,
                firstName: "David",
                lastName: "Bowie"}
            ]));

    $scope.loadPeople = function() {
        var httpRequest = $http({
            method: 'POST',
            url: '/echo/json/',
            data: mockDataForThisTest

        }).success(function(data, status) {
            $scope.people = data;
        });

    };

});