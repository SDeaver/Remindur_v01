import { monthNames } from '../localization/MonthNames';

export function getMonthName ( monthNum ) {

   return monthNames[monthNum];
   
}

export function getCurrentMonth() {

   const currentDate = new Date();

   return getMonthName(currentDate.getMonth() + 1);

}