
function duplicates(arr) {
    
    var newArr = [];
    var conArr = arr.concat();
    
    for(var i = 0; i < arr.length; i++) {
    	
    	for(var j = i+1; j < arr.length; j++) {
    		
    		if(arr[i] == conArr[j]) {
    			
    			if(newArr.indexOf(arr[i]) == -1) {
    				
    				newArr.push(arr[i]);
    			}
    		}
    	}
    }
    
    return newArr;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));