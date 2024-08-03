import { Text, Pressable } from 'react-native';
import { getMonthName } from '../components/DateFunctions';

import { allStyles } from '../styles/AllStyles';

export default function EventCard ( { myEvent }) {

   let dateMonth = getMonthName(myEvent.dateMonth);
   let dateString = `${dateMonth} ${myEvent.dateDay}`;

   return (
      <Pressable style={allStyles.eventCard}>
         <Text>{myEvent.name}</Text>
         <Text>{dateString}</Text>
         {/* <Text/>
         <Text>{myEvent.description}</Text> */}
      </Pressable>
   )

} 