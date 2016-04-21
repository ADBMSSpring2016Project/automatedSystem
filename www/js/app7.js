var app=angular.module("myApp", []);

app.controller("fileCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){

    $scope.pageClass = 'fileP';
    $scope.fileP = function(orderId,userName,doctorID,testType) {
        console.log("fileCtrl: fileP: Entered");
        //var myCanvas = document.getElementById('fileP1');
        //var ctx = myCanvas.getContext('2d');
        if (orderId==undefined){
            alert("Please Enter Order ID");
        }else if (userName==undefined){
            alert("Please Enter Patient ID");
        }else if (doctorID==undefined){
            alert("Please Enter Doctor ID");
        }else if (localStorage.getItem('filePx')==undefined){
            alert("Please Upload the File");
        }else{
            $http({
                
                method: 'POST',
                url : 'https://api.mongolab.com/api/1/databases/medic/collections/docDetails?apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ',
                data: JSON.stringify({
                            docID: 'DOC'+Math.random().toString(36).substr(2, 9),
                            orderId: orderId,
                            userName: userName,
                            doctorID: doctorID,
                        }),
                contentType: "application/json"
            })
            .success(function(data) {
                    alert($scope.orderId+" - for patient "+$scope.userName+" has been placed successfully. ");
                    $scope.orderId ="";
                    $scope.userName ="";
                    $scope.doctorID ="";
                    localStorage.removeItem('filePx');
            })
            .error(function() {
                
            });
        }
        console.log("orderCtrl: order: Finished");
    };
});
