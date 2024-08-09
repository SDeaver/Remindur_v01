import { Text, Pressable } from 'react-native';
import { useState } from 'react';
import { getMonthName } from './DateFunctions';

import { allStyles } from '../styles/AllStyles';

export default function EventCard ( { myEvent, modalOpen }) {

   let dateMonth = getMonthName(myEvent.dateMonth);
   let dateString = `${dateMonth} ${myEvent.dateDay}`;
   
   function pressFunction() {
      modalOpen(myEvent);
   }
   
   return (
      <Pressable style={allStyles.eventCard} onPress={pressFunction}>
         <Text>{myEvent.name}</Text>
         <Text>{dateString}</Text>
      </Pressable>
   )

} 