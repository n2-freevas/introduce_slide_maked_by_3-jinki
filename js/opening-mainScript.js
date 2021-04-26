var opening = document.getElementById("opening")
var op_logo = document.getElementById("opening_logo")

var ready = false;

var worker = new Worker('js/opening-ioScript.js');
worker.addEventListener('message',function(e){
    console.log(e.data.message)
},false);

