const op = document.getElementById("opening")
const op_logo = document.getElementById("opening-logo")
const op_io = document.getElementById("opening-io")
const op_cir = document.getElementById("opening-circle")
const path_image = "n2-freevas$  "
const time_of_a_word_input = 50
const time_of_a_gauge_process = 10
const op_width = op.clientWidth - 40
const num_of_gauge = op_width / 10
var time = 0
console.log('body_width' + num_of_gauge)

var no = 1
function make_ioTextElement(){
    const ioText = document.createElement('div')
    ioText.setAttribute("class","io_text")
    ioText.classList.add("skew")
    ioText.style.setProperty('animation-delay',Math.floor(Math.random() * 5)+'s')
    return ioText
}


function io_inputComment(text,target){
    console.log(text,target);
    target.innerHTML = text;
    target.style.display = 'block';
    //console.log(text + ' is input.')
}
function io_inputComment_likeHandly(text,target,wait){
    console.log(text,target,text.length)
    count = 1
    //ディレクトリ名的なものを差し込む
    var types = path_image;
    target.innerHTML = types;
    //ちょっと待つ
    
    setTimeout(function(){
        var rep = setInterval(function(){
            var types = path_image + text.substring(0, count);
            // テキストフィールドにデータを渡す処理
            target.innerHTML = types;
            count ++;
            
            if(count > text.length){
                clearTimeout(rep);
                target.style.display = 'block';
            }
        }, time_of_a_word_input);
    },wait)
       
}

function io_likeInstall(text,target){
    console.log(text,target,text.length)
    count = 1
    var types = text+' >: ';
    target.innerHTML = types;
    //ちょっと待つ
    
    var rep = setInterval(function(){
        types = types + '|';
        // テキストフィールドにデータを渡す処理
        target.innerHTML = types;
        count ++;
        
        if(count > num_of_gauge){
            clearTimeout(rep);
            target.style.display = 'block';
        }
    }, time_of_a_gauge_process);
    
}

function ioInputStream(io_list){
    const io_list_len = io_list.length;
    var prewait = 0
    var wait = 0
    var io_text_array = []
    for(var i=0;i<io_list_len;i++){
        const itxt = make_ioTextElement()
        io_text_array.unshift(itxt)
        op_io.insertAdjacentElement("afterbegin",itxt)
    }
    console.log(io_text_array,io_text_array.length)
    for(var i=0;i<io_list_len;i++){
        
        var text = io_list[i][0]
        target = io_text_array[i]
        var wait = 0
        if (io_list[i][2]=='input'){
            time += 100
            wait = io_list[i][1]
            setTimeout(io_inputComment_likeHandly,time,text,target,wait)
            prewait = text.length*time_of_a_word_input
            time += wait + prewait
        }
        else if(io_list[i][2]=='output'){
            time += io_list[i][1]
            setTimeout(io_inputComment,time,text,target)
        }
        else if(io_list[i][2]=='gauge'){
            prewait = time_of_a_gauge_process*num_of_gauge
            time += io_list[i][1]
            setTimeout(io_likeInstall,time,text,target)
            time += prewait
        }
        else{
            pass
        }
        console.log(time,prewait,wait,text,text.length,target)
    }
}

function opening_end(){
    op_io.classList.add('fadeout')
    op.classList.add('finish')
}
function opening_disp_none(){
    op_io.classList.add('none')
}

// 引数で受け取った単純関数(引数のない関数)を、管理されたタイミングで動作を発動させるストリーム関数。
function TimingFunctionStream(funcs_list){
    const funcs_list_len = funcs_list.length
    for(var i=0;i<funcs_list_len;i++){
        time += funcs_list[i][1]
        setTimeout(funcs_list[i][0],time)
    }
}
/*
ioInputStream(
    [
        ["Hello again, to all my friend.",100,'output'],
        ["Together we can play some codi'n'on!",100,'output'],
        [" -",100,'output'],
        ["codi install n2f -force -p this/br/package",1500,"input"],
        ["Collecting n2freevas-introduce",100,'output'],
        ["Downloading n2f-1.0.pkg",100,'output'],
        ["  d|",200,'gauge'],
        ["Downloading n2f-1.0.js&scss",500,'output'],
        ["  d|",500,'gauge'],
        ["     Successfully downloaded n2frevas-introduce",500,'output'],
        [" -",100,'output'],
        ["n2f launch view -browser --"+browser+" -all",1000,"input"],
        ["Install contents...",100,'output'],
        ["  d> ",500,'gauge'],
        ["     Successfully installed n2f viewer",100,'output'],
        ["n2freevas introduce using web browser Launch!",100,'output'],
    ]
);*/


TimingFunctionStream(
    [
        [opening_end,100],
        [opening_disp_none,2000]
    ]
)