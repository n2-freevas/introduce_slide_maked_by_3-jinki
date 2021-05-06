const userAgent = window.navigator.userAgent.toLowerCase();
var browser = 'unknown'
if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
    console.log('Internet Explorer');
    browser = 'ie'
} else if(userAgent.indexOf('edge') != -1) {
    console.log('Edge');
    browser = 'edge'
} else if(userAgent.indexOf('chrome') != -1) {
    console.log('Google Chrome');
    browser = 'chrome'
} else if(userAgent.indexOf('safari') != -1) {
    console.log('Safari');
    browser = 'safari'
} else if(userAgent.indexOf('firefox') != -1) {
    console.log('FireFox');
    browser = 'firefox'
} else if(userAgent.indexOf('opera') != -1) {
    console.log('Opera');
    browser = 'opera'
} else {
    console.log('unknown browser');
}


// sleep関数的な(秒単位) waitSecはintで0.1秒
function sequencer(waitSec, callbackFunc) {
    var spanedSec = 0;
    var id = setInterval(function () {
        spanedSec++;
        console.log(spanedSec)
        if (spanedSec >= waitSec) {
            clearInterval(id);
            if (callbackFunc) callbackFunc();
        }
    }, 100);
}



