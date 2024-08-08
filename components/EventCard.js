import { Text, Pressable } from 'react-native';
import { getMonthName } from './DateFunctions';

import { allStyles } from '../styles/AllStyles';

export default function EventCard ( { myEvent, modalOpen }) {

   let dateMonth = getMonthName(myEvent.dateMonth);
   let dateString = `${dateMonth} ${myEvent.dateDay}`;
   
   function pressFunction() {
      modalOpen(myEvent);
   }
   
   return (
      <Pressable style={allStyles.eventCard} onPressOut={pressFunction} >
         <Text>{myEvent.name}</Text>
         <Text>{dateString}</Text>
         {/* <Text/>
         <Text>{myEvent.description}</Text> */}
      </Pressable>
   )

} 