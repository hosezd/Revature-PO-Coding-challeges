var stocksProfit = [5, 7, 9, 13, 11, 6, 6, 3, 3]
var target = 12 
var count = 0
for(var i=0;i<stocksProfit.length;i++){
    for(var j=0;j<stocksProfit.length;j++){
      if ((stocksProfit[i]>stocksProfit[j]||stocksProfit[i]<stocksProfit[j]) && (stocksProfit[i]+stocksProfit[j]==target)){
          count++
    
      }
    }
    
}
console.log("the number of distinct pairs of stocks "+ count)