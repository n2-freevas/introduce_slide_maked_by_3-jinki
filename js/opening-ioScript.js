var scope = this.self
var op_io = document.getElementById("opening-io")

console.log('a')
sleepjs(3,false)

console.log('b')
sleepjs(3,false)

console.log('c')
sleepjs(3,false)



scope.postMessage({
    message:'finish'
});