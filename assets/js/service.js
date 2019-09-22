 window.BMH.services.loadData = function(user , next)  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var houses = JSON.parse(this.responseText);
            next(null, houses);
        }
        else if(this.readyState == 4 && this.status != 200) {
            next("something went wrong", null);
        }
    };
    xhttp.open("GET", window.BMH.apiConfig.getHouses + user, true);
    xhttp.send();

}


 window.BMH.services.showAlert = function(msg)  {
    document.body.innerHTML += '<div class="alert">' +msg+ '</div>';
    setTimeout(function(){
        var elem = document.getElementsByClassName("alert")[0];
        elem.parentNode.removeChild(elem);
    },BMH.alertTime);
 }

