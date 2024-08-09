import { View, Text, Pressable } from 'react-native';
import { getMonthName } from './DateFunctions';

import { allStyles } from '../styles/AllStyles';

export default function EventDisplay( {myEvent, modalClose} ) {

   let dateMonth = getMonthName(myEvent.dateMonth);
   let dateString = `${dateMonth} ${myEvent.dateDay}`;

   return (
      <View style={allStyles.eventDisplayView}>
         <Text style={allStyles.displayText}>{myEvent.name}</Text>
         <Text style={allStyles.displayText}>{dateString}</Text>
         <Text/>
         <Text style={allStyles.displayText}>{myEvent.description}</Text>
         <Text/>
         <Pressable style={allStyles.closeButton} onPress={modalClose}>
            <Text>CLOSE</Text>
         </Pressable>
      </View>
   )
}