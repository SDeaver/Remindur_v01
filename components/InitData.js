import { getCurrentMonth } from './DateFunctions';
import { monthArray } from './MonthArray';
import { testData } from './TestData';


export default function initData() {
   
   let newInitArray = monthArray;
   let currentMonth = getCurrentMonth();

   function addToMonthArray(myEvent) {
      newInitArray[myEvent.dateMonth].push(myEvent);
   }

   // create an array of arrays, one for each month
   // adding each event into the approrpiate month
   testData.forEach(addToMonthArray);

   // re-order month array to start with current month
   while( newInitArray[0][0].key != currentMonth ) {
      let removedMonth = newInitArray.shift();
      newInitArray.push(removedMonth);
   }

   // delete empty months
   for (let i = 0; i < newInitArray.length; i++) {
      if ( (newInitArray[i].length <= 1) && (newInitArray[i][0].key != '---') ) {
         newInitArray.splice(i,1);
         i--;
      }
   }   

   // sort each month array by date
   for (let i = 0; i < newInitArray.length; i++) {
      newInitArray[i].sort(function(a, b){return a.dateDay - b.dateDay});
   }

   // flatten all month arrays into one array
   let sortedArray = newInitArray.flat();

   return sortedArray;      
}