
function Array() {
    
    //{}是对象，每个对象都不同，这里不用去重
    var carr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
    
    //创建一个新的数组用于存放去重后的数组
    var arr = [];
    //定义Boolean判断NaN是否已经在新数组中
    var Nan = true;
    
    //循环数组长度
    for(var i = 0; i < carr.length; i++) {
        
        //如果新数组中的内容在要去重的数组中没有
        if(arr.indexOf(carr[i]) == -1) {
            
            //判断Nan的值
            if(carr[i] != carr[i]) {    //NaN和本身是不相等的，所以和自己比较排除NaN
                
                if(Nan) {
                
                	arr.push(carr[i]);
              	    Nan = false;
           		 }
            }else {
                
                arr.push(carr[i]);
            }
        }
    }
    
    return arr;
}

console.log(Array());