var app=angular.module("myApp", []);

app.controller("upldCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){

    $scope.pageClass = 'updateOrder';
    $scope.updateOrder = function(orderId,userName,doctorID,testType) {
        console.log("upldCtrl: fileP: Entered");
        var filelink = localStorage.getItem('filePx');
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
                
                method: 'GET',
                url : 'https://api.mongolab.com/api/1/databases/medic/collections/orderDetails?q={orderID:"'+orderId+'"}&f={patientId:1,testType:1,orderID:1,doctorID:1}&fo=true&apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ',
            })
            .success(function(data) {
                if(data==null)
                {
                    alert("Invalid OrderID. Please try again.");
                } else if(data.patientId!=userName){
                    alert("Please give correct Patient ID for  Order : "+orderId);
                } else if(data.testType!=testType){
                    alert("Please give correct Test Type for  Order : "+orderId)
                } else if(data.doctorID!=doctorID){
                    alert("Please give correct Doctor ID for  Order : "+orderId)
                } else if(data.diagAdminID!=localStorage.getItem('diagTID').value){
                    alert("The order "+orderId+" is not assigned for you. Please check the order details once again.");
                } else{
                    alert(filelink)
                        $http({
                                method: 'PUT',
                                url: 'https://api.mongolab.com/api/1/databases/medic/collections/orderDetails?q={orderID:"'+orderId+'"}&apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ',
                                data: JSON.stringify({ "$set" : { "completeStatus": "1", "docURL": filelink } }),
                                contentType: 'Application/json'
                            }) .success(function() {
                                $scope.displayMsg = "Reports Uploaded Successfully";
                            }) .error(function(data) {
                                alert('Failed to upload Reports');
                            })
                        $scope.orderId ="";
                        $scope.userName ="";
                        $scope.doctorID ="";
                        $scope.testType ="";
                        //localStorage.removeItem('filePx');
                    }
            })
            .error(function() {
                alert("Invalid OrderID. Please try again.");
            });
        }
        console.log("upldCtrl: order: Finished");
    };
});
