function destroyer(arr) {
  // Remove all the values
  var returnArray = [];
  for(i=0;i<arr.length;i++){
    var item = arr[i];
    console.log(item)
    
    if (item != arguments[1] || item != arguments[2] || item != arguments[3]){
      returnArray.push(item);
      
    }
  }
 //  return returnArray;
 }
 
 destroyer([1, 2, 3, 1, 2, 3], 2, 3);
 