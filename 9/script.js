
function makebig(srting) {
    return String.toLocaleUpperCase
}
function makebigarray2(){
    let newarray = []
for (let i = 0; i < arr.length; i++) {
    newarray[i] = arr[i]   
}
return newarray
}
function makebigarray(arr) {
    arr.map(makebig)
}
console.log(makebigarray(["hej","supp"]))