const arr = [1,3,5,4,1,7,3,7,2,4,8];
const window = 3;
var min = null;
var max = null;

for(var i = 0; i < arr.length; i += window){

    if(min != null && max != null) {
        console.log(min + ", " + max);
        min = null;
        max = null;
    }
    if((i + window) >= arr.length ){
        for(var k = i; k < arr.length; k++){
            if(arr[k] < arr[k+1]){
                min = arr[k];
                max = arr[k+1];
            } else {
                max = arr[k];
                min = arr[k+1];
            }
            console.log(min + ", " + max);
            break;
        } break;

    }
    for(var j = i; j < i+window; j++){
        if(min == null && max == null){
            if(arr[j] < arr[j+1]){
                min = arr[j];
                max = arr[j+1];
            } else {
                max = arr[j];
                min = arr[j+1];
            }
        } else {
            if(arr[j] < min){
                min = arr[j];
            }
            if(arr[j] > max){
                max = arr[j]
            }
        }
    }
}