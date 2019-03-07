module.exports = function check(str, bracketsConfig) {
    flag = true;
    
    for (i = 0 ; i <bracketsConfig.length; i++){
      
      var array1  = [] ;
      var array2 = [] ; 
      
      for (j = 0 ; j < str.length ; j++) {
        if (str[j] == bracketsConfig[i][0]) {array1.push(str[j]);}
        if (str[j] == bracketsConfig[i][1]) {if (array1.length>0) {array1.pop(str[j])} else flag=false;}
        
      
      }
      
    }
 return flag;
}
