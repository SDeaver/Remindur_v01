import { View, Text, Pressable, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

import initData from './components/InitData';
import EventCard from './components/EventCard';
import MonthTitle from './components/MonthTitle';
import YearBreak from './components/YearBreak';
import { allStyles } from './styles/AllStyles';
import { testData } from './components/TestData';


export default function App() {
   
   const [sortedData, setSortedData] = useState(null);
   const [hiddenMonths, setHiddenMonths] = useState([]);
   const [toggleToForceFlatListRender, setToggleToForceFlastListRender] = useState(true);

   // useEffect (() => {
   
   //    if (sortedData === null) {
   //       let newDataArray = initData();
   //       setSortedData(newDataArray);
   //    }     
      
   // }, [])

   function initFunction() {

      setSortedData(initData());   
  
   }
   
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
      let position = newHiddenArray.indexOf(month);

      if (position === -1) {
         newHiddenArray.push(month);
      }
      else {
         newHiddenArray.splice(position,1);
      }

      setHiddenMonths(newHiddenArray);
      //forceFlatListRender();
   }

   function forceFlatListRender() {
      setToggleToForceFlastListRender(!toggleToForceFlatListRender);
   }

   function testFunction() {
      let newTestArray = sortedData;

      //newTestArray.reverse();
      newTestArray.pop();
      //sortedData.reverse();
      
      setSortedData(newTestArray);
      forceFlatListRender();
      
      //setSortedData(testData);
    
      //setSortedData(sortedData);

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

         <View style={allStyles.buttonView}>
            <Pressable style={allStyles.initButton} onPressOut={initFunction}>
               <Text>INIT</Text>
            </Pressable>

            <Pressable style={allStyles.initButton} onPressOut={testFunction}>
               <Text>TEST</Text>
            </Pressable>

            <Pressable style={allStyles.initButton} onPressOut={forceFlatListRender}>
               <Text>FORCE</Text>
            </Pressable>
         </View>


      </Pressable>
      
   );

}
