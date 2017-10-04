
function findAllOccurrences(arr, target) {
	
	var arrIndex = [];
	
	for(var i = 0; i < arr.length; i++) {
		
		if(arr[i] == target) {
			
			arrIndex.push(i);
		}
	}
	
	return arrIndex;
}

console.log(findAllOccurrences('abcdefabc','a'));