
function count(str) {
     
    //先删除空白字符 helloword
    var str = str.replace(/\s+/g, "");
    //创建key以“”分割字符串转数组
    var key = str.split("");
    //创建value以统计频率
    var value = {};
    //创建对象储存key 和 value
    var obj = {};
     
    //for in循环遍历数组
    for(var i in key) {
         
        //如果该字符不在对象内添加进去
        if(!(key[i] in obj)) {
             
            value[key[i]] = 1
            obj[key[i]] = value[key[i]];
        }else { //如果该字符在对象内则统计加1
             
            value[key[i]] ++;
            obj[key[i]] = value[key[i]];
        }
    }
     
    return obj;
}

console.log(count("hello world"));