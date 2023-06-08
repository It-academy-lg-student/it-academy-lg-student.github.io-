//task1
/* let number = prompt('Введіть число')

function getArea(number) {
    
   if(number == '') {
    return  'Введіть радіус';
 }  
 else if (isNaN(number))
     {
      
      return 'Повинно бути числове значення'; 
    }
           
 
     else if (Number.isNaN(number) != true) {
    return `Площа дорівнює:  ${(Math.PI * (number ** 2)).toFixed(2)} кв.м `;   
    }
    
         
}

console.log(getArea(number));  */
  
//task2

/*let num = prompt('Введіть число')
function getSqrt(num) {
  if(num == '') {
   return 'Будь ласка, введіть число'
  }
  else if( num < 0) {
   return 'Введіть додатнє число'
  }
  else if(isNaN(num)) {
    return 'Повинно бути числове значення'
  }
  else if (Number.isNaN(num) != true ) {
   return `Квадратний корінь з ${num} дорівнює: ${Math.sqrt(num)} `;
  }
  
}
console.log(getSqrt(num)); */
  
//task3
  
let my = prompt('Введіть число')
let my2 = prompt('Введіть друге число')
let my3 = prompt('Введіть число')
const arr = my.split(' ');
let myMath = {
   
  
   PI() {
    if(my == '' || my2 == '' || my3 == '') {
      console.log('Будь ласка, введіть число')
    }
    else if(isNaN(my) || isNaN(my2) || isNaN(my3) ) {
      console.log('Повинно бути числове значення')
    }
    else if(my == 3.14 || my2 == 3.14 || my3 == 3.14)
   console.log('Число PI: 3.14')
   },
   pow () {
    console.log((my ** my2).toFixed(2))
   },
   abs () {
    if(my < 0)
    console.log(-my) 
   },

   max () {
    
   let maxNum = arr[0];
   for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      
    }
    
   }
    
   console.log(' Максимальне число: ' + maxNum);
    
  },

  min () {
    let minNum = arr[0];
    for( i = 0; i < arr.length; i++ ) {
      if (arr[i] < minNum) {
        minNum = arr[i];
        
      }
        
   
  } 
  console.log(' Мінімальне число: ' + minNum); 
    }
}
    

console.log(arr); 
myMath.pow();
myMath.PI(); 
myMath.abs();
myMath.max();
myMath.min(); 