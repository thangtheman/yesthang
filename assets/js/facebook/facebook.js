/**
 * Created by ThangTheMan on 7/14/16.
 */

// checks fb login status
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}
//fires after login is checked on page load
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        //already logged in
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
    }
}
//fires after button is used
var loginCB = function(response){
    console.log('loginCallback');
    console.log(response);
    if (response.status === 'connected') {
        FB.api('/me?fields=id,email,name,relationship_status, age_range, location, hometown', function(fbResponse){
            console.log('fb graph',fbResponse);
            if (fbResponse && !fbResponse.error) {
                document.getElementById("Name").value =fbResponse.name;
                document.getElementById("Email").value=fbResponse.email;
                document.getElementById("sta").value=fbResponse.relationship_status;
                document.getElementById("bod").value=fbResponse.age_range.min;
                document.getElementById("location").value=fbResponse.location.name;
                document.getElementById("ht").value=fbResponse.hometown.name;
            }
        })
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
    }
};
