var app=angular.module("myApp", []);

app.controller("orderCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){

    $scope.pageClass = 'order';
    $scope.order = function(patientId,testType,doctorID,diagAdminID) {
        console.log("orderCtrl: order: Entered with: " + patientId + ", & test type: " + testType);
        $http({
            
            method: 'POST',
            url : 'https://api.mongolab.com/api/1/databases/medic/collections/orderDetails?apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ',
            data: JSON.stringify({
                        orderID: 'O'+Math.random().toString(36).substr(2, 9),
                        patientId: patientId,
                        testType: testType,
                        doctorID: doctorID,
                        diagAdminID: diagAdminID,
                        completeStatus: '0',
                        docURL: '0'
                    }),
            contentType: "application/json"
        })
        .success(function(data) {
                alert($scope.testType+" - for patient "+$scope.patientId+" has been placed successfully. ");
                $scope.patientId ="";
                $scope.testType ="";
                $scope.orderID ="";
        })
        .error(function() {
            
        });
        console.log("orderCtrl: order: Finished");
    };
});
