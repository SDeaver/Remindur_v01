import { monthNames } from '../localization/MonthNames';

function addMonth(month) {

   let newMonth = {
      key: month
   }

   return [ newMonth ];
}

export const monthArray = monthNames.map(addMonth);