const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//function totalBatteries(array) {
 // const sum = array.reduce((total, num) => {return total + num}, 0)
 // return totalBatteries    
//}

const totalBatteries = batteryBatches.reduce((total, num) => {
    return total + num;
  }, 0)
