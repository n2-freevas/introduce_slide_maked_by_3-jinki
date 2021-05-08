const op = document.getElementById("opening")
const op_logo = document.getElementById("opening-logo")
const op_io = document.getElementById("opening-io")
const op_cir = document.getElementById("opening-circle")
const op_cir2 = document.getElementById("opening-circle2")
const path_image = "n2-freevas$  "
const time_of_a_word_input = 50
const time_of_a_gauge_process = 10
const op_width = op.clientWidth - 40
const num_of_gauge = op_width / 10

console.log('body_width' + num_of_gauge)

var no = 1
function make_ioTextElement(){
    const ioText = document.createElement('div')
    ioText.setAttribute("class","io_text")
    ioText.classList.add("skew")
    ioText.style.setProperty('animation-delay',Math.floor(Math.random() * 5)+'s')
    return ioText
}


function io_inputComment(wait,text,target){
    return new Promise(resolve => {
        setTimeout(function(){
            //console.log(text,target);
            target.innerHTML = text;
            target.style.display = 'block';
            resolve('io_inputComment')
            //console.log(text + ' is input.')
        },wait);
    });
}
function io_inputComment_likeHandly(wait,text,target){
    return new Promise(resolve => {
        //console.log(text,target,text.length)
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
                    resolve('io_inputComment_likeHandly')
                }
            }, time_of_a_word_input);
        },wait)
    })
}

function io_likeInstall(wait,text,target){
    return new Promise(resolve => {
        //console.log(text,target,text.length)
        count = 1
        var types = text+' >: ';
        target.innerHTML = types;
        //ちょっと待つ
        setTimeout(function(){
            var rep = setInterval(function(){
                types = types + '|';
                // テキストフィールドにデータを渡す処理
                target.innerHTML = types;
                count ++;
                
                if(count > num_of_gauge){
                    clearTimeout(rep);
                    target.style.display = 'block';
                    resolve('io_likeInstall_end')
                }
            }, time_of_a_gauge_process);
        },wait);
    })
}

async function ioInputStream(io_list){
    
    const io_list_len = io_list.length;
    var prewait = 0
    var wait = 0
    var io_text_array = []
    for(var i=0;i<io_list_len;i++){
        const itxt = make_ioTextElement()
        io_text_array.unshift(itxt)
        op_io.insertAdjacentElement("afterbegin",itxt)
    }
    //console.log(io_text_array,io_text_array.length)
    for(var i=0;i<io_list_len;i++){
        var text = io_list[i][0]
        target = io_text_array[i]
        var wait = io_list[i][1]
        if (io_list[i][2]=='input'){
            const resolver = await io_inputComment_likeHandly(wait,text,target)
            //setTimeout(io_inputComment_likeHandly,time,text,target,wait)
        }
        else if(io_list[i][2]=='output'){
            const resolver = await io_inputComment(wait,text,target)
            //setTimeout(io_inputComment,time,text,target)
        }
        else if(io_list[i][2]=='gauge'){
            const resolver = await io_likeInstall(wait,text,target)
            //setTimeout(io_likeInstall,time,text,target)
        }
        else{
            pass
        }
        //console.log(time,prewait,wait,text,text.length,target)
    }
}

function io_view_close(){
    op_io.classList.add('fadeout');
    op.classList.add('finish');
}
function opening_disp_none(){
    op_io.classList.add('none');
}
function icon_up(){
    op_logo.classList.add('up');
    op_cir.classList.add('up');
    op_cir2.classList.add('up');
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


async function opening_is_runnnig(){
    
    console.log('OPENING_IS_RUNNING')
    resolver = await ioInputStream(
        [
            ["Hello again, to all my friend.",100,'output'],
            ["Together we can play some codi'n'on!",100,'output'],
            /*
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
            ["  process: ",500,'gauge'],
            ["     Successfully installed n2f viewer",100,'output'],
            ["n2freevas introduce using web browser Launch!",1000,'output'],
            */
        ]
    )
}

async function opening_is_end(){
    
    console.log('OPENING_IS_ENDED')
    resolver = await TimingFunctionStream(
        [
            [io_view_close,100],
            [icon_up,100],
            [opening_disp_none,1000],
            [infobar_roll,100]
        ]
    )
}
