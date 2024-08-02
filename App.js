import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
var _ = require('lodash');

// import initalizeData from '.components/InitalizeData';
import EventCard from './components/EventCard';
import MonthTitle from './components/MonthTitle';
import sortByDate from './components/SortByDate';
import { allStyles } from './styles/AllStyles';
import { monthArray } from './components/MonthArray';

import { testData } from './components/TestData';



export default function App() {
   
   const [sortedData, setSortedData] = useState(null);

   // sort our data
   useEffect( () => {

      if(sortedData != null) {
         return;
      }

      let newArray = monthArray;

      // create an array of arrays, one for each month
      function addToMonthArray(myEvent) {
         newArray[myEvent.dateMonth].push(myEvent);
      }

      testData.map(addToMonthArray);

      // delete empty months
      for (let i = 0; i < newArray.length; i++) {
         if (newArray[i].length <= 1) {
            newArray.splice(i,1);
            i--;
         }
      }   

      // sort each month array by date
      for (let i = 0; i < newArray.length; i++) {
         newArray[i].sort(function(a, b){return a.dateDay - b.dateDay});
      }

      // combine all month arrays into one array
      let sortedArray = _.flatten(newArray);

      // for (let i = 1; i < newArray.length; i++) {
      //    if (newArray[i].length > 1) {
      //       sortedArray.concat(newArray[i]);
      //    }
      // }

      setSortedData(sortedArray);

   }, [])

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
