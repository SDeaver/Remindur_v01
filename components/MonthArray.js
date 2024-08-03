import { monthNames } from '../localization/MonthNames';

function addMonth(monthName, monthNum) {

   let newMonth = {
      key: monthName,
      monthNum: monthNum
   }

   return [ newMonth ];
}

export const monthArray = monthNames.map(addMonth);