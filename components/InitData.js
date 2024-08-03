import { flatten } from 'lodash';

import { getCurrentMonth } from './DateFunctions';
import { monthArray } from './MonthArray';
import { testData } from './TestData';


export default function initData() {
   
   let newArray = monthArray;
   let currentMonth = getCurrentMonth();

   function addToMonthArray(myEvent) {
      newArray[myEvent.dateMonth].push(myEvent);
   }


   // create an array of arrays, one for each month
   testData.map(addToMonthArray);

   // re-order month array to start with current month
   while( newArray[0][0].key != currentMonth ) {
      let removedMonth = newArray.shift();
      newArray.push(removedMonth);
   }

   // delete empty months
   for (let i = 0; i < newArray.length; i++) {
      if ( (newArray[i].length <= 1) && (newArray[i][0].key != '---') ) {
         newArray.splice(i,1);
         i--;
      }
   }   

   // sort each month array by date
   for (let i = 0; i < newArray.length; i++) {
      newArray[i].sort(function(a, b){return a.dateDay - b.dateDay});
   }

   // flatten all month arrays into one array
   let sortedArray = flatten(newArray);

   return sortedArray;      
}