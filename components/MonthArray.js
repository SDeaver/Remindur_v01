import { monthNames } from '../localization/MonthNames';

function addMonth(monthName, monthNum) {

   let newMonth = {
      key: monthName,
      monthNum: monthNum
   }

   return [ newMonth ];
}

function getMonthNamesArray() {

   let newMonthNamesArray = [];

   newMonthNamesArray = monthNames.map(addMonth);

   return newMonthNamesArray;
   
}

export const monthArray = getMonthNamesArray();
