import { StyleSheet } from 'react-native';


export const colors = {
   bg: 'pink',
   listBG: 'ghostwhite',
   text: 'black',
}



export const allStyles = StyleSheet.create ({

   mainContainer: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.bg,
      alignContent: 'center',
   },
   listContainer: {
      flexGrow: 0,
      height:'80%',
      width: '80%',
      backgroundColor: colors.listBG,
      // borderWidth: 3,
   },
   eventCard: {
      borderWidth: 1,
      backgroundColor: 'white',
      padding: 20,
      margin: 20,
   },
   monthTitle: {
      marginTop: 10,
      marginLeft: 10,
   },
   yearBreak: {
      height: 2,
      width: '80%',
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 20,
      backgroundColor: colors.text,
   },

});

