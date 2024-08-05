import { Text, Pressable } from 'react-native';

import { allStyles } from '../styles/AllStyles';

export default function MonthTitle ( { monthName, monthNum, toggleHide } ) {

   function hideMyEvents() {
      toggleHide(monthNum);
   }

   return (
      <Pressable style={allStyles.monthTitle} onPress={hideMyEvents} >
         <Text>{ monthName }</Text>
      </Pressable>
   )

} 