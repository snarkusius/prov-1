
function delbaramed3(arr) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            newarr.push(arr[i])
        }
        
    }
    return newarr
    
}
//test
console.log(delbaramed3([1,3,6,3,2,9]))