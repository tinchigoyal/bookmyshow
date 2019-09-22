var availableForBooking = [];
var booked = [];

function renderBookingList(availableForBooking) {
    document.getElementById("booking-heading").innerHTML = '<h3 class="booking-heading bmh-primary-color">' + availableForBooking.length + ' house(s) available for booking </h3>';
    var liElement = "";
    for (var i = 0; i < availableForBooking.length; i++) {
        var bookingIdString = "'" + availableForBooking[i].id + "'";
        liElement += '<li class="booking-list">' +
            '<div class="booking-list-flex"> <div class="bmh-icon">' +
            '<img src="https://img.icons8.com/clouds/100/000000/cottage.png"> </div>' +
            '<div class="bmh-details"> <div class="bmh-name">' + availableForBooking[i].name + '</div>' +
            '<div class="bmh-identifier"> Property Code: ' + availableForBooking[i].id + ' </div>' +
            '<div class="bmh-room bmh-primary-color"> Rooms Available: ' + availableForBooking[i].size + ' </div> </div>' +
            '<div class="bmh-flex-button"> <button class="bmh-book bmh-primary-bg bmh-secondary-color" onclick="bookMyHouse(' + bookingIdString + ')">Book</button> </div> </div> </li>';
    }
    document.getElementById("booking-list").innerHTML = liElement;
}

function renderBookedList(booked) {
    document.getElementById("booked-heading").innerHTML = '<h3 class="booking-heading bmh-primary-color">' + booked.length + ' house(s) booked </h3>';
    document.getElementById("booking-count-floater").innerHTML = booked.length;

    var liElement = "";
    for (var i = 0; i < booked.length; i++) {
        var bookingIdString = "'" + booked[i].id + "'";
        liElement += '<li class="booking-list">' +
            '<div class="booking-list-flex"> <div class="bmh-icon">' +
            '<img src="https://img.icons8.com/clouds/100/000000/cottage.png"> </div>' +
            '<div class="bmh-details"> <div class="bmh-name">' + booked[i].name + '</div>' +
            '<div class="bmh-identifier"> Property Code: ' + booked[i].id + ' </div>' +
            '<div class="bmh-room bmh-primary-color"> Rooms Available: ' + booked[i].size + ' </div> </div>' +
            '<div class="bmh-flex-button"> <button class="bmh-book bmh-secondary-bg bmh-secondary-color">Booked</button> </div> </div> </li>';
    }
    document.getElementById("booked-list").innerHTML = liElement;
}


function fetchUserHouses() {
    var user = document.getElementById("search-user").value;
    if (!user) {
        BMH.services.showAlert("Enter User Name");
        return;
    }
    BMH.services.showAlert("Fetching User Houses");
    BMH.services.loadData(user, function (err, response) {
        if (err) {
            // console.log(err);
            BMH.services.showAlert(err);
        }
        else {
            availableForBooking = response;
            renderBookingList(availableForBooking);
        }
    });
}

function bookMyHouse(houseId) {
    for (var i = 0; i < availableForBooking.length; i++) {
        if (houseId == availableForBooking[i].id) {
            booked.push(availableForBooking[i]);
            renderBookedList(booked);
            availableForBooking.splice(i, 1);
            renderBookingList(availableForBooking);
            BMH.services.showAlert("House booked");

        }
    }
}

function scrollMe(id) {
    document.getElementById(id).scrollIntoView();

}

document.addEventListener('DOMContentLoaded', function(){

    // your code goes here
    document.getElementById("search-user")
        .addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("search-button").click();
            }
        });
}, false);


