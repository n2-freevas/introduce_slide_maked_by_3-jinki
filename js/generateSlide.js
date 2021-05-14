var slideData

function genetareAllSlidesData(){
    return new Promise((resolve,reject) => {
        slideData = n2f_slide_data
        generateSlideFrame()
        resolve()
    });
}

function generateSlideFrame(){
    for(var i=0; i<slideData.slides.length; i++){
        /* jsonデータからのスライド情報抜き出し */
        const tS = slideData.slides[i]

        /* Slide Element (大枠)の制作 */
        var slide_frame_section = document.createElement('section');
        slide_frame_section.setAttribute('class','slide-frame');
        slide_frame_section.setAttribute('title',tS.title);
        slide_frame_section.setAttribute('no',String(i+1));
        if(tS.style != undefined){slide_frame_section.setAttribute('style',tS.style)}
        var slide_div = document.createElement('div');
        slide_div.setAttribute('class','slide');
        slide_div.classList.add(tS.design);
        
        /* スライドの中身の制作 */
        console.log(tS)
        if (tS.contents != undefined){
        const contents = tS.contents;
        for (var j=0; j<contents.length; j++){
            var typepanel = generateTypePanel(contents[j]);
            slide_div.insertAdjacentElement('beforeend',typepanel)
        }
        }
        /* main_slide　に作ったスライドを挿す */
        slide_frame_section.insertAdjacentElement('afterbegin',slide_div);
        main_slide.insertAdjacentElement('beforeend',slide_frame_section);
    }
}

/* type panelを生成する関数 */
function generateTypePanel(data){
    var typepanel = document.createElement('div');
    var mode = '';
    /* type check */
    switch(data.type){
        case "panel": 
        case "back-panel":
        case "image-panel":
            mode = data.type;break;
        default:
            mode = 'none'

    }
    typepanel.setAttribute('class',mode);
    if(data.class != undefined){
        for(var i=0; i < data.class.length; i++){
            typepanel.classList.add(data.class[i]);
        }
    }
    var con = data.content
    /* panel内の要素を順番に全て構築する。 */
    for (var k=0; k<con.length; k++){
        var elem_in_tp = generateElements(con[k])
        switch(mode){
            case "image-panel":
                var div = document.createElement('div')
                div.insertAdjacentElement('beforeend',elem_in_tp)
                typepanel.insertAdjacentElement('beforeend',div)
                break; 
            default: typepanel.insertAdjacentElement('beforeend',elem_in_tp)
        }
        
    }
    return typepanel
}

/* type panel内にある全ての要素を返す関数 */
function generateElements(data){
    var tag = document.createElement(data.tag);
    for(const[key, value] of Object.entries(data)){
        if(key == 'tag'){}
        else if(key == 'elements'){
            var elements = data.elements;
            for (var k=0; k<data.elements.length; k++){
                tag = generateNodeElement(elements[k],tag)
            }
        }
        else if(key == 'item'){
            if(data.tag=='table'){tag = generateTableElement(data.item,tag)}
            else if(data.tag=='ul'){tag = generateUnorderedListElement(data.item,tag)}
            else if(data.tag=='ruby'){tag = generateRubyElement(data.item,tag)}
        }
        else{
            tag.setAttribute(key,value)
        }
    }
    return tag
}
function generateNodeElement(data,tag){
    if(typeof(data) == 'string'){tag.insertAdjacentHTML('beforeend',data)}
    else if (typeof(data) == 'object'){tag.insertAdjacentElement('beforeend',generateElements(data))}
    else{console.log('unknown')}
    return tag
}

function generateTableElement(data,tag){
    for(var i=0; i < data.length; i++){
        var tr = document.createElement('tr');
        d = data[i]
        for (var j=0; j<d.length; j++){
            var td = document.createElement('td');
            td.insertAdjacentHTML('beforeend',d[j]);
            tr.insertAdjacentElement('beforeend',td);
        }
        tag.insertAdjacentElement('beforeend',tr);
    }
    return tag
}
function generateUnorderedListElement(data,tag){
    for (var i=0; i<data.length; i++){
        var li = document.createElement('li');
        li = generateNodeElement(data[i],li);
        tag.insertAdjacentElement('beforeend',li)
    }
    return tag
}
function generateRubyElement(data,tag){
    for (var i=0; i<data.length; i++){
        if(i%2==0){
            tag.insertAdjacentHTML('beforeend',data[i])
        }
        else{
            rt = document.createElement('rt')
            rt.insertAdjacentHTML('beforeend',data[i])
            tag.insertAdjacentElement('beforeend',rt)
        }
    }
    return tag
}


function parallaxConfig(){
    
    const rt = document.querySelector(':root');
    ch = window.innerHeight
    rt.style.setProperty('--back-panel-vPosi-up', '25px')
    rt.style.setProperty('--back-panel-vPosi-middle', '150px')
    rt.style.setProperty('--back-panel-vPosi-down', '300px')
    
   /*
    const back_panel = document.getElementsByClassName('back-panel')
    for(var i=0; i<back_panel.length; i++){
        var top_posi = 0
        child = back_panel[i].parentElement.children
        console.log(child)
        for(var j=0; j < child.length; j++){
            if (child[j] === back_panel[i]){
                if(isPhone){back_panel[i].style.top = String(top_posi + 150) + 'px'}
                else{
                    _top = String(top_posi)+'px'
                    back_panel[i].style.top = _top
                }
            }
            else{top_posi += getOccupancyElementHeight_bottom(child[j])}
        }
    }*/
}