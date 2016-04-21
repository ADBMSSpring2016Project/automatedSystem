var app=angular.module("myApp", []);

app.controller("patDshCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){
    
    $scope.patDash = function(userName, pwd, loginType) {
        var name1=localStorage.getItem('patID');
        console.log("patDshCtrl: loginUser: Entered with: " + userName + ", " + loginType);
        $http({
            method: 'GET',
            url: 'https://api.mongolab.com/api/1/databases/medic/collections/orderDetails?apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ'
            //url : 'https://api.mongolab.com/api/1/databases/medic/collections/orderDetails?q={"patientId":"'+name+'"}&f={"orderID":1,"testType":1,"doctorID":1,"diagAdminID":1,"completeStatus":1,"docURL":1}&fo=true&apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ'
        })
        .success(function(data) {
                
        })
        .error(function() {
            if (loginType==""){
                alert('Select Login Type first');
            }
            if (userName==""){
                alert('Please provide UserName');
            }
            
            alert('Failed to authenticate user '+userName);
        });
        console.log("LoginCtrl: loginUser: Finished");
    };
});
