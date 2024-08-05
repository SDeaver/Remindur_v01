import { Pressable, FlatList } from 'react-native';
import { useState } from 'react';

import initData from './components/InitData';
import EventCard from './components/EventCard';
import MonthTitle from './components/MonthTitle';
import YearBreak from './components/YearBreak';
import { allStyles } from './styles/AllStyles';


export default function App() {
   
   const [sortedData, setSortedData] = useState([initData()]);
   const [hiddenMonths, setHiddenMonths] = useState([]);


   function displayNextEvent(item) {

      console.log('display: ' + JSON.stringify(item));

      // check if hidden
      // if (hiddenMonths.indexOf(item.dateMonth) !== -1) {
      //    console.log('hidden: ' + JSON.stringify(item));
      //    return (<></>);
      // }

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

      // let newArray = hiddenMonths;                                            
      // let position = newArray.indexOf(month);

      // if (position === -1) {
      //    newArray.push(month);
      //    console.log('hidden: ' + month);
      // }
      // else {
      //    newArray.splice(position,1);
      //    console.log('unhidden: ' + month);
      // }

      // console.log('hidden months: ' + newArray);
      // setHiddenMonths(newArray);

      setHiddenMonths([1]);
   }

   return (
      <Pressable style={allStyles.mainContainer}>

        <FlatList
            data={sortedData}
            extraData={hiddenMonths}
            style={allStyles.listContainer}
            renderItem={({ item }) => (
               displayNextEvent(item)
            )}
         />

      </Pressable>
   );

}
