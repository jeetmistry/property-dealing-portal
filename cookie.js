var cookie_box = document.getElementById('cookie_box'),
    activeBtn = document.getElementById('activeBtn');

var home = document.getElementById('home_content');
home.classList.add('opachalf');
activeBtn.addEventListener('click', function() {
    //UTC is time set by the world time standard
    document.cookie = "CookieBy=Jeet Mistry; expires=" + new Date(2022, 0, 1).toUTCString();
    //This cookies expires after 30 days
    document.cookie = "Name=Jeet; max-age=" + 60 * 60 * 24 * 30;
    document.cookie = "LastName=Mistry; max-age=" + 60 * 60 * 24 * 30;

    if (document.cookie) {
        //Hide the popup box
        cookie_box.classList.add('hide');
        home.classList.add('opacfull');
    } else {
        //If we block cookie setting then show this massege
        alert("cookie not set! Please allow this site from your browser cookie setting");
    }

})

function getCookieName(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : '';
}
var getCookieName = getCookieName('CookieBy');
//alert(getCookieName)
if (getCookieName === 'Jeet Mistry') {
    //All time hide the popup box
    cookie_box.classList.add('hide');
    home.classList.add('opacfull');
}