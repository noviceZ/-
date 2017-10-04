
function count(num) {
     
    //创建value以统计频率
    var value = {};
    //创建对象储存num 和 value
    var obj = {};
     
    //for in循环遍历数组
    for(var i in num) {
         
        //如果该字符不在对象内添加进去
        if(!(num[i] in obj)) {
             
            value[num[i]] = 1
            obj[num[i]] = value[num[i]];
        }else { //如果该字符在对象内则统计加1
             
            value[num[i]] ++;
            obj[num[i]] = value[num[i]];
        }
    }
    
    //存储数组中的值(次数)
    var count = [];
    //存储数组中的属性
    var cur = []
    //定义最大的数值max
    var max = 0;
    //循环对象将它们的属性和值一一对应存到相应数组里
    for(var j in obj) {
    	
    	cur.push(j);
    	count.push(obj[j]);
    }
    
    //判断count数组中最大的数
    for(var k in count) {
    	
    	if(count[k] > max) {
    		//存储那个数值的下标
    		max = k;
    	}
    }
    
    //返回那个频率最高的数组里的值
    return cur[max];

}

console.log(count([1,1,5,4,7,7,8,6,6,6,3,5,6,8,9,9,9,9,9,9,9]));