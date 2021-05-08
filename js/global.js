/* infobar関連 */
var infobar
var infobar_slide_no
var infobar_slide_title

/* useragent関連 */
const useragent = window.navigator.userAgent.toLowerCase();
var browser = 'unknown'
if(useragent.indexOf('msie') != -1 || useragent.indexOf('trident') != -1){console.log('Internet Explorer');browser = 'ie'}else if(useragent.indexOf('edge') != -1){console.log('Edge');browser = 'edge'}
else if(useragent.indexOf('chrome') != -1){console.log('Google Chrome');browser = 'chrome'}
else if(useragent.indexOf('safari') != -1){console.log('Safari');browser = 'safari'}else if(useragent.indexOf('firefox') != -1){console.log('FireFox');browser = 'firefox'}
else if(useragent.indexOf('opera') != -1){console.log('Opera');browser = 'opera'} 
else{console.log('unknown browser');}

async function Main_Element_Get(){
    new Promise((resolve,reject) => {
        console.log('Main Element Get')
        infobar = document.getElementById('info-bar');
        infobar_slide_no = document.getElementById('slide-no');
        infobar_slide_title = document.getElementById('slide-title')
        resolve('[Main_Element_Get] end')
    })
}

function infobar_roll(){
    infobar_slide_no.classList.add('roll')
    infobar_slide_title.classList.add('roll')
}
    
async function DOM_on_Loaded(){
    new Promise((resolve,reject) => {
        const fire = () => {
            document.removeEventListener('DOMContentLoaded', fire, false);
        };
        document.addEventListener('DOMContentLoaded', fire, false);
        console.log("DOM is Loaded.")
        resolve('[DOM_on_loaded] end')
    });
}







