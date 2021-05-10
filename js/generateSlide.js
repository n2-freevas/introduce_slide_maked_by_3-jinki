var slideData

function genetareAllSlidesData(){
    return new Promise((resolve,reject) => {
        slideData = n2f_slide_data
        generateSlideFrame()
        resolve()
    });
}

function generateSlideFrame(){
    for(var i=0; i<slideData.length; i++){
        /* jsonデータからのスライド情報抜き出し */
        const tS = slideData[i]

        /* Slide Element (大枠)の制作 */
        var slide_frame_section = document.createElement('section');
        slide_frame_section.setAttribute('class','slide-frame');
        slide_frame_section.setAttribute('title',tS.title);
        slide_frame_section.setAttribute('no',String(i+1));
        var slide_div = document.createElement('div');
        slide_div.setAttribute('class','slide');
        
        /* スライドの中身の制作 */
        console.log(tS)
        if (tS.contents != undefined){
        const contents = tS.contents;
        for (var j=0; j<contents.length; j++){
            var type = generateTypePanel(contents[j].type);
            var content = contents[j].content
            /* panel内の要素を順番に全て構築する。 */
            for (var k=0; k<content.length; k++){
                var elem_in_tp = generateElements(content[k])
                type.insertAdjacentElement('beforeend',elem_in_tp)
            }
            slide_div.insertAdjacentElement('beforeend',type)
        }
        }
        /* main_slide　に作ったスライドを挿す */
        slide_frame_section.insertAdjacentElement('afterbegin',slide_div);
        main_slide.insertAdjacentElement('beforeend',slide_frame_section);
        console.log("slide frame maked complete");
    
    }
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
        else if(key == 'cell'){
            tag = generateTableElement(data.cell,tag)
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

/* type panelを生成する関数 */
function generateTypePanel(data){
    var type = document.createElement('div');
    var check = '';
    /* type check */
    if (data == 'panel'){check = 'panel'}
    else if (data == 'back-panel'){check = 'back-panel'}
    else {check = 'none'}

    type.setAttribute('class',check);
    return type
}

