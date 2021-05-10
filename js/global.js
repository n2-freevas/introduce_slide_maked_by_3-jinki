/* infobar関連 */
var main_slide
var infobar
var infobar_slide_no
var infobar_slide_title
var slide_frames
var vw = window.innerWidth;
var isDOMLoaded = false;
var browser = 'unknown'
var isPhone = false

window.addEventListener('DOMContentLoaded',function(){
    isDOMLoaded = true
},false)

/* useragent関連 */
const useragent = window.navigator.userAgent.toLowerCase();
console.log('useragent',useragent)
if(useragent.indexOf('msie') != -1 || useragent.indexOf('trident') != -1){console.log('Internet Explorer');browser = 'ie'}else if(useragent.indexOf('edge') != -1){console.log('Edge');browser = 'edge'}
else if(useragent.indexOf('chrome') != -1){console.log('Google Chrome');browser = 'chrome'}
else if(useragent.indexOf('safari') != -1){console.log('Safari');browser = 'safari'}else if(useragent.indexOf('firefox') != -1){console.log('FireFox');browser = 'firefox'}
else if(useragent.indexOf('opera') != -1){console.log('Opera');browser = 'opera'} 
else{console.log('unknown browser');}


//skewがうまいこと表示されへんからモバイルの時は切る
if(useragent.indexOf('iphone') != -1 || useragent.indexOf('android') != -1 || useragent.indexOf('mobile') != -1 || useragent.indexOf('ipod') != -1){isPhone=true}

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

function Main_Element_Get(){
    return new Promise((resolve,reject) => {
        console.log('Main Element Get')
        main_slide = document.getElementById("main-slide")
        main_slide.addEventListener("scroll", throttle(allScrollEventWatcher,FPS), {passive:true});
        infobar = document.getElementById('info-bar');
        infobar_slide_no = document.getElementById('slide-no');
        infobar_slide_title = document.getElementById('slide-title')
        resolve('[Main_Element_Get] end')
    });
}

function Generated_Element_Get(){
    return new Promise((resolve,reject) => {
        slide_frames = document.querySelectorAll('.slide-frame')
        resolve('[Generated_Element_Get] end')
    });
}


function All_initialization(){
    return new Promise((resolve,reject) => {
        console.log('< Initialization process >')
        getNumofSlide()
        css_shrink_for_phone()
        resolve('[All_initialization] end')
    });
}


async function waitDOMLoaded(){
    return new Promise(resolve => {
        console.log('is DOMLoaded Complete?')
        var rep = setInterval(function(){
            if(isDOMLoaded){
                clearTimeout(rep)
                resolve('DOM is Loaded')
            }
        },500)
    });
}

// 引数で受け取った単純関数(引数のない関数)を、管理されたタイミングで順番に動作させるストリーム関数。
async function TimingFunctionStream(funcs_list){
    funcs_list_len = funcs_list.length
    var time = 0
    for(var i=0;i<funcs_list_len;i++){
        time += funcs_list[i][1]
        setTimeout(funcs_list[i][0],time)
    }
}

/* Infobar Methods */
function infobar_roll(){
    return new Promise(resolve => {    
        infobar_slide_no.classList.add('roll');
        infobar_slide_title.classList.add('roll');
        setTimeout(function(){resolve()},1000);
    });
}
function infobar_disroll(){
    return new Promise(resolve => {
        
        infobar_slide_no.classList.remove('roll');
        infobar_slide_title.classList.remove('roll');
        setTimeout(function(){resolve()},1000);
    });
}
function css_shrink_for_phone(){
    if(isPhone){
        $('.mobile').css({'display':'block'})
    }
    
}