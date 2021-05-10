var infobar_slide_no_denominator = ''
var infobar_slide_no_numerator = ''
var infobar_titlename = ''
num_of_slide = 0
var scrollflag = false;
const FPS = 200

function getNumofSlide(){
    infobar_slide_no_denominator = slide_frames.length
    console.log('Slide : '+String(infobar_slide_no_denominator))
    infobar_titlename = slide_frames[0].getAttribute('title')
    infobar_slide_no_numerator = slide_frames[0].getAttribute('no')
    infobar_slide_no.insertAdjacentHTML('afterbegin',infobar_slide_no_numerator+'/'+infobar_slide_no_denominator)
    infobar_slide_title.insertAdjacentHTML('afterbegin',infobar_titlename)
}


function changeInfoBarSentence(number,title){
    return new Promise(resolve => {
        infobar_slide_no_numerator = number;
        infobar_titlename = title;
        infobar_slide_no.innerHTML = infobar_slide_no_numerator+'/'+infobar_slide_no_denominator;
        infobar_slide_title.innerHTML = infobar_titlename;
        resolve();
    });
}

// InfoBarの記載情報を入れ替える。
async function switchInfoBar(number,title){
    await infobar_disroll();
    await changeInfoBarSentence(number,title);
    infobar_roll()
}

function InfoBar_ScrollController(){
    slide_frames.forEach(function(element){
        var elem_rect = element.getBoundingClientRect(),
            elem_top = elem_rect.top;
        if(elem_top >= -20 && elem_top <= 20){
            no = element.getAttribute('no');
            title = element.getAttribute('title');
            if(no != infobar_slide_no_numerator){
                infobar_slide_no_numerator = no;
                infobar_titlename = title;
                switchInfoBar(infobar_slide_no_numerator,infobar_titlename);
            }
        }
    });
}


/* 低頻度化したスクロールイベントリスナーを発生 */
// https://qiita.com/hiro0218/items/7ac41f58891d96951fa1

function allScrollEventWatcher(){
    InfoBar_ScrollController()
}


/* ref by underscore.js https://github.com/jashkenas/underscore/blob/master/underscore.js*/
var now = Date.now || function() {
    return new Date().getTime();
};

function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var _now = now();
      if (!previous && options.leading === false) previous = _now;
      var remaining = wait - (_now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = _now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  }

