import { View, Text, Pressable, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

import initData from './components/InitData';
import EventCard from './components/EventCard';
import MonthTitle from './components/MonthTitle';
import YearBreak from './components/YearBreak';
import { allStyles } from './styles/AllStyles';


export default function App() {
   
   const [sortedData, setSortedData] = useState(initData);
   const [hiddenMonths, setHiddenMonths] = useState([]);
   const [toggleToForceFlatListRender, setToggleToForceFlastListRender] = useState(true);

   
   function displayNextEvent(item) {

      // check if hidden
      if (hiddenMonths.indexOf(item.dateMonth) !== -1) {
         return (<></>);
      }

      // determine what kind of component to return
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

      let newHiddenArray = hiddenMonths;                                            
      let position = hiddenMonths.indexOf(month);

      if (position === -1) {
         newHiddenArray.push(month);
      }
      else {
         newHiddenArray.splice(position,1);
      }

      setHiddenMonths(newHiddenArray);
      forceFlatListRender();
   }

   function forceFlatListRender() {
      setToggleToForceFlastListRender(!toggleToForceFlatListRender)
   }

   return (
      <Pressable style={allStyles.mainContainer}>

        <FlatList
            data={sortedData}
            //extraData={hiddenMonths}
            style={allStyles.listContainer}
            renderItem={({ item }) => (
               displayNextEvent(item)
            )}
         />

      </Pressable>
      
   );

}
