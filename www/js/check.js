function getCookie() {
    var name = "userName=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

      function getCki() {
            var found = false;
            var name = "userName";
            document.cookie.split(";").forEach(function(e) {
              var cookie = e.split("=");
              if(name == cookie[0].trim()) {
                  document.getElementById('doctorID').value=cookie[1].trim();
                  //return cookie[1].trim()
              };
            });
        }
        
function getCookie2 () {
    var found = false;
    var name="userName";
    document.cookie.split(";").forEach(function(e) {
        var cookie = e.split("=");
        if(name == cookie[0].trim()) {
            found = true;
            var type12=cookie[1].trim().charAt(0);
            if(type12=='P'){
                if(window.location.pathname=="/patmain.html"){
                    
                }else {
                  alert("You are not allowed to access this page. Redirecting back to your Main Page.");
                  window.location.href="patmain.html";  
                }
                //alert(window.location.pathname);
                //window.location.href="patmain.html";
            }else if(type12=='A'){
                if(window.location.pathname=="/adminmain.html" || window.location.pathname=="/add.html"){
                    
                }else {
                  alert("You are not allowed to access this page. Redirecting back to your Main Page.");
                  window.location.href="adminmain.html";  
                }
                //alert(window.location.pathname);
                //window.location.href="adminmain.html";
            }else if(type12=='D'){
                if(window.location.pathname=="/main.html" || window.location.pathname=="/order.html"){
                    
                }else {
                  alert("You are not allowed to access this page. Redirecting back to your Main Page.");
                  window.location.href="main.html";  
                }
                //alert(window.location.pathname);
                //window.location.href="main.html";
            }else if(type12=='T'){
                if(window.location.pathname=="/diagadminmain.html" || window.location.pathname=="/upload.html"){
                    
                }else {
                  alert("You are not allowed to access this page. Redirecting back to your Main Page.");
                  window.location.href="diagadminmain.html";  
                }
                //alert(window.location.pathname);
                //window.location.href="diagadminmain.html";
            }
        }else{
            alert("User already logged out or Session time expired. Please login once again.");
            //href to login
            window.location.href="login.html";
        }
    })
    return found;
}

function logoutCookie () {
    var name="userName";
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}