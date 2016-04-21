var app=angular.module("myApp", []);

app.controller("loginCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){

    $scope.loginUser = function(userName, pwd, loginType) {
        console.log("LoginCtrl: loginUser: Entered with: " + userName + ", " + loginType);
        $http({
            method: 'GET',
            url : 'https://api.mongolab.com/api/1/databases/medic/collections/'+loginType+'?q={"userName":"'+userName+'"}&f={"password":1}&fo=true&apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ'
        })
        .success(function(data) {
                localStorage.setItem("loginType",loginType);
                var type=localStorage.getItem("loginType");
                if (loginType==undefined){
                    alert('Select Login Type first');
                }else if (userName==""){
                    alert('Please provide UserName');
                }
                if(loginType=="doc" && data.password == pwd){
                    localStorage.setItem("userName",document.getElementById("userName"));
                        var d = new Date();
                        var t = d.getTime();
                        t+=60*60*1000;
                        d.setTime(t);
                        var expires = "expires=" + d.toUTCString() + "; path=/";
                        document.cookie = "userName="+userName+"; "+expires;
                        localStorage.setItem('docID',userName);
                    alert(userName+" : Logged In Successfully");
                    $window.location.href = "main.html";
                    }else if(loginType=="pat" && data.password == pwd){
                                localStorage.setItem("userName",document.getElementById("userName"));
                                    var d = new Date();
                                    var t = d.getTime();
                                    t+=60*60*1000;
                                    d.setTime(t);
                                    var expires = "expires=" + d.toUTCString() + "; path=/";
                                    document.cookie = "userName="+userName+"; "+expires;
                                    localStorage.setItem('patID',userName);
                                alert(userName+" : Logged In Successfully");
                                $window.location.href = "patmain.html";
                                }else if(loginType=="admin" && data.password == pwd){
                                            localStorage.setItem("userName",document.getElementById("userName"));
                                                var d = new Date();
                                                var t = d.getTime();
                                                t+=60*60*1000;
                                                d.setTime(t);
                                                var expires = "expires=" + d.toUTCString() + "; path=/";
                                                document.cookie = "userName="+userName+"; "+expires;
                                                localStorage.setItem('admID',userName);
                                            alert(userName+" : Logged In Successfully");
                                            $window.location.href = "adminmain.html";
                                            }else if(loginType=="diagadmin" && data.password == pwd){
                                                        localStorage.setItem("userName",document.getElementById("userName"));
                                                            var d = new Date();
                                                            var t = d.getTime();
                                                            t+=60*60*1000;
                                                            d.setTime(t);
                                                            var expires = "expires=" + d.toUTCString() + "; path=/";
                                                            document.cookie = "userName="+userName+"; "+expires;
                                                            localStorage.setItem('diagTID',userName);
                                                        alert(userName+" : Logged In Successfully");
                                                        $window.location.href = "diagadminmain.html";
                                                        }else {
                                                                    alert("Invalid Login Credentials");
                                                                }
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
