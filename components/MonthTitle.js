import { Text, Pressable } from 'react-native';

import { allStyles } from '../styles/AllStyles';

export default function MonthTitle ( { month } ) {

   return (
      <Pressable style={allStyles.monthTitle}>
         <Text>{ month }</Text>
      </Pressable>
   )

} 