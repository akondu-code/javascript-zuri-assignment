function convertFahrToCelsius(num){
    if(typeof(num) !== 'number' && typeof(num) !== 'string') {
        return `${num} is not a valid number but a/an ${typeof(num)}.`
     }
     if (isNaN(num)) {
        return `${num} is not a valid number but a/an ${typeof(num)}.` 
     }
     let celsius = (num - 32) * 5 / 9;
     return celsius.toFixed(4);    
  }



function checkYuGiOh(n){
    if(typeof(n) !== 'number' && typeof(n) !== 'string') {
        return  `invalid parameter: ${n}`
     }
     if (isNaN(n))  return `invalid parameter: ${n}`
        const numArr = []
    for (var i = 1; i <= n; i++) {
        if(i % 30 === 0) numArr.push('yu-gi-oh')
        else if(i % 15 === 0) numArr.push('gi-oh')
        else if(i % 10 === 0) numArr.push('yu-oh')
        else if(i % 6 === 0) numArr.push('yu-gi')
        else if(i % 5 === 0) numArr.push('oh')
        else if(i % 3 === 0) numArr.push('gi')
        else if(i % 2 === 0) numArr.push('yu')
       else numArr.push(i)
    }
    return numArr
}

