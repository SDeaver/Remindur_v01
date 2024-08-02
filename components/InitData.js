var _ = require('lodash');

import { monthArray } from './MonthArray';
import { testData } from './TestData';


export default function initData() {

   let newArray = monthArray;
   
   function addToMonthArray(myEvent) {
      newArray[myEvent.dateMonth].push(myEvent);
   }

   // create an array of arrays, one for each month
   testData.map(addToMonthArray);

   // delete empty months
   for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].length <= 1) {
         newArray.splice(i,1);
         i--;
      }
   }   

   // sort each month array by date
   for (let i = 0; i < newArray.length; i++) {
      newArray[i].sort(function(a, b){return a.dateDay - b.dateDay});
   }

   // combine all month arrays into one array
   let sortedArray = _.flatten(newArray);

   return sortedArray;      
}