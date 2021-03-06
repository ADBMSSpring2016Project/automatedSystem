var app=angular.module("myApp", []);
var tempData;
app.controller("patDshCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){

    $scope.pageClass = 'patDashOrder';
    $scope.patDashOrder = function() {
        console.log("patDshCtrl: fileP: Entered");
        
            $http({
                
                method: 'GET',
                url : 'https://api.mongolab.com/api/1/databases/medic/collections/orderDetails?apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ',
            })
            .success(function(data) {
                localStorage.setItem('data1',JSON.stringify(data));
                tempData=data;
            })
            .error(function() {
                alert("Invalid OrderID. Please try again.");
            });
        
        console.log("patDshCtrl: order: Finished");
    };
    
/*            $scope.people = [];
            console.log("peopleCtrl Inside");
            //var mockDataForThisTest ="json=" + encodeURI(localStorage.getItem('data1'));
            var mockDataForThisTest = "json=" + JSON.stringify([
                        {
                        id: 1,
                        firstName: "Peter",
                        lastName: "Jhons"},
                    {
                        id: 2,
                        firstName: "David",
                        lastName: "Bowie"}
                    ]);

            $scope.loadPeople = function() {
                console.log("loadPeople Inside");
                var httpRequest = $http({
                    method: 'POST',
                    url: '/echo/json/',
                    data: mockDataForThisTest

                }).success(function(data, status) {
                    $scope.people = data;
                });

            };*/
            
            
            
            
            //var data = $scope.info = localStorage.getItem('data1');
    

$scope.results = [];
 $scope.clickButton = function(enteredValue) {
    var temp = enteredValue;
    $scope.reset();
    $scope.items = tempData;
alert("Inside Click Button");
alert(tempData);
    angular.forEach($scope.items, function (item) {
        //alert(item.patientId);
        if(item.patientId === temp){
            $scope.results.push({
                orderID: item.orderID,
                patientId: item.patientId,
                testType: item.testType,
                doctorID: item.doctorID,
                diagAdminID: item.diagAdminID,
                completeStatus: item.completeStatus,
                docURL: item.docURL
            });
        }
    });
    
}
    

    //Reset
    var clearResults = angular.copy($scope.results);
    var clearRowItems = angular.copy($scope.rowItems);

    $scope.reset = function() {
        $scope.enteredValue = '';
        $scope.results = '';

        $scope.results = angular.copy(clearResults);
        $scope.rowItems = angular.copy(clearRowItems);

    };
});




