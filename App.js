import { Pressable, FlatList } from 'react-native';
import { useState } from 'react';

import initData from './components/InitData';
import EventCard from './components/EventCard';
import MonthTitle from './components/MonthTitle';
import { allStyles } from './styles/AllStyles';


export default function App() {
   
   const [sortedData, setSortedData] = useState( initData() );


   function displayNextEvent(item) {

      if (item.name) {
         return (<EventCard myEvent={item} />);
         
      }
      else {
         return ( <MonthTitle month={item.key} />);
      }

   }

   return (
      <Pressable style={allStyles.mainContainer}>

        <FlatList
            data={sortedData}
            style={allStyles.listContainer}
            renderItem={({ item }) => (
               displayNextEvent(item)
            )}
         />

      </Pressable>
   );

}
