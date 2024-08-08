import { View, Text } from 'react-native';
import { getMonthName } from './DateFunctions';

import { allStyles } from '../styles/AllStyles';

export default function EventDisplay( {myEvent} ) {

   let dateMonth = getMonthName(myEvent.dateMonth);
   let dateString = `${dateMonth} ${myEvent.dateDay}`;

   return (
      <View style={allStyles.eventDisplay}>
         <Text>{myEvent.name}</Text>
         <Text>{dateString}</Text>
         <Text/>
         <Text>{myEvent.description}</Text>
      </View>
   )
}