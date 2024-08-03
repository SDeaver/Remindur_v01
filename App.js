import { Pressable, FlatList } from 'react-native';
import { useState } from 'react';

import initData from './components/InitData';
import EventCard from './components/EventCard';
import MonthTitle from './components/MonthTitle';
import YearBreak from './components/YearBreak';
import { allStyles } from './styles/AllStyles';


export default function App() {
   
   const [sortedData, setSortedData] = useState(initData());


   function displayNextEvent(item) {

      if (item.name) {
         return (<EventCard myEvent={item} />);
         
      }
      else if (item.key === '---') {
         return ( <YearBreak />);
      }
      else {
         return ( <MonthTitle monthName={item.key} monthNum={item.monthNum} toggleHide={toggleHideMonth} /> );
      }

   }

   function toggleHideMonth(month) {
      console.log('toggle month hidden: ' + month);

      let newArray = sortedData;

      for (let i = 0; i < newArray.length; i++) {
         if(newArray[i].dateMonth === month) {
            console.log('should hide: ' + JSON.stringify(newArray[i]));
         }
      }

      //setSortedData(newArray);
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
